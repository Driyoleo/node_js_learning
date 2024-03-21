let t = 0
const id = setInterval(() => {
    t=t+1
    console.log(t)
}, 1000);
setTimeout(() => {
    clearInterval(id)
}, 5000);