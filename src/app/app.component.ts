import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   menuOpened = false;

  
  listTitles = [{
     trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080.mp4',
     cover:'assets/images/guardios-da-galaxia.jpg',
     name: 'Guardiões da Galaxia',
     relevancia:98,
     age:0,
     parts:2,
     categories:['Épico', 'Filme de fantasia', 'Viagem no tempo']

  }, {
     trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080.mp4',
     cover:'assets/images/guardios-da-galaxia.jpg',
     name: 'Guardiões da Galaxia 2',
     relevancia:98,
     age:12,
     parts:2,
     categories:['Épico', 'Filme de fantasia', 'Viagem no tempo']

  }, {
     trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080.mp4',
     cover:'assets/images/guardios-da-galaxia.jpg',
     name: 'Guardiões da Galaxia 3',
     relevancia:98,
     age:18,
     parts:2,
     categories:['Épico', 'Filme de fantasia', 'Viagem no tempo']

  }];

    setMenuState(state: boolean) {

     this.menuOpened = state;
    }

    closeMenu() {

     this.menuOpened = false;
    }
}
