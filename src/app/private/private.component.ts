import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  template: `
  <ion-header>
  <ion-toolbar>
    <ion-title>Nome do restaurante</ion-title>
    <ion-buttons slot="start">
      <ion-menu-button color="primary" autoHide="false"></ion-menu-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content  class="ion-padding">
  <ion-router-outlet></ion-router-outlet>
</ion-content>
`
})
export class PrivateComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
