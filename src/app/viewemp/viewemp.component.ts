import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.scss']
})
export class ViewempComponent implements OnInit {
  displayedColumns: string[] = ['empname', 'empcode', 'age', 'klang', 'pcomp', 'date', 'psal', 'actions'];
  dataSource!: MatTableDataSource<any>;

  constructor(private getempdata: EmpService) { }
  empdata: any;
  ngOnInit(): void {
    this.getempdata.getemp().subscribe(data => {


      this.dataSource = new MatTableDataSource(data);


    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmp(id: number) {
    console.log(id);
    this.getempdata.del(id).subscribe({
      next: (res) => {
        alert("EMP Deleted");
        window.location.reload();
      },
      error: (res) => {
        alert("Error in Deleting");
      }
    });
  }
}

