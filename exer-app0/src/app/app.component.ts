import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'exer-app0';
  hero : Hero = {
    id : 1,
    name : 'ironman'
  }
}

// id와 name을 관리할 수 있는 class 생성
// 기존 Java, C#의 Class처럼 extends로 상속이 가능하며, interface class나 abstract class도 사용 가능하다.

/* 주의사항 : 한 컴포넌트에 여러 Class를 넣을 때 @Component 바로 아래에 있는 Class가 주요 로직 Class가 되어야 한다.
  따라서 @Component '바로 아래'에는 주요 로직 Class가 오도록 해야한다.
  + 보통 Component에 로직 Class는 1개만 둔다.
*/
export class Hero {
  id : number;
  name : string;
}
