import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CategoryProvider Provider');
  }

  fetchCategories(){
    return [
      {
        id: 1,
        name: 'Education',
        description: 'Lorep ipsum dolor mit, et cetera.'
      },
      {
        id: 2,
        name: 'Cycling',
        description: 'Lorep ipsum dolor mit, et cetera.'
      },
      {
        id: 3,
        name: 'Fitness',
        description: 'Lorep ipsum dolor mit, et cetera.'
      },
      {
        id: 4,
        name: 'Coding',
        description: 'Lorep ipsum dolor mit, et cetera.'
      }
    ]
  }

}
