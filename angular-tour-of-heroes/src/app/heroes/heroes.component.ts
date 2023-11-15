import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})




export class HeroesComponent implements OnInit {
  constructor(private heroservice:HeroService,
    private meessageService:MessageService){


  }

  ngOnInit(): void {
    this.getHeros();
  }


  heroes:Hero[]=[]
  selectedHero?: Hero

  hero: Hero={
  id:1,
  name:"windstorm"
}

getHeros():void{
 this.heroservice.getHeroes()
 .subscribe(heroes =>{
  this.heroes=heroes
 })
}



onSelect(hero: Hero){
  this.selectedHero=hero
  this.meessageService.add('HeoresComponent:Selected hero id=' + hero.id)
  console.log(hero)
  // this.selectedHero=hero
}





}
