import React from "react";
import Button from "./Button";
import Pulse from "./Pulse";

interface ServerCardProps {
  backgroundImgUrl: string;
  title: string;
  serverIp: string;
}

export default function ServerCard({
  backgroundImgUrl,
  title,
  serverIp,
}: ServerCardProps) {
  return (
    <div
      className="relative bg-black flex flex-col items-center justify-center h-60 hover:bg-blend-darken hover:shadow-xl rounded-md"
      style={{
        backgroundRepeat: "no-repeat",
        background: `rgba(0,0,0,0.3) url('${backgroundImgUrl}')`,
      }}
    >
      <div className="absolute top-5 right-5">
        <Pulse />
      </div>
      <button className="absolute top-4 left-4 px-2 py-1 text-white bg-red-600 rounded-md text-xs">
        Vote <i className="fa fal fa-thumbs-up"></i>
      </button>

      <h3 className="text-2xl text-gray-200 mb-3">{title}</h3>
      <Button className="gaming-font" large>
        Join Now
      </Button>
      <span className="absolute bottom-2 text-gray-400 text-sm">
        {serverIp}
      </span>
    </div>
  );
}
