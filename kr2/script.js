
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
    item.innerHTML = `<i>${input.value}</i> <div class="p-d"> <button class="pay">✔</button> <button class="delete">X</button> </div>`;
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

    let pay = document.querySelectorAll(".pay");
    let caunt = document.querySelector(".caunt--nam");
    let cauntN = 0;

    pay.forEach((pay) => {
        pay.addEventListener('click', () => {
            cauntN++;
            pay.style.backgroundColor = 'rgb(159, 159, 159)';
            caunt.textContent = cauntN;
            return cauntN;
        })
    })
})

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        btn.click();
    }
});





