import {Routes, RouterModule} from '@angular/router';
import {Pages} from './pages.component';
import {ModuleWithProviders} from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/paginas/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/paginas/register/register.module#RegisterModule'
  },
  {
    path: 'paginas',
    component: Pages,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: './home/home.module#HomeModule'},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'cadastros', loadChildren: './cadastros/registers.module#RegistersModule'},
      {path: 'editors', loadChildren: './editors/editors.module#EditorsModule'},
      {path: 'components', loadChildren: './components/components.module#ComponentsModule'},
      {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
      {path: 'ui', loadChildren: './ui/ui.module#UiModule'},
      {path: 'forms', loadChildren: './forms/forms.module#FormsModule'},      
      {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
      {path: 'maps', loadChildren: './maps/maps.module#MapsModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);