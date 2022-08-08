import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [{path:"product-list" ,component:ProductListComponent},
{path:"new-product",canActivate:[AuthGuard], component:NewProductComponent},{path:"login", component:LoginComponent},{path:'logout',component:LogoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
