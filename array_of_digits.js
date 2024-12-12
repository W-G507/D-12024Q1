function digitize(n) {
    return [...n + ""].map(Number).reverse()
 }

  console.log(digitize(53124))