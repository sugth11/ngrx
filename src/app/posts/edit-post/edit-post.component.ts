import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts-model';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../posts-list/state/posts-action';
import { getPostById } from '../posts-list/state/posts-selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  updateForm!: FormGroup;
  post!: Post;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.store.select(getPostById, { id }).subscribe((data) => {
        this.post = data;
        console.log(this.post);
        this.createForm();
      });
    });
  }
  createForm() {
    this.updateForm = new FormGroup({
      name: new FormControl(this.post.name, [
        Validators.required,
        Validators.minLength(6),
      ]),
      designation: new FormControl(this.post.designation, [
        Validators.required,
        Validators.minLength(6),
      ]),
      age: new FormControl(this.post.age, [Validators.required]),
      salary: new FormControl(this.post.salary, [Validators.required]),
    });
  }

  designationError() {
    const postDescription = this.updateForm.get('designation');
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
    const postDescription = this.updateForm.get('age');
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
    const postDescription = this.updateForm.get('salary');
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
  onUpdatePost() {
    if (!this.updateForm.valid) {
      return;
    }
    const post: Post = {
      id: this.post.id,
      name: this.updateForm.value.name,
      designation: this.updateForm.value.designation,
      age: this.updateForm.value.age,
      salary: this.updateForm.value.salary,
    };
    this.store.dispatch(updatePost({ post }));
    this.updateForm.reset();
    this.router.navigate(['posts']);
  }
}
