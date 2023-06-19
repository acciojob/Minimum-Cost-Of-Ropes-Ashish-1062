function calculateMinCost() {
  const input = document.getElementById('input').value;
  const ropes = input.split(',').map(Number);

  // Function to calculate the minimum cost of ropes
  function minimumCostOfRopes(ropes) {
    let minCost = 0;
    const minHeap = new MinHeap();

    // Insert all the ropes into the min heap
    ropes.forEach((rope) => minHeap.insert(rope));

    // Merge the ropes until there is only one rope left in the heap
    while (minHeap.size() > 1) {
      // Extract the two smallest ropes from the heap
      const smallest1 = minHeap.extractMin();
      const smallest2 = minHeap.extractMin();

      // Calculate the cost of merging the two ropes
      const cost = smallest1 + smallest2;

      // Add the cost to the total minimum cost
      minCost += cost;

      // Insert the merged rope back into the heap
      minHeap.insert(cost);
    }

    return minCost;
  }

  // MinHeap class
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    insert(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        this.bubbleUp(parentIndex);
      }
    }

    extractMin() {
      const min = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.sinkDown(0);
      }
      return min;
    }

    sinkDown(index) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest !== index) {
        [this.heap[smallest], this.heap[index]] = [
          this.heap[index],
          this.heap[smallest],
        ];
        this.sinkDown(smallest);
      }
    }
  }

  // Calculate the minimum cost of ropes
  const minCost = minimumCostOfRopes(ropes);

  // Output the result
  const resultDiv = document.getElementById('result');
  resultDiv.innerText = `Minimum cost of ropes: ${minCost}`;
}
