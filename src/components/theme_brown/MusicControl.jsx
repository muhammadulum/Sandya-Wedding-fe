import { useEffect, useState, useRef } from "react";
import bgMusik from "../../assets/asset-brown/audio/I Wanna Grow Old With You - Westlife{detik 50).mp3";
import { Play, Pause } from "lucide-react"; // import icon modern

export default function MusicControl({ autoPlay = false }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(console.warn);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = 0.8;
    }

    // autoplay setelah video selesai
    if (autoPlay && audio && audio.paused) {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch((err) => console.warn("Autoplay diblokir:", err));
    }

    const handleFirstInteraction = (e) => {
      const target =
        e.target instanceof Element
          ? e.target
          : (e.target && e.target.parentElement) || null;

      if (target && target.closest && target.closest("#music-toggle")) {
        return;
      }

      if (audio && audio.paused) {
        audio
          .play()
          .then(() => setPlaying(true))
          .catch((err) => console.warn("Autoplay diblokir:", err));
      }

      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction, {
      passive: true,
    });

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [autoPlay]);

  return (
    <div>
      <button
        id="music-toggle"
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 bg-white/90 text-pink-700 shadow-lg rounded-full w-14 h-14 flex items-center justify-center text-2xl hover:bg-white transition"
      >
        {/* {playing ? "⏸" : "▶️"} */}
        {playing ? (
          <Pause className="w-7 h-7 text-textsecondary transition-transform duration-300 hover:scale-110" />
        ) : (
          <Play className="w-7 h-7 text-textsecondary transition-transform duration-300 hover:scale-110" />
        )}
      </button>
      <audio ref={audioRef} src={bgMusik} loop preload="auto" />
    </div>
  );
}
