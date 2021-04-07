import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth-module').then((m) => m.authModule),
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/post.module').then((m) => m.postsModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule, HttpClientModule],
  providers: [RestService],
})
export class AppRoutingModule {}
