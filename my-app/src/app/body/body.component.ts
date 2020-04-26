import { Component, OnInit } from '@angular/core';
import { CardsService } from './../cards.service';
// import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  notas:any
  constructor(private _services:CardsService) {
    let year
    let i = 0
    this._services.readNotas().subscribe(data=>{
      this.notas = data
      let cantidadContenido
      
        do{
        let date = new Date(this.notas[i].fecha.seconds * 1000)
        year = date.getFullYear()
        let month = date.getMonth()+1
        let day = date.getDate()
        this.notas[i].fecha= day+"/"+month+"/"+year
        // console.log()
        cantidadContenido= this.notas[i].contenido.length

        i++
        }while(this.notas[i].fecha)
        // console.log("pase")
    })
   }

  ngOnInit() {
    //Para que la traiga de nuevo la data 
    let year
    let i = 0
    this._services.readNotas().subscribe(data=>{
      this.notas = data
      let cantidadContenido
      
        do{
        let date = new Date(this.notas[i].fecha.seconds * 1000)
        year = date.getFullYear()
        let month = date.getMonth()+1
        let day = date.getDate()
        this.notas[i].fecha= day+"/"+month+"/"+year
        // console.log()
        cantidadContenido= this.notas[i].contenido.length

        i++
        }while(this.notas[i].fecha)
        // console.log("pase")
    })
  }
  
}
