function calculateMinCost() {
  const ropeLengthsInput = document.getElementById('rope-lengths');
  const ropeLengths = ropeLengthsInput.value.split(',').map(Number);

  // Sort the rope lengths in non-decreasing order
  ropeLengths.sort((a, b) => a - b);

  let totalCost = 0;

  // Connect the ropes by repeatedly combining the two smallest ropes
  while (ropeLengths.length > 1) {
    // Take the two smallest ropes
    const smallestRope1 = ropeLengths.shift();
    const smallestRope2 = ropeLengths.shift();

    // Combine the ropes and calculate the cost
    const combinedRope = smallestRope1 + smallestRope2;
    totalCost += combinedRope;

    // Insert the combined rope back into the sorted array
    ropeLengths.push(combinedRope);
    // Re-sort the array (optional if we insert the combined rope at the correct position)
    ropeLengths.sort((a, b) => a - b);
  }

  // Display the minimum cost of connecting the ropes
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Minimum cost of ropes: ${totalCost}`;
}
