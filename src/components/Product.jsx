import React from "react";


var CLFormatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});


export default function Product({ Product, AddToCart, ToggleCarro }){
    return <div className="card col-md-3 m-2 p-2 text-center">
    <div className="card-body">
        <p><strong>{ Product.Descripcion }</strong></p>
        <p>{ CLFormatter.format(Product.Precio) }</p>
        <img alt="Producto Imagen" src={ Product.UrlImagen } width='200' />
        <p><strong>Stock: </strong> { Product.Stock } </p>
        <button className='btn btn-outline-primary col-4' onClick={ () => { AddToCart(Product, 'Add'); ToggleCarro() } }  >Add To Cart</button>
    </div>
</div>

}