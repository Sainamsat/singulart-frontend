import React from 'react'
import Artists from '../components/Artists'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const ArtistsPage = () => {
    return (
        <div>
            <ScrollToTop />
            <Artists />
            <Footer />
        </div>
    )
}

export default ArtistsPage
