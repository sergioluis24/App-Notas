import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from './../cards.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  
  notas:any[]
  notas_aux:any
  index:number
  constructor(
    private _service:CardsService,
    private _ruta:ActivatedRoute
    ){
    this._ruta.params.subscribe(ruta=>{
      let _id = ruta.id
    this._service.readNotas().subscribe(data=>{
      let res=true, i=0
      this.notas=data
      do{
        if(this.notas[i].id===_id){
          res=false
          this.index=i
          let date = new Date(this.notas[this.index].fecha.seconds * 1000)
          let year = date.getFullYear()
          let month = date.getMonth()+1
          let day = date.getDate()
          this.notas[this.index].fecha= day+"/"+month+"/"+year
      
        }
        i++
      }while(res)
    })
    })
   }

  ngOnInit() {
  }

}
