import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES  } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes=HEROES
  selectedHero?: Hero

hero: Hero={
  id:1,
  name:"windstorm"
}


// selectedHero:Hero

onSelect(hero: Hero){

  console.log(hero)
  // this.selectedHero=hero
}





}
