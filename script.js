//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
  const inputNumber = document.getElementById('ip').value;

  if (!inputNumber) {
    alert('Please enter a number.');
    return;
  }

  const outputDiv = document.getElementById('output');

  // Promise that resolves after 2 seconds with the input number
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(parseInt(inputNumber));
    }, 2000);
  });

  // Print the result of promise1
  promise1.then((number) => {
    outputDiv.textContent = `Result: ${number}`;
    return number;
  })
  // Chain a second promise that multiplies the number by 2
  .then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number * 2);
      }, 1000);
    });
  })
  // Chain a third promise that subtracts 3 from the number
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number - 3);
      }, 1000);
    });
  })
  // Chain a fourth promise that divides the number by 2
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number / 2);
      }, 1000);
    });
  })
  // Chain a fifth promise that adds 10 to the number
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number + 10);
      }, 1000);
    });
  })
  // Update the text content of the output div with the final result
  .then((number) => {
    outputDiv.textContent = `Final Result: ${number}`;
  })
  // Handle errors and rejections
  .catch((error) => {
    outputDiv.textContent = `Error: ${error}`;
  });
});

