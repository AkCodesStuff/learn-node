const {readFileSync,writeFileSync} = require('fs')

const first= readFileSync('./content/first.txt','utf-8')
const second= readFileSync('./content/second.txt','utf-8')

console.log(first,second)


//This will overwrite all of the text
writeFileSync('./content/result-sync.txt',`I wrote a poem for you :  ${first} ${second}`)

//This will append the already existing text
//writeFileSync('./content/result-sync.txt',`I wrote a poem for you :  ${first} ${second}`,{flag:'a'})

