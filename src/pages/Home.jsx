import { CategoryTwoTone } from '@material-ui/icons'
import React from 'react'
import Annoucement from '../components/Annoucement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function Home() {
    return (
        <div>
            <Annoucement/>
            <Navbar/>
            <Slider/>
            <Categories />
            <Categories />
        </div>
    )
}

export default Home
