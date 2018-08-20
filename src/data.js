let counter = [0, 0]
let Count = {
  updateCount: function (id, val) {
    let newCounter = counter;
    newCounter[id] = val;
    counter = newCounter;
    return counter[0] + counter[1]
  }
}

export default Count;
