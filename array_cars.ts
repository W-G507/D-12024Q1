const cars = ["BMW", "Toyota", "Volvo", "Mersedes Benz", "LADA", "KIA"];
const markCar = 'Volvo';

const carIndex = cars.findIndex(car => car === markCar);

if (carIndex !== -1) {
    // Получаем последнюю букву найденного автомобиля
    const lastLetter = markCar[markCar.length - 1];
    
    // Проверяем индекс и выводим соответствующее сообщение
    if (carIndex > 26) {
        console.log(`Индекс больше 26. Последняя буква марки ${markCar}: ${lastLetter}`);
    } else {
        console.log(`Найдена ${markCar} под индексом ${carIndex}`);
    }
}