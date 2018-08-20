let counter = [0, 0]
let Count = {
  updateCount: function (id, val) {
    let newCounter = counter;
    let result = 0;
    newCounter[id] = val;
    counter = newCounter;
    counter.forEach((step) => {result = result + step});
    return result;
  },
  createStepHelper: function () {
    let newCounter = counter;
    newCounter.push(0);
    counter = newCounter;
  }
}

export default Count;
