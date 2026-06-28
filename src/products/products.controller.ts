import { Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import { ProductsService } from './products.service';
import {Product} from './products.model';
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getProducts(){
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id')prodId:string){
        return this.productsService.getProductbyId(prodId);
    }
    
    @Post()
    addProducts(@Body('title') prodTitle:string, @Body('description') prodDescription:string, @Body('price') prodPrice:number){
         const id=this.productsService.insertProduct(prodTitle, prodDescription, prodPrice);

         return {message:'Product added', productId:id};
    }

    @Put(':id')
    updateProduct(@Param('id') prodId:string, @Body() prodData:Product){
        return this.productsService.updateProductbyId(prodId, prodData);
    }


    @Patch(':id')
    partialUpdateProduct(@Param('id') prodId:string, @Body() prodData:Product){
        return this.productsService.partialUpdateProductbyId(prodId, prodData);
    }

    @Delete(':id')
    deleteProduct(@Param('id')prodId:string){
        return this.productsService.deleteProductbyId(prodId);
    }
}
