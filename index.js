const formatName = str => { 
    return (typeof str === "string" ? str[0].toUpperCase() + str.slice(1).toLowerCase() : undefined)
}

const addNewProperty = (obj, props, value) => {
    if (typeof props !== "string" || value==undefined || value==null) return false
    if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
        if (obj[props]) return false
        obj[props]= value
        return true
    }
    return false
}

module.exports = {formatName, addNewProperty} 