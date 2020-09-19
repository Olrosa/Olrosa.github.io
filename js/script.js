/*jshint esversion: 6 */
/* jshint browser: true */

"use strict";

//  variables

const modalOn = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    clients = document.querySelector('.clients'),
    name = document.querySelectorAll('.name'),
    personId = document.querySelector('#id'),
    personName = document.querySelector('#name'),
    personUsername = document.querySelector('#username'),
    personEmail = document.querySelector('#email'),
    personAdress = document.querySelector('#adress'),
    personPhone = document.querySelector('#phone'),
    personWebsite = document.querySelector('#website'),
    personCompany = document.querySelector('#company');

// modal

modalOn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        openModal();
        fetch(`https://jsonplaceholder.typicode.com/users/${i+1}`)
            .then(response => response.json())
            .then(json => {
                personId.innerHTML = ` ${json.id} `;
                personName.innerHTML = ` ${json.name} `;
                personUsername.innerHTML = ` ${json.username} `;
                personEmail.innerHTML = ` ${json.email} `;
                personAdress.innerHTML = `street: ${json.address.street}; suite: ${json.address.suite}; city: ${json.address.city} <br>;
                                            zipcode: ${json.address.zipcode}; geo: lat ${json.address.geo.lat}, lng ${json.address.geo.lng}; `;
                personPhone.innerHTML = ` ${json.phone} `;
                personWebsite.innerHTML = ` ${json.website} `;
                personCompany.innerHTML = ` name: ${json.company.name}, catchPhrase: ${json.company.catchPhrase}, <br>
                                                bs: ${json.company.bs} `;
            });
    });
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('modal-on')) {
        closeModal();
        personId.innerHTML = "";
        personName.innerHTML = "";
        personUsername.innerHTML = "";
        personEmail.innerHTML = "";
        personAdress.innerHTML = "";
        personPhone.innerHTML = "";
        personWebsite.innerHTML = "";
        personCompany.innerHTML = "";
    }
});

addName();

// functions

function addName() {
    name.forEach((btn, i) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${i+1}`)
            .then(response => response.json())
            .then(json => {
                name[i].innerHTML = ` ${json.name} `;
            });
    });
}

function closeModal() {
    modal.classList.add('modal-off');
    modal.classList.remove('modal-on');
   
}

function openModal() {
    modal.classList.add('modal-on');
    modal.classList.remove('modal-off');

}
