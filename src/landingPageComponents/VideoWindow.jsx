import React from "react";

const VideoWindow = () => {
  return (
    <div className="h-screen bg-red-400 flex justify-center ">
      <div className="max-w-[90%] max-h-[85%] bg-gray-600 w-[90%] h-[85%] flex justify-center">
        <div className="w-full h-full">
          {/* Embedding YouTube video without fullscreen option */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0&disablekb=1"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoWindow;
