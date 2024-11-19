let data = { email: "", message: "" };
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

document.addEventListener("DOMContentLoaded", () => {
const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    data = JSON.parse(savedData);
    form.elements.email.value = data.email || "";
    form.elements.message.value = data.message || "";
}
});

form.addEventListener("input", (evt) => {
data[evt.target.name] = evt.target.value;
localStorage.setItem(localStorageKey, JSON.stringify(data));
});

form.addEventListener("submit", (evt) => {
evt.preventDefault();

if (!data.email.trim() || !data.message.trim()) {
alert("You should fill both input fields");
return;
}

console.log("Email and message", data);

localStorage.removeItem(localStorageKey);
data = { email: "", message: "" };
form.reset();
});
