function greeting(name){
    alert('Hello ' + name)
}

function processUserInput(callback){
    var name = prompt('Please enter name');
    callback(name);
}
processUserInput(greeting);