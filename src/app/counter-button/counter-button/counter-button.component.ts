import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addData,
  decreement,
  increement,
  reset,
} from 'src/app/state/counter-action';
import { counterType } from 'src/app/state/counter-state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss'],
})
export class CounterButtonComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
  increement() {
    this.store.dispatch(increement());
    this.store.dispatch(addData({ firstName: 'Sujit', lastName: 'Joseph' }));
  }
  decreement() {
    this.store.dispatch(decreement());
    this.store.dispatch(addData({ firstName: 'Vinoth', lastName: 'Babu' }));
  }
  reset() {
    this.store.dispatch(reset());
    this.store.dispatch(addData({ firstName: '', lastName: '' }));
  }
}
