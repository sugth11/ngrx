import { createReducer, on } from '@ngrx/store';
import {
  decreement,
  increement,
  reset,
  addCustomInput,
  addData,
  subCustomInput,
  mulCustomInput,
  divCustomInput,
} from './counter-action';
import { initializeState } from './counter-state';
const _counterReducer = createReducer(
  initializeState,
  on(increement, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decreement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(addCustomInput, (state, prop) => {
    console.log('value is addCustomInput', prop);
    return {
      ...state,
      counter: prop.value + state.counter,
    };
  }),
  on(addData, (state, prop: any) => {
    console.log('value is addData', prop);
    return {
      ...state,
      myProfile: prop,
    };
  }),
  on(subCustomInput, (state, prop) => {
    return {
      ...state,
      counter: state.counter - prop.value,
    };
  }),
  on(mulCustomInput, (state, prop) => {
    return {
      ...state,
      counter: prop.value * state.counter,
    };
  }),
  on(divCustomInput, (state, prop) => {
    return {
      ...state,
      counter: state.counter / prop.value,
    };
  })
);
export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
