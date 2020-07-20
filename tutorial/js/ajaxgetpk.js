
const ajaxgetpk = () => {
    let id = +document.getElementById("xid").value;
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:5000/api/users/${id}`, true);
    xhr.onload = () => {
        console.log(xhr.response);
        display(xhr.response);
    }
    xhr.send();
};

const display = (user) => {
    set("pid", user.id);
    set("pusername", user.username);
    set("pname", user.firstname + ' ' + user.lastname);
    set("pphone", user.phone);
    set("pemail", user.email);
    set("padmin", user.isAdmin ? "Yes" : "No");
    set("previewer", user.isReviewer ? "Yes" : "No");
};

const set = (id, val) => {
    document.getElementById(id).innerText = val;
}
