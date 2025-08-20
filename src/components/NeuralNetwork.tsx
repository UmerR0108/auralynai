import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

function NetworkNode({ position, connections }: { position: [number, number, number]; connections: [number, number, number][] }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current && ref.current.material) {
      const time = state.clock.elapsedTime;
      const material = ref.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.3 + Math.sin(time * 2 + position[0]) * 0.2;
    }
  });

  return (
    <>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.05]} />
        <meshBasicMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.5}
        />
      </mesh>
      {connections.map((connectionPos, index) => (
        <Line
          key={index}
          points={[position, connectionPos]}
          color="#a855f7"
          transparent
          opacity={0.2}
          lineWidth={1}
        />
      ))}
    </>
  );
}

function NeuralNet() {
  const networkData = useMemo(() => {
    const nodes: { position: [number, number, number]; connections: [number, number, number][] }[] = [];
    const nodePositions: [number, number, number][] = [];
    
    // Generate random node positions
    for (let i = 0; i < 50; i++) {
      const position: [number, number, number] = [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      ];
      nodePositions.push(position);
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodePositions.length; i++) {
      const connections: [number, number, number][] = [];
      const currentPos = nodePositions[i];
      
      for (let j = i + 1; j < nodePositions.length; j++) {
        const otherPos = nodePositions[j];
        const distance = Math.sqrt(
          Math.pow(currentPos[0] - otherPos[0], 2) +
          Math.pow(currentPos[1] - otherPos[1], 2) +
          Math.pow(currentPos[2] - otherPos[2], 2)
        );
        
        if (distance < 2 && Math.random() > 0.6) {
          connections.push(otherPos);
        }
      }
      
      nodes.push({ position: currentPos, connections });
    }
    
    return nodes;
  }, []);

  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {networkData.map((node, index) => (
        <NetworkNode
          key={index}
          position={node.position}
          connections={node.connections}
        />
      ))}
    </group>
  );
}

interface NeuralNetworkProps {
  className?: string;
}

const NeuralNetwork = ({ className = "" }: NeuralNetworkProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <NeuralNet />
      </Canvas>
    </div>
  );
};

export default NeuralNetwork;