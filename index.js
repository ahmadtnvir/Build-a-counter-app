let count = 0

function increment(){
    console.log("The button was clicked")
}

function increment(){
    count += 1
    console.log(count)
}

function increment(){
    count += 1
    document.getElementById("count-el").innerHTML = count
}

function decrement(){
    count -= 1
    document.getElementById("count-el").innerHTML = count
}

function reset(){
    count = 0
    document.getElementById("count-el").innerHTML = count
}

function save(){
    let countStr = count + " - "
    document.getElementById("save-el").textContent += countStr
}