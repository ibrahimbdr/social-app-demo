import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostObj } from '../models/post-obj';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  postsArr: PostObj[] = [];
  constructor() {
    this.postsArr = [
      {id:'1', post: "Here's a small text description for the card content. Nothing more, nothing less."},
      {id:'2', post: "Here's a small text description for the card content. Nothing more, nothing less."},
      {id:'3', post: "Here's a small text description for the card content. Nothing more, nothing less."},
      {id:'4', post: "Here's a small text description for the card content. Nothing more, nothing less."},
      {id:'5', post: "Here's a small text description for the card content. Nothing more, nothing less."},
    ]

  }

  likePost(id: any){

  }

  commentPost(id: any){

  }

  editPost(id: any){

  }

}
