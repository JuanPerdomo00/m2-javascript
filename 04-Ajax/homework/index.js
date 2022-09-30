// Metodos
/* 
GET, PSOT, PUT, DELETE
*/

//! Ocultar imagen de carga al comienzo.
$("img").hide();

//! URL de comunicacion a la API del servidor
const url = "http://127.0.0.1:5000/amigos/";

//! GET
const botonVerAmigos = document.querySelector("#boton");
const listaUlVerAmigos = document.querySelector("#lista");

function reload() {
  $(botonVerAmigos).click(() => {
    // $.get("http://127.0.0.1:5000/amigos", (data) => {
    //   data.forEach((el) => {
    //     let li = document.createElement("li");
    //     listaUlVerAmigos.appendChild(li);
    //     li.innerHTML = `<strong>${el.name} x</strong>`;
    //   });
    // });
    $.ajax({
      method: "GET",
      url: url,
    }).done((data) => {
      // $("#lista").text("");
      listaUlVerAmigos.textContent = "";
      data.forEach((el) => {
        let li = document.createElement("li");
        listaUlVerAmigos.appendChild(li);
        li.innerHTML = `<strong>${el.name} x</strong>`;
      });
    });
  });
}

reload();

//! GET FROM ID
const botonBuscarAmigoPorId = document.querySelector("#search");
const inputBuscarAmigoPorId = document.querySelector("#input");
const mostrarAmigo = document.querySelector("#amigo");

$(botonBuscarAmigoPorId).click(() => {
  // console.log(inputBuscarAmigoPorId.value);
  $.ajax({
    method: "GET",
    url: url,
  }).done((data) => {
    let h3 = document.createElement("h3");
    mostrarAmigo.appendChild(h3);
    data.forEach((el) => {
      // mostrarAmigo.textContent = "";
      if (Number(inputBuscarAmigoPorId.value) === el.id) {
        h3.innerHTML = `${el.name} x`;
        return;
      }
      // if (Number(inputBuscarAmigoPorId.value) !== el.id) {
      //   h3.innerHTML = `ID: ${inputBuscarAmigoPorId.value} no existe`;
      // }
    });

    // for (let i = 0; i < data.length; i++) {
    //   for (const dataobj of data) {
    //     console.log(dataobj.id == inputBuscarAmigoPorId.value);
    //     console.log(inputBuscarAmigoPorId.value);
    //     console.log(dataobj.id);
    //   }
    //   break
    // }
  });
});

//! delete

$("#boton").click(reload);

const deleteInput = document.querySelector("#inputDelete");
const botonInputDelete = document.querySelector("#delete");
const spanDeleteConfirmar = document.querySelector("#success");

let numDelete = deleteInput.value;
$(botonInputDelete).click(() => {
  let h3 = document.createElement("h3");
  spanDeleteConfirmar.appendChild(h3);
  $.ajax({
    method: "DELETE",
    url: `${url}${numDelete}`,
  }).done((data) => {
    // console.log(data);
    h3.innerHTML = "Amigo eliminado";
    reload();
  });
});
