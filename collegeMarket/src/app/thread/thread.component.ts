import { Component, Input } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-thread',
  imports: [PostListComponent],
  templateUrl: './thread.component.html',
  styleUrl: './thread.component.css'
})
export class ThreadComponent {
  @Input() posts: any;
  @Input() thread: any;
}
