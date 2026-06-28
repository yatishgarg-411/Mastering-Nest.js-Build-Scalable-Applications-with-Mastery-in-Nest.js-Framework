import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
    products: Product[] = [];

    getProducts() {
        return this.products;
    }
    insertProduct(title: string, desc: string, price: number) {
        const id = Math.random().toString();
        const newProduct = new Product(id, title, desc, price);
        this.products.push(newProduct);
        return id;
    }

    getProductbyId(id: string) {
        const [product, index] = this.findProduct(id);
        return { ...product };
    }


    updateProductbyId(id: string, prodData: Product) {
        const [product, index] = this.findProduct(id);
        const newProduct = new Product(
            id,
            prodData.title != undefined ? prodData.title : null,
            prodData.description != undefined ? prodData.description : null,
            prodData.price != undefined ? prodData.price : null);
        this.products[index] = newProduct;
        return { message: 'Product updated', product: newProduct };
    }

    partialUpdateProductbyId(id: string,
        prodData: Product
    ) {
        const [product, index] = this.findProduct(id);
        const updatedProduct = { ...product, ...prodData };
        this.products[index] = updatedProduct;
        return updatedProduct;
    }

    deleteProductbyId(id:string){
        const [product,index]= this.findProduct(id);
        this.products.splice(index,1);
        return {message:'Product deleted', product:product};    
    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex(p => p.id === id);
        if (productIndex === -1) {
            throw new NotFoundException('Product not found');
        }
        return [this.products[productIndex], productIndex];
    }
}
