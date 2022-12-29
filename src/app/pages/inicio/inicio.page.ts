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
    },
    {
      icon: 'person',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'paw',
      name: 'Buttons',
      redirectTo: '/button'
    },
    {
      icon: 'mail',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'switch',
      name: 'CheckBox',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'Date Time',
      redirectTo: '/datetime'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite Scroll',
      redirectTo: '/infinite'
    }
  ]

  ngOnInit() {
    // this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    // this.menuCtrl.open('first');
  }

}
