import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
@Component({
  selector: 'app-product-reviews',
  imports: [CommonModule],
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.scss',
})
export class ProductReviewsComponent {
  @Input() selectedProduct?: Product;
  @Input() ratingImage: string = '';
}
