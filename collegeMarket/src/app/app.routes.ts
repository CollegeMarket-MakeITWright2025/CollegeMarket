import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './Market/market.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { CareerComponent } from './career/career.component';
import { TutoringComponent } from './tutoring/tutoring.component';
import { ForumComponent } from './forum/forum.component';
import { NgModule } from '@angular/core';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { BooksComponent } from './books/books.component';



export const routes: Routes = [
    {
    path: '',
    title: "homepage",
    component: HomeComponent},
    {
    path: 'market',
    title: "Student Market",
    component: MarketComponent
    },
    {
        path: 'market/:id',
        title: "Category Details",
        component: CategoryDetailComponent,
    },
    {
        path: 'directory',
        title: "Town Square",
        component: DirectoryComponent
    },
    {
        path: 'career',
        title: "Career Hub",
        component: CareerComponent
    },
    {
        path: 'tutoring',
        title: "tutoring",
        component: TutoringComponent
    },
    {
    path: 'forum',
    title: "Forum",
    component: ForumComponent
    },
    {
        path: 'books',
        title: "books",
        component: BooksComponent
    }
    
];

