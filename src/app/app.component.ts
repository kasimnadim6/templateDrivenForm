import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kasim';

  topics =['Angular','C#','Java','Realogy','Azure'];

  userModel = new User('kasim','sim1@gmail.com',8861321329,'','morning',true);
}
