import { NgModule } from '@angular/core';
import { MatButtonModule, MatDividerModule, MatIconModule, MatSidenav, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombineAllComponent } from './observables/observables.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    CombineAllComponent,
    CustomObservableComponent
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
