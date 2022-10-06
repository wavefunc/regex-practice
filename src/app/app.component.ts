import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regex-practice';
  public inputStr = 'A00';
  public rules = new RegExp('');
  public regexStr = '^[A-Z]\\d\\d$';
  public output = false;

  public onRegexTest() {

    this.rules = new RegExp(this.regexStr);
    console.log(this.regexStr);
    this.output = this.rules.test(this.inputStr);
  }
}
