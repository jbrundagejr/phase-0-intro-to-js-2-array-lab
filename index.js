let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) { 
    cats.push("Ralph") 
}
function destructivelyPrependCat(name) { 
    cats.unshift("Bob") 
}
function destructivelyRemoveLastCat() { 
    cats.pop() 
}
function destructivelyRemoveFirstCat() { 
    cats.shift() 
}
function appendCat(name) { 
    let moreCatsAtEnd = [...cats, "Broom"]; 
    return moreCatsAtEnd 
}
function prependCat(name) { 
    let moreCatsAtBeginning = ["Arnold", ...cats]; 
    return moreCatsAtBeginning 
}
function removeLastCat() { 
    return cats.slice(0, cats.length -1) 
}
function removeFirstCat() { 
    return cats.slice(1) 
}