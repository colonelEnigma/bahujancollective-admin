import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ApiPaths } from "../enums";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  baseUrl = environment.baseUrl;
  // clickedStory: Object = {};

  constructor(private http: HttpClient) { }

  public getAllStories() {
    console.log("get all storiess");
    
    let urlPath = `${this.baseUrl}${ApiPaths.Story}/`;
    return this.http.get(urlPath);
  }

  public getStoryById(storyId: string) {
    let urlPath = `${this.baseUrl}${ApiPaths.StoryById}?id=${storyId}`;
    return this.http.get(urlPath);
  }

  public getRegistrationById(regId: string) {
    let urlPath = `${this.baseUrl}${ApiPaths.RegistartionById}?id=${regId}`;
    return this.http.get(urlPath);
  }

  public getAdditionalDetailsById(regId: string) {
    let urlPath = `${this.baseUrl}${ApiPaths.AdditionalDetailsById}?id=${regId}`;
    return this.http.get(urlPath);
  }


  // setCLickedStoryObj(obj: any) {
  //   this.clickedStory = obj;
  // }

  // getClickedStory() {
  //   return this.clickedStory;
  // }

}
