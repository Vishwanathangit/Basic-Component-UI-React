import React from 'react'

const Header = () => {
    return (
        <div>
            <header className='h-96 bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_aUULdKVeKtvnoJPgpxCRtc8Rf3XZ42XYA&s)" }}>
                <h1 className='text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4'>🚀 Welcome to my Website</h1>
            </header>
        </div>
    )
}

export default Header
