function prepare_breakfast() {
    let coffee_promise = new Promise((resolve, reject) => resolve("coffee ready"));
    let heatPan_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Heated pan");
        }, 1000);
    });
    let egg_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Finished frying bacon with Egg");
        }, 1000);
    });
    let FryBacon_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Finished frying bacon");
        }, 1000);
    });
    let ToastBread_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Toast bread");
        }, 1000);
    });
    let JamBread_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Prepare jam");
        }, 1000);
    });
    let PourJuice_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mix Juice");
        }, 1000);
    });
    

    let combine_promise = Promise.all([coffee_promise, egg_promise,heatPan_promise, FryBacon_promise, ToastBread_promise, JamBread_promise, PourJuice_promise]);
    return combine_promise;
}

async function morning() {
    let result = await prepare_breakfast();
    console.log(result);
}

morning();