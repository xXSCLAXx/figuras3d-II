import * as THREE from 'three'
import { Figura } from './Figura'

// En 3D el círculo es una esfera
export class Circulo extends Figura {
  radio: number

  constructor(color: string, posicion: [number, number, number], radio = 1) {
    super(color, posicion)
    this.radio = radio
  }

  crearGeometria() {
    return new THREE.SphereGeometry(this.radio, 64, 32)
  }
}
