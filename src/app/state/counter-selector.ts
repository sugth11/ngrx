import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterType } from './counter-state';

const getCounterState = createFeatureSelector<counterType>('myProfile');
export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});
export const getProfile = createSelector(getCounterState, (profile) => {
  return profile.myProfile;
});
