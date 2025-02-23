import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-show',
  imports: [CommonModule],
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss'],
})
export class ProductShowComponent {
  @Input() selectedProduct?: Product;
  @Input() selectedProductIndex?: number;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() productFavorite = new EventEmitter<number>();

  deleteProductSelected(index: number | undefined) {
    if (index !== undefined) {
      this.deleteProduct.emit(index);
    }
  }
  markProductFavorite() {
    if (this.selectedProductIndex !== undefined) {
      this.productFavorite.emit(this.selectedProductIndex);
    }
  }
}
