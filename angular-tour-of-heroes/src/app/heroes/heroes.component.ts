import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})




export class HeroesComponent {
  constructor(private heroservice:HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }


  heroes:Hero[]=[]
  selectedHero?: Hero

  hero: Hero={
  id:1,
  name:"windstorm"
}

getHeros():void{
  this.heroes=this.heroservice.getHeros()
}



onSelect(hero: Hero){
  this.selectedHero=hero
  console.log(hero)
  // this.selectedHero=hero
}





}
