// import Cleave from "./cleave/cleave.min.js";
/*new Cleave(".calTncnTotal", {
    numeral: true,
}); */
const $ = (e) => document.querySelector(e);

const btnNav = $(".btn_nav");
const contentLeft = $(".content_left");
btnNav.addEventListener("click", function () {
    contentLeft.classList.toggle("show_content_left");
});

//formart currency
function formatCurrency(num, locale = navigator.language) {
    return new Intl.NumberFormat(locale).format(num);
}
const toggleTheme = $(".toggle_theme");
const toggleThemeSun = $(".toggle_theme-sun");
const toggleThemeMoon = $(".toggle_theme-moon");
const htmlEl = $("html");

//button click change theme dark and light
toggleTheme.addEventListener("click", (e) => {
    console.log(e.target.classList);
    function toggleDisplay(params) {
        toggleThemeSun.classList.toggle("hide");
        toggleThemeMoon.classList.toggle("hide");
    }
    if (e.target.classList.contains("toggle_theme-sun")) {
        toggleDisplay();
        htmlEl.attributes["data-bs-theme"].value = "light";
    }
    if (e.target.classList.contains("toggle_theme-moon")) {
        toggleDisplay();
        htmlEl.attributes["data-bs-theme"].value = "dark";
    }
    // e.target.closest(".toggle_theme-sun")
});

//input type range change color
const inputChangeColor = document.querySelector(".form-range");
const root = document.querySelector(":root");
inputChangeColor.addEventListener("input", function name() {
    console.log(inputChangeColor.value);
    root.style.setProperty("--hue", inputChangeColor.value);
});

// =================================================================================
// BS5 TOOLTIP
//=================================================================================
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// =================================================================================
// NUMBER CURRENT
//=================================================================================
//INPUT
const numForm = $(".num");
const numInputEl = $(".num-input");
const addNumResultEl = $(".add_num-result");
let numCurrent = [];

//HANDLE
function addNum(params) {
    numCurrent.push(+numInputEl.value);
    numInputEl.value = "";
    return numCurrent;
}

//OUTPUT
numForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = addNum();
    addNumResultEl.innerHTML = `Số hiện có: ${result.join(" | ")}`;
});

// =================================================================================
// Bài 1: Tính tổng số dương
//=================================================================================
//INPUT
const calTotalPositiveNumForm = $(".calTotalPositiveNum");
const calTotalPositiveNumResultEL = $(".calTotalPositiveNum_result");

//HANDLE
function calMark() {
    let result = 0;
    numCurrent.forEach((e) => {
        if (e > 0) {
            result += e;
        }
    });
    return result;
}

//OUTPUT
calTotalPositiveNumForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = calMark();
    calTotalPositiveNumResultEL.innerHTML = `Kết quả: ${result}`;
});

// =================================================================================
// Bài 2: Tính tổng
//=================================================================================
//INPUT
// const calSumEl = $(".calSum");
// const calSumResultEL = $(".calSum_result");
// const calSumInputXEL = $(".calSum_input-x");
// const calSumInputNEL = $(".calSum_input-n");

//HANDLE
// function calSum() {
//     let x = +calSumInputXEL.value;
//     let n = +calSumInputNEL.value;
//     let count = n;
//     for (let i = 1; i <= count; i++) {
//         if (i > 1) {
//             n = n + Math.pow(x, i);
//         }
//     }
//     return n;
// }

//OUTPUT
// calSumEl.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const result = calSum();
//     calSumResultEL.innerHTML = `Kết quả: ${result}`;
// });

// =================================================================================
// Bài 3: Tính giai thừa
//=================================================================================
//INPUT
// const calFactorialEL = $(".calFactorial");
// const calFactorialResultEL = $(".calFactorial_result");
// const calFactorialNameEl = $(".calFactorialName");

//HANDLE
// function calTncn() {
//     const n = +calFactorialNameEl.value;
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

//OUTPUT
// calFactorialEL.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const result = calTncn();
//     calFactorialResultEL.innerHTML = `Kết quả: ${result}`;
// });

// =================================================================================
// Bài 4: tạo div
//=================================================================================
//INPUT
// const createDivEL = $(".createDiv");
// const createDivResultEL = $(".createDiv_result");

//HANDLE
// function createDiv() {
//     let result = "";
//     for (let i = 1; i <= 10; i++) {
//         if (i % 2 === 0) {
//             //chẵn
//             result += `<div class="alert alert-primary">Div chẵn: ${i}</div>`;
//         } else {
//             //lẻ
//             result += `<div class="alert alert-danger">Div lẻ: ${i}</div>`;
//         }
//     }
//     return result;
// }

//OUTPUT
// createDivEL.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const result = createDiv();
//     createDivResultEL.innerHTML = `<p class='mb-3'>Kết quả: </p>${result}`;
// });
