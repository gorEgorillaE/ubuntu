const logs = [

{
name:"subiquity-server-debug.log",
file:"logs/install-logs-2026-07-11.2/subiquity-server-debug.log"
},

{
name:"curtin-install.log",
file:"logs/install-logs-2026-07-11.2/curtin-install.log"
},

{
name:"journal",
file:"logs/install-logs-2026-07-11.2/journal"
}

];


const container = document.getElementById("files");


logs.forEach(log => {

let div=document.createElement("div");

div.className="file";


let button=document.createElement("button");

button.innerText="Visa "+log.name;


let pre=document.createElement("pre");

pre.className="hidden";


button.onclick=()=>{

if(pre.classList.contains("hidden")){

fetch(log.file)
.then(response=>response.text())
.then(text=>{
pre.textContent=text;
pre.classList.remove("hidden");
});

}
else{

pre.classList.add("hidden");

}

};


div.appendChild(button);
div.appendChild(pre);

container.appendChild(div);


});
