import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
@Component({
  selector: 'app-products-similars',
  imports: [CommonModule],
  templateUrl: './products-similars.component.html',
  styleUrl: './products-similars.component.scss',
})
export class ProductsSimilarsComponent {
  @Input() selectedProduct?: Product;
  @Input() ratingImage: string = '';
}
