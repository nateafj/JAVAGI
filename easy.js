
let name1 = "John";
let name2 = "Doe";
let name1Length = name1.length;
let name2Length = name2.length;


if (name1Length > name2Length) {
  console.log(`The name ${name1} is longer than ${name2} by ${name1Length - name2Length} characters`);
} else if (name1Length < name2Length) {
  console.log(`The name ${name2} is longer than ${name1} by ${name2Length - name1Length} characters`);
} else {
  console.log(`The names ${name1} and ${name2} are the same length`);
}
