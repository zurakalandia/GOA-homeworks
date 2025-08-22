let basic = {
  squats: 70,
  pushUps: 40,
  burpees: 30,
};

let advanced = {
  pullUps: 15,
  plank: "2 min",
  crunches: 35
};

let total = Object.assign({}, basic, advanced);

console.log(total);