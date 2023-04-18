import { buildSchema } from 'graphql';

const ProductsSchema = buildSchema(`
    type Product {
        id: ID!,
        title: String,
        price: Int,
        description: String,
        thumbnail: String, 
    }
    
    input inputProduct {
        id: ID!,
        title: String,
        price: Int,
        description: String,
        thumbnail: String,
    }

    type Query {
        getProducts: [Product]
        getProductsById(id: ID!): Product
    }

    type Mutation {
        saveProduct(
            id: ID!,
            title: String!, 
            price: Int!, 
            description: String!, 
            thumbnail: String!, 
        ): Product
        
        updateProduct(
            id: ID!, 
            product: inputProduct
        ): Product
        
        deleteProduct(id: ID!): Product
    }
`);

export default ProductsSchema;