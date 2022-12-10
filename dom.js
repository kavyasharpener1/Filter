var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItem);

//Add Item
function addItem(e){
    e.preventDefault();
    
    //get input value
    var newItem = document.getElementById('item').value;
    var newDesc = document.getElementById('description').value;
    //create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(newDesc));
    
    //Create delete element
    var deleteBtn = document.createElement('button');
    //Add class to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node to dlete button
    deleteBtn.appendChild(document.createTextNode('X'));
    //append delete to li
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);

}

//Remove Item
function removeItem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
   } 
}

//Filter Item
function filterItem(e){
    var text = e.target.value.toLowerCase();
    //get li tag values
    var items = itemList.getElementsByTagName('li');
    //convert list to array
    Array.from(items).forEach(function(item){
        var itemName = item.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}