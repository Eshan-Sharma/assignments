let globalId = 1;

function markAsDone(id){
    let btnEle = document.getElementById(id);
    btnEle.children[2].innerHTML = "Done!";
}

function createChild(){
    let btn = document.createElement("button");
    btn.innerHTML = "Mark Done!";
    btn.setAttribute("onClick", `markAsDone(${globalId})`);

    let child = document.createElement("div");
    child.setAttribute("id", globalId++);

    let grandChildTitle = document.createElement("div");
    let domTitle = document.getElementById("title").value;
    grandChildTitle.innerHTML = domTitle;

    let grandChildDesc = document.createElement("div");
    let domDesc = document.getElementById("description").value;
    grandChildDesc.innerHTML = domDesc;

    child.appendChild(grandChildTitle);
    child.appendChild(grandChildDesc);
    child.appendChild(btn)
    return child;
}

function todoAdd(){
    let parent = document.getElementById("container");
    parent.appendChild(createChild());
}