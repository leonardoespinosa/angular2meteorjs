import { Component } from '@angular/core';

import template from './app.component.html';

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  parties: any[];

  constructor(){
    this.parties = [
      {
        'name':'Fiesta uno',
        'description': 'Descripcion de la fiesta uno',
        'location': 'Ubicacion de la fiesta uno'
      },
      {
        'name':'Fiesta dos',
        'description': 'Descripcion de la fiesta dos',
        'location': 'Ubicacion de la fiesta dos'
      },
      {
        'name':'Fiesta tres',
        'description': 'Descripcion de la fiesta tres',
        'location': 'Ubicacion de la fiesta tres'
      }
    ];
  }
}
