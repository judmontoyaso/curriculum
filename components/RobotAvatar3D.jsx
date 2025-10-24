import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Sphere, Cylinder } from '@react-three/drei';

// Robot/Avatar humanoid
function RobotAvatar() {
  const headRef = useRef();
  const bodyRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Animación de cabeza (mirando alrededor)
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(time * 0.5) * 0.3;
      headRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }
    
    // Movimiento de brazos
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(time * 1.5) * 0.3;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = -Math.sin(time * 1.5) * 0.3;
    }
    
    // Efecto de "respiración" en el cuerpo
    if (bodyRef.current) {
      bodyRef.current.scale.y = 1 + Math.sin(time * 2) * 0.02;
    }
  });

  const materialProps = {
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 1
  };

  return (
    <group position={[0, -1, 0]}>
      {/* Cabeza */}
      <group ref={headRef} position={[0, 1.5, 0]}>
        <RoundedBox args={[0.8, 0.8, 0.8]} radius={0.1}>
          <meshStandardMaterial color="#00d9ff" {...materialProps} />
        </RoundedBox>
        
        {/* Ojos */}
        <Sphere args={[0.1, 16, 16]} position={[-0.2, 0.1, 0.41]}>
          <meshStandardMaterial color="#ffffff" emissive="#00ff88" emissiveIntensity={2} />
        </Sphere>
        <Sphere args={[0.1, 16, 16]} position={[0.2, 0.1, 0.41]}>
          <meshStandardMaterial color="#ffffff" emissive="#00ff88" emissiveIntensity={2} />
        </Sphere>
        
        {/* Antena */}
        <Cylinder args={[0.03, 0.03, 0.5]} position={[0, 0.65, 0]}>
          <meshStandardMaterial color="#ff006e" {...materialProps} />
        </Cylinder>
        <Sphere args={[0.08, 16, 16]} position={[0, 0.95, 0]}>
          <meshStandardMaterial color="#ff006e" emissive="#ff006e" emissiveIntensity={1} />
        </Sphere>
      </group>

      {/* Cuello */}
      <Cylinder args={[0.15, 0.15, 0.3]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#8338ec" {...materialProps} />
      </Cylinder>

      {/* Cuerpo */}
      <RoundedBox ref={bodyRef} args={[1.2, 1.5, 0.6]} radius={0.1} position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#3a86ff" {...materialProps} />
      </RoundedBox>

      {/* Panel del pecho (detalle) */}
      <RoundedBox args={[0.6, 0.6, 0.05]} radius={0.05} position={[0, 0.3, 0.31]}>
        <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.5} />
      </RoundedBox>

      {/* Brazo izquierdo */}
      <group ref={leftArmRef} position={[-0.7, 0.6, 0]}>
        <Cylinder args={[0.15, 0.15, 1]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#00d9ff" {...materialProps} />
        </Cylinder>
        <Sphere args={[0.18, 16, 16]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#8338ec" {...materialProps} />
        </Sphere>
      </group>

      {/* Brazo derecho */}
      <group ref={rightArmRef} position={[0.7, 0.6, 0]}>
        <Cylinder args={[0.15, 0.15, 1]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#00d9ff" {...materialProps} />
        </Cylinder>
        <Sphere args={[0.18, 16, 16]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#8338ec" {...materialProps} />
        </Sphere>
      </group>

      {/* Piernas */}
      <Cylinder args={[0.2, 0.18, 1.2]} position={[-0.3, -0.9, 0]}>
        <meshStandardMaterial color="#00d9ff" {...materialProps} />
      </Cylinder>
      <Cylinder args={[0.2, 0.18, 1.2]} position={[0.3, -0.9, 0]}>
        <meshStandardMaterial color="#00d9ff" {...materialProps} />
      </Cylinder>

      {/* Pies */}
      <RoundedBox args={[0.3, 0.15, 0.4]} radius={0.05} position={[-0.3, -1.55, 0.1]}>
        <meshStandardMaterial color="#8338ec" {...materialProps} />
      </RoundedBox>
      <RoundedBox args={[0.3, 0.15, 0.4]} radius={0.05} position={[0.3, -1.55, 0.1]}>
        <meshStandardMaterial color="#8338ec" {...materialProps} />
      </RoundedBox>
    </group>
  );
}

export default function RobotAvatar3D({ className = "" }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 1, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff006e" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
        />

        <RobotAvatar />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
