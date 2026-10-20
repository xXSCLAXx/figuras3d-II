import * as THREE from 'three'
import { Figura } from './Figura'

// En 3D el triángulo es una pirámide de base triangular
export class Triangulo extends Figura {
  lado: number

  constructor(color: string, posicion: [number, number, number], lado = 2) {
    super(color, posicion)
    this.lado = lado
  }

  crearGeometria() {
    const radioBase = this.lado / Math.sqrt(3)
    const altura = (Math.sqrt(3) / 2) * this.lado
    return new THREE.ConeGeometry(radioBase, altura, 3)
  }
}
