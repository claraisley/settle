data = {
  1: 1.5,
  2: 1.5,
  3: 0.3333333333333333,
  4: 1.2,
  5: 1,
  7: 1.5
  }

  //1 - cat
  //2 - filt
  //3 - fortu
  //4 - mind
  //5 - black
  //6 -over gen
  //7 - should

  const rounded = Object.entries(data).map((trap) => {
    return [trap[0], Math.round(trap[1])]
  })
  console.log(rounded)
