"use strict";

// 1) Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які починаються на http://

console.log(
  "\nЗАВДАННЯ №1 - Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які починаються на http://:\n"
);

const WEB_PROTOCOL = "http://";

const stringsHref = [
  "http://example.com&quot;",
  "https://openai.com&quot;",
  "ftp://website.com&quot;",
  "http://google.com&quot;",
  "https://stackoverflow.com&quot;",
  "http://github.com&quot;",
  "http://youtube.com&quot;",
  "https://wikipedia.org&quot;",
  "ftp://server.net&quot;",
  "http://facebook.com&quot;",
  "https://amazon.com&quot;",
  "http://twitter.com&quot;",
  "https://linkedin.com&quot;",
  "ftp://host.com&quot;",
  "http://reddit.com&quot;",
  "https://medium.com&quot",
];

console.log(
  stringsHref.filter((stringHref) => stringHref.startsWith(WEB_PROTOCOL))
);

// 2) Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які закінчуються на .html

console.log(
  "\nЗАВДАННЯ №2 - Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які закінчуються на .html:\n"
);

const FILE_FORMAT = ".html";

const fileNames = [
  "index.html",
  "styles.css",
  "script.js",
  "about.html",
  "contact.html",
  "home.html",
  "blog-post-1.html",
  "blog-post-2.html",
  "services.html",
  "portfolio.html",
  "projects.html",
  "gallery.html",
  "faq.html",
  "terms.html",
  "privacy-policy.html",
];

console.log(fileNames.filter((fileName) => fileName.endsWith(FILE_FORMAT)));

// 3) Дано рядок: 'abcde abcde abcde abcde'. Замініть у ній перший символ кожного слова на '!'

console.log(
  "\nЗАВДАННЯ №3 - Дан рядок: 'abcde abcde abcde abcde'. Замініть у ній перший символ кожного слова на '!':\n"
);

const STRING_TASK3 = "abcde   abcde abcde   abcde";
const NEW_REPLACE_STRING = "!";

console.log(STRING_TASK3, "- оригінальний рядок");

// Варіант №1_______________________________________________________________________________

const FIRST_LETTER_TO_REPLACE = "a";

console.log(
  STRING_TASK3.replaceAll(FIRST_LETTER_TO_REPLACE, NEW_REPLACE_STRING),
  "- варіант №1"
); // !bcde   !bcde !bcde   !bcde

// Варіант №2_______________________________________________________________________________

/**
 * Функція, яка приймає рядок і змінює перший символ кожного слова на другий параметр
 * @param {string} str
 * @param {string} newStr
 * @returns {string}
 */
const changeFirstWordLettersOnNewString = (str, newStr) =>
  str
    .split(" ")
    .map((word) => (word ? newStr + word.slice(1) : word))
    .join(" ");

console.log(
  changeFirstWordLettersOnNewString(STRING_TASK3, NEW_REPLACE_STRING),
  "- варіант №2"
); // !bcde   !bcde !bcde   !bcde

// 4) Створіть функцію, яка приймає рядок і повертає кількість голосних літер у ньому

console.log(
  "\nЗАВДАННЯ №4 - Створіть функцію, яка приймає рядок і повертає кількість голосних літер у ньому:\n"
);

const STRING_TASK4 = "Привіт, світ!";

/**
 * Функція, яка приймає рядок і повертає кількість голосних літер у ньому
 * @param {string} str
 * @returns {number}
 */
const countVowelsAmount = (str) =>
  str
    .toLowerCase()
    .split("")
    .filter(
      (letter) =>
        letter === "а" ||
        letter === "e" ||
        letter === "є" ||
        letter === "и" ||
        letter === "і" ||
        letter === "ї" ||
        letter === "о" ||
        letter === "у" ||
        letter === "ю" ||
        letter === "я"
    ).length;

console.log("Рядок:", STRING_TASK4);
console.log("Кількість голосних у рядку:", countVowelsAmount(STRING_TASK4)); // 3

// 5) Створіть функцію, яка перевіряє, чи є рядок паліндромом

console.log(
  "\nЗАВДАННЯ №5 - Створіть функцію, яка перевіряє, чи є рядок паліндромом:\n"
);

const STRING_TASK5 = "Я       несу гусеня";

/**
 * Функція повертає true, якщо рядок-параметр є паліндромом
 * @param {string} str
 * @returns {boolean}
 */
const checkIsStringPalindrome = (str) => {
  const strLowerCaseWithoutSpaces = str.replaceAll(" ", "").toLowerCase();

  return (
    strLowerCaseWithoutSpaces ===
    strLowerCaseWithoutSpaces.split("").reverse().join("")
  );
};

console.log("Рядок:", STRING_TASK5);
console.log("Рядок є паліндромом:", checkIsStringPalindrome(STRING_TASK5)); // true

// (*) - 6) Створіть функцію, яка знаходить найдовше слово у рядку і повертає його.

console.log(
  "\nЗАВДАННЯ №6 - Створіть функцію, яка знаходить найдовше слово у рядку і повертає його:\n"
);

const STRING_TASK6_1 =
  "Створіть функцію,                      яка знаходитьзнаходить найдовше слово у рядку і повертає його";
const STRING_TASK6_2 =
  "Я хочу знайти найдовше                    слово у рядку";
/**
 * Функція, яка знаходить найдовше слово у рядку і повертає його.
 * @param {string} str
 * @returns {string}
 */
const getMostLongWord = (str) =>
  str
    .split(" ")
    .filter((word) => word)
    .toSorted((word, anotherWord) => anotherWord.length - word.length)
    .at(0);

console.log('Рядок: "', STRING_TASK6_1, '"');
console.log("Найдовше слово:", getMostLongWord(STRING_TASK6_1), "\n"); // знаходитьзнаходить

console.log('Рядок: "', STRING_TASK6_2, '"');
console.log("Найдовше слово:", getMostLongWord(STRING_TASK6_2)); // найдовше
