let addTask = () => {
    let taskInput = document.getElementById('task');
    task = taskInput.value;
    let listItem = document.createElement("li");
    let textNode = document.createTextNode(task);
    //append text in list item
    listItem.appendChild(textNode);
    let crossButton = document.createElement('span');
    let xText = document.createTextNode('X');
    crossButton.appendChild(xText);
    //append cross button in list item
    listItem.appendChild(crossButton);
    let toDoList = document.getElementById("to-do-list");
    toDoList.appendChild(listItem);
    taskInput.value = '';
}

let handleItem = (e) => {
    let toDoList = document.getElementById("to-do-list");
    //clicked on list item -> mark it as completed
    if(e.target.matches("li")){
        let listItem = e.target;
        if(listItem.style.textDecoration == "line-through"){
            listItem.style.textDecoration = "none";
            listItem.style.backgroundColor = "paleturquoise";
        }else{
            listItem.style.textDecoration = "line-through";
            listItem.style.backgroundColor = "#efefef";
        }
    }
    //clicked on cross button -> remove list item from list
    if(e.target.matches("span")){
        toDoList.removeChild(e.target.parentElement);
    }
}