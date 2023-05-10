import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { invokePersonsAPI } from 'src/app/state/people/people.actions';
import { selectBooks } from 'src/app/state/people/people.selectors';
import { DialogContentExampleDialog as AddPersonDialog } from './add-person/add-person-dialog.component';
import { PersonOutputDto } from 'src/app/models/person-output-dto';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName','organisationName'];

  dataSource: PersonOutputDto[] = [];

  pageSize: number;
  pageNo: number;
  totalCount: number;


  constructor(private store: Store, public dialog: MatDialog, private snackBar: MatSnackBar) {

    const initialPage: PageEvent = { pageSize: 10, pageIndex: 0, length: 10, previousPageIndex: 0 };

    this.pageSize = initialPage.pageSize;
    this.pageNo = initialPage.pageIndex;
    this.totalCount = initialPage.length;

    this.store.pipe(select(selectBooks)).subscribe(x => {
      this.dataSource = x
    });
  }

  ngOnInit(): void {
    this.store.dispatch(invokePersonsAPI());
  }

  onAddPersonClick() {
    const dialogRef = this.dialog.open(AddPersonDialog,{
      width: '600px',
    });

    dialogRef.componentInstance.onAdd.subscribe(data => {
      this.snackBar.open("New Person added",undefined, {duration: 3000});
    })
  }

  pageEvents(event: PageEvent) {
    //this.store.dispatch(getPeopleDataSourcePagedAction({ page: event }));
    //this.store.dispatch(getTotalCountAction());
  }
}
