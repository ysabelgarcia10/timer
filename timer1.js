let iteration = 0;

//take user input for the times and put them in an array
input = process.argv.slice(2);

setInterval(() => {
  iteration ++;
  console.log(iteration);
  
  //writes out "." everytime the count includes any numers from the array.
  if (input.includes(iteration.toString())) {
    process.stdout.write('.');
  }
}, 1000);
