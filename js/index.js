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
const btnClear = $(".add_num-btn-clear");
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
btnClear.addEventListener("click", () => {
    numCurrent = [];
    addNumResultEl.innerHTML = `Số hiện có: `;
});

// =================================================================================
// Bài 1: Tính tổng số dương
//=================================================================================
//INPUT
const calTotalPositiveNumForm = $(".calTotalPositiveNum");
const calTotalPositiveNumResultEL = $(".calTotalPositiveNum_result");

//HANDLE
function TotalPositive() {
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
    const result = TotalPositive();
    calTotalPositiveNumResultEL.innerHTML = `Kết quả: ${result}`;
});

// =================================================================================
// Bài 2: Đếm số dương
//=================================================================================
//INPUT
const calCountPositiveNumEl = $(".calCountPositiveNum");
const calCountPositiveNumResultEL = $(".calCountPositiveNum_result");

// HANDLE;
function countPositive() {
    const result = numCurrent.filter((e) => {
        return e > 0;
    });
    return result.length;
}

//OUTPUT
calCountPositiveNumEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = countPositive();
    calCountPositiveNumResultEL.innerHTML = `Kết quả: ${result}`;
});

// =================================================================================
// Bài 3: Tìm số nhỏ nhất
//=================================================================================
//INPUT
const findNumMinEl = $(".findNumMin");
const findNumMinResultEl = $(".findNumMin_result");

//HANDLE
function countMinNum() {
    let result = numCurrent[0];
    numCurrent.forEach((e) => {
        if (e < result) {
            result = e;
        }
    });
    return result;
}

//OUTPUT
findNumMinEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = countMinNum();
    findNumMinResultEl.innerHTML = `Kết quả: ${result}`;
});

// =================================================================================
// Bài 4: Tìm số dương nhỏ nhất
//=================================================================================
//INPUT
const findNumPositiveMinEL = $(".findNumPositiveMin");
const findNumPositiveMinResultEl = $(".findNumPositiveMin_result");

//HANDLE
function findNumPositiveMin() {
    let result = numCurrent[0];
    numCurrent.forEach((e) => {
        if (e < result && e > 0) {
            result = e;
        }
    });
    return result;
}

//OUTPUT
findNumPositiveMinEL.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = findNumPositiveMin();
    findNumPositiveMinResultEl.innerHTML = `Kết quả: ${result}`;
});
