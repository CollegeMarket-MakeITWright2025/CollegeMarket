import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thread-list',
  imports: [],
  templateUrl: './thread-list.component.html',
  styleUrl: './thread-list.component.css'
})
export class ThreadListComponent {
  @Input() threads: any[] = [];
}
