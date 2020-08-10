//buffer 相当于一个数组

const bfr1 = Buffer.alloc(26);

console.log(bfr1);

for(var i = 0; i<26; i++){
    // ascii a == 97
    bfr1[i] = i + 97;
}

console.log(bfr1);
console.log(bfr1.toString());
console.log(bfr1.toString('utf-8'));
