import { Component, signal } from '@angular/core';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
  public post=signal<any|null>(null)
  public postComments=signal<any|null>(null)
  constructor(
    private _route:ActivatedRoute,
    private _postService:PostService
  ){
    this.loadPost()
  }
 
  loadPost(){
    let idPost
    this._route.params.subscribe(params=>{
      idPost=params['id']
    })
    if(!idPost){
      this.post.set(null)
    }else{
      this._postService.getPost(idPost).subscribe({
        next:(response)=>{
          console.log(response)
          this.post.set(response)
        },
        error:(err:Error)=>{
          this.post.set(null)
          console.log(err)
        }
      })
    }
  }
}
