import { Injectable, NotFoundException } from '@nestjs/common';
import { IProductDTO } from 'src/dto/product.dto';
import ProductModel from 'src/models/product.model';

@Injectable()
export default class ProductService {

    constructor(
        private readonly productModel: ProductModel 
    ){}

    async createProduct(product: IProductDTO): Promise<IProductDTO> {
        const myProduct: IProductDTO = {
            ...product
        }

        // Toutes nos vérifications métiers

        return this.productModel.createProduct( myProduct ) ;
    }

    async deleteProduct(productId: string): Promise<IProductDTO | null> {
        const result = await this.productModel.deleteProduct(productId);

        if (result) {
            return result
        }
        
        throw new NotFoundException(`Product with ID ${productId} not found`);
    }
}
