const formatName = str => { 
    return (typeof str === "string" ? str[0].toUpperCase() + str.slice(1).toLowerCase() : undefined)
}

module.exports = {formatName} 