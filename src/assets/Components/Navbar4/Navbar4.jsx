const Navbar4 = () => {
  return (
    <>
    <h2 className='mt-5 text-center text-black text-3xl font-bold'>Nav 5</h2>
    <nav className='my-10 py-10 bg-black'>
        <div className="container">
            <div className="menu_row flex justify-between items-center">
                <div className="menu_logo5 w-40"><img src="images/logo5.png" alt="logo" /></div>
                <div>
                    <ul className='flex gap-10'>
                        <li><a className='text-black font-bold bg-white px-10 py-3 hover:rounded-bl-3xl hover:rounded-tr-2xl transition- duration-500' href="#">Home</a></li>
                        <li><a className='text-black font-bold bg-white px-10 py-3 hover:rounded-bl-3xl hover:rounded-tr-2xl transition- duration-500' href="#">Home</a></li>
                        <li><a className='text-black font-bold bg-white px-10 py-3 hover:rounded-bl-3xl hover:rounded-tr-2xl transition- duration-500' href="#">Home</a></li>
                        <li><a className='text-black font-bold bg-white px-10 py-3 hover:rounded-bl-3xl hover:rounded-tr-2xl transition- duration-500' href="#">Home</a></li>
                        <li><a className='text-black font-bold bg-white px-10 py-3 hover:rounded-bl-3xl hover:rounded-tr-2xl transition- duration-500' href="#">Home</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
export default Navbar4