const Navbar2 = () => {
  return (
    <>
    <h2 className='mt-5 text-center text-slate-600 text-3xl font-bold'>Nav 3</h2>
    <nav className='mt-5 py-10 bg-slate-600'>
      <div className="container">
        <div className="menu_row flex-col justify-items-center">
            <div className='menu_logo3 w-60'><img className='rounded-xl' src="images/logo3.png" alt="logo" /></div>
            <div>
                <ul className=' flex gap-20 mt-5'>
                    <li><a className='text-[20px] font-medium text-yellow-600 hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-t transition- duration-500' href="#">Home</a></li>
                    <li><a className='text-[20px] font-medium text-yellow-600 hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-t transition- duration-500' href="#">Home</a></li>
                    <li><a className='text-[20px] font-medium text-yellow-600 hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-t transition- duration-500' href="#">Home</a></li>
                    <li><a className='text-[20px] font-medium text-yellow-600 hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-t transition- duration-500' href="#">Home</a></li>
                    <li><a className='text-[20px] font-medium text-yellow-600 hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-t transition- duration-500' href="#">Home</a></li>
               </ul>
            </div>
        </div>
        </div>  

    </nav>
    </>
  )
}
export default Navbar2