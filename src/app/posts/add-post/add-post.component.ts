import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts-model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../posts-list/state/posts-action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      designation: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      age: new FormControl(null, [Validators.required]),
      salary: new FormControl(null, [Validators.required]),
    });
  }
  designationError() {
    const postDescription = this.postForm.get('designation');
    if (postDescription?.touched && !postDescription?.valid) {
      if (postDescription?.errors?.required) {
        return 'Description is mandatory!';
      }
      if (postDescription?.errors?.minlength) {
        return 'Description is Min length should be 6!';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }
  ageError() {
    const postDescription = this.postForm.get('age');
    if (postDescription?.touched && !postDescription?.valid) {
      if (postDescription?.errors?.required) {
        return 'Age is mandatory!';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }
  salaryError() {
    const postDescription = this.postForm.get('salary');
    if (postDescription?.touched && !postDescription?.valid) {
      if (postDescription?.errors?.required) {
        return 'Salary is mandatory!';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }
  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    const post: Post = {
      name: this.postForm.value.name,
      designation: this.postForm.value.designation,
      age: this.postForm.value.age,
      salary: this.postForm.value.salary,
    };
    this.postForm.reset();
    this.store.dispatch(addPost({ post }));
    this.router.navigate(['posts']);
  }
}
