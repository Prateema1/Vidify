import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1'>
      <img 
      className='h-10 mx-2'
      src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg"
      alt="Hamburger Icon"
      />
      <img 
      className='h-10'
       src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
       alt="vidify-logo"
       />
    </div>
    <div className='col-span-10 px-10'>
      <input className="w-1/2 border border-gray-400 p-2 rounded-l-full " type="text" />
      <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
    </div>
    <div className='col-span-1'>
    <img
    className='h-10'
    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
    alt="user-icon"
    />
    </div>
    </div>
   
  )
}

export default Header;