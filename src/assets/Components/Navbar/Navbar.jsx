const Navbar = () => {
  return (
    <>
    <nav className='py-5 bg-teal-300'>
        <div className="container">
            <div className="menu_row flex justify-between items-center">
                <div className="menu_logo w-16"><img src="images/logo.png" alt="logo" /></div> 
                <div>
                    <ul className='flex gap-5'>
                        <li><a className='hover:text-white hover:bg-gray-900 transition duration-300' href="">Home</a></li>
                        <li><a className='hover:text-white hover:bg-gray-900 transition duration-300' href="">Home</a></li>
                        <li><a className='hover:text-white hover:bg-gray-900 transition duration-300' href="">Home</a></li>
                        <li><a className='hover:text-white hover:bg-gray-900 transition duration-300' href="">Home</a></li>
                        <li><a className='hover:text-white hover:bg-gray-900 transition duration-300' href="">Home</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
export default Navbar