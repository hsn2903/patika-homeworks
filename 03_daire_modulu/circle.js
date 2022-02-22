function circleArea(r) {
  console.log("Circle Area : ", Math.PI * (r * r));
}

function circleCircumference(r) {
  console.log("Circle Circumference : ", 2 * Math.PI * r);
}

// export
module.exports = { circleArea, circleCircumference };
