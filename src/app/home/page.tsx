import React from 'react'
import Mainpage from '../components/homepage/mainpage'
import Menu from '../components/foodmenu/menu'
import SearchBar from '../components/foodmenu/searchbar'
import About from '../components/aboutpage/about'
import Footer from '../components/footer/footer'


const page = () => {
    return (
        <div className=''>
            <Mainpage />
            <div className="relative">
                <SearchBar />
            </div>

            <Menu />
            <About />
            <Footer />

        </div>
    )
}

export default page