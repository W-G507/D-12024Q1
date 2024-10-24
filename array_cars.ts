const cars = ["BMW","Toyota","Volvo","Mersedes Benz","LADA","KIA"]

const markCar = 'Volvo'
    for (let x = 0; x < cars.length; x++){
        if (cars[x] === markCar)
        console.log(`Найдена ${markCar} под инексом ${x}`)
    }