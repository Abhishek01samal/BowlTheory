
import { useEffect, useRef } from "react";

export const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start at 10 seconds
    const startOffset = 10;
    // Buffer from end
    const endMargin = 10;

    // Metadata loaded: set initial time
    const handleLoadedMetadata = () => {
      if (video.duration > startOffset + endMargin) {
        video.currentTime = startOffset;
      }
      video.play().catch(e => console.log("Autoplay prevented:", e));
    };

    // Time update: Loop if we hit the end margin
    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const endTime = video.duration - endMargin;

      if (video.currentTime >= endTime) {
        video.currentTime = startOffset;
        video.play().catch(e => console.log("Loop play prevented:", e));
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-black">
      <video
        ref={videoRef}
        muted
        loop
        autoPlay
        playsInline
        className="w-full h-full object-cover scale-125"
      >
        <source src="/dish.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
