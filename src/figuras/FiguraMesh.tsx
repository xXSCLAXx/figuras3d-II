import { useMemo } from 'react'
import type { Figura } from './Figura'

// Componente que dibuja cualquier Figura en la escena
export function FiguraMesh({ figura }: { figura: Figura }) {
  const geometria = useMemo(() => figura.crearGeometria(), [figura])

  return (
    // Inclinación fija (sin movimiento) para que se note el volumen
    <mesh geometry={geometria} position={figura.posicion} rotation={[0.3, 0.6, 0]}>
      {/* Material que reacciona a la luz, así se ven sombras y volumen */}
      <meshStandardMaterial color={figura.color} roughness={0.4} />
    </mesh>
  )
}
