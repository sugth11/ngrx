import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Post } from './../../models/posts-model';
import { deletePost } from './state/posts-action';
import { getPosts } from './state/posts-selector';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  post$: Observable<Post[]> | undefined;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.post$ = this.store.select(getPosts);
  }
  onDelete(id: any) {
    this.store.dispatch(deletePost({ id }));
    this.router.navigate(['/posts']);
  }
}
