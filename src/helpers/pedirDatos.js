import data from '../data/data.json';

export const pedirDatos = () => {
   return new Promise ((resolve,reject) =>{
    setTimeout(()=>{
        resolve(data.productos);
    }, 500) 

    })
   }

   

export const mostrarProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.productos.find((el) => el.id === id.toString());

    if (item) {
      resolve(item);
    } else {
      reject({ error: "Error, no se encontró el producto" });
    }
  });
};
