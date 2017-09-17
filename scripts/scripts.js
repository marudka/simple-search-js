"use strict";

const array = [];
const input = document.querySelector(".search");
const searchResult = document.querySelector(".suggestions");

const endpoint = "http://localhost:3000/cities";
fetch(endpoint)
    .then(result => result.json())
    .then((result) => {
        array.push(... result);
    });

function filterData() {
    const matchArray = searchValue(this.value, array);
    searchResult.innerHTML = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place[0].replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place[2].replace(regex, `<span class="hl">${this.value}</span>`);
        return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${place[4]}</span>
                </li>
            `;
    }).join('');
}

function searchValue(value, array) {
    console.log(array);
    return array.filter((item) => {
        console.log(item);
        const regex = new RegExp(value, "gi");
        return item[0].match(regex) || item[1].match(regex);
    });
}

input.addEventListener("keyup", filterData);
input.addEventListener("change", filterData);