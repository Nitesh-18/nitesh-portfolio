"use client"

import { useRef, useMemo, useState } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Sphere, MeshDistortMaterial } from "@react-three/drei"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Sphere args={[1, 32, 32]} ref={meshRef} position={[0, 0, 0]} scale={2}>
      <MeshDistortMaterial
        color="#0f766e"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const positionsArray = useMemo(() => {
    const arr = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  const bufferAttribute = useMemo(() => {
    return new THREE.BufferAttribute(positionsArray, 3)
  }, [positionsArray])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.05
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.075
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <primitive attach="attributes-position" object={bufferAttribute} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#10b981"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  )
}

// Fallback UI component
function FallbackBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-900 flex items-center justify-center animate-fade">
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-400 to-blue-400 opacity-30 blur-2xl animate-pulse" />
    </div>
  )
}

export default function ThreeBackground() {
  const [contextLost, setContextLost] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Listen for context loss
  const handleContextLost = (e: Event) => {
    e.preventDefault()
    setContextLost(true)
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      {!contextLost ? (
        <Canvas
          ref={canvasRef}
          className="h-full w-full"
          gl={{ preserveDrawingBuffer: false, antialias: true }}
          onCreated={({ gl }) => {
            gl.getContext().canvas.addEventListener("webglcontextlost", handleContextLost, false)
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <FloatingParticles />
          <Environment preset="night" />
        </Canvas>
      ) : (
        <FallbackBackground />
      )}
    </div>
  )
}
