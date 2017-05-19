import { Component, OnInit } from '@angular/core';
import { HeroService } from "app/hero.service";
import { Hero } from "app/hero";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[];
  errorMessage:string;
  constructor(private heroService:HeroService) { }

  ngOnInit() {
      this.getTopHeroes();
  }
  getTopHeroes():void{
     this.heroService.getHeroes().subscribe(heros => this.heroes = heros.slice(1,3),
                                            error => this.errorMessage = <any>error);
     //.then(heroes => this.heroes = heroes.slice(1,3));
  }

}
