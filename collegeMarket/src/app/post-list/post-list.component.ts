import { Component, Input } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [PostComponent, NgFor],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  @Input() posts: any[] = [];
  @Input() thread: any;

  // Adds a new post
  addPost(content: string) {
    if (content.trim() === '') return;
    this.thread.posts.push({ content });
  }
}
