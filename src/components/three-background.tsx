"use client"

import { useRef, useMemo, useEffect } from "react"
import type * as THREE from "three"
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
    <Sphere args={[1, 100, 100]} ref={meshRef} position={[0, 0, 0]} scale={2}>
      <MeshDistortMaterial
        color="#0f766e"
        attach="material"
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

  // Generate positions once using useMemo
  const positionsArray = useMemo(() => {
    const array = new Float32Array(500 * 3)
    for (let i = 0; i < 500; i++) {
      array[i * 3 + 0] = (Math.random() - 0.5) * 10
      array[i * 3 + 1] = (Math.random() - 0.5) * 10
      array[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return array
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.05
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.075
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={positionsArray}
          itemSize={3}
        />
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

export default function ThreeBackground() {
  return (
    <Canvas className="h-full w-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedSphere />
      <FloatingParticles />
      <Environment preset="night" />
    </Canvas>
  )
}
