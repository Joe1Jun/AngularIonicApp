import { Component, Input } from "@angular/core";


@Component({

    selector: 'app-persons',
    templateUrl: './persons.component.html',
   })



export class PersonCompenent{

    @Input() personList : string[];

}