let userTable = document.getElementById("userTable");
let addUserForm = document.getElementById("addUserForm");

function addUser() {
    // Отримуємо значення з полів введення
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;

    // Створюємо новий рядок для таблиці
    let newRow = userTable.insertRow();

    // Додаємо комірки до нового рядка
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    // Заповнюємо комірки значеннями
    cell1.innerHTML = userTable.rows.length - 1; // Номер користувача
    cell2.innerHTML = name;
    cell3.innerHTML = surname;

    // Очищаємо поля вводу після додавання користувача
    addUserForm.reset();
}
