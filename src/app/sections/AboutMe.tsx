
import Slider from '../components/Slider';

export default function AboutMeSection() {

    return (
        <div style={{ display: 'flex' }}>
            <iframe
                style={{ width: '80%' }}
                src="https://open.spotify.com/embed/playlist/52jRM2zCPLnuf4AzWR4Km4?utm_source=generator&theme=0"
                height="400"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
            <Slider />
        </div>
    );
}

