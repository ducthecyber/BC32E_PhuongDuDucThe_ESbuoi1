//TAO HAM TINH DIEM TRUNG BINH, REST PARAMETER
function average(...inputs) {
    let avg = 0;
    let sum = 0;
    for (const input of inputs) {
        sum += input;
        count = inputs.length;
    }
    avg = sum / count;
    return avg;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));

//TINH DIEM TRUNG BINH KHOI 2
document.getElementById('btnKhoi2').onclick = () => {
    const diemVan = Number(document.querySelector('#inpVan').value);
    const diemSu = Number(document.querySelector('#inpSu').value);
    const diemDia = Number(document.querySelector('#inpDia').value);
    const diemAnh = Number(document.querySelector('#inpEnglish').value); 
    console.log(average(diemVan, diemSu, diemDia,diemAnh));
    const result2 = average(diemVan, diemSu, diemDia,diemAnh).toFixed(2);
    document.querySelector('#tbKhoi2').innerHTML = result2;
}

//TINH DIEM TRUNG BINH KHOI 1
document.getElementById('btnKhoi1').onclick = () => {
    const diemToan = Number(document.querySelector('#inpToan').value);
    const diemLy = Number(document.querySelector('#inpLy').value);
    const diemHoa = Number(document.querySelector('#inpHoa').value);
    console.log(average(diemToan, diemHoa, diemLy));
    const result1 = average(diemToan, diemHoa, diemLy).toFixed(2);
    document.querySelector('#tbKhoi1').innerHTML = result1;
}

