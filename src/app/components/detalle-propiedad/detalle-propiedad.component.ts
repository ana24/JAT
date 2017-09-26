import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-propiedad',
  templateUrl: './detalle-propiedad.component.html',
  styles: []
})
export class DetallePropiedadComponent implements OnInit {
  lat: number =-5.196395;
  lng: number =-80.630287;
  zoom: number = 16;
  constructor() { }

  ngOnInit() {
  }

}
