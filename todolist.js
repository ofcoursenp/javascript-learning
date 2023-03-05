window.onload = ()=>{
let keys = Object.keys(localStorage);

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = localStorage.getItem(key);
    div = document.getElementById('todo')
    div.innerHTML = div.innerHTML + 
`    <div class="alert alert-primary container py-3" role="alert">
<h5 id="title">${key}</h5>
<h6 id="desc">${value}</h6>
<button class="btn btn-danger" onclick="remove('${key}')">Remove?</button>
</div>`
}}

function getdata(){

    title = prompt("Title")
    description = prompt("Description")
    if(title !== '' && description != ''){
        localStorage.setItem(title,description)
    }
        div = document.getElementById('todo')
        div.innerHTML = div.innerHTML + 
`    <div class="alert alert-primary container py-3" role="alert">
    <h5 id="title">${title}</h5>
    <h6 id="desc">${description}</h6>
    <button class="btn btn-danger" onclick="remove('${title}')">Remove?</button>
    </div>`
    
}


function remove(title){
    localStorage.removeItem(title)

    
    div = document.getElementById('todo')
    div.innerHTML = ''
    let keys = Object.keys(localStorage);


    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = localStorage.getItem(key);
        div = document.getElementById('todo')
        div.innerHTML = div.innerHTML + 
`    <div class="alert alert-primary container py-3" role="alert">
    <h5 id="title">${key}</h5>
    <h6 id="desc">${value}</h6>
    <button class="btn btn-danger" onclick="remove('${key}')">Remove?</button>
    </div>`
    }

}