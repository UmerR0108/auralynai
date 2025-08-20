import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.z = time * 0.3;
      torusRef.current.position.x = Math.cos(time * 0.3) * 2;
    }
    
    if (octahedronRef.current) {
      octahedronRef.current.rotation.y = time * 0.4;
      octahedronRef.current.position.z = Math.sin(time * 0.4) * 1;
      octahedronRef.current.position.x = Math.sin(time * 0.2) * 1.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#a855f7" />
      
      {/* Wireframe Box */}
      <mesh ref={meshRef} position={[2, 0, -3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial 
          color="#8b5cf6" 
          wireframe 
          transparent 
          opacity={0.3}
        />
      </mesh>
      
      {/* Glowing Torus */}
      <mesh ref={torusRef} position={[-2, 1, -2]}>
        <torusGeometry args={[0.6, 0.2, 16, 100]} />
        <meshBasicMaterial 
          color="#c084fc" 
          transparent 
          opacity={0.4}
        />
      </mesh>
      
      {/* Floating Octahedron */}
      <mesh ref={octahedronRef} position={[0, -1, -4]}>
        <octahedronGeometry args={[0.8]} />
        <meshBasicMaterial 
          color="#ddd6fe" 
          wireframe 
          transparent 
          opacity={0.2}
        />
      </mesh>
    </>
  );
}

interface GeometricBackgroundProps {
  className?: string;
}

const GeometricBackground = ({ className = "" }: GeometricBackgroundProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default GeometricBackground;