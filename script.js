function findMinimumCost() {
  const input = document.getElementById("input").value;
  const ropes = input.split(",").map(Number);

  // Function to compare two numbers
  function compareNumbers(a, b) {
    return a - b;
  }

  // Sort the ropes in ascending order
  ropes.sort(compareNumbers);

  let totalCost = 0;

  while (ropes.length > 1) {
    // Connect the two shortest ropes
    const newRope = ropes[0] + ropes[1];
    totalCost += newRope;

    // Remove the two shortest ropes and add the new rope
    ropes.splice(0, 2, newRope);

    // Sort the ropes again
    ropes.sort(compareNumbers);
  }

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = totalCost;
}
