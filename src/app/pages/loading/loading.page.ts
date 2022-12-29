import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {


  loading!: HTMLIonLoadingElement;


  constructor( private loadingCtrl: LoadingController ) { }

  ngOnInit() {
  }

  mostrarLoading() {
    this.presentLoading('I love Yamato');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading( message: string) {

    this.loading = await this.loadingCtrl.create({
      message,
      cssClass: 'custom-loading',

    });

    await this.loading.present();

  }

}
