import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messagesService: MessagesService, private http: HttpClient) { }
  private heroesUrl = 'api/heroes2';

  // Typescrips voor: Task<Hero> GetHero(int id) { ... }
  getHero(id: number): Observable<Hero> {
    // Make HTTP API call -> Get single Hero from specified URL
    const url = `${this.heroesUrl}/${id}`;
    const hero = this.http.get<Hero>(url);

    this.messagesService.addMessage(`HeroService: Fetched hero id: ${id}`);
    return hero;
  }

  getHeroes(): Observable<Hero[]> {
    // Make HTTP API call -> Get array of Heroes from specified URL
    const heroes = this.http.get<Hero[]>(this.heroesUrl);

    this.messagesService.addMessage('HeroService: Fetched heroes');
    return heroes;
  }
}
