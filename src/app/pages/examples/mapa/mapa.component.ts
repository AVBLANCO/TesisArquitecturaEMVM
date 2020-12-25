import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.component.html'
})
export class MapaComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("mapa-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("mapa-page");
  }

}
