import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { CombineComponent } from './combine/combine.component';
import { ConcatALLComponent } from './concat-all/concat-all.component';
import { ConcatComponent } from './concat/concat.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { CombineAllComponent } from './observables/observables.component';

const routes: Routes = [
  {path:'Observables',component:CombineAllComponent},
  {path:'customObservables',component:CustomObservableComponent},
  {path:'combineAll',component:CombineComponent},
  {path:'combineLatest',component:CombineLatestComponent},
  {path:'concat',component:ConcatComponent},
  {path:'concatAll',component:ConcatALLComponent},
  {path:'forkJoin',component:ForkJoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
