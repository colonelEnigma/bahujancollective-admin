import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from "../story.service";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  allStories:any = [];
  constructor(private storyService: StoryService, private router: Router) { 
    this.storyService.getAllStories().subscribe(res => {
      console.log("soties..", res);
      this.allStories = res;
    })
  }

  ngOnInit(): void {
  }

  goToStory(article: any){
    // this.storyService.setCLickedStoryObj(article);
    localStorage.setItem('storyid', article._id)
    this.router.navigateByUrl('/component/story-details');
  }
}
