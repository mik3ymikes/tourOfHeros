import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})




export class HeroesComponent {
  constructor(private heroservice:HeroService){}
  heroes:Hero[]=[]
  selectedHero?: Hero

hero: Hero={
  id:1,
  name:"windstorm"
}


// selectedHero:Hero

onSelect(hero: Hero){
  this.selectedHero=hero
  console.log(hero)
  // this.selectedHero=hero
}





}
