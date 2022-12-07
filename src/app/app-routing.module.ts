import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { CombineAllComponent } from './observables/observables.component';

const routes: Routes = [
  {path:'Observables',component:CombineAllComponent},
  {path:'customObservables',component:CustomObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
