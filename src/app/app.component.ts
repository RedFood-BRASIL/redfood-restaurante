import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  styleUrls:['app.style.scss'],
  template: `
  <ion-app>
  <ion-menu contentId="content1" side="start">
    <ion-content>
    <ion-list id="inbox-list">
      <ion-list-header>RedFood</ion-list-header>
      <ion-note>nome restaurante logado</ion-note>
      <ion-menu-toggle auto-hide="false" *ngFor="let p of appPages; let i = index">
        <ion-item (click)="selectedIndex = i" routerDirection="root" [routerLink]="[p.url]" lines="none" detail="false" [class.selected]="selectedIndex == i">
          <ion-icon slot="start" [ios]="p.icon + '-outline'" [md]="p.icon + '-sharp'"></ion-icon>
          <ion-label>{{ p.title }}</ion-label>
        </ion-item>
      </ion-menu-toggle>
    </ion-list>

    <ion-list id="labels-list">
      <ion-list-header>Labels</ion-list-header>
      <ion-item lines="none">
        <ion-icon slot="start" ios="bookmark-outline" md="bookmark-sharp"></ion-icon>
        <ion-label>label</ion-label>
      </ion-item>
    </ion-list>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="content1" main></ion-router-outlet>
</ion-app>
`
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/app/dashboard',
      icon: 'mail'
    },
    {
      title: 'Restaurante',
      url: '/app/restaurante',
      icon: 'mail'
    },
    {
      title: 'Cardapio',
      url: '/app/cardapio',
      icon: 'mail'
    },
    {
      title: 'Cupom',
      url: '/app/cupom',
      icon: 'mail'
    },
     {
      title: 'Entrega',
      url: '/app/entrega',
      icon: 'mail'
    },
    {
      title: 'Horario',
      url: '/app/horario',
      icon: 'mail'
    },
    {
      title: 'Pagamento',
      url: '/app/pagamento',
      icon: 'mail'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }

  

}
