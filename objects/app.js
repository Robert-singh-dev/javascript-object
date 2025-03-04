// Objects

const vehicle = {
  type: "Bike",
  color: "Black",
  model: "Pulser150",
  tyres: 2,
  engine: function () {
    return "Vrommm!";
  },
};

console.log(vehicle.model);
console.log(vehicle.engine());

// inherit from vehicle object
const twoWheeler = Object.create(vehicle);

// if i don't like this this can get overwrite using twoWheeler object
twoWheeler.engine = function () {
  return "yeapp buddyy!!";
};

// this get inherit from twoWheeler and twoWheeler get inherit from vehicle
const anotherObj = Object.create(twoWheeler);

anotherObj.engine = function () {
  return "lightweight baby!!";
};

console.log(twoWheeler.color);
console.log(twoWheeler.engine());
console.log(anotherObj.tyres);
console.log(anotherObj.engine());
