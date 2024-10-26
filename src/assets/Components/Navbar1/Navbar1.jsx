const Navbar1 = () => {
  return (
    <>
    <h2 className='mt-5 text-center text-pink-500 text-3xl font-bold'>Nav 2</h2>
    <nav className='mt-5 py-5 bg-pink-500'>
      <div className="container">
        <div className="menu_row flex justify-between items-center">
        <div className="menu_logo2 w-20 "><img src="images/logo2.png" alt="logo2" /></div>
        <div>
          <ul className='flex gap-10'>
            <li><a className="text-[14px] font-semibold text-white hover:text-yellow-100 hover:bg-amber-900 px-3 py-1 rounded transition- duration-500" href="#">Home</a></li>
            <li><a className="text-[14px] font-semibold text-white hover:text-yellow-100 hover:bg-amber-900 px-3 py-1 rounded transition- duration-500" href="#">Home</a></li>
            <li><a className="text-[14px] font-semibold text-white hover:text-yellow-100 hover:bg-amber-900 px-3 py-1 rounded transition- duration-500" href="#">Home</a></li>
            <li><a className="text-[14px] font-semibold text-white hover:text-yellow-100 hover:bg-amber-900 px-3 py-1 rounded transition- duration-500" href="#">Home</a></li>
            <li><a className="text-[14px] font-semibold text-white hover:text-yellow-100 hover:bg-amber-900 px-3 py-1 rounded transition- duration-500" href="#">Home</a></li> 
         </ul>
        </div>
        </div>
      </div>
    </nav>
    </>
  )
}
export default Navbar1