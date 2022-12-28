import { Component, OnInit } from '@angular/core';


interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // componentes: Observable<Componente[]>;

  // constructor( private menuCtrl: MenuController,
  //              private dataService: DataService ) { }

  componentes: Componente[] = [
    {
      icon: 'laptop',
      name: 'ActionSheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'happy',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ]

  ngOnInit() {
    // this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    // this.menuCtrl.open('first');
  }

}
