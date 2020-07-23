let vendor = null;

$().ready(() => {

    $.getJSON("http://localhost:5000/api/vendors/1")
        .done(res => {
            console.log(res);
            vendor = res;
            display();
        });

    $("#save").click(() => {
        vendor.name = $("#name").val();
        updateVendor();
    })
})

const updateVendor = () => {
    $.ajax({
        method: "PUT",
        url: `http://localhost:5000/api/vendors/${vendor.id}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
        .done(res => {
            console.log(res);
        })
}

const display = () => {
    $("#name").val(vendor.name);
}