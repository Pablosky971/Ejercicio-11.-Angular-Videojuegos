import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listaVideojuegos: Videojuego[] = []
  videojuego: Videojuego | null = null

  id: number = 0
  titulo: string = ""
  compania: string = ""
  valoracionMedia: number = 0

  constructor() {
    let videojuego1: Videojuego = new Videojuego("Parchís", "Gameberry Labs", 10)
    this.listaVideojuegos.push(videojuego1)
    let videojuego2: Videojuego = new Videojuego("Halo Reach", "Bungie", 10)
    this.listaVideojuegos.push(videojuego2)
   }

  ngOnInit() {
  }

  public vaciarFormulario() {
    this.id=0
    this.titulo=""
    this.compania=""
    this.valoracionMedia=0
  }

  public seleccionarVideojuegos(videojuego: Videojuego): void {
    this.id=videojuego.id 
    this.titulo=videojuego.titulo
    this.compania=videojuego.compania
    this.valoracionMedia=videojuego.valoracionMedia
  }

  public add(){
  
    this.videojuego = new Videojuego(this.titulo, this.compania, this.valoracionMedia)
    this.listaVideojuegos.push(this.videojuego)
    this.vaciarFormulario()
    console.log("¡Videojuego incluido con éxito!")
  }

}
