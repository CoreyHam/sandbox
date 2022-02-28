function drawStairs(n) {
  for(let i = 0; i < n; i++){
    let step = ' '.repeat(i) + 'I'
    console.log(step)
  }
}

drawStairs(3)