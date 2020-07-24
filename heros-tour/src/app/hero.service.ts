import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  /* 범위를 root로 하면 Angular는 하나의 공유 인스턴스 HeroService를 만들고 
    요청하는 모든 클래스에 주입한다.
    제공자를 메타 데이터에 등록하면 Angular는 서비스가 사용되지 않는 경우
    해당 서비스를 제거하여 앱을 최적화 할 수 있다.
  */
  providedIn: 'root'
})
export class HeroService {
  // Hero[]를 리턴하는 함수 생성
  getHeroes() : Hero[] {
    return HEROES;
  }

  constructor() { }
}
