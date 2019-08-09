let promise = new Promise(function(resolve, reject) {
    //keyboard mouse Ajax 定时器
    setTimeout(() => {
        resolve("成功回调...");
    }, 1000);
});

promise.then(
    arg => console.log(arg),
    error => console.log(error)
);