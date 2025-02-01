import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './Market/market.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { CareerComponent } from './career/career.component';
import { TutoringComponent } from './tutoring/tutoring.component';
import { ForumComponent } from './forum/forum.component';
import { NgModule } from '@angular/core';

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// });
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
    
];

