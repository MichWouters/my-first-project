import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessagesService } from './messages.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  // Typescrips voor: Task<Hero> GetHero(int id) { ... }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(x => x.id === id) as Hero;
    this.messagesService.addMessage(`HeroService: Fetched hero id: ${id}`);

    return of(hero);
  }

  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messagesService.addMessage('HeroService: Fetched heroes');
    return heroes;
  }
}
