function showRegisterForm() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

// Каттоо процесси
document.getElementById('register').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    
    // Бул жерде каттоо үчүн серверге маалымат жөнөтүү керек
    console.log(`Катталды: ${name}, ${email}, ${password}`);
    alert('Каттоо ийгиликтүү!');
    showLoginForm();
});

// Кирүү процесси
document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Бул жерде кирүү үчүн серверге маалымат жөнөтүү керек
    console.log(`Кирүү: ${email}, ${password}`);
    alert('Кирүү ийгиликтүү!');
});
