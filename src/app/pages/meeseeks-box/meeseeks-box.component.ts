import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-meeseeks-box',
  templateUrl: './meeseeks-box.component.html',
  styleUrls: ['./meeseeks-box.component.css']
})
export class MeeseeksBoxComponent implements OnInit {
  public title: string; 
  public time: Observable<string>;
  public currencyNumber: number;
  public today: number;
  public pi: number;
  public jsonObject: {[key: string]: string};
  public message: string;

  constructor() { 
    this.title = 'rick-and-morty';
    this.time  = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
    this.currencyNumber = 0.259;
    this.today = Date.now();
    this.pi = 3.14159265359;
    this.jsonObject = {
      title: 'I´m a JSON! Look at me!',
      age: '???',
      objetive: 'Show me!'
    }
    this.message = 'Look at me!';
  }

  ngOnInit(): void {
  }

}
