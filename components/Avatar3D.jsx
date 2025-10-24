import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

// Componente del Avatar 3D animado
function AnimatedAvatar() {
  const meshRef = useRef();
  const groupRef = useRef();
  
  // Animación continua
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotación suave del grupo
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.3;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    }
    
    // Efecto de "respiración" en la esfera principal
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Esfera principal con material distorsionado */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5}>
          <MeshDistortMaterial
            color="#00d9ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Anillos orbitales */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#ff006e" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#8338ec" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.4, 0.05, 16, 100]} />
        <meshStandardMaterial color="#3a86ff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Partículas flotantes alrededor */}
      {[...Array(30)].map((_, i) => {
        const theta = (i / 30) * Math.PI * 2;
        const radius = 3 + Math.random() * 1;
        const x = Math.cos(theta) * radius;
        const y = (Math.random() - 0.5) * 4;
        const z = Math.sin(theta) * radius;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={['#00d9ff', '#ff006e', '#8338ec', '#3a86ff'][i % 4]}
              emissive={['#00d9ff', '#ff006e', '#8338ec', '#3a86ff'][i % 4]}
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Componente principal exportable
export default function Avatar3D({ className = "" }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Iluminación */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8338ec" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />

        {/* Avatar 3D */}
        <AnimatedAvatar />

        {/* Controles de órbita para interactividad con el mouse */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
