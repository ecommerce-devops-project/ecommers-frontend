import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { CartComponent } from './features/cart/cart.component';
import { LoginComponent } from './features/auth/login/login.component';

export const routes: Routes = [
    //{path: '', component: HomeComponent},
    {path:'',redirectTo:'products', pathMatch:'full'},
    {path: 'products', component: ProductListComponent},
    {path: 'cart', component: CartComponent},
    {path: 'login', component: LoginComponent}
];
