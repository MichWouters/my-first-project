import { Component, Input, OnInit } from '@angular/core';
import { SuperPower } from '../superPower';
import { SuperpowerService } from '../superpower.service';

@Component({
  selector: 'app-superpowers',
  templateUrl: './superpowers.component.html',
  styleUrls: ['./superpowers.component.css']
})
export class SuperpowersComponent implements OnInit {
  @Input() selectedSuperpower:SuperPower = {
    Name:"",
    Type:"",
  };
  superpowers : SuperPower[] = [];
  constructor(private superPowerService:SuperpowerService) { }

  getSuperPowers(): void{
    this.superPowerService.getSuperPowers().subscribe(x => this.superpowers = x);
  };

  addSuperpower(superpower:SuperPower):void{
    if(!superpower.Name){return;}
    this.superPowerService.addSuperpower(superpower).subscribe(x => this.superpowers.push(x));
  };

  deleteSuperpower(superpower:SuperPower):void{
    this.superpowers = this.superpowers.filter(x => x !== superpower);
    if(superpower.id){
      this.superPowerService.deleteSuperpower(superpower.id).subscribe();
    };
  }
  ngOnInit(): void {
    this.getSuperPowers();
  }

}