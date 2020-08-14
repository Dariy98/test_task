console.log("hello");

// Есть набор чисел в массиве, который представляет количество
// последовательных дней возможного бронирования квартиры, Вы в качестве
// арендодателя хотите выбрать последовательность, которая максимизирует
// количество дней пребывания, однако Вам нужно как минимум 1-дневный
// перерыв между бронированиями для уборки. Написать ф-цию нахождения. Пример:
// [7, 1, 2, 5] => 12
// 7 => Авг 1 - Авг 7
// 1 => Авг 7 - Авг 8
// 2 => Авг 8 - Авг 10
// 5 => Авг 10 - Авг 15

// [3, 6, 4] => 7
// [4, 10, 3, 1, 5] => 15

//  1) что должна возвращать функция?
// ф-ция должна возвратить кол-во дней самой профитной цепочки, в данном примере это 12:
// [7, 1, 2, 5] => 12

//  2) в примере есть ошибка?
//  [7, 1, 2, 5] => 12
// здесь все верно, берем 7 дней, потом паузу на уборку ("минимум 1-дневный перерыв между бронированиями для уборки" по условию), 
//потом еще 5 дней, итого 12, максимальное для заданного массива, т.к., другие варианты дали бы меньшее кол-во дней.
// Задача сводится к нахождению самых профитных цепочек по кол-ву дней, 
//на вход программы подается массив из чисел - кол-ва дней возможного бронирования с учетом 1 дня на уборку между бронированиями, 
//а Вам необходимо составить алгоритм для нахождения самой профитной цепочки, к примеру:
// подаем на вход [2, 4, 4, 3, 3] => получаем 9 (т.к. 2 + 4 + 3 = 9).

const getMaxDays = (arr) => {

    let evenNum = 0 ;
    let oddNum = 0 ;
    let triplets = 0;
    let threePlusEven = 0;
    let oddPlusThree = 0;

    arr.forEach((num, index) => {
        //все чётные индексы
        if(index % 2 === 0) {
            evenNum = evenNum + num;
        }
        //все НЕчётные индексы
        if(index % 2 === 1) {
            oddNum = oddNum + num;
        }
        //каждый третий индекс
        if(index % 3 === 0) {
            triplets = triplets + num;
        }
        //"третий индекс" плюс один чётный индекс
        if(index === 5) {
            threePlusEven = triplets + num;
        }
        //нечётный индекс плюс "третий индекс"
        if(index % 3 === 1) {
            oddPlusThree = oddPlusThree + num;
        }
    })
    
    const data = [evenNum, oddNum, triplets, threePlusEven, oddPlusThree]
    // console.log(evenNum, oddNum, triplets, threePlusEven, oddPlusThree)
    return Math.max.apply(null, data);
}

console.log(getMaxDays([6, 2, 8, 3, 9, 1]))
