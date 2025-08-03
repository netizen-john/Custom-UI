import React from "react";
import SplashCursor from "../components/SplashCursor";
import Waves from "../components/Waves";

const page = () => {
  return (
    <>
      <Waves
        lineColor="#480ca8"
        backgroundColor="#001219"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <SplashCursor />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 py-8">
        <div className="text-center space-y-6 max-w-sm mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Riding the Waves
            <br />
            of Imagination
          </h1>

          <div className="space-y-4 max-w-xs mx-auto">
            <p className="text-lg opacity-90 font-light">
              ✨ Interactive Visual Experience
            </p>
            <p className="text-base opacity-80">🌊 Fluid Motion Graphics</p>
            <p className="text-base opacity-80">🎨 Dynamic Color Waves</p>
            <p className="text-base opacity-80">📱 Mobile Optimized Design</p>
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-xl font-semibold text-purple-300">
              Creating Digital Magic
            </p>
            <p className="text-sm opacity-75 max-w-xs mx-auto leading-relaxed">
              Where creativity meets technology. Immersive animations that
              respond to your touch.
            </p>
          </div>

          <div className="mt-6 flex flex-col items-center space-y-2">
            <div className="px-4 py-1.5 bg-purple-600/20 rounded-full border border-purple-400/30">
              <span className="text-xs font-medium text-purple-200">
                #WebDesign #Animation #Interactive
              </span>
            </div>
            <div className="px-4 py-1.5 bg-blue-600/20 rounded-full border border-blue-400/30">
              <span className="text-xs font-medium text-blue-200">
                #Frontend #React #CreativeCoding
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
