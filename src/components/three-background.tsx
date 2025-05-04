"use client"

import { useRef, useEffect } from "react"
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
      <MeshDistortMaterial color="#0f766e" attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.8} />
    </Sphere>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  useEffect(() => {
    if (!particlesRef.current) return

    // Randomize particle positions
    const positions = particlesRef.current.geometry.attributes.position
    const count = positions.count

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10

      positions.setXYZ(i, x, y, z)
    }

    positions.needsUpdate = true
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
        <bufferAttribute attach="attributes-position" count={500} array={new Float32Array(500 * 3)} itemSize={3} args={[]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#10b981" sizeAttenuation transparent opacity={0.8} />
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
