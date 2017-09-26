import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styles: []
})
export class NosotrosComponent implements OnInit {
  lat: number =-5.196395;
  lng: number =-80.630287;
  zoom: number = 16;
  constructor() { }

  ngOnInit() {
  }

}
