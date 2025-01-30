"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Heading } from "./heading";

type YoutubeProps = {
  youtubeID: string;
  title: string;
  classname?: string;
  image: string;
};

export default function YouTubeCard({
  youtubeID,
  title,
  image,
  classname,
}: YoutubeProps) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div>
      {showVideo ? (
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeID}`}
            title={`${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={`aspect-video w-1/2 mx-auto p-0 ${classname}`}
          />
        </div>
      ) : (
        <div className="relative w-fit mx-auto">
          <Image
            src={image}
            className="w-full aspect-video object-cover"
            alt={title}
            width={600}
            height={600}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/25" />
          {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-gray-200/5 from-90% to-gray-350/80 dark:from-gray-700/5 dark:from-90%  dark:to-gray-950/80 to-10%" /> */}
          <button
            onClick={() => setShowVideo(true)}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full p-6"
          >
            <Play className="h-10 w-10" />
          </button>
          <Heading className="absolute bottom-0 left-1/2 -translate-x-1/2">
            {title}
          </Heading>
        </div>
      )}
    </div>
  );
}
