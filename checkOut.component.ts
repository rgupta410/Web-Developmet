import { Component } from "@angular/core";
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';
import { NgForm } from '@angular/forms';

@Component({
    //template: `<div>
    //<h3 class="bg-info p-1 text-white">Checkout Component</h3>
    //</div>`
    templateUrl:"./checkOut.component.html",
    //styleUrls:["checkout.component.css"]
})
export class CheckOutComponent{
    orderSent:boolean=false;
    submitted:boolean=false;

    constructor(public repository:OrderRepository,public order:Order){}

    submitOrder(form:NgForm){
        this.submitted=true;
        if(form.valid){
            this.repository.saveOrder(this.order).subscribe(order=>{
            this.order.clear();
            this.orderSent=true;
            this.submitted=false;
        });
    }
}
}