import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  email: string;
}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent  {
  email: string= ''
  first_name: string=''
  last_name: string=''
  civility: string=''
  selectedEntity: string= ''
  selectedCompany: string= ''
  selectedUserType: string= ''
  cancelButtonText = 'Cancel'
  submitButtonText = 'Submit'
  selected = 'option2';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddDialogComponent>, public dialog: MatDialog) { 
      if(data) {
        this.email = data.email || this.email;
        this.first_name = data.first_name || this.first_name;
        this.last_name = data.last_name || this.last_name;
        this.civility = data.civility || this.civility;
        this.selectedEntity = data.selectedEntity || this.selectedEntity;
        this.selectedCompany = data.selectedCompany || this.selectedCompany;
        this.selectedUserType = data.selectedUserType || this.selectedUserType;
        if(data.buttonText) {
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
          console.log(this.email)
        }
      }
      this.dialogRef.updateSize('300vw', '300vw')
    }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  submit() {
    console.log(this.data)
  }

}

export class AddDialogComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

