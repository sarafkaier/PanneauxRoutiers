import { Injectable } from '@angular/core';
import { Categorie } from './model/categorie';

@Injectable({
  providedIn: 'root'
})

export class CategorieService {

	categorie: Categorie[] = [
	{ 	id: 0,
		title: 'Interdiction',
		forme: 'Cercle',
		couleur: 'Rouge',
		position: 'Se situe juste avant le début de l\'interdiction',
		image: 'https://i2.cdscdn.com/pdt2/7/8/0/1/700x700/saf4044589023780/rw/panneau-interdit-acces-pour-personnes-non-autoris.jpg'
	},
	{	id: 1,
		title: 'Obligation',
		forme: 'Carré',
		couleur: 'Bleu',
		position: 'Se situe juste avant le début de l\'obligation',
		image: 'https://cdn-01.media-brady.com/store/sifr/media/catalog/product/cache/18/image/85e4522595efc69f496374d01ef2bf13/1563992568/s/i/sifr_op80_1_std.lang.all.gif'
	},
	{	id: 2,
		title: 'Danger',
		forme: 'Triangle',
		couleur: 'Rouge',
		position: '50m avant le danger en ville, 150m avant le danger hors de la ville',
		image: 'https://www.direct-signaletique.com/I-Grande-8075-panneau-de-danger-point-d-exclamation-a14.net.jpg'
	},
	{ 	id: 3,
		title: 'Intersection prioritaire',
		forme: 'Triangle',
		couleur: 'Rouge ou jaune',
		position: 'Se situe avant l\'intersection',
		image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJpEskR-KidAJbUpqoxp80mXk27K5w_gwYqnIiFLSgWDrtEp-Jw'
	},
	{	id: 4,
		title: 'Indication',
		forme: 'Carré/Rectangle',
		couleur: 'Bleu',
		position: 'Se trouve avant l\'indication',
		image: 'https://www.manutan.fr/img/S/GRP/ST/AIG281264.jpg'
	},
	{	id: 5,
		title: 'Service',
		forme: 'Carré',
		couleur: 'Bleu',
		position: 'Se trouve avant le service indiqué',
		image: 'http://quiz-code-route.fr/panneaux/CE16.png'
	}
	];

  constructor() { }

  getAll(){
  	return this.categorie;
  }

  
    getCategoriesById(id: number) {
        if (id < 0 || id >= this.categorie.length) {
            return null;
        } else {
            return this.categorie[id];
        }
    }

}
