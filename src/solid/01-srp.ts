(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }

    }

    class SendMail {

        
        sendEmail() {
            console.log('Enviando correo a los clientes');
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        public productService : ProductService;
        public sendMail : SendMail;

        constructor( productService : ProductService, sendMail : SendMail){
            this.productService = productService;
            this.sendMail = sendMail;
        }

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.loadProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.sendMail.sendEmail();
        }
    
    
    }
    
    class CartBloc{

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }


    const productService = new ProductService();
    const sendMail = new SendMail();

    const productBloc = new ProductBloc(productService, sendMail);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();