"use client";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useTheme } from 'next-themes';

const slideImages: string[] = [
    '/images/image0.jpg',
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

const PLAYLIST_ID = '52jRM2zCPLnuf4AzWR4Km4';

export default function AboutMeSection() {
    const { resolvedTheme } = useTheme();

    const spotifySrc = `https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator${resolvedTheme === 'dark' ? '&theme=0' : ''}`;

    return (
        <div className="container">
            <iframe
                src={spotifySrc}
                height="400"
                className="border-0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            <div className="containerSlide">
                <Slide {...properties}>
                    {slideImages.map((src, i) => (
                        <div className="each-slide" key={i}>
                            <div>
                                <img src={src} alt={`img${i}`} />
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
}
