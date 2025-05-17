import React from 'react'
import Mainpage from '../components/homepage/mainpage'
import Menu from '../components/foodmenu/menu'
import SearchBar from '../components/foodmenu/searchbar'
import About from '../components/aboutpage/about'
import Footer from '../components/footer/footer'
import WhyChooseUs from '../components/aboutpage/whychooseus'
import Reorder from '../components/foodmenu/reorder'


const page = () => {
    return (
        <div className=''>
            <Mainpage />

            <Reorder />
            <Menu />

            <About />
            <div className="relative">
                <SearchBar />
            </div>
            <WhyChooseUs />
            <Footer />

        </div>
    )
}

export default page