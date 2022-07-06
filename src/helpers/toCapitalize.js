const toCapitalize = (string) => {
    let arr = string.split(" ")
    let res = []
    arr.length > 0 && arr.map((item) => (
        res.push(item.charAt(0).toUpperCase() + item.slice(1))
    ))

    return(res.join(" "))
}

export default toCapitalize;