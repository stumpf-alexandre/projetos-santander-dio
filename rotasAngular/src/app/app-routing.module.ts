import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch: 'full'},
  //portfolio
  //portfolio/id
  //portfolio/1?name=alexandre&token=123
  {path: 'portfolio', component: CardComponent, children: [
    {path:':id', component: CardComponent, pathMatch: 'prefix'},
    {path: 'id/:token', component: CardComponent},
  ]},
  //rota coringa leva para onde for caso não tenha uma rota especificada
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
