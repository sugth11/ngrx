import { Post } from 'src/app/models/posts-model';

export interface PostState {
  posts: Post[];
}
export const initialState: PostState = {
  posts: [
    {
      id: '1',
      name: 'John',
      designation: 'Software Engineer',
      age: '26',
      salary: '$80000',
    },
    {
      id: '2',
      name: 'Aldrin',
      designation: 'Web Developer',
      age: '29',
      salary: '$100000',
    },
  ],
};
