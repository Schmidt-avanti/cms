'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface VideoSectionBlockProps {
  title: string;
  subtitle?: string;
  videoFile: {
    url: string;
  };
  videoPoster?: {
    url: string;
    alt: string;
  };
  playButtonIcon?: {
    url: string;
    alt: string;
  };
}

export const VideoSectionBlock: React.FC<VideoSectionBlockProps> = ({
  title,
  subtitle,
  videoFile,
  videoPoster,
  playButtonIcon,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <section className="bg-white py-5">
      <div className="custom-container text-center">
        <h1 className="fw-bold mb-0">{title}</h1>
        {subtitle && (
          <div className="pb-4">
            <p className="mb-0">{subtitle}</p>
            <span className="orangeU mx-auto"></span>
          </div>
        )}
        
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="ratio ratio-16x9 position-relative videoContainer" style={{borderRadius: '15px', overflow: 'hidden'}}>
              <video 
                ref={videoRef}
                className="otherVideo w-100 h-100" 
                src={videoFile.url}
                poster={videoPoster?.url}
                preload="metadata"
                controls={isPlaying}
                style={{objectFit: 'cover', borderRadius: '15px'}}
                onPlay={() => {
                  setIsPlaying(true);
                  setShowPlayButton(false);
                }}
                onPause={() => {
                  setIsPlaying(false);
                  setShowPlayButton(true);
                }}
                onEnded={() => {
                  setIsPlaying(false);
                  setShowPlayButton(true);
                }}
              >
                <source src={videoFile.url} type="video/mp4" />
              </video>
              {showPlayButton && playButtonIcon ? (
                <div 
                  className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                  style={{
                    cursor: 'pointer',
                    zIndex: 10,
                    pointerEvents: 'auto',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.play();
                    }
                  }}
                >
                  <Image
                    src={playButtonIcon.url}
                    alt={playButtonIcon.alt}
                    width={80}
                    height={80}
                    className="transition-transform hover:scale-110"
                    style={{ 
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              ) : showPlayButton ? (
                <button
                  className="position-absolute d-flex align-items-center justify-content-center"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    border: '2px solid rgba(0,0,0,0.1)',
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    color: '#333',
                    fontSize: '24px',
                    cursor: 'pointer',
                    zIndex: 10,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                  }}
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.play();
                    }
                  }}
                >
                  ▶
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
