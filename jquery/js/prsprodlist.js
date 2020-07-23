let products = [];

$().ready(() => {

    getProducts();

    $("#id").click(() => { 
        display(products, "id");
    });
    $("#partNbr").click(() => { 
        display(products, "partNbr");
    });
    $("#name").click(() => { 
        display(products, "name");
    });
    $("#price").click(() => { 
        display(products, "price");
    });
    $("#unit").click(() => { 
        display(products, "unit");
    });
    
});

const getProducts = () => {
    
    $.getJSON("http://localhost:5000/api/products")
    .done( res => { 
        console.log(res); 
        products = res;
        display(products, "partNbr");
    })
    .fail( err => {
        console.error(err);
    });
    
}

const sortit = (arr, column) => {
    const sortFn = (a, b) => {
        if(a[column] === b[column]) {
            return 0;
        }   
        return (a[column] > b[column]) ? 1 : -1;
    }
    return arr.sort(sortFn);
}

const display = (products, sortColumn) => {
    let tbody = $("tbody");
    tbody.empty();
    products = sortit(products, sortColumn);
    for(let product of products) {
        let tr = $("<tr></tr>");
        tbody.append(tr);
        tr.append( $(`<td>${product.id}</td>`) );
        tr.append( $(`<td>${product.partNbr}</td>`) );
        tr.append( $(`<td>${product.name}</td>`) );
        tr.append( $(`<td>$${product.price.toFixed(2)}</td>`) );
        tr.append( $(`<td>${product.unit}</td>`) );
        tr.append( $(`<td>${product.photoPath == null ? '' : product.photoPath}</td>`) );
    }
}

