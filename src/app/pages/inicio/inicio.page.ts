import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
//Crear una interface para definir propiedades que el componente lista va a tener
interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
// craer nuevo listado

//componentes any[] = [];
componentes: Componente[]= [
  {
    icon: 'american-football-outline',
    name: 'Action Sheet',
    redirecTo: '/action-sheet'
  },
  {
    icon: 'logo-apple-appstore',
    name: 'Alert',
    redirecTo: '/alert'
  },
];
  constructor() { }

  ngOnInit() {
  }

}
