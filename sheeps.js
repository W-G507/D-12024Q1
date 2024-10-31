const sheeps = [0,1,0,1,0,0,1,0,1,0,1,0,1,1,0]
const empty = []

for (let x=0; x < sheeps.length; x++) {
    if (!sheeps[x]){
        empty.push(sheeps[x])
    }
}

console.log(empty)