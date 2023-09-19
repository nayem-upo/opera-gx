import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';

interface Mode {
    id: number;
    image: string;
    description: string;
    header: string;
    logo: string
}

const Modes: React.FC = () => {
    const [modes, setModes] = useState<Mode[]>([]);

    useEffect(() => {
        fetch("/public/modes.json")
            .then(res => res.json())
            .then(data => setModes(data))
            .catch(error => console.error("Error fetching modes:", error));
    }, []);

    return (
        <div>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                className="mySwiper"
            >
                {modes.map(mode => (
                    <SwiperSlide key={mode.id}>
                        <div>
                            <img src={mode.logo} alt="" />
                            <h1>{mode.header}</h1>
                            <p>{mode.description}</p>
                        </div>
                        <img src={mode.image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Modes;
