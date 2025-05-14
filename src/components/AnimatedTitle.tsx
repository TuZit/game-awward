import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

const AnimatedTitle = ({ title, containerClass }: any) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => {
        return (
          <div
            key={index}
            className="flex flex-wrap items-center max-w-full gap-2 px-10 md:gap-3">
            {line.split(" ").map((word, i) => (
              <span
                key={word + i}
                className="animated-word"
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedTitle;
