import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import {  MatFormFieldControl } from '@angular/material/form-field';



interface Mentor {
  _id: Number;
  email: String,
  civility: String,
  first_name: String,
  last_name: String,
  company: {},
  user_status: String,
  count_number: Number,
}

@Component({
  selector: 'app-mentorlist',
  templateUrl: './mentorlist.component.html',
  styleUrls: ['./mentorlist.component.scss'],
  providers: [
  ]
})
export class MentorlistComponent implements OnInit {

  // version = VERSION;

  mentors: any = []
  email: string = ''
  constructor(public httpClient: HttpClient, public dialog: MatDialog){

  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent,{
      data:{
        message: 'HelloWorld',
        email: this.email,
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }

  ngOnInit(){
    this.httpClient.get("assets/mentor.json").subscribe(data =>{
      this.mentors = data;
    })
  }

  displayedColumns: string[] = ['name', 'user_type', 'entity', 'user_status', 'actions'];
  dataSource = this.mentors;


}
