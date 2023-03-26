import { $, state, highlight } from "./system.js";
// =================================================================================
// Bài 1: Tính tổng số dương
//=================================================================================
//INPUT
const calTotalPositiveNumForm = $(".calTotalPositiveNum");
const calTotalPositiveNumResultEL = $(".calTotalPositiveNum_result");

//HANDLE
function TotalPositive() {
    let result = 0;
    state.arrNumQuestion.forEach((e) => {
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
    const result = state.arrNumQuestion.filter((e) => {
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
    let result = state.arrNumQuestion[0];
    let indexArr = [0];
    state.arrNumQuestion.forEach((e, i) => {
        if (e < result) {
            indexArr[0] = i;
            result = e;
        }
    });
    highlight("Bài_3", indexArr);
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
    let arrIndex = [
        state.arrNumQuestion.findIndex((e) => {
            return e > 0;
        }),
    ];
    let result = state.arrNumQuestion.find((e) => {
        return e > 0;
    });
    state.arrNumQuestion.forEach((e, i) => {
        if (e < 1) return;
        if (e < result) {
            result = e;
            arrIndex[0] = i;
        }
    });
    highlight("Bài_4", arrIndex);
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
function findEvenNumFinal() {
    let result = "Không có số chẵn";
    let indexArr = [0];
    state.arrNumQuestion.forEach((e, i) => {
        if (e % 2 === 0) {
            indexArr[0] = i;
            result = e;
        }
    });
    highlight("Bài_5", indexArr);
    return result;
}

//OUTPUT
findEvenNumFinalEL.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = findEvenNumFinal();
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
    let result = [...state.arrNumQuestion];
    const i1 = +reversePositionNum1El.value;
    const i2 = +reversePositionNum2El.value;

    const length = result.length - 1;
    if (i1 > length || i2 > length) {
        return "vị trí số 1 hoặc số 2 không hợp lệ";
    }
    highlight("Bài_6", [i1, i2]);
    //hoán đổi
    [result[i2], result[i1]] = [result[i1], result[i2]];
    result[i1] = `<span class="text-danger">${result[i1]}</span>`;
    result[i2] = `<span class="text-danger">${result[i2]}</span>`;
    return result.join(" | ");
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
    const result = [...state.arrNumQuestion];

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
    return result.join(" | ");
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
    let arrIndex = [0];

    let result = -1;
    result = state.arrNumQuestion.find((e, i) => {
        return isPrime(e);
    });
    highlight("Bài_8", [state.arrNumQuestion.indexOf(result)]);

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
    let result = -1;
    state.arrNumQuestion.forEach((e, i) => {
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
    state.arrNumQuestion.forEach((e) => {
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
