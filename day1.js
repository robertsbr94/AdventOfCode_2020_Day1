const fs = require('fs');

let input = fs.readFileSync('Input.txt').toString();

input = input.split('\n');
input = input.map(x => parseInt(x));

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
        if (input[j] === input[i]) {
            continue;
        } else {
            for (let k = 0; k < input.length; k++) {
                if (input[k] === input[i] || input[k] === input[j]) {
                    continue;
                } else {
                    if (input[i] + input[j] + input[k] === 2020) {
                        console.log(input[i] * input[j] * input[k]);
                    }
                }
            }
        }
    }
}