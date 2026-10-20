import * as THREE from 'three'

// Clase base: toda figura tiene un color, una posición y sabe crear su geometría
export abstract class Figura {
  color: string
  posicion: [number, number, number]

  constructor(color: string, posicion: [number, number, number]) {
    this.color = color
    this.posicion = posicion
  }

  abstract crearGeometria(): THREE.BufferGeometry
}
