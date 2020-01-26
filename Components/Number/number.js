function loadText(id, text){
    document.getElementById(id).innerHTML = `${text}`
}

function main() {
    loadText("number", 1);
}