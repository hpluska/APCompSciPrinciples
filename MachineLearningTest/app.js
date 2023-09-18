const network = new brain.NeuralNetwork();
network.train([
  { input:{height:65, weight:135} , output:{adult:1}},
  { input:{height:70, weight:185}, output:{adult:1}},
  { input:{height:60, weight:95}, output:{child: 0}}, 
  { input:{height:48, weight:65}, output:{child:0}}
]);
const result = network.run({height:63, weight:125});
console.log(result)
console.log("The chance you are an adult = " + result["adult"])
console.log("The chance you are a child = " + result["child"])

