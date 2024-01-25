// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Outlet,
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router";
import { ThemeProvider } from "./components/theme-provider";
import GlobalRootLayout from "./components/Layouts/GlobalRootLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import About from "./pages/About";

const queryClient = new QueryClient();

const rootRoute = new RootRoute({
  component: () => <Outlet />,
});
// eslint-disable-next-line react-refresh/only-export-components
const LayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "aaa",
  component: () => (
    <GlobalRootLayout>
      <Outlet />
    </GlobalRootLayout>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => LayoutRoute,
  path: "/",
  component: () => <Home/>
});
const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Login!</h3>
      </div>
    );
  },
});

const aboutRoute = new Route({
  getParentRoute: () => LayoutRoute,
  path: "/about",
  component: () => <About/>
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  LayoutRoute.addChildren([aboutRoute, indexRoute]),
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    // <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    // </StrictMode>
  );
}
