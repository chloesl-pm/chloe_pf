import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import img20250217202201 from "figma:asset/77742fa7636124ea47d95257e10fdb27d8813ddb.png";

export function AnalyticsIntroSlide() {
  return (
    <div className="bg-white relative w-[1440px] h-[810px] overflow-hidden" data-name="표지1">
      {/* Main Full Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <ImageWithFallback
          src={img20250217202201}
          alt="Analytics Service Planner Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle Overlay to enhance readability if needed, keeping original feel */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      {/* Decorative Branding Line (Optional, for professional touch) */}
      <div className="absolute bottom-16 left-24 w-12 h-1 bg-slate-900/20 rounded-full" />
    </div>
  );
}
