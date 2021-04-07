import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from 'src/app/state/counter-selector';
import { counterType } from 'src/app/state/counter-state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((counter) => {
      console.log('am counter');
      this.counter = counter;
    });
  }
}
