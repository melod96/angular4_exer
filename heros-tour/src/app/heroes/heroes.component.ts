import { Component, OnInit } from '@angular/core';

// hero interface import
import { Hero } from '../hero';

// hero mok-data import
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes = HEROES;

  selectedHero : Hero;

  // 영웅을 선택하는 함수 생성
  onSelect(hero:Hero) : void {
    this.selectedHero = hero;
  }

  constructor() { }
  
  ngOnInit(): void {
  }

}
