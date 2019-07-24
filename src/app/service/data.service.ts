import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
// import { Observable, BehaviorSubject } from 'rxjs';
// import 'rxjs/operator/map';
// import 'rxjs/operators/switchMap';
// import 'rxjs/operator/debounceTime';
// import 'rxjs/operator/add/distinctUntilChanged';
// import { Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';

import { mergeMap, switchMap, retry,
  map, catchError, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public db: AngularFirestore) {}

  getAvatars() {
      return this.db.collection('/business-list').valueChanges();
  }

  getBusiness(businessKey) {
    return this.db.collection('business-list').doc(businessKey).snapshotChanges();
  }

  updateBusiness(businessKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('business-list').doc(businessKey).set(value);
  }

  deleteBusiness(businessKey) {
    return this.db.collection('business-list').doc(businessKey).delete();
  }

  getBusinesses() {
    return this.db.collection('business-list').snapshotChanges();
  }

  searchBusiness(searchValue) {
    return this.db.collection('business-list', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

  searchBusinessByAge(value) {
    return this.db.collection('business-list', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }

  createBusiness(value) {
    return this.db.collection('business-list').add({
      businessName: value.businessName,
      nameToSearch: value.businessName.toLowerCase(),
      category: value.category,
      description: value.description,
      province: value.province,
      ville: value.ville,
      commune: value.commune,
      adress: value.adress,
      telephone: value.telephone,
      email: value.email,
      website: value.website,
      publicationDate: value.publicationDate,
      // age: parseInt(value.age),
      // tslint:disable-next-line: object-literal-shorthand
      // image: image
    });
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFIleName = Date.now().toString();
        const upload = firebase.storage().ref().child('business-list/' + almostUniqueFIleName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => {
          console.log('Chargement...');
        },
        (error) => {
          console.log('Erreur de chargement: ' + error);
          reject();
        },
        () => {
          resolve(upload.snapshot.ref.getDownloadURL);
        }
        );
      }
    );
  }

  // getSearchBusiness(start: BehaviorSubject<string>): Observable<any[]> {
  //   return start
  //     .switchMap(startText => {
  //       const endText = startText + '\uf8ff';
  //       return this.db
  //         .collection('business-list', ref =>
  //           ref
  //             .orderBy('businessName')
  //             .limit(10)
  //             .startAt(startText)
  //             .endAt(endText)
  //         )
  //         .snapshotChanges()
  //         .debounceTime(200)
  //         .distinctUntilChanged()
  //         .map(changes => {
  //           return changes.map(c => {
  //             console.log(c);
  //             const data = c.payload.doc.data();
  //             const id = c.payload.doc.id;
  //             return { id, ...data };
  //           });
  //         });
  //     });
  // }

}
