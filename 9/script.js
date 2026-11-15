
const dq = (selector) => document.querySelector(selector);
const dqAll = (selector) => document.querySelectorAll(selector);
let name = dq("#name");
let photo = dq("#photo");
let bio = dq("#bio");
let skills = dqAll("#skills li");
let link = dq("#link");

const profile = {
    name: "John Doe",
    bio: "I am a web developer.",
    photo: "https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg",
    link: "https://www.google.com/imgres?q=%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0&imgurl=https%3A%2F%2Fwww.perunica.ru%2Fuploads%2Fposts%2F2011-10%2F1319832745_0_6065c_b70de565_l.jpg&imgrefurl=https%3A%2F%2Fwww.perunica.ru%2Fvsako%2F5368-chto-oznachaet-vasha-avatarka.html&docid=9mCNCp48dBOQRM&tbnid=pfuX15Qt-m5dbM&vet=12ahUKEwjFo9CcqYmYAxWUQvEDHXMcJBwQnPAOegQILxAA..i&w=360&h=398&hcb=2&ved=2ahUKEwjFo9CcqYmYAxWUQvEDHXMcJBwQnPAOegQILxAA",
    skills: ["JavaScript", "CSS", "HTML"]
}

name.textContent = profile.name;
photo.src = profile.photo;
bio.textContent = profile.bio;
skills.forEach((skill, index) => {
    skill.textContent = profile.skills[index];
});
link.href = profile.link;
link.textContent = "Моя любимая страница";
