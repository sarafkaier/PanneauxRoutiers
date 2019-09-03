import { Injectable } from '@angular/core';
import { QuizQuestion } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: QuizQuestion[] = [
	{ id: 0, panneauId: 5, question: "Ce panneau indique:",
	choix1: "une interdiction de tourner à gauche",
	choix2: "une interdiction de tourner à droite",
	choix3: "une interdiction de stationner",
	choix4: "une interdiction de faire demi-tour",
	bonChoix: 2,
	image: "https://www.magequip.com/media/catalog/product/cache/31a470d3411692d4c06a09bc75181cbc/6/7/676754.jpg"
	},
	{ id: 1, panneauId: 2, question: "Ce panneau indique:",
	choix1: "une interdiction de tourner à gauche",
	choix2: "une interdiction de tourner à droite",
	choix3: "une interdiction de stationner",
	choix4: "une interdiction de faire demi-tour",
	bonChoix: 1,
	image: "https://www.signastore.fr/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/p/a/panneau_priorite_droite.jpg"
	},
	{ id: 2, panneauId: 3, question: "Ce panneau indique:",
	choix1: "une interdiction de tourner à gauche",
	choix2: "une interdiction de tourner à droite",
	choix3: "une interdiction de stationner",
	choix4: "une interdiction de faire demi-tour",
	bonChoix: 4,
	image: "https://www.magequip.com/media/catalog/product/cache/31a470d3411692d4c06a09bc75181cbc/6/7/676832.jpg"

	}
  ]
  constructor() { }

  get(id:number) {
	return this.questions[id];
  }

  count() {
	return this.questions.length;
  }
}

