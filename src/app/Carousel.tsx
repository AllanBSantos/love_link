"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
  "a_l1.png",
  "a_l18.png",
  "a_l26.png",
  "a_l5.png",
  "a_l10.png",
  "a_l19.png",
  "a_l27.png",
  "a_l6.png",
  "a_l11.png",
  "a_l2.png",
  "a_l28.png",
  "a_l7.png",
  "a_l12.png",
  "a_l20.png",
  "a_l29.png",
  "a_l8.png",
  "a_l13.png",
  "a_l21.png",
  "a_l3.png",
  "a_l9.png",
  "a_l14.png",
  "a_l22.png",
  "a_l30.png",
  "a_l15.png",
  "a_l23.png",
  "a_l31.png",
  "a_l16.png",
  "a_l24.png",
  "a_l32.png",
  "a_l17.png",
  "a_l25.png",
  "a_l4.png",
];

export default function Carousel() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
  });

  useEffect(() => {
    if (slider && slider.current) {
      const interval = setInterval(() => {
        if (slider.current) {
          const nextIdx = slider.current.track.details.abs + 1;
          slider.current.moveToIdx(nextIdx);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [slider]);

  return (
    <div
      ref={sliderRef}
      className="keen-slider rounded-xl overflow-hidden aspect-[4/3] bg-rose-100"
    >
      {images.map((src, idx) => (
        <div
          className="keen-slider__slide flex items-center justify-center"
          key={idx}
        >
          <img
            src={src}
            alt={`Foto do casal ${idx + 1}`}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
