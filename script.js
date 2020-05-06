let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answer = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");

appData.expenses[answer] = answer2;

answer = prompt("Введите обязательную статью расходов в этом месяце");
answer2 = prompt("Во сколько обойдется?");

appData.expenses[answer] = answer2;

alert("Ваш бюджет на 1 день: " + appData.budget / 30);
