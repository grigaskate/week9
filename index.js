// 1. Зарплата вечернего уборщика в городской поликлинике 40000 рублей, а педагога по вокалу 22000 рублей. Выведите в консоль, сколько может зарабатывать вечерний уборщик, имея голос и педагогическое образование?

const salaryCleaner = 40000;
const salaryTeacher = 22000;
console.log(
  `Вечерний уборщик, имея голос и педагогическое образование может зарабатывать ${
    salaryCleaner + salaryTeacher
  } рублей`
);

// 2. Сложите слово 'Владивосток' и число 2000, а также добавьте между ними пробел, чтобы получилось название известной песни. Результат выведите в консоль.

console.log(`Название известной песни: ${"Владивосток " + 2000}`);

// 3. Прокрастинируя дома, Русалка 128 минут переписывалась в мессенджере, 254 минуты лайкала фотокарточки, 137 минут читала статьи ВКонтакте и 201 минуту смотрела стендапы на YouTube.
// Выведите в консоль, сколько часов прокрастинировала Русалка.

const messMinutes = 128;
const likeMinutes = 254;
const vkMinutes = 137;
const youtubeMinutes = 201;
const minutesInHour = 60;
const totalMinutes = messMinutes + likeMinutes + vkMinutes + youtubeMinutes;
const procHours = totalMinutes / minutesInHour;
console.log(`Русалка прокрастинировала ${procHours} часов`);

// 4. Возведите число 2 в 5 степень.

console.log(`Число 2 в 5 степени равно ${2 ** 5}`);

// 5. Выведите в консоль строку: "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"

console.log(
  "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"
);

// 6. Склейте значение двух переменных и выведите на экран значение Привет, Кот.

const greetings = "Привет";
const name = "Кот";
alert(`${greetings}, ${name}`);

// Задание 7.

let time;
console.log(time);
time = 34;
console.log("Старт поездки. Осталось минут: " + time);
time -= 15;
console.log("Немного сторис в соцсетях. Осталось минут: " + time);
time -= 10;
console.log("Немного не новостей, но событий. Осталось минут: " + time);
time = 0;
console.log("Вы приехали. Добро пожаловать в Москву");

// Задание 8.

let fahrenheit = 451;
let celsius = (fahrenheit - 32) / 1.8;
console.log(
  `${fahrenheit} градуса по Фаренгейту — это ${celsius} градуса по Цельсию.`
);
