const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
  },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
  }
];

class Transport {
  constructor(type, brand, price, photo) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    this.photo = photo;
  }
  getInfo() {
  return `<div><span>Тип:</span> ${this.type} <br> <span>Бренд:</span> ${this.brand}</div>`;
  }
  getPrice() {
    return `<div><span>Цена:</span> ${this.price}</div>`;
  }
  getPhoto() {
    return `<img src=${this.photo} />`;
  }
}


class Car extends Transport {
  constructor(type, brand, price, photo, doors) {
    super(type, brand, price, photo);
    this.doors = doors;
  }
  getDoorCount() {
    return `<div><span>Двери:</span> ${this.doors}</div>`;
  }
}


class Bike extends Transport {
  constructor(type, brand, price, photo, maxSpeed,) {
    super(type, brand, price, photo);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return `<div><span>Скорость:</span> ${this.maxSpeed}</div>`;
  }
}

let dataHtml = document.getElementById('data');

let newData = '';

data.forEach((item)=> {
  switch(item.type) {
    case "car":
    const car = new Car(item.type, item.brand, item.price, item.image, item.doors,);
    newData += car.getInfo() + car.getPrice() + car.getDoorCount() + car.getPhoto();
    break;
    case 'bike':
    const bike = new Bike(item.type, item.brand, item.price, item.image, item.maxSpeed,);
    newData += bike.getInfo() + bike.getPrice() + bike.getMaxSpeed() + bike.getPhoto();
    break;
  }
})

dataHtml.innerHTML = newData;





