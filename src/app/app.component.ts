import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products = [
    {
      product: 'Bacon',
      price: 15.99,
      currency: '€',
      rating: 5,
      description:
        'El auténtico best seller de esta casa. Picamos la carne en la plancha y la mezclamos con bacon, cebolla crunchy y queso americano. ¡Una vez que la pruebas no puedes dejar de pensar en ella!',
      similarProducts: [
        { product: 'Retro', price: 16.99, currency: '€', rating: 3 },
        { product: 'Hat Trick', price: 16.99, currency: '€', rating: 3 },
      ],
      reviews: [
        {
          image: '',
          name: 'Homer J. Simpson',
          rating: 5,
          opinion:
            '¡Increíble! La carne jugosa y el bacon crujiente hacen una combinación perfecta.',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image: '',
          name: 'Marge Simpson',
          rating: 5,
          opinion:
            'Me gustó mucho, aunque para mi gusto tenía demasiado bacon.',
          date: 'Ayer por la tarde, 2023',
        },
      ],
    },
    {
      product: 'Retro',
      price: 14.99,
      currency: '€',
      rating: 4,
      description:
        'Una receta clásica con carne, queso americano, cebolla morada a la plancha, tomate, lechuga batavia, pepinillos y nuestras salsas especiales.',
      similarProducts: [
        { product: 'Bacon', price: 15.99, currency: '€', rating: 4 },
        { product: 'Donut', price: 20, currency: '€', rating: 5 },
      ],
      reviews: [
        {
          image: '',
          name: 'Bart Simpson',
          rating: 4,
          opinion: 'Muy buena, aunque me hubiera gustado un poco más de salsa.',
          date: 'Hace 2 días, 2023',
        },
      ],
    },
    {
      product: 'Donut',
      price: 20,
      currency: '€',
      rating: 5,
      description:
        'La Golden Glaze: doble smash con mucho queso americano, bacon bits y un huevo frito entre dos donuts glaseados.',
      reviews: [],
    },
    {
      product: 'Hat Trick',
      price: 14.99,
      currency: '€',
      rating: 4,
      description:
        'Tres carnes smash, queso americano, queso scamorza ahumado, cebolla morada a la plancha y nuestra salsa especial.',
      similarProducts: [
        { product: 'Retro', price: 16.99, currency: '€', rating: 4 },
        { product: 'Bacon', price: 15.99, currency: '€', rating: 5 },
      ],
      reviews: [
        {
          image: '',
          name: 'Ned Flanders',
          rating: 3,
          opinion:
            'Buena hamburguesa, pero me gustaría que la carne estuviera un poco más hecha.',
          date: 'Hace 4 días, 2023',
        },
      ],
    },
  ];

  defaultProduct = {
    product: 'No disponemos de productos en stock',
    price: 0,
    currency: '',
    rating: 0,
    description: '',
    similarProducts: [],
    reviews: [],
  };

  selectedProduct = this.products[0];

  filteredProducts = [...this.products];

  selectProduct(index: number) {
    this.selectedProduct = this.filteredProducts[index];
  }

  filterByPrice() {
    this.filteredProducts = this.products.filter(
      (product) => product.price < 15
    );
  }

  filterByReview() {
    this.filteredProducts = this.products.filter(
      (product) => product.reviews.length !== 0
    );
  }

  resetFilter() {
    this.filteredProducts = [...this.products];
  }

  //eliminar solo visualmente el producto
  deleteProduct(index: number) {
    const productToDelete = this.products[index];
    this.products.splice(index, 1);
    this.filteredProducts.splice(index, 1);

    if (this.selectedProduct === productToDelete) {
      this.selectedProduct =
        this.products.length > 0 ? this.products[0] : this.defaultProduct;
      this.selectedProduct =
        this.filteredProducts.length > 0
          ? this.filteredProducts[0]
          : this.defaultProduct;
    }
  }
}
