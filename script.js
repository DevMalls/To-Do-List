var input = document.getElementById("item");
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});
function addItem()
{
    if(document.getElementById("item").value.length != 0)
    {
    var newElement = document.createElement("li");
    
    newElement.addEventListener("click", function() {
        newElement.classList.toggle("listClick");
        });
    
    var list = (document.getElementById("item").value.charAt(0)).toUpperCase() + document.getElementById("item").value.slice(1,(document.getElementById("item").value.length));
    var listValue = document.createTextNode(list);
    newElement.appendChild(listValue);
    
    var newButton = document.createElement("button");
    newButton.innerText = "X";
    newButton.setAttribute("id","removeItem");
    newButton.addEventListener("click", function() {
    newElement.remove();
     swal("Message to you", "Text", "success", {
      text: ""+document.getElementById("item").value + " " + "item is successfully deleted",
      button: "Deleted",
    });
      });
   
    newElement.appendChild(newButton);
    document.getElementById("todolist").appendChild(newElement);
    document.getElementById("item").value=""; 
     swal("Message to you", "Your item is successfully addded to the list", "success", {
      button: "Proceed to Next",
    });
    }
    else{
        swal("Message to you", "Sorry, You did not add any item", "warning", {
      button: "Ok",
    });
    }
}