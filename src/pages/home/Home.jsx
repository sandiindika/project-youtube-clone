// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

// eslint-disable-next-line react/prop-types
const Home = ({ sidebar }) => {

    const [category, setCategory] = useState(0)

    return (
        <>
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
            <div className={`container ${sidebar ? "" : 'large-container'}`}>
                <Feed category={category} />
            </div>
        </>
    )
}

export default Home
