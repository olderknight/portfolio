function validationForm() {
    let validationCod = document.forms["register"]["cod"].value;
    let validationTitle = document.forms["register"]["title"].value;
    let validationDirector = document.forms["register"]["director"].value;
    let validationDate = document.forms ["register"]["date"].value;
    let validationRadio = document.forms["register"]["radio"].value;
    let validationPact = document.forms ["register"]["Pact"].value;

    if(validationCod == "") {
        alert("o código deve ser preenchido");
        return false;
    }

    if (validationTitle == "") {
        alert("o título deve ser preenchido");
        return false
    }

    if (validationDirector == "") {
        alert("o nomde do diretor deve ser preenchido");
        return false
    }

    if (validationDate == "") {
        alert("a data deve ser preenchida");
        return false
    }

    if (validationRadio == "") {
        alert("o Gênero deve ser preenchido");
        return false
    }

    if (validationPact == "") {
        alert("o Autor/Atriz deve ser preenchido");
        return false
    }

    
    alert("a validação ocorreu de forma correta");
}

function insert() {
    let cod = document.forms ["register"]["cod"].value;
    let title = document.forms ["register"]["title"].value;
    let director = document.forms ["register"]["director"].value;
    let date = document.forms ["register"]["date"].value;
    let radio = document.forms ["register"]["radio"].value;
    let pact = document.forms ["register"]["pact"].value;


    let insert = window.document.getElementById("insertRow").innerHTML;

    insert.innerHTML = `
    <th scope="row">${cod}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${date}</td>
    <td>${radio}</td>
    <td>${pact}</td>
    `;
}