const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

let state = {
    arrNumQuestion: [],
    arrNumAnswer: {},
};
function setState(fnCallback) {
    const newState = fnCallback(state);
    state = newState;
}

//btn click nav mobile
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
const tooltipTriggerList = $$('[data-bs-toggle="tooltip"]');
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

//HANDLE
function addNum() {
    setState((e) => {
        return {
            ...e,
            arrNumQuestion: [...e.arrNumQuestion, +numInputEl.value],
        };
    });
    console.log("👙  state: ", state);
    numInputEl.value = "";
    return state.arrNumQuestion;
}

//OUTPUT
numForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = addNum();
    addNumResultEl.innerHTML = `Số hiện có: ${result.join(" | ")}`;

    const key = `Bài_${currentBtn.slice(-1)}`;
    highlight(key);
});
btnClear.addEventListener("click", () => {
    // arrNumQuestion = [];
    setState((e) => {
        return {
            ...e,
            arrNumQuestion: [],
        };
    });
    console.log("👙  state: ", state);
    addNumResultEl.innerHTML = `Số hiện có: `;
});

// =================================================================================
// EVENT CLICK BTN
//=================================================================================
let currentBtn = "Bài 1";
//obj này để lưu thông tin những bài tập đã có kết quả

//xử lý khi click lại btn bài đã có kết quả
function handleBtn(e) {
    const arrList = [...e.target.classList];
    const textBtnClick = e.target.textContent.trim();
    const key = `Bài_${textBtnClick.slice(-1)}`;

    if (!arrList.includes("nav-link")) return;
    if (textBtnClick === currentBtn) return;
    currentBtn = textBtnClick;
    addNumResultEl.innerHTML = `Số hiện có: ${state.arrNumQuestion.join(" | ")}`;

    highlight(key);
}

function highlight(key, arrIndex = false) {
    //lưu thông tin bài tập đã có kết quả
    if (arrIndex) {
        state.arrNumAnswer[`${key}`] = arrIndex;
        setState((e) => {
            return {
                ...e,
                arrNumAnswer: {
                    ...e.arrNumAnswer,
                    [key]: arrIndex,
                },
            };
        });
        console.log("👙  state: ", state);
    }

    if (!state.arrNumAnswer.hasOwnProperty(key)) return;
    let result = [...state.arrNumQuestion];
    state.arrNumAnswer[key].forEach((e) => {
        result[e] = `<span class="text-danger">${result[e]}</span>`;
    });
    // console.log(result);
    addNumResultEl.innerHTML = `Số hiện có: ${result.join(" | ")}`;
}

// hiển thị màu kết quả và lưu kết quả đó vào arrNumAnswer
function focusNumCurrent(key, arrIndex) {
    let result = [...state.arrNumQuestion];
    arrIndex.forEach((e) => {
        result[e] = `<span class="text-danger">${result[e]}</span>`;
    });
    addNumResultEl.innerHTML = `Số hiện có: ${result.join(" | ")}`;

    //lưu thông tin bài tập đã có kết quả
    state.arrNumAnswer[`${key}`] = arrIndex;
}

const btnParent = $(".content_left");
btnParent.addEventListener("click", handleBtn);

export { $, state, focusNumCurrent, highlight };
