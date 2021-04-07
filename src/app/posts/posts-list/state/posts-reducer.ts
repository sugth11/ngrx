import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/posts-model';
import { addPost, deletePost, updatePost } from './posts-action';
import { initialState } from './posts-state';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state: any, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state: any, action: any) => {
    const actions: any = { ...action };
    let updatedPost = state.posts.map((post: Post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePost, (state: any, action: any) => {
    let updatedPost = state.posts.filter((post: Post) => {
      return action.id !== post.id;
    });
    console.log('updated post is', updatedPost);
    return {
      ...state,
      posts: updatedPost,
    };
  })
);
export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
