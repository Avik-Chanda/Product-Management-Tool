import { Component, OnInit } from "@angular/core";
import { Iproduct } from "./product-interface";
import { ProductService } from "./product-service";


@Component({
   // selector : 'app-products',
    templateUrl : './product-list.component.html',
   
})

export class ProductListComponent implements OnInit{
 

  heading : string = 'Product List ';

  errorMessage : string ;
  

     private _listFilter: string = '';
    
     public get listFilter(): string {
    return this._listFilter;
    }

    public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.product_list;
  }

    filteredProducts : Iproduct[] = [];   
    showImage : boolean = false ;
    imageWidth :number = 50;
    imageMargin : number= 2;

    constructor(private product_service : ProductService)
    {}
    
    product_list : Iproduct[] = [];

      toggleImage() : void {
        this.showImage = !this.showImage;
      }

      performFilter(filterBy : string) : Iproduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.product_list.filter((product : Iproduct) =>
                        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 )
      }

      onRatingClicked(message : string ) : void {
            this.heading = 'Product List' + " " + message;
      }
    
      ngOnInit(): void {
       this.product_service.getProducts().subscribe(
         product => {
           this.product_list = product;
           this.filteredProducts = this.product_list;
        },
         error => this.errorMessage = <any>error
       );
       
       
      }
     
   

}