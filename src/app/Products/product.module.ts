import { NgModule } from '@angular/core';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';

import { ConvertToSpace } from './converttospacepipe';

// import { RouterModule } from '@angular/router';
// import { ProductDetailGuardGuard } from './product-detail-guard.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
  
    ConvertToSpace
  ],
  imports: [
  
    // RouterModule.forChild([
    //   {path :'products' , component : ProductListComponent},
    //   {path : 'products/:id' , 
    //   canActivate : [ProductDetailGuardGuard],
      
    //   component : ProductDetailComponent},
      
    // ]),
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
