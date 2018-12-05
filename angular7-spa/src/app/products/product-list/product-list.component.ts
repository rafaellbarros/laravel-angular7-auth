import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(
    private productsService: ProductsService,
    private http: HttpClient,
    private jwtTokenService: JwtTokenService) { }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.productsService.getProducts().subscribe((resp) => {
      this.products = resp;
    },
    (err) => {
      if (err.status === 401) {
        this.http.post(`http://localhost:8000/api/refresh_token`, {}).subscribe((resp) => {
          this.jwtTokenService.token = resp['token'];
          this.getProducts();
        });
      }
    });
  }

}

