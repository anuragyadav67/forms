

function handleRegister(event){
    event.preventDefault();
    var formData = new FormData(event.target);
    for (let [name, value] of formData.entries()) {
        console.log(name +' - '+ value)        
    }
}