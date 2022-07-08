const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fadeOut = async (music) => {
    for (let i = 1; i < 10; i++) {
        // console.log(1 / i);
        music.volume = 1 / i;
        await delay(30);
    }
}

const fadeIn = async (music) => {
    for (let i = 10; i > 1; i--) {
        // console.log(1 / i);
        music.volume = 1 / i;
        await delay(10);
    }
}

// module.exports = {fadeIn, fadeOut};
export {fadeIn, fadeOut};