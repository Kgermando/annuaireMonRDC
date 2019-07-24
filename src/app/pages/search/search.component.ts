import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  business$: Observable<any[]>;
  startAt: BehaviorSubject<string | null> = new BehaviorSubject('');

  constructor(
    public data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.business$ = this.data
    //   .getSearchBusiness(this.startAt);
  }

  // search(searchText) {
  //   this.startAt.next(searchText);
  // }

}
