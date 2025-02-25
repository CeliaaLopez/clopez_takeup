import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule],
  standalone:true,
})
export class ProductsComponent {
  @Input() selectedProduct?: Product;
  @Input() selectedProductIndex?: number;
  @Input() colorBottonReview?: string;
  @Input() colorBottonPrice?: string;
  @Input() filteredProducts: Product[] = [];
  @Output() productSelected = new EventEmitter<number>();
  @Output() filterPrice = new EventEmitter<void>();
  @Output() filterReview = new EventEmitter<void>();
  @Output() resetFilter = new EventEmitter<void>();

  selectProduct(index: number) {
    this.productSelected.emit(index);
  }

  filterByPrice() {
    this.filterPrice.emit();
  }

  filterByReview() {
    this.filterReview.emit();
  }

  resetAllFilters() {
    this.resetFilter.emit();
  }
}
