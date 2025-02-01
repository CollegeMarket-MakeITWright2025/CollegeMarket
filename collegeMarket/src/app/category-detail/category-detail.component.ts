import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  categoryId: number = 0;
  items: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = +params.get('id')!; // Get the category ID from the URL
      this.loadItemsForCategory(this.categoryId);
    });
  }

  loadItemsForCategory(categoryId: number): void {
    // Placeholder logic to simulate fetching items based on category ID
    const allItems = [
      { id: 1, name: 'Book A', categoryId: 1 },
      { id: 2, name: 'Book B', categoryId: 1 },
      { id: 3, name: 'T-shirt', categoryId: 2 },
      { id: 4, name: 'Pants', categoryId: 2 },
    ];

    this.items = allItems.filter(item => item.categoryId === categoryId);
  }
}
