const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];


const colorChoice = () => {
    html = '';
    html += `
        <button class="color-button ${colorList[0]} active" onclick="colorHouse('${colorList[0]}')">
        </button>
        `
    for (i = 1; i < colorList.length; i++) {
        html += `
        <button class="color-button ${colorList[i]}" onclick="colorHouse('${colorList[i]}')">
        </button>
        `;
    }
    document.querySelector('#colorContainer').innerHTML = html;
}

window.onload = colorChoice

//tạo hàm thêm class active cho button
const activeButton = () => {

    // Get the container element
var btnContainer = document.getElementById("colorContainer");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("color-button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}


let colorHouse = (a) => {
    document.querySelector('#house').className = 'house' + " " + a
    activeButton()
    console.log(a)
}


