import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ThreadComponent } from '../thread/thread.component';

@Component({
  selector: 'app-thread-list',
  imports: [NgFor, ThreadComponent],
  templateUrl: './thread-list.component.html',
  styleUrl: './thread-list.component.css'
})
export class ThreadListComponent {
  @Input() threads: any[] = [];
}
