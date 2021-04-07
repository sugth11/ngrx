import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addCustomInput,
  addData,
  divCustomInput,
  mulCustomInput,
  subCustomInput,
} from '../state/counter-action';
import { getProfile } from '../state/counter-selector';
import { counterType } from '../state/counter-state';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-counter-cutom-input',
  templateUrl: './counter-cutom-input.component.html',
  styleUrls: ['./counter-cutom-input.component.scss'],
})
export class CounterCutomInputComponent implements OnInit {
  value: number = 0;
  counter: any;
  constructor(private store: Store<AppState>) {
    this.store.select(getProfile).subscribe((profile) => {
      console.log('am profile');
      this.counter = profile;
      console.log(
        'input button coponent returns is',
        profile,
        this.counter.firstName + this.counter.lastName
      );
    });
  }

  ngOnInit(): void {}
  onAdd() {
    console.log(this.value);
    this.store.dispatch(addCustomInput({ value: +this.value }));
    this.store.dispatch(addData({ firstName: 'Sujit', lastName: 'Joseph' }));
  }
  onSub() {
    this.store.dispatch(subCustomInput({ value: +this.value }));
  }
  onMul() {
    this.store.dispatch(mulCustomInput({ value: +this.value }));
  }
  onDiv() {
    this.store.dispatch(divCustomInput({ value: +this.value }));
  }
}
