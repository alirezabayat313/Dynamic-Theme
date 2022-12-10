const BtnList = document.querySelectorAll(".btn");
const root = document.querySelector(":root");
BtnList.forEach(item => {
    item.addEventListener("click", e => {
        const dataSet = e.target.dataset.color;
        root.style.setProperty("--theme-color",dataSet);
    });
});