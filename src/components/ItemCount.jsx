import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const disminuirCantidad = (valor) =>{
        if(valor > 0) {
        setCantidad(valor);
    }
    }
    const aumentarCantidad = (valor) =>{
        if(valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const agregarProductos = () =>{
        if(itemStock > 0) {
            setItemStock ( itemStock - cantidad );
            setItemAdd(itemAdd+cantidad);
        }
        
    }
    return(
        
        <div className="container py-5">
            <div className="row">
                <div className="col-md-2">
                    <p className="text-center py-3">Mate Geometrico</p>
                    <div className="input-group">
                        <input type="button" className="btn btn-warning" value="-" onClick={() =>
                        {disminuirCantidad(cantidad - 1)}}/>
                        <input type="text" className="form-control" value={cantidad} /> 
                        <input type="button" className="btn btn-warning" value="+" onClick={() =>
                        {aumentarCantidad(cantidad + 1)}}/>
                    </div>
                        <div className="d-grid gap-2 py-3">
                            <input type="button" className="btn btn-secundary btn btn-danger" value="Agregar" onClick={() =>
                        {agregarProductos()}} /> 
                        </div>
                        <p className="text-center py-3 ">Productos seleccionados: {itemAdd} </p>
                </div>
            </div>
      
        </div>
    );

}


export default ItemCount;