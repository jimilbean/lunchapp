import {ipcRenderer} from 'electron';

window.addEventListener("load", ()=>{
    let btn = document.querySelector("#load");
    let target = document.querySelector("#list");

    btn.addEventListener("click", ()=>{
        let list = ipcRenderer.sendSync("loadData");
        list.array.forEach(x => {
            document.createElement("li");
            li.innerHTML = x;
            target.appendChild(li);
        });
    });

    
});