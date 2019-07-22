import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/service/data.service';
import { switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: Observable<any[]>;

  offset = new Subject<string>();

  constructor(private afs: AngularFirestore, private data: DataService) {

  }

  // Form event handler
  onkeyup(e) {
    this.offset.next(e.target.value.toLowerCase());
  }

  // Reactive search query
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

  ngOnInit() {
    this.results = this.search();
  }

}
