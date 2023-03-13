import React, { useState, useRef, useEffect } from 'react';
import './musicplayer.css'
type Album = 'Dawn' | 'Me & You';
type Track = 'Skylike - Dawn' | 'Alex Skrindo - Me & You';
type AlbumArtwork = '_1' | '_2';

const MusicPlayer: React.FC = () => {
    const [albumName, setAlbumName] = useState<Album>('Dawn');
    const [trackName, setTrackName] = useState<Track>('Skylike - Dawn');
    const [albumArtwork, setAlbumArtwork] = useState<AlbumArtwork>('_1');
    const [trackUrl, setTrackUrl] = useState<string[]>([
        'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3',
        'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3',
    ]);
    const [currIndex, setCurrIndex] = useState<number>(-1);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        setCurrIndex(0);
    }, []);

    useEffect(() => {
        if (currIndex !== -1) {
            const audio = audioRef.current;
            setIsPlaying(true);
            if (audio) {
                audio.src = trackUrl[currIndex];
                audio?.play();
                setAlbumName(currIndex === 0 ? 'Dawn' : 'Me & You');
                setTrackName(currIndex === 0 ? 'Skylike - Dawn' : 'Alex Skrindo - Me & You');
                setAlbumArtwork(currIndex === 0 ? '_1' : '_2');
            }

        }
    }, [currIndex, trackUrl]);

    useEffect(() => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio?.play();
        } else {
            audio?.pause();
        }
    }, [isPlaying]);

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        setCurrentTime(audio?.currentTime!);
        setDuration(audio?.duration!);
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setCurrIndex(currIndex === trackUrl.length - 1 ? 0 : currIndex + 1);
    };


    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleEnded);
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [handleTimeUpdate, handleEnded]);


    const playPause = () => {
        setTimeout(() => {
            const audio = audioRef.current;
            if (audio?.paused) {
                setIsPlaying(true);
                audio.play();
            } else {
                setIsPlaying(false);
                audio?.pause();
            }
        }, 300);
    };

    const playNextTrack = () => {
        setIsPlaying(false);
        setCurrIndex(currIndex === trackUrl.length - 1 ? 0 : currIndex + 1);
    };

    const playPreviousTrack = () => {
        setIsPlaying(false);
        setCurrIndex(currIndex === 0 ? trackUrl.length - 1 : currIndex - 1);
    };

    return (
        <>
            <div id="app-cover">
                <div id="bg-artwork">{albumArtwork}</div>
                <div id="bg-layer"></div>
                <div id="player">
                    <div id="player-track">
                        <div id="album-name">{albumName}</div>
                        <div id="track-name">{trackName}</div>
                        <div id="track-time">
                            <div id="current-time">{currentTime}</div>
                            <div id="track-length">{duration}</div>
                        </div>
                        <div id="s-area">
                            <div id="ins-time"></div>
                            <div id="s-hover"></div>
                            <div id="seek-bar"></div>
                        </div>
                    </div>
                    <div id="player-content">
                        <div id="album-art">
                            <img src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg" className="active" id="_1" alt="album art 1" />
                            <img src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_2.jpg" id="_2" alt="album art 2" />
                            <img src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_3.jpg" id="_3" alt="album art 3" />
                            <img src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_4.jpg" id="_4" alt="album art 4" />
                            <img src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_5.jpg" id="_5" alt="album art 5" />
                            <div id="buffer-box">Buffering ...</div>
                        </div>
                        <div id="player-controls">
                            <div className="control">
                                <div className="button" id="play-previous">
                                    <i className="fas fa-backward"></i>
                                </div>
                            </div>
                            <div className="control">
                                <div className="button" id="play-pause-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="control">
                                <div className="button" id="play-next">
                                    <i className="fas fa-forward"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        </>
    )
}

export default MusicPlayer