import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FinishPage } from '../finish/finish';
import { QuestionProvider } from '../../providers/question/question';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  public category: any = {};
  public questions: Observable<any[]>;
  public currentQuestion = {};
  public answers: any = [];
  public currentIndex = 0;
  public previousIndex = 0;
  public nextIndex = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFirestore,
    private questionProvider: QuestionProvider
  ) {
  }

  ionViewDidLoad() {
    this.questions = this.questionProvider.getAllQuestions();
  }

  setAnswer(questionIndex, questionAnswer, selectedOption) {
    this.answers[questionIndex] = {
      selected: selectedOption,
      correct: (questionAnswer === selectedOption)
    };
  }

  submitAnswers() {
    console.log(this.answers);
    let score = this.answers.reduce((counter, item) => {
      return counter + (item.correct === true ? 1 : 0);
    }, 0);
    if (score >= 15) {
      this.navCtrl.push(PaymentPage, { status: 'passed' })
    } else {
      this.navCtrl.push(FinishPage, { status: 'failed' })
    }
  }

}
