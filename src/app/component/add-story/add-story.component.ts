import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, Form } from "@angular/forms";

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  addNewStoryForm: FormGroup;

  // addNewStoryForm: new FormGroup()
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.addNewStoryForm = this.fb.group({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.required),
      about: this.fb.group({
        title: new FormControl(''),
        description: new FormControl(''),
        startDate: new FormControl(''),
        endDate: new FormControl(''),
        subDescription: new FormControl(''),
        note: new FormControl(''),
      }),
      registration: this.fb.group({
        title: new FormControl(''),
        events: this.fb.array([
          // new FormGroup({
          //   title: new FormControl(''),
          //   regisrationStatus: new FormControl(''),
          //   startDateTime: new FormControl(''),
          //   endDateTime: new FormControl(''),
          //   topics: new FormControl(''),
          //   host: new FormControl(''),
          //   coach: new FormControl(''),
          //   link: new FormControl(''),
          // })
        ])
      }),
      aditionalDetails: this.fb.group({
        lable: new FormControl(''),
        points: this.fb.array([
          new FormControl('')
        ]),
      }),
    })
  }


  /**
   * for events
   */

  get events(): FormArray {
    return this.addNewStoryForm.get('registration.events') as FormArray;
  }

  addEvents() {
    this.events.push(
      new FormGroup({
        title: new FormControl(''),
        regisrationStatus: new FormControl(''),
        startDateTime: new FormControl(''),
        endDateTime: new FormControl(''),
        topics: this.fb.array([
          new FormControl('')
        ]),
        host: new FormControl(''),
        coach: new FormControl(''),
        link: new FormControl(''),
      })
    );
  }

  delInput(indx: any) {
    this.events.removeAt(indx);
  }

  /**
   * for additonal details
   */
  get points(): FormArray {
    return this.addNewStoryForm.get('aditionalDetails.points') as FormArray;
  }

  addPoints() {
    this.points.push(new FormControl(''));
  }

  delPoint(indx: any) {
    this.points.removeAt(indx);
  }


  /**
 * for additonal details
 */

  topics(indx: number): FormArray {
    return this.events.at(indx).get('topics') as FormArray;
  }

  addTopics(eventIndx: number){
    this.topics(eventIndx).push(new FormControl(''));
  }

  delTopic(eventIndx: number, topicIndx: number){
    this.topics(eventIndx).removeAt(topicIndx);
  }

  // topics(indx: number): FormArray {
  //   // return this.addNewStoryForm.get('registration.events.topics') as FormArray;
  //   // return this.events.get('topics') as FormArray;
  //   return this.events.at(indx).get('topics') as FormArray;
  // }



  // addTopic(indx: number) {
  //   // const frmArr = this.events.controls[0].get('topics') as FormArray
  //   this.topics(indx).push(new FormControl(''));
  //   // frmArr.push(
  //   //   new FormControl('')
  //   // )
  // }

  // delTopic(indx: any) {
  //   // this.topics.removeAt(indx);
  // }




  onSubmit() {
    console.warn(this.addNewStoryForm.value);
  }

}
