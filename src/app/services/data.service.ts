import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
// import { collection } from '@firebase/collection';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  createPost() {

  }

  getPosts() {
    // const postsRef = collection()
  }

  likePost(id: any){

  }

  commentPost(id: any){

  }

  editPost(id: any){

  }

}
