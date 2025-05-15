import React, { MouseEventHandler, useRef, useState } from "react";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";

const Features = () => {
  return (
    <section className="bg-black pb- 50">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-30">
          <p className="text-lg font-circular-web text-blue-50">
            Intro the Metagame Layer
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse your elf
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="The Metagame Layer is a new way to experience the game. It’s a new way to play, a new way to earn, and a new way to connect with others."
            isComingSoon={true}
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  radi<b>n</b>t
                </>
              }
              description="The Metagame Layer is a new way to experience the game. It’s a new way to play, a new way to earn, and a new way to connect with others."
              isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 ms-32 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  radi<b>n</b>t
                </>
              }
              description="The Metagame Layer is a new way to experience the game. It’s a new way to play, a new way to earn, and a new way to connect with others."
              isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 ms-32 md:ms-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  radi<b>n</b>t
                </>
              }
              description="The Metagame Layer is a new way to experience the game. It’s a new way to play, a new way to earn, and a new way to connect with others."
              isComingSoon={true}
            />
          </BentoTilt>

          <div className="bento_tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>
                <b>re co</b>
                <b>m</b>
                <b>ing s</b>
                <b>o</b>on!
                <TiLocationArrow className="m-5 scale-[3] self-end" />
              </h1>
            </div>
          </div>

          <div className="bento_tilt_2">
            <video
              src="/videos/feature-5.mp4"
              loop
              autoPlay
              muted
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

const BentoTilt = ({ children, className = "" }: any) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = (e) => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}>
      {children}
    </div>
  );
};
