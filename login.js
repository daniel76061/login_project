// pobranie pól formularza
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// event handler do przycisku wysyłającego formularz
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    // pobranie danych z pól formularza
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // sprawdzanie, czy dane pobrane z formularza są takie same jak podaliśmy nizej
    if (username === "dan" && password === "test") {
        // jeśli dane się zgadzają wyświetl poniszy komunikat i odświez stronę 
        alert("You have successfully logged in.");
        location.reload();
    } else {
        // jeśli dane nie są prawidłowe to wyświetl błąd
        loginErrorMsg.style.opacity = 1;
    }
})