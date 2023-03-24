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

// =================================================================================
// Bài 5: Tìm số chẵn cuối cùng
//=================================================================================
//INPUT
const findEvenNumFinalEL = $(".findEvenNumFinal");
const findEvenNumFinalResultEl = $(".findEvenNumFinal_result");

//HANDLE
function findNumPositiveMin() {
    let result = "Không có số chẵn";
    numCurrent.forEach((e) => {
        if (e % 2 === 0) {
            result = e;
        }
    });
    return result;
}

//OUTPUT
findEvenNumFinalEL.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = findNumPositiveMin();
    findEvenNumFinalResultEl.innerHTML = `Kết quả: ${result}`;
});

// =================================================================================
// Bài 6: Đổi chỗ
//=================================================================================
//INPUT
const reversePositionNumEL = $(".reversePositionNum");
const reversePositionNumResultEl = $(".reversePositionNum_result");
const reversePositionNum1El = $(".reversePositionNum-1");
const reversePositionNum2El = $(".reversePositionNum-2");

//HANDLE
function reversePositionNum() {
    let result = "Không có số chẵn";
    const i1 = +reversePositionNum1El.value;
    const i2 = +reversePositionNum2El.value;
    result = [...numCurrent];
    [result[i2], result[i1]] = [result[i1], result[i2]];
    return result;
}

//OUTPUT
reversePositionNumEL.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = reversePositionNum();
    reversePositionNumResultEl.innerHTML = `Mảng sau khi đổi: ${result}`;
});

// =================================================================================
// Bài 7: Sắp xếp tăng dần
//=================================================================================
//INPUT
const sortUpEL = $(".sortUp");
const sortUpResultEl = $(".sortUp_result");

//HANDLE
function sortUp() {
    const result = [...numCurrent];

    // SẮP XẾP TỪ BÉ ĐẾN LƠN
    // result.sort((a, b) => a - b);
    for (let i = 0; i < result.length - 1; i++) {
        let min = i;

        //lặp [1...4] - [2...4] - [3...4]
        // vòng lặp thu hẹp dần nhờ vào n = i + 1
        for (let n = i + 1; n < result.length; n++) {
            if (result[n] < result[min]) {
                min = n;
            }
        }

        //hoán đổi
        [result[min], result[i]] = [result[i], result[min]];
    }
    return result;
}

//OUTPUT
sortUpEL.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = sortUp();
    sortUpResultEl.innerHTML = `Mảng sau khi sắp xếp: ${result}`;
});

// =================================================================================
// Bài 8: Tìm số nguyên tố đầu tiên
//=================================================================================
//INPUT
const findPrimeNumFirstEL = $(".findPrimeNumFirst");
const findPrimeNumFirstResultEl = $(".findPrimeNumFirst_result");

//HANDLE
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return -1;
}
function findPrimeNum() {
    let result = -1;
    result = numCurrent.find((e) => {
        return isPrime(e);
    });
    result = result || -1;
    return result;
}

//OUTPUT
findPrimeNumFirstEL.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = findPrimeNum();
    findPrimeNumFirstResultEl.innerHTML = `Kết quả: ${result}`;
});

// =================================================================================
// Bài 9: Đếm số nguyên tố
//=================================================================================
//INPUT
const countIntegerNumEL = $(".countIntegerNum");
const countIntegerNumResultEl = $(".countIntegerNum_result");

//HANDLE
function countInteger() {
    result = -1;
    numCurrent.forEach((e, i) => {
        if (Number.isInteger(e)) {
            result = i;
        }
    });
    return result + 1;
}

//OUTPUT
countIntegerNumEL.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = countInteger();
    countIntegerNumResultEl.innerHTML = `Kết quả: ${result}`;
});

// =================================================================================
// Bài 10: So sánh số lượng số dương và số âm
//=================================================================================
//INPUT
const comparePositiveNegativeEL = $(".comparePositiveNegative");
const comparePositiveNegativeResultEl = $(".comparePositiveNegative_result");

//HANDLE
function comparePositiveNegative() {
    let result = "";
    const positiveNum = [];
    const negativeNum = [];
    numCurrent.forEach((e) => {
        if (e > 0) {
            positiveNum.push(e);
        }
        if (e < 0) {
            negativeNum.push(e);
        }
    });
    if (positiveNum.length > negativeNum.length) {
        result = "số dương > số âm";
    }
    if (positiveNum.length < negativeNum.length) {
        result = "số âm > số dương";
    }
    if (positiveNum.length === negativeNum.length) {
        result = "số âm bằng số dương";
    }

    return result;
}

//OUTPUT
comparePositiveNegativeEL.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = comparePositiveNegative();
    comparePositiveNegativeResultEl.innerHTML = `Kết quả: ${result}`;
});
