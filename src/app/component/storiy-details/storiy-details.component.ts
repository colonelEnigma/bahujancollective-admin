import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-storiy-details',
  templateUrl: './storiy-details.component.html',
  styleUrls: ['./storiy-details.component.scss']
})
export class StoriyDetailsComponent implements OnInit {
  storyDetailsObj: any = {};
  storyid: any = "";
  registrationId: any = [];
  additionalDetailsId: any = [];
  registrationDetails: any = {};
  additionalDetails: any = {};
  dataLoaded: Promise<boolean>;
  // promiseRegDetails: any;
  // promiseAdditionalDetails: any;

  constructor(private storyService: StoryService) {
    this.storyid = localStorage.getItem('storyid');
  }

  ngOnInit(): void {
    this.getStoryDetails();
  }

  getStoryDetails() {
    this.storyService.getStoryById(this.storyid).subscribe(res => {
      this.storyDetailsObj = res;
      console.log("story..", this.storyDetailsObj);
      this.registrationId = this.storyDetailsObj.registration[0];
      this.additionalDetailsId = this.storyDetailsObj.aditionalDetails[0];
      this.getRegistrationDetails();
    });
  }

  getRegistrationDetails() {
    this.storyService.getRegistrationById(this.registrationId).subscribe(res => {
      this.registrationDetails = res;
      this.getAdditionalDetailsById();
    });
  }

  getAdditionalDetailsById() {
    this.storyService.getAdditionalDetailsById(this.additionalDetailsId).subscribe(res => {
      this.additionalDetails = res;
      this.dataLoaded = Promise.resolve(true);
    });
  }

}
