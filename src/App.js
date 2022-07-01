import "./App.css";
import Products from "../src/data.json";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import CarroCompras from "./components/Carro";
import { useState } from "react";





function App() {
  const [visible, setVisible] = useState(false);
  const [ItemsCarro, setItemCarro] = useState([])
  const [Total, setTotal] = useState(0)
  // const [ItemsCarro, setItemCarro] = useState([{
  //   "Id" : "1",
  //   "Descripcion" : "Logitech TKL G915",
  //   "Stock" : 23,
  //   "Precio" : "189990",
  //   "UrlImagen" : "https://publicapi.solotodo.com/products/82384/picture/?width=375&height=375",
  //   "Cantidad" : 1,
  //   "SubTotal" : "189990"
  // }]);

  const ToggleCarro = () => {
    //console.log('Mostrar/Ocultar CarroCompras')
    setVisible(!visible)
  }

  const AddToCart = (Product, Action) => {
    if(Action === 'Add'){
      const exists = ItemsCarro.find(x => x.Product.Id === Product.Id)
      if (exists === undefined){
        const newItem = { Product : Product, Cantidad : 1, SubTotal : Product.Precio }
        ItemsCarro.push(newItem)
      }else{
        exists.Cantidad += 1
        exists.SubTotal = parseInt(exists.Product.Precio) * exists.Cantidad 
      }
      setItemCarro(ItemsCarro)
    }
    if(Action === 'Remove'){
      const Items = ItemsCarro.filter(x => x.Product.Id !== Product.Id)
      setItemCarro(Items)
    }
    UpdateTotal()
  }

  const UpdateTotal = () => {
    const Total = ItemsCarro.map(i=>parseInt(i.SubTotal)).reduce((a,b)=>parseInt(a)+parseInt(b))
    setTotal(Total)
    //console.log(Total)
  }

  return (
    <div>
      <Navbar ToggleCarro={ToggleCarro}  />
      <CarroCompras ToggleCarro={ToggleCarro} Visible={visible} ItemsCarro={ ItemsCarro } AddToCart={ AddToCart } Total={ Total }/>
      <div className="row justify-content-center">
        { Products.map(element => <Product key={ element.Id } Product={ element } AddToCart={ AddToCart } ToggleCarro={ ToggleCarro }  />) }
      </div>
    </div>
  );
}

export default App;
