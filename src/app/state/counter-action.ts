import { createAction, props } from '@ngrx/store';
import { person } from './counter-state';

export const increement = createAction('increement');
export const decreement = createAction('decreement');
export const reset = createAction('reset');
export const addCustomInput = createAction(
  'customInput',
  props<{ value: number }>()
);
export const addData = createAction('myData', props<person>());
export const subCustomInput = createAction(
  'subInput',
  props<{ value: number }>()
);
export const divCustomInput = createAction(
  'divInput',
  props<{ value: number }>()
);
export const mulCustomInput = createAction(
  'mulInput',
  props<{ value: number }>()
);
