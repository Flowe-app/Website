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
          colorB="#5B8FB9"
          speed={0.4}
          detail={0.7}
          blend={50}
          opacity={0.4}
        />
      </Shader>
      <div className="absolute inset-0 opacity-60">
        <Shader className="h-full w-full" dpr={0.75}>
          <ChromaFlow
            baseColor="#ffffff"
            upColor="#5B8FB9"
            downColor="#ffffff"
            leftColor="#E8C97D"
            rightColor="#7BAE7F"
            intensity={0.5}
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
