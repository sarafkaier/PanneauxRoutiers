import { Injectable } from '@angular/core';
import { Panneaux } from './model/panneauxModel';

@Injectable({
  providedIn: 'root'
})
export class PanneauxService {

  panneaux: Panneaux[] = [
    { // DANGER
      id: 0,
      title: 'Danger virage à droite',
      image: 'assets/images/panneaux/danger/A1a.png',
      comment: 'Attention au virage à droite',
      categorie: 'DANGER',
      firstTitle : true
    },
    { // DANGER
      id: 1,
      title: 'Danger virage à gauche',
      image: 'assets/images/panneaux/danger/A1b.png',
      comment: 'Attention au virage à gauche',
      categorie: 'DANGER'
    },
    { // DANGER
      id: 2,
      title: 'Danger virage à double sens à droite',
      image: 'assets/images/panneaux/danger/A1c.png',
      comment: 'Attention au virage',
      categorie: 'DANGER'
    },
    { // DANGER
      id: 3,
      title: 'Danger virage à double sens à gauche',
      image: 'assets/images/panneaux/danger/A1d.png',
      comment: 'Attention au virage',
      categorie: 'DANGER'
    },
    { // DANGER
      id: 4,
      title: 'Danger dos dane',
      image: 'assets/images/panneaux/danger/A2a.png',
      comment: 'Attention au virage',
      categorie: 'DANGER'
    },

    {  // INDICATION
      id: 5,
      title: 'Parking',
      image: 'assets/images/panneaux/indication/C1a.png',
      comment: 'Plae de ',
      categorie: 'INDICATION',
      firstTitle : true
    },
    {  // INDICATION
      id: 6,
      title: 'Parking',
      image: 'assets/images/panneaux/indication/C1b.png',
      comment: 'Plae de parking payante',
      categorie: 'INDICATION'
    },
    {  // INDICATION
      id: 7,
      title: 'Parking',
      image: 'assets/images/panneaux/indication/C1c.png',
      comment: 'Plae de ',
      categorie: 'INDICATION'
    },
    {  // INDICATION
      id: 8,
      title: 'Attention',
      image: 'assets/images/panneaux/indication/C3.png',
      comment: 'Attention au feu',
      categorie: 'INDICATION'
    },
    {  // INDICATION
      id: 9,
      title: 'Indication de vitesse',
      image: 'assets/images/panneaux/indication/C4a_50.png',
      comment: 'On roule à 50 km/h ',
      categorie: 'INDICATION'
    },
    { // INTERDICTION
      id: 10,
      title: 'danger sens interdit',
      image: 'assets/images/panneaux/interdiction/B0.png',
      comment: 'danger sens interdit',
      categorie: 'INTERDICTION',
      firstTitle : true
    },
    { // INTERDICTION
      id: 11,
      title: 'sens interdit',
      image: 'assets/images/panneaux/interdiction/B1.png',
      comment: 'Attention sens interdit',
      categorie: 'INTERDICTION'
    },
    { // INTERDICTION
      id: 12,
      title: 'interdiction daller à gauche',
      image: 'assets/images/panneaux/interdiction/B2a.png',
      comment: 'Attention interdiction daller a gauche',
      categorie: 'INTERDICTION'
    },
    { // INTERDICTION
      id: 13,
      title: 'interdiction daller a droite',
      image: 'assets/images/panneaux/interdiction/B2b.png',
      comment: 'Attention interdiction daller a droite',
      categorie: 'INTERDICTION'
    },
    { // INTERSECTION - PRIORITE
      id: 14,
      title: 'Priorité à droite',
      image: 'assets/images/panneaux/intersection-priorite/AB1.png',
      comment: 'Attention prioté à droite',
      categorie: 'INTERSECTION - PRIORITE',
      firstTitle : true
    },
    { // INTERSECTION - PRIORITE
      id: 15,
      title: 'Priorité ponctuelle',
      image: 'assets/images/panneaux/intersection-priorite/AB2.png',
      comment: 'Attention priorité ponctuelle',
      categorie: 'INTERSECTION - PRIORITE'
    },
    { // INTERSECTION - PRIORITE
      id: 16,
      title: 'Céder le passage',
      image: 'assets/images/panneaux/intersection-priorite/AB3a.png',
      comment: 'Attention céder le passage',
      categorie: 'INTERSECTION - PRIORITE'
    },
    { // INTERSECTION - PRIORITE
      id: 17,
      title: 'Céder le passage à 150m',
      image: 'assets/images/panneaux/intersection-priorite/AB3b.png',
      comment: 'Attention céer le passage à 150m',
      categorie: 'INTERSECTION - PRIORITE'
    },
    { // INTERSECTION - PRIORITE
      id: 18,
      title: 'Panneau STOP',
      image: 'assets/images/panneaux/intersection-priorite/AB4.png',
      comment: 'Attention panneaux STOP',
      categorie: 'INTERSECTION - PRIORITE'
    },
    { // OBLIGATION
      id: 19,
      title: 'Obligation de tourner à droite ',
      image: 'assets/images/panneaux/obligation/B21-1.png',
      comment: 'Attention Obligation de tourner à droite',
      categorie: 'OBLIGATION',
      firstTitle : true
    },
    { // OBLIGATION
      id: 20,
      title: 'Obligation de tourner à gauche ',
      image: 'assets/images/panneaux/obligation/B21-2.png',
      comment: 'Attention Obligation de tourner à gauche',
      categorie: 'OBLIGATION'
    },
    { // OBLIGATION
      id: 21,
      title: 'Obligation de tourner à droite ',
      image: 'assets/images/panneaux/obligation/B21a1.png',
      comment: 'Attention Obligation de tourner à droite',
      categorie: 'OBLIGATION'
    },
    { // OBLIGATION
      id: 22,
      title: 'Obligation de tourner à gauche ',
      image: 'assets/images/panneaux/obligation/B21a2.png',
      comment: 'Attention Obligation de tourner à droite',
      categorie: 'OBLIGATION'
    },
    { // OBLIGATION
      id: 23,
      title: 'Obligation daller tout droit ',
      image: 'assets/images/panneaux/obligation/B21b.png',
      comment: 'Attention Obligation daller tout droit',
      categorie: 'OBLIGATION'
    },
    { // SEERVICES
      id: 24,
      title: 'Services - hôpital',
      image: 'assets/images/panneaux/services/CE1.png',
      comment: 'Présence dun Service Hôpital',
      categorie: 'SERVICES',
      firstTitle : true
    },
    { // SEERVICES
      id: 25,
      title: 'Services - hôpital SOS',
      image: 'assets/images/panneaux/services/CE2a.png',
      comment: 'Présence dun Service Hôpital SOS',
      categorie: 'SERVICES'
    },
    { // SEERVICES
      id: 26,
      title: 'Services - Service Hôpital - Téléphone',
      image: 'assets/images/panneaux/services/CE2b.png',
      comment: 'Présence dun Service Hôpital - Téléphone',
      categorie: 'SERVICES'
    },
    { // SERVICES
      id: 27,
      title: 'Services - Information',
      image: 'assets/images/panneaux/services/CE3a.png',
      comment: 'Présence dun point - Information',
      categorie: 'SERVICES'
    },
    { // SEERVICES
      id: 28,
      title: 'Services - Espace de camping',
      image: 'assets/images/panneaux/services/CE4a.png',
      comment: 'Présence dun Service  - Espace de camping',
      categorie: 'SERVICES'
    },
  ];
  constructor() { }

  getAll() {
    return this.panneaux;
  }

  get(id: number) {
    if (id < 0 || id >= this.panneaux.length) {
      return null;
    }
    return this.panneaux[id];
  }
}
