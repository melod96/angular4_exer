import { Component, OnInit } from '@angular/core';

// hero interface import
import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes : Hero[];

  selectedHero : Hero;

  // 영웅을 선택하는 함수 생성
  onSelect(hero:Hero) : void {
    this.selectedHero = hero;
  }

  // heroService를 통해 데이터 가져오는 함수 추가 
  getHeroes() : void {
    this.heroes = this.heroService.getHeroes();
  }

  // 생성자에 heroService 매개변수 추가
  constructor(private heroService : HeroService) { }
  
  ngOnInit(): void {
    // 진입과 함께 호출되도록 추가
    this.getHeroes();
  }

}
