import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { SuperPower } from './superPower';

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

    const superpowers: SuperPower[] = [
      { id: 1, Name: "RayMan", Type: "XRay vision", IsOverpowered: true },
      { id: 2, Name: "Ghost", Type: "Invisibility", IsOverpowered: false },
      { id: 3, Name: "Hulk", Type: "Strength", IsOverpowered: true },
      { id: 4, Name: "Zoof", Type: "Teleportation", IsOverpowered: false },
      { id: 5, Name: "Shield", Type: "Bulletproof", IsOverpowered: true },
      { id: 6, Name: "Flex", Type: "Elastic", IsOverpowered: true },
      { id: 7, Name: "Storm", Type: "Weather Invoker", IsOverpowered: false },
      { id: 8, Name: "Flash", Type: "Speed", IsOverpowered: true },
      { id: 9, Name: "Diablo", Type: "Fire", IsOverpowered: true },
      { id: 10, Name: "Squirt", Type: "Water", IsOverpowered: false },
    ]

    return { heroes, superpowers };
  }

  constructor() { }
}
