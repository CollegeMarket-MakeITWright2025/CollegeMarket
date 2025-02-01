import { Routes } from '@angular/router';
import { MarketComponent } from './Market/market.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
    path: '',
    component: AppComponent},
    {
    path: 'market',
    component: MarketComponent,
    }
];
