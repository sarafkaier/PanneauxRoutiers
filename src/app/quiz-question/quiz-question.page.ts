import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizQuestion} from '../services/question';
import { Storage } from '@ionic/storage';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.page.html',
  styleUrls: ['./quiz-question.page.scss'],
})
export class QuizQuestionPage implements OnInit {

  question = null;
  selected = 0;
  score = 0;

  constructor(private storage : Storage, private service : QuestionService, private router : Router) {
    this.question = this.service.get(0);
  }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event.detail);
    this.selected = $event.detail.value;
  }

  onValidate() {
    if (Number(this.selected) === this.question.bonChoix) {
      console.log("Bonne réponse");
      this.score++;
    }
    console.log("Bonne réponse");
    if (this.question.id < (this.service.count() - 1)) {
      console.log("Question suivante")
      this.question = this.service.get(this.question.id + 1)
    }
    else {
      this.storage.set('lastQuiz', this.score);
      console.log(this.score);
      this.router.navigate(['quiz-result']);
    }
  }

}
