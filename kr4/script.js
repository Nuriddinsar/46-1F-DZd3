
const dq = (s) => document.querySelector(s);
const dqAll = (s) => document.querySelectorAll(s);
const btnM = dq('.btnAdd');
const student__name = dq('.student__name');
const student__ball = dq('.student__ball');
const list = dq('.list');
const totalCountEl = dq('.total-count');
const avgScoreEl = dq('.avg-score');
const inpFilter = dq('.inp-filter');
const sortSelect = dq('.country');

const students = [
    { id: 1, name: "Алина", score: 95 },
    { id: 2, name: "Бекзат", score: 48 },
    { id: 3, name: "Даниэль", score: 72 },
];

function createIdGenerator() {
    let idNum = students.length;

    return function () {
        idNum++;
        return idNum
    };
}

let generateId = createIdGenerator();

function newStudent(name, ball) {
    const newId = generateId();
    students.push({
        id: newId,
        name: name,
        score: ball,
    });
    return newId;
}

function liEl(i, n, b) {
    const color = b > 79 ? 'green' : b > 49 ? 'orange' : 'red';
    const result = b > 79 ? 'Отлично' : b > 49 ? 'Зачёт' : 'Не зачёт';

    return `<li class="list__el" data-id="${i}">
        <div class="liElem">
            <div class="profil"></div>
            <div class="name_id">
                <h3>${n}</h3>
                <p>id: ${i}</p>
            </div>
        </div>
        <div class="liElem">
            <div class="ball_st">
                <h3>${b}</h3>
                <p class="color__bal ${color}">${result}</p>
            </div>
                <button class="btnDell"><img src="imeg/icon.svg" alt="удалить"></button>
        </div>
    </li>`;
}

function renderStudents(data = students) {
    list.innerHTML = data
        .map(st => liEl(st.id, st.name, st.score))
        .join('')

    updateStats()
} renderStudents()

function updateStats() {
    const total = students.length;
    totalCountEl.textContent = total;

    if (total == 0) {
        avgScoreEl.textContent = 0;
        return
    }

    const avg = ((students.reduce((acc, st) => acc + st.score, 0)) / total).toFixed(1);
    avgScoreEl.textContent = avg;
} updateStats();

list.addEventListener('click', (event) => {
    const delBtn = event.target.closest(".btnDell");
    if (!delBtn) return;

    const li = delBtn.closest(".list__el");
    const idToDelete = Number(li.dataset.id);

    const index = students.findIndex((st) => st.id === idToDelete);
    if (index !== -1) {
        students.splice(index, 1);
    }

    renderStudents();
});

btnM.addEventListener('click', () => {
    const nameVal = student__name.value.trim();
    let ballVal = Number(student__ball.value);

    if (nameVal.toLowerCase() === 'нуриддин' || nameVal.toLowerCase() === 'nuriddin') {
        ballVal = 100;
    }

    if (nameVal === "" || student__ball.value === "" || ballVal < 0 || ballVal > 100) {
        return;
    }

    const formattedName = nameVal[0].toUpperCase() + nameVal.slice(1).toLowerCase();

    newStudent(formattedName, ballVal);
    console.log(students);

    student__name.value = "";
    student__ball.value = "80";

    renderStudents()
});

inpFilter.addEventListener('input', () => {
    const query = inpFilter.value.trim().toLowerCase();

    if (query === '') {
        renderStudents();
        return;
    }

    const filtered = students.filter(st =>
        st.name.toLowerCase().includes(query)
    );
    renderStudents(filtered)
})

sortSelect.addEventListener('change', () => {
    const value = sortSelect.value;

    const orderSort = [...students];

    if (value === '2') {
        orderSort.sort((a, b) => b.score - a.score)
    }

    if (value === '3') {
        orderSort.sort((a,b) => a.score - b.score)
    }

    renderStudents(orderSort)
})







function minScore(array, ball) {
    const filterBall = array.filter((a) => a.score >= ball);
    return filterBall;
};
const passed = minScore(students, 50);
console.log(passed);


function sumScores(arr, index = 0) {
    const scores = arr.filter((a, i) => i >= index);
    const summ = scores.reduce((acc, st) => acc + st.score, 0);
    return summ;
}//я не смог придумать как сделать без reduce
console.log(sumScores(students));
console.log(sumScores(students, 2));
