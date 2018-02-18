import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'paginas', pathMatch: 'full' },
  { path: '**', redirectTo: 'paginas/home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
