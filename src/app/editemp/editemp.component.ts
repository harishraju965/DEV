import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from '../services/emp.service';
import { FormGroup, FormBuilder, Validator, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.scss']
})
export class EditempComponent implements OnInit {

  empid: any;

  data: any;

  addemp = this.fb.group({
    empname: ['', Validators.required],
    empcode: ['', Validators.required],
    age: [''],
    klang: [''],
    pcomp: [''],
    date: [''],
    psal: ['']
  });

  edata: any;
  empsave: any;




  constructor(private route: ActivatedRoute, private empserv: EmpService, private fb: FormBuilder) { }


  langs: any[] = ["PHP", "Java", ".NET", "Angular", "React"];



  ngOnInit(): any {

    this.empid = this.route.snapshot.paramMap.get("id");
    // console.log(this.empid);
    this.empserv.getSingleEmpData(this.empid).subscribe(data => {
      this.edata = data;
      // console.log(this.edata.empname);
      if (this.edata) {

        this.addemp.controls['empname'].setValue(this.edata.empname);
        this.addemp.controls['empcode'].setValue(this.edata.empcode);
        this.addemp.controls['age'].setValue(this.edata.age);
        this.addemp.controls['klang'].setValue(this.edata.klang);
        this.addemp.controls['pcomp'].setValue(this.edata.pcomp);
        this.addemp.controls['date'].setValue(this.edata.date);
        this.addemp.controls['psal'].setValue(this.edata.psal);

      }
    });



  }

  update_emp() {
    this.empserv.updateemp(this.addemp.value, this.edata.id).subscribe({
      next: (res: any) => {
        // console.log(res);
        alert("Data updated");
      },
      error: (err: any) => {
        alert("Error Occured");
      }
    });
  }

}
