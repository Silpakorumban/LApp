export class ProductModel{
    constructor(
      public  productId: Number | null,


      public  productName: String | null,
    
      public productCode: String | null,
      public   releaseDate: Date | null,
     public  description: string | null,
        public  price: number | null,
        public  starRating: number | null,
        public imageUrl: string | null
    ) {}
}