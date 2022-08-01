const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinabar"];

const colorChoice = () => {
    html = '';
    html += `
        <button class="color-button ${colorList[0]} active" >
        </button>
        `;

    for (i = 1; i < colorList.length; i++) {
        html += `
        <button class="color-button ${colorList[i]}" >
        </button>
        `;
    }
    document.querySelector('#colorContainer').innerHTML = html;
}


window.onload = colorChoice;

document.getElementsByClassName('color-button pallet active').onclick = () =>{
    console.log('lam sao bay gio');
}
