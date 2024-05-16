
import React from 'react';
import Northeastern from "../assets/Northeastern.png"
import Grange from "../assets/Grange.png"
import HoverImage from '../components/HoverImage';


const AboutMeSection: React.FC = () => {
    return (
        <>
            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/52jRM2zCPLnuf4AzWR4Km4?utm_source=generator&theme=0"
                width="50%" height="352" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
            <HoverImage
                src={"/assets/Grange.png"}
                alt="Description of image"
                smallWidth={200}
                smallHeight={200}
                largeWidth={800}
                largeHeight={800}
            />
        </>
    );
}

export default AboutMeSection;
