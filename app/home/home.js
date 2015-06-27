import {Words} from '../services/words';

@Component({
  selector: 'home',
  injectables: [Words]
})
@View({
  templateUrl: 'home/home.html'
})

export class Home {
  constructor(words: Words) {
    this.words = words;
  }
}