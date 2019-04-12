import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuardGuard } from './product-detail-guard.guard';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [],
  imports: [


    RouterModule.forChild([
      {path :'products' , component : ProductListComponent},
      {path : 'products/:id' , 
      canActivate : [ProductDetailGuardGuard],
      
      component : ProductDetailComponent},
      
    ]),
  ],

  exports : [RouterModule]
})
export class ProductRoutingModule { }
