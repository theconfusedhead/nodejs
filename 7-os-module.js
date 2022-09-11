const os = require('os');
// info about current user
const user = os.userInfo();
console.log(user);

// method return system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);
console.log(user);

const currentOS = {
    name:os.type(),
    released:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);