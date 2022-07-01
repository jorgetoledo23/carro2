import React from "react";
import CarroItem from "./CarroItem";



export default function CarroCompras({ ToggleCarro, Visible, ItemsCarro, AddToCart, Total }){

    var CLFormatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });

    const CarroCSS = {
        width : Visible ? '100%' : '0px',
        height : '100%',
        position : 'fixed',
        backgroundColor : 'white',
        border : '1px solid black',
        zIndex : '99',
        top : '0px',
        right : '0px',
        transition : '0.5s'
    }

    const CloseBtnCss = {
        position : 'absolute',
        top : '10px',
        right : '30px',
        display : Visible ? 'block' : 'none',
        fontSize : '2rem'
    }

    const CarroContainerCSS = {
        overflowY : 'scroll',
        height : '80vh',
    }


    return <div style={ CarroCSS }>
        <span style={ CloseBtnCss } onClick={ ToggleCarro }><i className="fa-solid fa-xmark"></i></span>
        <div className="container text-center" style={ { display : Visible ? 'block' : 'none' } }>
                <h1 className="card-title">Carro de Compras</h1>
                <div style={ CarroContainerCSS }>
                    { ItemsCarro.map(element => <CarroItem Item={ element } key={ element.Product.Id } AddToCart={ AddToCart }/>) }
                </div>
                <div className="mt-3">
                    <p style={{fontSize:'2rem'}}>Total Carrito de Compras: <strong>{ CLFormatter.format(Total) }</strong></p>
                </div>
                
        </div>
    </div>
}
