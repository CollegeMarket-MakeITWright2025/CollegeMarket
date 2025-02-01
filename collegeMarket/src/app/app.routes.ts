import { Routes } from '@angular/router';
import { MarketComponent } from './Market/market.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';

export const routes: Routes = [
    {
    path: '',
    title: "homepage",
    component: HomeComponent},
    {
    path: 'market',
    title: "Student Market",
    component: MarketComponent,
    },
    {
        path: 'directory',
        title: "Town Square",
        component: DirectoryComponent,
    }
];
