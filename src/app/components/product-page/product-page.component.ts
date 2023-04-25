import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  title = 'angular-crash-course'
  //products: IProduct[] = []
  products$: Observable<IProduct[]>
  term = ''
  loading = true

  constructor(public productService: ProductsService,
              public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productService.getAll().subscribe(() => {
      this.loading = false
      //this.products$ = this.productService.getAll().pipe();
    })
  }
}
