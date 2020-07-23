let sortColumn = "phone";

$().ready(() => {
    
    $("button").click(() => {
        getVendors();
        
    });
    
});

const getVendors = () => {

    $.getJSON("http://localhost:5000/api/vendors")
        .done( vendors => { 
            console.log(vendors); 
            display(vendors);
        })
        .fail( err => {
            console.error(err);
        });

}

const display = (vendors) => {
    let tbody = $("tbody");
    tbody.empty();
    vendors.sort(sortFn);
    for(let vendor of vendors) {
        let tr = $("<tr></tr>");
        tbody.append(tr);
        tr.append( $(`<td>${vendor.id}</td>`) );
        tr.append( $(`<td>${vendor.code}</td>`) );
        tr.append( $(`<td>${vendor.name}</td>`) );
        tr.append( $(`<td>${vendor.address}</td>`) );
        tr.append( $(`<td>${vendor.city}</td>`) );
        tr.append( $(`<td>${vendor.state}</td>`) );
        tr.append( $(`<td>${vendor.zip}</td>`) );
        tr.append( $(`<td>${vendor.phone}</td>`) );
        tr.append( $(`<td>${vendor.email}</td>`) );
    }
}

const resort = (column) => {
    sortColumn = column;
    getVendors();
}

const sortFn = (a, b) => {
    if(a[sortColumn] === b[sortColumn]) {
        return 0;
    }   
    return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
}