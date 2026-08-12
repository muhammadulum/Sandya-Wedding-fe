import React from "react";
import DesignVideo from "../../assets/asset-brown/DESIGN-JAWA.mp4";
export default function DesignVideoSection() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video
        src={DesignVideo}
        className="w-full h-full object-cover"
        autoPlay
        muted={false}
        playsInline
        // lanjut ke InvitationPage
      />
    </div>
  );
}
