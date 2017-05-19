import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import { HeroService } from "app/hero.service";
import {Router} from "@angular/router";
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService,private router:Router) {
    
  }
  ngOnInit(): void {
     this.getHeroes();
  }
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  };
  selectedHero : Hero;
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

}

