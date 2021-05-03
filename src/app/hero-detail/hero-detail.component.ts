import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // Make parameter an input param -> Can be filled from outside this class.
  // @Input() hero?: Hero;
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute, // Extract parameter(s) from URL
    private location: Location,    // Service for interacting with browser. Use it to navigate 'back'
    private heroService: HeroService // Own service to fetch data from 'DB'
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.heroService.updateHero(this.hero)
       .subscribe(() => this.goBack())
  }
}