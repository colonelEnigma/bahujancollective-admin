import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, Form } from "@angular/forms";
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  addNewStoryForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  private _success = new Subject<string>();
  private _error = new Subject<string>();

  // addNewStoryForm: new FormGroup()
  constructor(private fb: FormBuilder, private storyService: StoryService, private router: Router) { }


  ngOnInit(): void {
    
    this._success.subscribe(message => (this.successMessage = message));
    this._success.pipe(debounceTime(5000)).subscribe(() => (this.successMessage = null));

    this._error.subscribe(message => (this.errorMessage = message));
    this._error.pipe(debounceTime(5000)).subscribe(() => (this.errorMessage = null));

    this.addNewStoryForm = this.fb.group({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.required),
      about: this.fb.group({
        title: new FormControl('', Validators.required),
        description: new FormControl(''),
        startDate: new FormControl(''),
        endDate: new FormControl(''),
        subDescription: new FormControl(''),
        note: new FormControl(''),
      }),
      registration: this.fb.group({
        title: new FormControl(''),
        events: this.fb.array([
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

  public changeSuccessMessage() {
    this._success.next(`Page Added Successfully!`);
  }

  public changeErrorMessgae() {
    this._error.next(`Error While Adding Page!`);
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
        host: this.fb.array([
          new FormControl('')
        ]),
        coach: this.fb.array([
          new FormControl('')
        ]),
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
 * for event topics
 */

  topics(indx: number): FormArray {
    return this.events.at(indx).get('topics') as FormArray;
  }

  addTopics(eventIndx: number) {
    this.topics(eventIndx).push(new FormControl(''));
  }

  delTopic(eventIndx: number, topicIndx: number) {
    this.topics(eventIndx).removeAt(topicIndx);
  }


  /**
* for event hosts
*/

  hosts(indx: number): FormArray {
    return this.events.at(indx).get('host') as FormArray;
  }

  addHosts(eventIndx: number) {
    this.hosts(eventIndx).push(new FormControl(''));
  }

  delHost(eventIndx: number, hostIndx: number) {
    this.hosts(eventIndx).removeAt(hostIndx);
  }


  /**
* for event coach
*/

  coach(indx: number): FormArray {
    return this.events.at(indx).get('coach') as FormArray;
  }

  addCoach(eventIndx: number) {
    this.coach(eventIndx).push(new FormControl(''));
  }

  delCoach(eventIndx: number, coachIndx: number) {
    this.coach(eventIndx).removeAt(coachIndx);
  }


  onSubmit() {
    console.warn(this.addNewStoryForm.value);
    this.storyService.addStory(this.addNewStoryForm.value).subscribe((data: HttpResponse<any>) => {
      if(!data){
        this.changeErrorMessgae();
      }else{
        this.changeSuccessMessage();
        this.router.navigateByUrl('/component/stories');
      }
      console.log("hahaha,,,", data);
      
    });
  }

}
