import { Component, OnInit } from '@angular/core';
import { products } from './product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ngOnInit() {}
  products = products;

  share() {
    window.alert('HI');
  }
  onNotify() {
    window.alert('Inform you when Avaiable');
  }
}
