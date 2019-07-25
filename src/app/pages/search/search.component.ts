import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { timer, combineLatest } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

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

  results: Observable<any[]>;

  offset = new Subject<string>();

  // tslint:disable-next-line: no-inferrable-types
  searchValue: string = '';
  items: Array<any>;
  nameSearchItems: Array<any>;

  constructor(private afs: AngularFirestore, private data: DataService) {

  }

  ngOnInit() {
    // this.getallBusiness().subscribe((clubs) => {
    //   this.allBusiness = clubs;
    // });
    // combineLatest(this.startobs, this.endobs).subscribe((value) => {
    //   this.firequery(value[0], value[1]).subscribe((clubs) => {
    //     this.business = clubs;
    //   });
    // });

    this.getData();
  }

  // search($event) {
  //   const q = $event.target.value;
  //   if (q !== '') {
  //     this.startAt.next(q);
  //     this.endAt.next(q + '\uf8ff');
  //   } else {
  //     this.business = this.allBusiness;
  //   }
  // }

  // firequery(start, end) {
  //   return this.afs.collection('business-list', ref => ref.limit(4).orderBy('businessName').startAt(start).endAt(end)).valueChanges();
  // }

  // getallBusiness() {
  //   return this.afs.collection('business-list', ref => ref.orderBy('businessName')).valueChanges();
  // }

  getData() {
    this.data.getBusinesses()
    .subscribe(result => {
      this.items = result;
      this.nameSearchItems = result;
    });
  }

  searchByName() {
    const value = this.searchValue.toLowerCase();
    this.data.searchBusiness(value)
    .subscribe(result => {
      this.nameSearchItems = result;
      this.items = this.combineLists(result, this.nameSearchItems);
    });
  }

  combineLists(a, b) {
    const result = [];
    a.filter(x => {
      return b.filter(x2 => {
        if (x2.payload.doc.id === x.payload.doc.id) {
          result.push(x2);
        }
      });
    });
    return result;
  }

  search() {
    return this.offset.pipe(
      filter(val => !!val), // filter empty strings
      switchMap(offset => {
        return this.afs.collection('business-list', ref =>
          ref.orderBy(`searchableIndex.${offset}`).limit(5)
        )
        .valueChanges();
      })
    );
  }

  onkeyup(e) {
    this.offset.next(e.target.value.toLowerCase());
  }

}
