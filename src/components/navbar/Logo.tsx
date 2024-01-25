

const Logo = () => {
  const handleClick=() =>{
    window.open('/','_self')
  }
  return (

    <div className="flex flex-1 md:flex-none justify-center md:justify-normal items-center gap-2 ">
      {/* <img className="block w-8 h-8 cursor-pointer "   onClick={handleClick} src={logo} /> */}
      <span onClick={handleClick} className='font-bold cursor-pointer'>Logo</span>
    </div>
  );
};

export default Logo;
