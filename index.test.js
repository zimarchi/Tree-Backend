const {formatName} = require("./index.js");

let res = formatName("nazim")
let resUndefined = formatName()
let resNumber = formatName(3)

test ("La fonction formatName renvoit un string egal à Nazim", () => {
    expect (typeof res).toBe("string")
    expect (res).toBe("Nazim")
})

test ("Si argument non string alors formatName renvoit undefined", () => {
    expect (resUndefined).toBeUndefined()
    expect (resNumber).toBeUndefined()
})