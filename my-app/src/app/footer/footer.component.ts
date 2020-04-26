import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(

    private ruta:ActivatedRoute

  ) {

    this.ruta.params.subscribe(params=>{
      console.log(params)
    })

   }

  ngOnInit() {
  }

}
