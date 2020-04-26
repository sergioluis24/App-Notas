import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  notas:any=
    {
      titulo:'',
      fecha:'',
      contenido:''
    }
  
  constructor( private _service:CardsService ) { 
    
  }

  ngOnInit() {
    
  }
  add(){
    this._service.addItem(this.notas)
    this.notas.titulo=''
    this.notas.fecha=''
    this.notas.contenido=''
  }
}
