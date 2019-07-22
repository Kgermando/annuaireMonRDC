import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-forms',
  templateUrl: './add-forms.component.html',
  styleUrls: ['./add-forms.component.scss']
})
export class AddFormsComponent implements OnInit {


  businessForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;


  selectedCategory: any = ['Finance', 'Commerce', 'Industrie',
                        'Hydrocarbure', 'Telecommunication', 'Medical', 'Hotelerie', 'Transport', 'Autres'];
  selectedProvince: any = ['Bas-Uele',	'Équateur',	'Haut-Katanga',	'Haut-Lomami',	'Haut-Uele',
                    'Ituri	Kasaï',	'Kasaï-Central',	'Kasaï-Oriental',	'Kinshasa',	'Kongo-Central',
                    'Kwango',	'Kwilu ',	'Lomami',	'Lualaba ',	'Mai-Ndombe', 'Maniema', 'Mongala', 'Nord-Kivu',
                    'Nord-Ubangi',	'Sankuru ',	'Sud-Kivu',	'Sud-Ubangi',	'Tanganyika',	'Tshopo',	'Tshuapa'];


constructor(private formbuilder: FormBuilder,
            private dataService: DataService,
            private router: Router) { }

  ngOnInit() {
    this.createForm();
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

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.dataService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

  resetFields() {
    this.businessForm = this.formbuilder.group({
      businessName: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl(''),
      province: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      commune: new FormControl(''),
      adress: new FormControl(''),
      telephone: new FormControl(''),
      email: new FormControl(''),
      website: new FormControl(''),
      publicationDate: new FormControl('')
    });
  }

  onSubmit(value) {
    this.dataService.createBusiness(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/layout/forms-list']);
      }
    );
  }


}
