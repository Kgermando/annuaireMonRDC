import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-forms',
  templateUrl: './edit-forms.component.html',
  styleUrls: ['./edit-forms.component.scss']
})
export class EditFormsComponent implements OnInit {

  businessForm: FormGroup;
  item: any;

  validation_messages = {
   'name': [
     { type: 'required', message: 'Name is required.' }
   ],
   'surname': [
     { type: 'required', message: 'Surname is required.' }
   ],
   'age': [
     { type: 'required', message: 'Age is required.' },
   ]
 };

  constructor(
    public data: DataService,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      // tslint:disable-next-line: no-string-literal
      const data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    });
  }

  createForm() {
    this.businessForm = this.formbuilder.group({
      businessName: ['', Validators.required ],
      category: ['', Validators.required ],
      description: ['', Validators.required ],
      province: ['', Validators.required ],
      ville: ['', Validators.required ],
      commune: ['', Validators.required ],
      adress: ['', Validators.required ],
      telephone: ['', Validators.required ],
      email: ['', Validators.required ],
      website: ['', Validators.required ],
      publicationDate: ['', Validators.required ]
    });
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(AvatarDialogComponent, {
  //     height: '400px',
  //     width: '400px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result){
  //       this.item.avatar = result.link;
  //     }
  //   });
  // }

  onSubmit(value) {
    value.avatar = this.item.avatar;
    value.age = Number(value.age);
    this.data.updateBusiness(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/layout/forms-list']);
      }
    );
  }

  delete() {
    this.data.deleteBusiness(this.item.id)
    .then(
      res => {
        this.router.navigate(['/layout/forms-list']);
      },
      err => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['/layout/forms-list']);
  }

}
