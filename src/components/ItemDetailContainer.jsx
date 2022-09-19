import React, {  useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import  Products  from "./Products";


const ItemDetailContainer = () => {
    const [item, setItems] = useState ({})

    useEffect (() => {
        const getProductos = () =>
        new Promise ((res, rej) => {
            const product = Products.find((prod) => prod.id === 1)
            setTimeout (() => {
                res(product)
            }, 500);
            
        });

        getProductos()
        .then((info) => {
            setItems(info)
        })

        .catch((error) => {
            console.log(error);
        });

        
    }, []);
return (
    <div style={{ minHeight: '78vh' }}>
        <ItemDetail item={item} />

    </div>
)
}


export default ItemDetailContainer;