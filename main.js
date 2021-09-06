
console.log("hi man....");

const submit = document.querySelector(".submit-btn");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    const firstNameField = document.getElementById("formGroupExampleInput1");
    let valid = true;

    if (!firstNameField.value) {
        const nameError = document.querySelector(".invalid-first-name");
        nameError.classList.add("visible");
        firstNameField.classList.add("invalid");
        nameError.textContent = "First Name cannot be empty";
        console.log("First Name cannot be empty");
    }
});