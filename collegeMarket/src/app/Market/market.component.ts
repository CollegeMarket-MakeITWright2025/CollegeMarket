import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-market',
  imports: [CommonModule, RouterLink],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})


export class MarketComponent  implements OnInit{
  title: string= "College Market";
  
    categories = [
      {
        id: 1,
        name: 'Books',
        description: 'Buy and sell textbooks, novels, and more.',
        image: 'https://media.istockphoto.com/id/1464137866/vector/group-of-raised-people-hands-holding-books.jpg?s=2048x2048&w=is&k=20&c=TnCAeHDA0b7NSwIS6SSbRY64DM0ncppCJvX8tC-Yz3g='
      },
      {
        id: 2,
        name: 'Clothes',
        description: 'Find trendy clothes and accessories.',
        image: 'https://media.istockphoto.com/id/889023692/vector/warm-casual-clothes-for-men-vector-icons.jpg?s=2048x2048&w=is&k=20&c=_DGvYo8qpk1DZPLA1ZUMsUyLANvhbA1YRql0SsYihUU='
      },
      {
        id: 3,
        name: 'Dorm Items',
        description: 'Furniture, decor, and essentials for your dorm.',
        image: 'https://media.istockphoto.com/id/1463321093/photo/teenagers-room-with-lights-pictures-on-wall.jpg?s=2048x2048&w=is&k=20&c=On0TIjQA7ZniojYUWZF183Lds9Ys3XXZtzhfFV04HD8='
      },
      {
        id: 4,
        name: 'Services',
        description: 'Tutoring, repairs, and other student provided services.',
        image: 'https://media.istockphoto.com/id/1383890701/photo/teacher-focuses-on-her-student.jpg?s=2048x2048&w=is&k=20&c=I1j7Lp37BUqAwazBf3uZLLchvkOlhE-vxowMFPQyTWE='
      },
      {
        id: 5,
        name: 'Miscellaneous',
        description: 'All sorts of other student needs.',
        image: 'https://media.istockphoto.com/id/1044672050/photo/businessman-with-many-hands-in-elegant-suit-working-with-paper-document-contract-folder.jpg?s=2048x2048&w=is&k=20&c=_XHR03Fyrl367fYXOpHXC5_lcCJLHwy37ZOtn18Jx78='
      }
    ];
  
    constructor() {}
  
    ngOnInit(): void {}
  }

