import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperPower } from '../superPower';
import { SuperpowerService } from '../superpower.service';

@Component({
  selector: 'app-superpower-detail',
  templateUrl: './superpower-detail.component.html',
  styleUrls: ['./superpower-detail.component.css']
})
export class SuperpowerDetailComponent implements OnInit {

  superpower?: SuperPower;
  constructor(private route: ActivatedRoute,
    private superPowerService: SuperpowerService,
    private location: Location) { }

  getSuperPower(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.superPowerService.getSuperPower(id)
      .subscribe(x => this.superpower = x);

  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.superPowerService.updateSuperpower(this.superpower).subscribe(() => this.goBack());
  }
  ngOnInit(): void {
    this.getSuperPower();
  }
}