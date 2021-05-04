import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messagesService: MessagesService, private http: HttpClient) { }
  private heroesUrl = 'api/heroes';
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  // Typescrips voor: Task<Hero> GetHero(int id) { ... }
  getHero(id: number): Observable<Hero> {
    // Make HTTP API call -> Get single Hero from specified URL
    const url = `${this.heroesUrl}/${id}`;
    const hero = this.http.get<Hero>(url);

    this.messagesService.addMessage(`HeroService: Fetched hero id: ${id}`);
    return hero;
  };

  getHeroes(): Observable<Hero[]> {
    // Make HTTP API call -> Get array of Heroes from specified URL
    this.messagesService.addMessage('HeroService: Fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  };

  addHero(hero: Hero) : Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions);
  };

  updateHero(hero?: Hero): Observable<any> {
    // Put -> Update existing data
     return this.http.put(this.heroesUrl, hero, this.httpOptions);
  };

  deleteHero(hero: Hero): Observable<Hero>{
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete<Hero>(url, this.httpOptions);
  };
}
