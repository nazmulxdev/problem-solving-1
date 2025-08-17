// problem 10 : pingPong Challenge

function pingPong() {
  try {
    let result = [];
    for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("PingPong");
      } else if (i % 3 === 0 && i % 5 !== 0) {
        result.push("Ping");
      } else if (i % 5 === 0 && i % 3 !== 0) {
        result.push("Pong");
      } else {
        result.push(i);
      }
    }
    return result.join();
  } catch (error) {
    return null;
  }
}
