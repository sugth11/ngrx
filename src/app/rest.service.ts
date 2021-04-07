import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { concatMap, map, mergeMap, share } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private restService: HttpClient) {}
  url: string = 'https://605b279c27f0050017c06517.mockapi.io/employee/';
  address = of('Chennai');
  name = of('Sujith');
  getUser() {
    const myInformation: Observable<String> = this.address.pipe(
      concatMap((addres) => {
        return this.name.pipe(
          map((name) => {
            const details = name + addres;
            return details;
          }),
          share()
        );
      })
    );
    return myInformation;
    // myInformation.subscribe((data) => {
    //   console.log(data);
    // });
  }
}
