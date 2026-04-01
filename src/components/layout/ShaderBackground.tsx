"use client"

import { useRef, useEffect, useState } from "react"
import { Shader, Swirl, ChromaFlow } from "shaders/react"

export function ShaderBackground() {
  const [isLoaded, setIsLoaded] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <div
      ref={shaderContainerRef}
      className={`fixed inset-0 z-[-1] transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      style={{ contain: "strict" }}
    >
      <Shader className="h-full w-full" dpr={1}>
        <Swirl
          colorA="#ffffff"
          colorB="#5B8FB9" /* Original Primary */
          speed={0.4}
          detail={0.7}
          blend={50}
          opacity={0.4} /* Much lower opacity so it stays soft */
        />
      </Shader>
      <div className="absolute inset-0 opacity-60"> {/* Reduced overall layer opacity */}
        <Shader className="h-full w-full" dpr={1}>
          <ChromaFlow
            baseColor="#ffffff"
            upColor="#5B8FB9" /* Original Primary */
            downColor="#ffffff"
            leftColor="#E8C97D" /* Original Amber */
            rightColor="#7BAE7F" /* Original Sage Green */
            intensity={0.5} /* Reduced intensity to avoid deep saturation */
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.6}
          />
        </Shader>
      </div>
    </div>
  )
}
