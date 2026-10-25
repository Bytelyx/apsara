import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-16 bg-[#011E38] text-white overflow-hidden">
      <div className="container-fluid">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artistry &amp; Craftsmanship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            #StrokesofGenius
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Witness the marriage of cutting-edge technology and time-honored artisanal goldsmithing behind every BlueStone creation.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video group">
          <video
            ref={videoRef}
            poster="https://kinclimg5.bluestone.com/f_webp/static/hp/d/vs-p_v2.png"
            playsInline
            loop
            muted={isMuted}
            className="w-full h-full object-cover"
          >
            <source
              src="https://kinvid1.bluestone.com/output/mp4/vs-p_v2.mp4/vs-p_v2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Central Play/Pause Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
            <button
              onClick={togglePlay}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-bluestone-navy shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 z-20">
            <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
              {isPlaying ? 'Playing • #StrokesofGenius' : 'Watch The Film'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <Link
                to="/jewellery"
                className="bg-amber-400 text-bluestone-navy font-bold px-4 py-1.5 rounded-full hover:bg-amber-300 transition-colors"
              >
                Shop The Styles
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
