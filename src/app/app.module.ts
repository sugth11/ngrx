import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterButtonComponent } from './counter-button/counter-button/counter-button.component';
import { CounterOutputComponent } from './counter-output/counter-output/counter-output.component';
import { CounterComponent } from './counter/counter/counter.component';
import { counterReducer } from './state/counter-reducer';
import { CounterCutomInputComponent } from './counter-cutom-input/counter-cutom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    CounterComponent,
    CounterCutomInputComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ myProfile: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
  ],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
