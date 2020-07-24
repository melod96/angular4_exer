import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes : Routes = [
  // 입력한 URL에 맞는 컴포넌트를 매핑
  { path : 'heroes', component : HeroesComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
