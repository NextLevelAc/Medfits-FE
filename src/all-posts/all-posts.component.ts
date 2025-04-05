import { Component } from '@angular/core';
import { PostDataService } from '../post-data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-all-posts',
  imports: [NgIf, NgFor],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
export class AllPostsComponent {

  posts: any[] = [];
  deletedResponse: any[] = [];

  constructor(private getAllPostsService: PostDataService) { }

  getAllPosts() {
    this.getAllPostsService.getAllPosts().subscribe({
      next: (response) => {
        console.log('Data submitted successfully:', response);
        this.posts = response;
      },
      error: (err) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('GET request completed!');
      }
    });
  }

  deletePost(postId: string) {
    this.getAllPostsService.deletePostById(postId).subscribe({
      next: (response) => {
        console.log("response: ", response);
        console.log(`Post with ID ${postId} deleted successfully.`);
        this.posts = this.posts.filter(x => x._id !== postId);
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    })
  }

}
