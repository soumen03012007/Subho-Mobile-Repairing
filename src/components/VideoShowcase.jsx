import React, { useRef, useState } from 'react';
import { Play, Pause, Video, Smartphone } from 'lucide-react';
import { VIDEO_SHOWCASE } from '../data/businessData';

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-brand-border overflow-hidden shadow-subtle hover:shadow-card transition-all flex flex-col justify-between">
      {/* Video Container */}
      <div className="relative bg-black aspect-[9/16] max-h-[420px] overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover"
          playsInline
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Play/Pause Button Overlay */}
        <button
          onClick={togglePlay}
          className={`absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 transition-opacity ${
            isPlaying ? 'opacity-0 hover:opacity-100 bg-black/20' : 'opacity-100'
          }`}
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          <div className="w-12 h-12 rounded-full bg-white text-brand-navy flex items-center justify-center shadow-subtle hover:scale-105 transition-transform">
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-brand-navy" />
            ) : (
              <Play className="w-5 h-5 fill-brand-navy translate-x-0.5" />
            )}
          </div>
        </button>

        {/* Video Tag */}
        <div className="absolute top-2.5 left-2.5 pointer-events-none">
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-black/70 text-white">
            {video.badge}
          </span>
        </div>
      </div>

      {/* Video Details */}
      <div className="p-4 bg-white border-t border-brand-border flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-brand-navy">
            {video.title}
          </h3>
          <p className="text-xs text-brand-muted mt-1.5 leading-relaxed">
            {video.description}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-brand-border flex items-center justify-between text-xs text-brand-muted">
          <span className="flex items-center gap-1.5 text-brand-blue font-medium">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Workbench Recording</span>
          </span>
          <button
            onClick={togglePlay}
            className="text-xs font-semibold text-brand-navy hover:text-brand-blue underline"
          >
            {isPlaying ? "Pause" : "Play Video"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section id="videos" className="py-16 md:py-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Repair Testing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy mt-1 tracking-tight">
            Workshop Video Recordings
          </h2>
          <p className="text-brand-muted text-base sm:text-lg mt-3 leading-relaxed">
            Short clips recorded at Subho Mobile Repairing demonstrating screen replacements, touch accuracy tests, and optical sensor checks.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {VIDEO_SHOWCASE.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

      </div>
    </section>
  );
}
