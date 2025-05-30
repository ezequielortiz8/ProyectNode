// Ezequiel Ortiz - pre entrega

const args = process.argv.slice(2);
const URL = "https://fakestoreapi.com/products";
const method = args[0]; // 'GET'
const path = args[1];       //  'products'


const [resource, id] = path.split('/');


if (method === 'GET' ) {

  if (resource === 'products' && !id) {
     fetch(URL)
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data);
            });
  }  else if (resource === 'products' && id) {
     fetch(`${URL}/${id}`)
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data);
            });


  } else {
    console.log('Recurso no encontrado');
  }
 

} else {
  console.log('Comando no reconocido');
}            