var list = document.getElementById("list")

function addTodo(){
var todoItem = document.getElementById("todo-item")
//create li tag with text node
var li = document.createElement("li")
var liText = document.createTextNode(todoItem.value)
li.appendChild(liText)


//create delete button
var dltBtn = document.createElement("button")
var dltText = document.createTextNode("Delete")
dltBtn.setAttribute("class","btn")
dltBtn.setAttribute("onclick","deleteItem(this)")
dltBtn.appendChild(dltText)


//create edit button
var editBtn = document.createElement("button")
var editText = document.createTextNode("Edit")
editBtn.setAttribute("class","btn")
editBtn.setAttribute("onfocus","this.style.backgroundColor='pink'")
editBtn.setAttribute("onBlur","this.style.backgroundColor='orange'")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editItem(this)")


li.appendChild(dltBtn)
li.appendChild(editBtn)

list.appendChild(li) 
todoItem.value = ""
}

function deleteItem(e){
      e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val

}