import { ProductRepository } from './product.repository';
import { NgModule } from '@angular/core';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datascource';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
    imports: [HttpClientModule],
    providers:[ProductRepository,Cart,Order,OrderRepository,{provide:StaticDataSource,useClass:RestDataSource}]
})
export class ModelModule {}