import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ReactModal from 'react-modal';

import HeroContainer from '../atoms/HeroContainer';
import HeroContentContainer from '../molecules/HeroContentContainer';
import HeroTitle from '../atoms/HeroTitle';
import HeroDescription from '../atoms/HeroDescription';
import HeroButton from '../atoms/HeroButton';

import { URL, API_KEY } from '../../../utils/api';

const Hero = ({ movie, id }) => {
    const [videoKey, setVideoKey] = useState(null);
    const [videoUrl, setVideoUrl] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const fetchVideo = async () => {
        const response = await fetch(`${URL}movie/${movie.id}/videos${API_KEY}`);
        const data = await response.json();
        setVideoKey(data.results[0]?.key);
    };

    useEffect(() => {
        fetchVideo();
    }, [movie?.id]);

    const handleOpenModal = (url) => {
        setVideoUrl(url);
        setIsPlaying(true);
    };

    const handleCloseModal = () => {
        setIsPlaying(false);
        setVideoUrl(null);
    };

    return (
        <HeroContainer backgroundImages={movie?.backdrop_path}>
            <HeroContentContainer>
                <HeroTitle>{movie?.name || movie?.original_title}</HeroTitle>
                <HeroDescription>{movie?.overview}</HeroDescription>

                <HeroButton
                    onClick={() =>
                        handleOpenModal(
                            `https://www.youtube.com/watch?v=${videoKey}`
                        )
                    }
                >
                    Play
                </HeroButton>
                <HeroButton to={`/movies/trending/${movie?.id}/one`}>
                    Details
                </HeroButton>
            </HeroContentContainer>
            <ReactModal
                isOpen={isPlaying}
                onRequestClose={handleCloseModal}
                className='fixed top-0 left-0 flex h-[100%] w-[100%] flex-col items-center justify-center bg-[rgba(0,0,0,0.7)]'
            >
                <button
                    onClick={handleCloseModal}
                    className='mt-4 rounded-full border bg-[#1e293b] px-4 py-2 text-[#b5cdf5] hover:bg-[#303e54]'
                >
                    X
                </button>
                <ReactPlayer
                    url={videoUrl}
                    controls={true}
                    playing={true}
                    width='65%'
                    height='80%'
                />
            </ReactModal>
        </HeroContainer>
    );
};

export default Hero;
