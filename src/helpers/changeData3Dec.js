    const dateObj = new Date();

    const month = dateObj.getUTCMonth() +1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    // const hour = dateObj.getUTCHours();
    // const minute = dateObj.getUTCMinutes();
    // const sec = dateObj.getUTCSeconds();

    const dateLimit = {
        day : 3,
        month : 12,
        year : 2022
    }

    // console.log(hour + " " + minute + " " + sec)

    // let newdate = year + "/" + month + "/" + day;

    // if(year === 2022 && month === 12 && day >= 3){
    //   console.log("Not Yet")
    // }
    
    // console.log("Test ", newdate)

    const check3Dec = () => {
        if(year >= dateLimit.year && month >= dateLimit.month && day >= dateLimit.day){
            return true;
        }
        else {
            return false;
        }
    }

    export default check3Dec;