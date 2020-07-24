// hero 관련 데이터 처리를 하는 service
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// 데이터를 가져오는 동안 UI를 중지시키는 등의 역할을 함
import { Observable, of, ObservableLike } from 'rxjs';

// 중지되었을 때 노출할 메세지 관련 servie
import { MessageService } from './message.service';

// HttpClient 통신 관련 - 데이터를 API 통신으로 가져오는 경우 예시
import { HttpClient, HttpHeaders } from '@angular/common/http';

// 에러 처리 관련
import { catchError, map, tap } from 'rxjs/operators';

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
    private messageService : MessageService,
    private http : HttpClient
  ) { }

  // Hero[]를 리턴하는 함수 생성
  // rxjs - Observable : 데이터를 가져오는 동안 UI를 중지시키고 대기하도록 함

  getHeroes() : Observable<Hero[]> {
    // 데이터를 불러오고 있다는 메세지 등록
    // this.log('HeroService : fetched heroes');
    // return of(HEROES);

    // http통신 후 json 객체로 데이터 반환
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes',[]))
      );
  }

  getHero(id : number) : Observable<Hero> {
    // this.log(`HeroService : fetched hero id = ${id}`);
    // return of(HEROES.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id = ${id}`)),
      catchError( this.handleError<Hero>(`getHero id=${id}`))
    )
  }

  // 중복되는 내용 log로 묶어서 실행
  private log( message : string ) {
    this.messageService.add(`HeroService : ${message}`);
  }

  // HttpClient 테스트를 할 URL
  private heroesUrl = 'api/heroes';

  // Error 핸들링 관련 함수
  private handleError<T>(operation = 'operation', result?: T) {
    return (error : any) :Observable<T> => {
      console.error(error);
      this.log(`${operation} failed : ${error.message}`);
      return of (result as T) ;
    }
  }

  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  };

  // 업데트 함수
  updateHero(hero : Hero) : Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id =${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  addHero(hero : Hero) : Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero : Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero : Hero | number) : Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deletehero'))
    );
  }

  searchHeroes(term : string) : Observable<Hero[]> {
    if ( !term.trim() ) {
      return of([]);
    }

    return this.http.get<Hero[]> (`${this.heroesUrl}/?name=${term}`).pipe(
      tap( x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`) ),
        catchError(this.handleError<Hero[]>('searchheroes', []))
    );
  }


}
