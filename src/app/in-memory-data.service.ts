import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Dr. Nice', imagePath: "http://placekitten.com/400/600" },
      { id: 12, name: 'Narco', imagePath: "http://placekitten.com/400/600" },
      { id: 13, name: 'Bombasto', imagePath: "http://placekitten.com/400/600" },
      { id: 14, name: 'Celeritas', imagePath: "http://placekitten.com/400/600" },
      { id: 15, name: 'Magneta', imagePath: "http://placekitten.com/400/600" },
      { id: 16, name: 'RubberMan', imagePath: "http://placekitten.com/400/600" },
      { id: 17, name: 'Dynama', imagePath: "http://placekitten.com/400/600" },
      { id: 18, name: 'Dr. IQ', imagePath: "http://placekitten.com/400/600" },
      { id: 19, name: 'Magma', imagePath: "http://placekitten.com/400/600" },
      { id: 20, name: 'Tornado', imagePath: "http://placekitten.com/400/600" },
    ];

    const heroes2: Hero[] = [
      { id: 11, name: 'Dr. Not Nice', imagePath: "http://placekitten.com/400/600" },
      { id: 12, name: 'Narco', imagePath: "http://placekitten.com/400/600" },
      { id: 13, name: 'Bombasto', imagePath: "http://placekitten.com/400/600" },
      { id: 14, name: 'Celeritas', imagePath: "http://placekitten.com/400/600" },
      { id: 15, name: 'Magneta', imagePath: "http://placekitten.com/400/600" },
      { id: 16, name: 'RubberMan', imagePath: "http://placekitten.com/400/600" },
      { id: 17, name: 'Dynama', imagePath: "http://placekitten.com/400/600" },
      { id: 18, name: 'Dr. IQ', imagePath: "http://placekitten.com/400/600" },
      { id: 19, name: 'Magma', imagePath: "http://placekitten.com/400/600" },
      { id: 20, name: 'Tornado', imagePath: "http://placekitten.com/400/600" },
    ];

    return { heroes, heroes2 };
  }

  constructor() { }
}
