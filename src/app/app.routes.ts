import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: 'grid-data',
        loadComponent: () => import('./grid-data/grid-data.component').then(mod => mod.GridDataComponent)
    },
    {
        path: 'd3-chart',
        loadComponent: () => import('./chart-data/chart-data.component').then(mod => mod.ChartDataComponent)
    }
];
