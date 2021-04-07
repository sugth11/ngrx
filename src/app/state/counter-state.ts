import { counterReducer } from '../state/counter-reducer';
export interface counterType {
  counter: number;
  myProfile: person;
}
export interface person {
  firstName: string;
  lastName: string;
}
export const initializeState = {
  counter: 5,
  myProfile: {},
};
