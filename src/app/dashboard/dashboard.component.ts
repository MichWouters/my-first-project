import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { SuperPower } from '../superPower';
import { SuperpowerService } from '../superpower.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  superpowers: SuperPower[] = [];

  constructor(private heroService: HeroService, private superPowerService: SuperpowerService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(x => this.heroes = x.slice(1, 5));
  }

  getSuperPowers() {
    this.superPowerService.getSuperPowers().subscribe(x => this.superpowers = x.sort(() => Math.random() - 0.5)
      .slice(1, 5));
  }

  ngOnInit(): void {
    this.getHeroes();
    this.getSuperPowers();
  }

}
