import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupenComponent } from './coupen/coupen.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'coupens', component: CoupenComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'media', component: MediaComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
