/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Words} from 'service/words';



@Component({
  selector: 'app',
  appInjector: [Words]
})
@View({
  templateUrl: `test.html`
})
class App {

  word : String;
  words : Words;
	
  	constructor(words: Words) {
    	this.words = words;
  	}

  	getWord() {    	
    	this.word = this.words.getWord();
  	}
}

bootstrap(App);
