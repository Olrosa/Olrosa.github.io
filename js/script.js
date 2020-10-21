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
    personCompany = document.querySelector('#company'),
    user = {};

let valuesUser;





// modal


modalOn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        addValueInObject(i);
        openModal();  
        
                personId.innerHTML = ` ${valuesUser[0]} `;
                personName.innerHTML = ` ${valuesUser[1]} `;
                personUsername.innerHTML = ` ${valuesUser[2]} `;
                personEmail.innerHTML = ` ${valuesUser[3]} `;
                personAdress.innerHTML = ` ${valuesUser[4]} `;
                personPhone.innerHTML = ` ${valuesUser[5]} `;
                personWebsite.innerHTML = ` ${valuesUser[6]} `;
                personCompany.innerHTML = ` ${valuesUser[7]} `;
            
    });
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('modal-on')) {
        closeModal();

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

function addValueInObject(i) {
    fetch(`https://jsonplaceholder.typicode.com/users/${i+1}`)
            .then(response => response.json())
            .then(json => {
                user.personId = `${json.id}`;
                
                user.personName = ` ${json.name} `;
                user.personUsername = ` ${json.username} `;
                user.personEmail = ` ${json.email} `;
                user.personAdress = `street: ${json.address.street}; suite: ${json.address.suite}; city: ${json.address.city} <br>;
                                            zipcode: ${json.address.zipcode}; geo: lat ${json.address.geo.lat}, lng ${json.address.geo.lng}; `;
                user.personPhone= ` ${json.phone} `;
                user.personWebsite = ` ${json.website} `;
                user.personCompany = ` name: ${json.company.name}, catchPhrase: ${json.company.catchPhrase}, <br>
                                                bs: ${json.company.bs} `;
            });
    valuesUser = Object.values(user);
}



