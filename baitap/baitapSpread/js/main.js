let text = document.querySelector('.heading').innerHTML;
let chars = [...text]
console.log(chars)

//tạo thẻ span chứa ký tự chữ
html = '';
for (index = 0; index < chars.length; index++) {
    html += `
    <span>
        ${chars[index]}
    </span>
`;
}
document.querySelector('.heading').innerHTML = html;
