import React from "react";

export default function CarroItem({ Item, AddToCart }) {

    var CLFormatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });

    const LineHeightCSS = {
        lineHeight : '0.5'
    }
    const CloseBtnCss = {
        position : 'absolute',
        top : '10px',
        right : '20px',
        fontSize : '1.5rem'
    }

    return (
        <div className="card m-2 p-2">
        <div className="row m-2 p-2">
            <div className="col-4">
                <img alt='Producto Imagen' src={ Item.Product.UrlImagen } width='100' />
            </div>
            <div className="col-8">
                <p><strong>{ Item.Product.Descripcion }</strong></p>
                <p style={ LineHeightCSS }>Precio Unitario: <strong>{ CLFormatter.format(Item.Product.Precio) }</strong></p>
                <p style={ LineHeightCSS }>Cantidad: { Item.Cantidad }</p>
                <p style={ LineHeightCSS }>Subtotal: <strong>{ CLFormatter.format(Item.SubTotal) }</strong></p>
            </div>
        </div>
        <span style={ CloseBtnCss } onClick={ () => AddToCart(Item.Product, 'Remove')} ><i className="fa-solid fa-trash"></i></span>
        </div>
    );
}
