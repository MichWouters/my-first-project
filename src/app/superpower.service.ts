import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { SuperPower } from './superPower';

@Injectable({
  providedIn: 'root'
})
export class SuperpowerService {
  private superpowersUrl = 'api/superpowers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getSuperPowers(): Observable<SuperPower[]> {
    const superpowers = this.http.get<SuperPower[]>(this.superpowersUrl);
    this.messageService.addMessage("SuperPowerService: Fetched superpowers");
    return superpowers;
  }

  getSuperPower(id: number): Observable<SuperPower> {
    const url = `${this.superpowersUrl}/${id}`;
    const superpower = this.http.get<SuperPower>(url);
    this.messageService.addMessage(`SuperPowerService: Fetched superpower with id: ${id}`);
    return superpower;
  }
  updateSuperpower(superpower?: SuperPower): Observable<any> {
    this.messageService.addMessage(`SuperpowerService: Updated superpower: ${superpower?.Name}`);
    return this.http.put(this.superpowersUrl, superpower, this.httpOptions);
  }
  addSuperpower(superpower: SuperPower): Observable<SuperPower> {
    this.messageService.addMessage(`SuperPowerService: Added superpower: ${superpower.Name}`);
    return this.http.post<SuperPower>(this.superpowersUrl, superpower, this.httpOptions);
  }
  deleteSuperpower(id: Number): Observable<SuperPower> {
    const url = `${this.superpowersUrl}/${id}`;
    this.messageService.addMessage(`SuperPowerService: Deleted superpower: ${id}`);
    return this.http.delete<SuperPower>(url, this.httpOptions);
  }
}