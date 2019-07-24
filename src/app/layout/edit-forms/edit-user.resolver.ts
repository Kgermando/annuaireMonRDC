import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';


@Injectable()
export class EditUserResolver implements Resolve<any> {

  constructor(public data: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
      const userId = route.paramMap.get('id');
      this.data.getBusiness(userId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    });
  }
}
