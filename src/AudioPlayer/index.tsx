import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS

const Player = () => (
    <AudioPlayer
        autoPlay
        src='https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3'
        onPlay={e => console.log("onPlay")}
    // other props here
    />
);

export default Player