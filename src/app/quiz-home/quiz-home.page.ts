import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-home',
  templateUrl: './quiz-home.page.html',
  styleUrls: ['./quiz-home.page.scss'],
})
export class QuizHomePage implements OnInit {

  lastQuiz = 0
 constructor(private storage: Storage,
   private router: Router) {
    // Récupérer le résultat du derier quiz
    storage.get('lastQuiz').then( (val) => {
     this.lastQuiz = val
    })
 }
 ngOnInit() {
  this.storage.get('lastQuiz').then(
  (value=>{this.lastQuiz = value})).then(
  (value => { console.log(this.lastQuiz)}));
 }


}
