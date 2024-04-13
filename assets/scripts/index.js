class Transport{
    constructor(type,price,brand){
        this.type=type;
        this.price=price;
        this.brand=brand;
    }
    getInfo(){
        return (`Type:${this.type}, Brand:${this.brand}`);
    }
    getPrice(){
        return this.price;
    }
}


class Car extends Transport{
    constructor(type,price,brand,doors){
        super(type,price,brand);
        this.doors=doors;
    }
    getDoorsCount(){
        return this.doors;
    }
}

class Bike extends Transport{
    constructor(type,price,brand,maxSpeed){
        super(type,price,brand);
        this.maxSpeed=maxSpeed;
    }
    getMaxSpeed(){
        return this.maxSpeed;
    }
}

    const data = [
        {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        // image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
        },
        {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        // image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
        },
        {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        // image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
        },
        {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        // image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
        }
    ];
// Создаем экземпляры классов Car и Bike
const cars = data.filter(item => item.type === 'car').map(item => new Car(item.type, item.price, item.brand, item.doors));
const bikes = data.filter(item => item.type === 'bike').map(item => new Bike(item.type, item.price, item.brand, item.maxSpeed));

// Функция для вывода информации об объекте в HTML
function displayInfo(info) {
    const infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML = info;
}

// Обработчики событий для кнопок
document.getElementById('car-button').addEventListener('click', function() {
    const carInfo = cars.map(car => `Type: ${car.type}, Brand: ${car.brand}, Doors: ${car.doors}, Price: ${car.price}`).join('<br>');
    displayInfo(carInfo);
});

document.getElementById('bike-button').addEventListener('click', function() {
    const bikeInfo = bikes.map(bike => `Type: ${bike.type}, Brand: ${bike.brand}, Max Speed: ${bike.maxSpeed}, Price: ${bike.price}`).join('<br>');
    displayInfo(bikeInfo);
});
