import { postReducer } from '../posts/posts-list/state/posts-reducer';
import { PostState } from '../posts/posts-list/state/posts-state';
import { counterReducer } from '../state/counter-reducer';
import { counterType } from '../state/counter-state';

export interface AppState {
  myProfile: counterType;
  posts: PostState;
}
export const appReducer = {
  myProfile: counterReducer,
  posts: postReducer,
};
