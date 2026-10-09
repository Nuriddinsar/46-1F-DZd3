
// let div = document.createElement("div");

let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");


btn.addEventListener("click", () => {
    let item = document.createElement("li");

    if (input.value === "") {
        input.placeholder = "Please enter a value";
        return;
    }
    item.classList.add("list__item");
    item.innerHTML = `<i>${input.value}</i> <button class="delete">X</button>`;
    list.appendChild(item);
    input.value = "";


    let deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((del) => {
        del.addEventListener("click", (event) => {
            let ded = event.target.closest(".list__item");

            if (ded) {
                ded.remove();
            }
        });
    });
})

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        btn.click();
    }
});





