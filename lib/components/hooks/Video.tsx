"use client";

import React, { useState, useRef } from "react";
import { RiPlayFill } from "react-icons/ri";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Estado para manejar la visibilidad del ícono
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Inicia el video cuando se hace clic
    }
  };

  const handlePlay = () => setIsPlaying(true); // Oculta el ícono cuando el video empieza a reproducirse
  const handlePause = () => setIsPlaying(false); // Muestra el ícono cuando el video está pausado

  return (
    <section className="max-container padding-container py-16">
      <div
        className="bg-video bg-cover bg-center bg-no-repeat h-[260px] md:h-[400px] xl:h-[500px] grid
        place-items-center rounded-2xl relative"
      >
        {/* Ícono de reproducción solo visible si no está reproduciéndose */}
        {!isPlaying && (
          <div
            className="absolute h-20 w-20 bg-red-500 text-white flex items-center justify-center rounded-full cursor-pointer z-10"
            onClick={handlePlayClick} // Llama a handlePlayClick al hacer clic
          >
            <RiPlayFill size={36} /> {/* Ícono de reproducción */}
          </div>
        )}

        {/* Video */}
        <video
          ref={videoRef} // Asocia la referencia al video
          className="w-full h-[260px] md:h-[400px] rounded-4xl"
          controls
          autoPlay={false} // No auto-reproduce, ya que lo hacemos manualmente
          muted
          onPlay={handlePlay} // Detecta cuando el video comienza a reproducirse
          onPause={handlePause} // Detecta cuando el video se pausa
        >
          <source
            src="https://rlcengineering.my.canva.site/rlcengineeringspa/videos/033d7ec1c0ad4286eb4bed7196556371.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default Video;
