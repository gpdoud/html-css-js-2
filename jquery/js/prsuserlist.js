
$().ready(() => {

    $("button").click(() => {

        $.getJSON("http://localhost:5000/api/users")
            .done( users => { 
                console.log(users); 
                display(users);
            })
            .fail( err => {
                console.error(err);
            })

    });

});

const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        tbody.append(tr);

        let tdId = $(`<td>${user.id}</td>`);
        tr.append(tdId);

        let tdUsername = $(`<td>${user.username}</td>`);
        tr.append(tdUsername);

        tr.append( $(`<td>${user.firstname}</td>`) );
        tr.append( $(`<td>${user.lastname}</td>`) );
        tr.append( $(`<td>${user.phone}</td>`) );
        tr.append( $(`<td>${user.email}</td>`) );
        tr.append( $(`<td>${user.isReviewer ? "Y" : "N"}</td>`) );
        tr.append( $(`<td>${user.isAdmin ? "Y" : "N"}</td>`) );
        tr.append( $(`<td><a href='getUrlParams.html?id=${user.id}'>Test</a></td>`));
    }
}