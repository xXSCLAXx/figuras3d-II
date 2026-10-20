import * as THREE from 'three'
import { Figura } from './Figura'

// En 3D el rectángulo es una caja
export class Rectangulo extends Figura {
  ancho: number
  alto: number
  profundidad: number

  constructor(
    color: string,
    posicion: [number, number, number],
    ancho = 2.5,
    alto = 1.5,
    profundidad = 1,
  ) {
    super(color, posicion)
    this.ancho = ancho
    this.alto = alto
    this.profundidad = profundidad
  }

  crearGeometria() {
    return new THREE.BoxGeometry(this.ancho, this.alto, this.profundidad)
  }
}
