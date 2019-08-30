import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listeAcceuil = [
    {
      title: 'Catégorie',
      url: '/categorie',
      icon: 'book'
    },
    {
      title: 'Panneaux',
      url: '/liste-panneaux.page',
      icon: '"remove-circle'
    },
    {
      title: 'Quizz',
      url: '/quizz',
      icon: 'grid'
    },
    {
      title: 'Noter',
      url: '/note',
      icon: 'star-half'
    },
    {
      title: 'Préference',
      url: '/preference',
      icon: 'settings'
    },
  ];
  constructor() {}

}
