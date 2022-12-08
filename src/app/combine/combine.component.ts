import { Component, OnInit } from '@angular/core';
import {take,combineLatestAll, map} from 'rxjs';
import { interval } from 'rxjs';


const source$=interval(1000).pipe(take(2));

const example$ = source$.pipe(
  map(val =>
    interval(1000).pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  )
);
example$.pipe(combineLatestAll()).subscribe(console.log)



@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.scss']
})
export class CombineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
