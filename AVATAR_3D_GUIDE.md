# 🤖 Avatares 3D - Guía de Uso

## 📁 Archivos Creados

1. **`Avatar3D.jsx`** - Avatar abstracto con esfera y anillos orbitales
2. **`RobotAvatar3D.jsx`** - Robot humanoid animado

## 🎨 Avatar Actualmente en Uso

Estás usando **Avatar3D** (abstracto) en tu index.

## 🔄 Cómo Cambiar de Avatar

### Opción 1: Usar el Robot en lugar del Avatar Abstracto

En `pages/index.jsx`, cambia la importación:

```jsx
// DE ESTO:
import Avatar3D from "../components/Avatar3D";

// A ESTO:
import RobotAvatar3D from "../components/RobotAvatar3D";

// Y en el JSX:
<RobotAvatar3D />
```

## 🎨 Personalización de Colores

### Avatar Abstracto (Avatar3D.jsx)

**Esfera principal:**
```jsx
<MeshDistortMaterial
  color="#00d9ff"  // ← Cambia este color (cyan actual)
  ...
/>
```

**Anillos orbitales:**
```jsx
<meshStandardMaterial color="#ff006e" ... /> // Rosa
<meshStandardMaterial color="#8338ec" ... /> // Púrpura
<meshStandardMaterial color="#3a86ff" ... /> // Azul
```

**Partículas flotantes:**
```jsx
color={['#00d9ff', '#ff006e', '#8338ec', '#3a86ff'][i % 4]}
```

### Robot Avatar (RobotAvatar3D.jsx)

**Esquema de colores del robot:**
- Cabeza: `#00d9ff` (cyan)
- Cuerpo: `#3a86ff` (azul)
- Cuello: `#8338ec` (púrpura)
- Ojos: `#00ff88` (verde brillante)
- Antena: `#ff006e` (rosa)

**Para cambiar un color:**
```jsx
<meshStandardMaterial color="#TU_COLOR" ... />
```

## ⚙️ Personalización de Animaciones

### Velocidad de Rotación Automática

```jsx
<OrbitControls
  autoRotate
  autoRotateSpeed={0.5}  // ← Aumenta para más velocidad
  ...
/>
```

### Velocidad de Animación de la Esfera

En Avatar3D:
```jsx
<MeshDistortMaterial
  speed={2}  // ← Aumenta para movimiento más rápido
  distort={0.4}  // ← Aumenta para más distorsión
  ...
/>
```

### Intensidad del Float

```jsx
<Float
  speed={2}  // Velocidad del movimiento flotante
  rotationIntensity={0.5}  // Intensidad de rotación
  floatIntensity={0.5}  // Intensidad del flotado
>
```

## 🎯 Ajustes de Posición

### Mover el Avatar hacia arriba/abajo

En `index.jsx`:
```jsx
<div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
  <Avatar3D />
</div>
```

Cambia las alturas: `h-[400px]` → `h-[500px]` etc.

### Cambiar el ángulo de la cámara

En Avatar3D.jsx:
```jsx
<Canvas
  camera={{ position: [0, 0, 6], fov: 50 }}
  //                  [x, y, z]
  // x: izquierda(-) / derecha(+)
  // y: abajo(-) / arriba(+)
  // z: cerca(-) / lejos(+)
>
```

## 🌈 Paletas de Colores Sugeridas

### Opción 1: Neon Cyberpunk
```jsx
'#00ff88', '#ff006e', '#8b00ff', '#00d9ff'
```

### Opción 2: Sunset
```jsx
'#ff6b35', '#f7931e', '#fdc830', '#f37335'
```

### Opción 3: Ocean
```jsx
'#00d4ff', '#0099cc', '#006699', '#003366'
```

### Opción 4: Forest
```jsx
'#06ffa5', '#00cc88', '#009966', '#006644'
```

### Opción 5: Purple Dream
```jsx
'#b794f6', '#9f7aea', '#805ad5', '#6b46c1'
```

## 🚀 Mejoras Avanzadas

### 1. Agregar Texto 3D

Instala:
```bash
npm install three-stdlib
```

En el avatar:
```jsx
import { Text3D } from '@react-three/drei';

<Text3D
  font="/fonts/helvetiker_regular.typeface.json"
  size={0.5}
  height={0.2}
>
  Juan David
  <meshStandardMaterial color="#ffffff" />
</Text3D>
```

### 2. Agregar Efecto de Bloom (Resplandor)

```jsx
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Dentro del Canvas:
<EffectComposer>
  <Bloom luminanceThreshold={0.3} intensity={1.5} />
</EffectComposer>
```

### 3. Cambiar el Fondo

```jsx
<Canvas style={{ background: 'linear-gradient(to bottom, #1a1a2e, #16213e)' }}>
```

### 4. Desactivar Auto-Rotación

```jsx
<OrbitControls
  autoRotate={false}  // ← Cambia a false
  ...
/>
```

## 🐛 Solución de Problemas

### El avatar no se muestra
- Verifica que las dependencias están instaladas
- Revisa la consola del navegador (F12)
- Asegúrate de que el componente está importado correctamente

### El avatar se ve muy pequeño/grande
- Ajusta el `scale` en el componente
- Cambia la posición de la cámara (`camera={{ position: [0, 0, X] }}`)

### Bajo rendimiento
- Reduce el número de partículas
- Reduce la complejidad de las geometrías (menos `args` en Sphere/Cylinder)
- Desactiva las sombras si no las usas

## 💡 Tips

1. **Modo Oscuro**: Los colores brillantes se ven mejor en dark mode
2. **Performance**: En móviles, considera reducir las partículas
3. **Interactividad**: Los usuarios pueden rotar el avatar arrastrando con el mouse
4. **Tamaño**: En móvil el avatar se ve en 400px de altura, en desktop en 600px

## 🎬 Próximos Pasos

1. Prueba ambos avatares y elige tu favorito
2. Personaliza los colores según tu marca personal
3. Ajusta las animaciones a tu gusto
4. Considera agregar efectos de postprocesamiento (bloom, etc.)

---

**¿Necesitas más personalización?** Avísame y ajustamos lo que necesites.
