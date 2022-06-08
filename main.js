let pizza = ["masa", "tomate","queso","salame","jamon","rucula","cebolla","ajo","anana","roquefort"];

function contarIngredientes(ingredientes){
    let pares = [];
    let impares = [];

    for (i = 0; i < pizza.length; i++){
        let count = pizza[i].length;

        if (count % 2 === 0) {
            pares.push(pizza[i])
        } else {impares.push(pizza[i])
        }
    }
    return (
        console.log(`Los ingredientes pares son: ${pares}`),
        console.log(`Los ingredientes impares son: ${impares}`));
    };

    contarIngredientes(pizza);