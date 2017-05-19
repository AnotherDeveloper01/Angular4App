import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { HeroService } from "app/hero.service";
import { Hero } from "app/hero";


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  errorMessage:string;
  heroes:Hero[];
  mode="Test";
  constructor(private heroService:HeroService) { }

  ngOnInit() {
     this.getHeroes();
  }
  getHeroes(){
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().subscribe(
        heroes => this.heroes = heroes,
        error => this.errorMessage = <any>error);
  }
  addHero(name:string){
    if(!name){return;}
    this.heroService.createName(name)
                  .subscribe(hero => this.heroes.push(hero),
                  error => this.errorMessage = <any>error);
  }

}
