import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product-interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from './product-service';

@Component({
 // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = "Product Details";
  product : Iproduct | undefined ;
  errorMessage : string = '';

  constructor(private route : ActivatedRoute,private router : Router,private productservice : ProductService) {}

  ngOnInit() {
    const param =  this.route.snapshot.paramMap.get('id');

    if(param)
    {
      const id = +param;
      this.getProduct(id);
    }
    
   
  }

  getProduct(id : number) {
    this.productservice.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error
      

    )
  }

  onBack() : void{
    this.router.navigate(['/products']);
  }

  


}
