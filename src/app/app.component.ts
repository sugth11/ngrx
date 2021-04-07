import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { catchError, debounceTime, map } from 'rxjs/operators';
import { RestService } from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private restService: RestService) {}
  ngOnInit() {
    this.restService.getUser().subscribe((data) => {
      console.log(data);
    });
    this.restService.getUser().subscribe((data) => {
      console.log(data);
    });
  }
}
