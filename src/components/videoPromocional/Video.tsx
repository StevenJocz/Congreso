import { useRef, useState } from 'react';
import './VideoPromocional.css';
import ReactPlayer from 'react-player';
import video from '../../assets/videos/Video-2025.mp4';
import videoDos from '../../assets/videos/video2.mp4';

interface Props {
    tipo: number;
}

const Video: React.FC<Props> = (props) => {
    const playerRef = useRef<ReactPlayer>(null);
    const [isPlaying, setIsPlaying] = useState(props.tipo === 2); // Reproducción automática si tipo es 2
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    // Alternar reproducción
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Obtener progreso del video
    const handleProgress = (state: any) => {
        setPlayed(state.played);
    };

    // Obtener duración del video
    const handleDuration = (duration: number) => {
        setDuration(duration);
    };

    // Cambiar volumen
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };

    // Convertir segundos a formato de tiempo (minutos:segundos)
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // const video = "https://www.unac.edu.co/congreso/wp-content/uploads/2024/10/Video-2025-Congreso-Cientifico-de-Universidades-Adventistas-Latinoamericanas.mp4";
    // const videoDos = "https://www.unac.edu.co/congreso/wp-content/uploads/2024/10/Video-2025-Congreso-Cientifico-de-Universidades-Adventistas-Latinoamericanas.mp4";
    return (
        <div className="video-container">
            <ReactPlayer
                ref={playerRef}
                url={props.tipo === 1 ? video : videoDos}
                playing={isPlaying} // Reproduce automáticamente si tipo es 2
                controls={false}
                volume={volume}
                onProgress={handleProgress}
                onDuration={handleDuration}
                width="100%"
                height={props.tipo === 1 ? "100%" : "400px"}
            />

            {/* Controles personalizados */}
            <div className="video-controls">
                <button onClick={handlePlayPause} className="play-pause-btn">
                    {isPlaying ? '❚❚' : '▶'}
                </button>

                <div className="progress">
                    <span>{formatTime(played * duration)}</span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="0.01"
                        value={played}
                        onChange={(e) => playerRef.current?.seekTo(parseFloat(e.target.value))}
                        className="progress-bar"
                    />
                    <span>{formatTime(duration)}</span>
                </div>

                <div className="volume-control">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="volume-bar"
                    />
                </div>
            </div>
        </div>
    );
}

export default Video;
