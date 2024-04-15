const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");
const progressBar = document.querySelector(".progress-bar");
const progressLabel = document.querySelector(".progress-label");
const progressValue = document.querySelector(".progress-value");

const allQuotes = [
  'Raise the bar by completing your goals!',
  'Well begun is half done!',
  'Just a step away, keep going!',
  'Whoa! You just completed all the goals, time for chill :D',
]

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
  first: {
    name: "",
    completed: false,
  },
  second: {
    name: "",
    completed: false,
  },
  third: {
    name: "",
    completed: false,
  },
};



let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;
console.log(completedGoalsCount);

//when reoload the page then the code run
progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount}/3`;
progressLabel.innerText = allQuotes[completedGoalsCount]

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const allGoalsAdded = [...inputFields].every(function (input) {
      return input.value;
    });

    if (allGoalsAdded) {
      checkbox.parentElement.classList.toggle("completed");

      const inputId = checkbox.nextElementSibling.id;
      // console.log(inputId)
      allGoals[inputId].completed = !allGoals[inputId].completed; //togle completed: true or false
      console.log(allGoals[inputId]);

      localStorage.setItem("allGoals", JSON.stringify(allGoals)); //add in localStorage

      // progressValue.style.width = "33.33%";
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      console.log(completedGoalsCount);
      progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/3`;
      progressLabel.innerText = allQuotes[completedGoalsCount]
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  // localStorage concepts......
  // console.log(allGoals[input.id])
  input.value = allGoals[input.id].name; // data ko save karenge  or input mein show save karenge local storage se
  if (allGoals[input.id].completed) {
    input.parentElement.classList.add("completed");
  }

  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });

  input.addEventListener("input", (e) => {

    // this condition check when input tick we can not edit the input 
    if (allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }


    // localStorage concepts......
    // console.log(e.target.id)
    // console.log(input.id)

    // allGoals[input.id] = "heloo"
    // allGoals[input.id] = input.value
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    };
    console.log(allGoals);

 
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
