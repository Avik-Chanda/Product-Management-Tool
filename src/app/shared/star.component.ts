import { OnChanges, Component, Input, EventEmitter, Output } from "@angular/core";


@Component({
    selector : 'app-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})

export class StarComponent implements OnChanges{
  
  
    @Input() rating : number  ;
    starWidth : number ;

    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    onClick() : void {
        this.ratingClicked.emit(`The product has ${this.rating} rating`);
        console.log(`${this.rating} was clicked`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5 
    }
}