"use client"
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    '/images/image0.jpg',
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg'
];


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
            <div className="each-slide">
                    <div>
                        <img src={slideImages[0]} alt="img0" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slideImages[1]} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slideImages[2]} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slideImages[3]} alt="img3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slideImages[4]} alt="img4" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={slideImages[5]} alt="img5" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow