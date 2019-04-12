import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name : 'convertTospace'
})

export class ConvertToSpace implements PipeTransform{

    transform(value: string , character : string ) : string  {
        return value.replace(character,' ');
    }

}