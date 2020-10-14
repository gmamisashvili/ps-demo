import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

    originalUserSettings:UserSettings={
      name:null,
      emailOffers:null,
      interfaceStyle:null,
      subscriptionType:null,
      notes:null
    }

    userSettings:UserSettings={...this.originalUserSettings}
    postError = false;
    postErrorMessage = '';

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  onBlur(field:NgModel){
    console.log('in onBlur', field.valid)
  }

  onHttpError(errorResponse:any){
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.message;
    
  }

  onSubmit(form:NgForm){
    console.log('in onSubmit: ',form.valid);
    if(form.valid){
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result=>console.log('succsess: ', result),
      error=>this.onHttpError(error)
    )
  }
  else {
    this.postError= true;
    this.postErrorMessage = 'Please make valid form'
  }
  }
 

}
