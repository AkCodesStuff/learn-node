const os=require('os');

//Indo about current user
const user=os.userInfo()
console.log(user);

//returns systems uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}
console.log(currentOS)