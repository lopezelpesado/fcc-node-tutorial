const os = require("os");

const user = os.userInfo();

const uptime = os.uptime();

console.log(`The system up time is ${uptime} seconds, user is ${user.username}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);