import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes : Routes = [
  // 입력한 URL에 맞는 컴포넌트를 매핑
  { path : '', redirectTo : '/dashboard', pathMatch : 'full' },
  { path : 'heroes', component : HeroesComponent },
  { path : 'dashboard', component : DashboardComponent },
  { path : 'detail/:id', component : HeroDetailComponent }
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
