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

  // Function to extract hashtags from content
  extractHashtags(content: string): string[] {
    const regex = /#(\w+)/g; // Regex to find hashtags
    const matches = content.match(regex);
    return matches ? matches.map(tag => tag.trim()) : [];
  }

  // Adds a new post with hashtags
  addPost(content: string, hashtagInput: string) {
    if (content.trim() === '') return;

    // Process user-entered hashtags (or extract from content)
    const hashtags = hashtagInput ? hashtagInput.split(' ').map(tag => `#${tag.replace(/#/g, '')}`) : [];

    this.thread.posts.push({ content, hashtags });
  }
}
