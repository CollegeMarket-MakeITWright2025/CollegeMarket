import { Component } from '@angular/core';
import { ThreadListComponent } from '../thread-list/thread-list.component';
@Component({
  selector: 'app-forum',
  imports: [ThreadListComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css',
})
export class ForumComponent {
  threads = [
    { id: 1, title: 'Welcome to the Forum', category: 'General', posts: [] },
    { id: 2, title: 'Tutoring Help', category: 'Tutoring', posts: [] },
    { id: 3, title: 'Career Advice', category: 'Career Hub', posts: [] }
  ];

  // Adds a new thread
  addThread(title: string, category: string) {
    if (title.trim() === '' || category.trim() === '') return;
    const newThread = { id: this.threads.length + 1, title, category, posts: [] };
    this.threads.push(newThread);
  }
}
