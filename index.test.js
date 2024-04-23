const {formatName, addNewProperty} = require("./index.js");

//tests sur fonction formatName

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

//tests sur fonction addNewproperty

let objToChange = {first: "Naz"}
addNewProperty(objToChange, "last", "Mes")
addNewProperty(objToChange, "first", "Naz2")

let str = "toto"
let koStr = addNewProperty(str, "props", "ko")

let array = [2,3]
let koArray = addNewProperty(array, "props", "ko")

let koNum = addNewProperty(objToChange, 6, "ko")

test ("La fonction addNewProperty renvoit un objet", () => {
    expect (typeof objToChange).toBe("object")
    expect (objToChange).not.toBe(null)
    expect (Array.isArray(objToChange)).not.toBe(true)
})

test ("La fonction addNewProperty rajoute la propriété reçue", () => {
    expect (objToChange.last).toBeTruthy()
    expect (objToChange.last).toBeDefined()
    expect (objToChange).toHaveProperty("last")
})

test ("La fonction addNewProperty n'écrase pas une propriété existante", () => {
    expect (objToChange.first).toBe("Naz")
})

test ("Tous les arguments de la fonction addNewProperty doivent être corrects", () => {
    expect (koStr).toBeFalsy()
    expect (koArray).toBeFalsy()
})

test ("La props envoyée dans la fonction addNewProperty ne doit pas etre un nombre", () => {
    expect (koNum).toBeFalsy()
})