import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { timer, combineLatest } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchterm: string;

  startAt = new Subject();
  endAt = new Subject();

  business;
  allBusiness;

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.getallBusiness().subscribe((clubs) => {
      this.allBusiness = clubs;
    });
    combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((clubs) => {
        this.business = clubs;
      });
    });
  }

  search($event) {
    const q = $event.target.value;
    if (q !== '') {
      this.startAt.next(q);
      this.endAt.next(q + '\uf8ff');
    } else {
      this.business = this.allBusiness;
    }
  }

  firequery(start, end) {
    return this.afs.collection('business-list', ref => ref.limit(4).orderBy('businessName').startAt(start).endAt(end)).valueChanges();
  }

  getallBusiness() {
    return this.afs.collection('business-list', ref => ref.orderBy('businessName')).valueChanges();
  }

}
