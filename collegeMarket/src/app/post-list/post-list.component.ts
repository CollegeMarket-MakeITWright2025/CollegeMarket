import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  imports: [],
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
