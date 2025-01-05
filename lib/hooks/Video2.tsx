'use client'

import React, { useState, useRef } from 'react'
import { RiPlayFill } from 'react-icons/ri'

const Video2 = () => {
    const [isPlaying, setIsPlaying] = useState(false) // Estado para manejar la visibilidad del ícono
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play() // Inicia el video cuando se hace clic
            setIsPlaying(true) // icono desaparese
        }
    }

    const handlePlay = () => setIsPlaying(true) // Oculta el ícono cuando el video empieza a reproducirse
    const handlePause = () => setIsPlaying(false) // Muestra el ícono cuando el video está pausado

    return (
        <section className="max-container padding-container w-">
            <div
                className="bg-video bg-cover bg-center bg-no-repeat h-[260px] md:h-[400px] xl:h-[500px] grid
        place-items-center rounded-2xl relative"
            >
                {/* Ícono de reproducción solo visible si no está reproduciéndose */}
                {/* Ícono de reproducción solo visible si no está reproduciéndose */}
                {/* Ícono de reproducción solo visible si no está reproduciéndose */}
                {!isPlaying && (
                    <div
                        className="absolute inset-0 flex items-center justify-center h-full w-full bg-transparent z-10"
                        onClick={handlePlayClick} // Llama a handlePlayClick al hacer clic
                    >
                        <div className=" text-white  items-center justify-center ">
                            <RiPlayFill size={46} />{' '}
                            {/* Ícono de reproducción */}
                        </div>
                    </div>
                )}

                {/* Video */}
                <video
                    ref={videoRef} // Asocia la referencia al video
                    className="w-full h-[260px] md:h-[400px] rounded-xl"
                    controls
                    autoPlay={true} // No auto-reproduce
                    muted
                    onPlay={handlePlay} // Detecta cuando el video comienza a reproducirse
                    loop // cuando termina empieza de nuevo
                    onPause={handlePause} // Detecta cuando el video se pausa
                    width={500}
                    height={500}
                >
                    <source
                        src="/assets/video2.mp4"
                        type="video/mp4"
                        width={500}
                        height={500}
                    />
                </video>
            </div>
        </section>
    )
}

export default Video2
