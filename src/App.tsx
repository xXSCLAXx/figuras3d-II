import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Circulo } from './figuras/Circulo'
import { Triangulo } from './figuras/Triangulo'
import { Rectangulo } from './figuras/Rectangulo'
import { FiguraMesh } from './figuras/FiguraMesh'

// Figuras blancas delante de la cámara
const figuras = [
  new Circulo('#ffffff', [-3.5, 1, -8]),
  new Triangulo('#ffffff', [0, 1, -8]),
  new Rectangulo('#ffffff', [3.5, 1, -8]),
]

function App() {
  return (
    // La cámara está en el centro de la esfera 360°
    <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
      {/* La imagen 360° como fondo */}
      <Environment files="/panorama.jpg" background />

      {/* Luces para que las figuras 3D se vean blancas y con volumen */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      {figuras.map((figura, i) => (
        <FiguraMesh key={i} figura={figura} />
      ))}

      {/* Arrastrar para mirar alrededor, como en un visor 360° */}
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={-0.4} />
    </Canvas>
  )
}

export default App
