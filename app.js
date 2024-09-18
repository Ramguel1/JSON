const getUsers=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    let res=await response.json();
    let div=``
    var fila=1;
    res.map(user=>{
    if(fila==1){
    div+=`<div class="row">`
    }
    div+=`<div class="col m-3">
    <div class="card border shadow ">
    <div class="card-body">
    <h1>ID: ${user.id}</h1>
    <h3>NAME: ${user.name}</h3><br>
    <h3>CITY: ${user.address.city}</h3><br>
    <h3>STREET: ${user.address.street}</h3><br>
    <h3>SUITE: ${user.address.suite}</h3><br>
    <h3>ZIPCODE: ${user.address.zipcode}</h3><br>
    <h3>BS: ${user.company.bs}</h3><br>
    <h3>CATCHPHRASE: ${user.company.catchPhrase}</h3><br>
    <h3>NAME: ${user.company.name}</h3><br>
    <h3>EMAIL: ${user.email}</h3><br>
    <h3>PHONE: ${user.phone}</h3><br>
    <h3>USERNAME: ${user.username}</h3><br>
    <h3>WEBSITE: ${user.website}</h3><br>
 <a target="_black" class="btn btn-outline-dark" 
        href="https://www.google.com.mx/maps/@${user.address.geo.lat},${user.address.geo.lng},21z?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D">UBICACION</a>
    </div>
    </div>
    </div>`
    if(fila==2){
    div+=`</div>`
    fila=0
    }
    fila++;
    })
    document.querySelector("#divUser").innerHTML=div;
}
getUsers();


/////////////////////////////////////////////////////////////////////////////////
const getUsers2=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/photos');
    let res=await response.json();
    let div2=``
    var fila=1;
    res.map(user=>{
    if(fila==1){
    div2+=`<div class="row">`
    }
    div2+=`<div class="col m-3">
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded ">
    <div class="card-body">
<h3>
    <p>ID: ${user.id}</p>
        <p>TITULO: ${user.title}</p>
        <img src="${user.url}" height="400px" width="400px">
    </div>
    </div>
    </div>
    </h3>
    `
    if(fila==2){
    div2+=`</div>`
    fila=0
    }
    fila++;
    })
    document.querySelector("#divUser2").innerHTML=div2;
}
getUsers2();