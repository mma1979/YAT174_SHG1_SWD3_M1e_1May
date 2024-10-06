import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './components/page1/page1.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'page1', component: Page1Component},
    {path:'products/:id', component: ProductsComponent},



    {path:'**', component: NotFoundComponent}

];
