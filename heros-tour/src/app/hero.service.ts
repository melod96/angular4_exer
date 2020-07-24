// hero 관련 데이터 처리를 하는 service
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// 데이터를 가져오는 동안 UI를 중지시키는 등의 역할을 함
import { Observable, of, ObservableLike } from 'rxjs';

// 중지되었을 때 노출할 메세지 관련 servie
import { MessageService } from './message.service';

@Injectable({
  /* 범위를 root로 하면 Angular는 하나의 공유 인스턴스 HeroService를 만들고 
    요청하는 모든 클래스에 주입한다.
    제공자를 메타 데이터에 등록하면 Angular는 서비스가 사용되지 않는 경우
    해당 서비스를 제거하여 앱을 최적화 할 수 있다.
  */
  providedIn: 'root'
})
export class HeroService {
  constructor(
    // 생성자에 추가
    private messageService : MessageService
  ) { }

  // Hero[]를 리턴하는 함수 생성
  // rxjs - Observable : 데이터를 가져오는 동안 UI를 중지시키고 대기하도록 함
  getHeroes() : Observable<Hero[]> {
    // 데이터를 불러오고 있다는 메세지 등록
    this.messageService.add('HeroService : fetched heroes');
    return of(HEROES);
  }

  getHero(id : number) : Observable<Hero> {
    this.messageService.add(`HeroService : fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
