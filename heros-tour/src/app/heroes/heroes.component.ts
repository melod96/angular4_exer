import { Component, OnInit } from '@angular/core';

// hero interface import
import { Hero } from '../hero';

// hero 데이터 처리하는 service
import { HeroService } from '../hero.service';

// message 
import { MessageService } from '../message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero : Hero;
  heroes : Hero[];

  // 영웅을 선택하는 함수 생성
  onSelect(hero:Hero) : void {
    this.selectedHero = hero;
    // n번 id의 히어로를 조회하고 있다는 메세지 등록
    this.messageService.add(`HeroesComponent : Selected hero id = ${hero.id}`);
  }
  
  // heroService를 통해 데이터 가져오는 함수 추가 
  getHeroes() : void {
    // subscribe : 데이터 가져오는동안 대기하게끔 observer에 알리는 역할
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // 생성자에 heroService 매개변수 추가
  constructor(
    private heroService : HeroService
    , private messageService : MessageService
  ) { }
  
  ngOnInit(): void {
    // 진입과 함께 호출되도록 추가
    this.getHeroes();
  }

}
