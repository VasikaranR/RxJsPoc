import { NgModule } from '@angular/core';
import { MatButtonModule, MatDividerModule, MatIconModule, MatSidenav, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombineAllComponent } from './observables/observables.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { CombineComponent } from './combine/combine.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatALLComponent } from './concat-all/concat-all.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';

@NgModule({
  declarations: [
    AppComponent,
    CombineAllComponent,
    CustomObservableComponent,
    CombineComponent,
    CombineLatestComponent,
    ConcatComponent,
    ConcatALLComponent,
    ForkJoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
