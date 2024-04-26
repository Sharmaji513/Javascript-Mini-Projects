

const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const description = document.querySelector(".description").value;
  const category = document.querySelector("#Select-Categorey").value;
  const amount = document.querySelector(".amount").value;

  if (document && category && !isNaN(amount)) {
    const addExpense = document.createElement("tr");

    console.log(addExpense);
    addExpense.innerHTML = `<td>${description}</td>
                              <td>${category}</td>
                              <td>${amount}</td>`;

    expenseList.appendChild(addExpense);


    document.querySelector(".description").value ="";
    document.querySelector("#Select-Categorey").value = "";
    document.querySelector(".amount").value = "";
  } else {
      alert('Please fill out all fields with valid Data')
  }
});
