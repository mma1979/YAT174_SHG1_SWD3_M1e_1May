import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFount404Component } from './pages/page-not-fount404/page-not-fount404.component';
import { userGuard } from './guards/user.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [userGuard]},
    {path: 'products', component: ProductsComponent, canActivate:[userGuard, roleGuard]},
    {path: 'products/new', component: AddProductComponent},
    {path: 'products/edit/:productId', component: EditProductComponent},
    {path: 'login', component: LoginComponent},

    {path:'**', component: PageNotFount404Component}
];
