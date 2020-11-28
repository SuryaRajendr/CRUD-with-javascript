var submit = document.getElementById("submit");

if(selectedRow == null) {
submit.addEventListener('click',displayDetails);
}
else{
    updateRecord();
    clear();
}
submit.addEventListener('click',clear);


var row = 1;
var selectedRow =null;
function displayDetails() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    // var ele = document.getElementsByName("gender"); 
    // var  opGender = null;        
    // for(i = 0; i < ele.length; i++) { 
    //     if(ele[i].checked) 
    //      opGender=ele[i].value;
        
    // }
    var dob = document.getElementById("dob").value;
    var qualification = document.getElementById("qualification").value;
    // var checkedValue=document.getElementsByClassName('chkbx');
    // for(var i=0;i<checkedValue.length;i++)
    // {
    // if(checkedValue[i].type=='checkbox')
    // {
    //     checkedValue[i].checked=true;
    // }
    // }
    
    selectElement = document.querySelector('#ddselect'); 
                      
    output =  
      selectElement.options[selectElement.selectedIndex].value;
    var phonenumber = output+document.getElementById("phonenumber").value;
    var mail = document.getElementById("mail").value;
    var experience = document.getElementById("experience").value;

    if(!name||!lastname||!dob||!qualification||!phonenumber||!mail||!experience) {
        alert("please fill all the boxes");
        return;
    }

    var display =document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5= newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
   

    cell1.innerHTML = name;
    cell2.innerHTML = lastname;
    //cell3.innerHTML = opGender;
    cell3.innerHTML = dob;
    cell4.innerHTML = qualification;
    cell5.innerHTML = phonenumber;
    cell6.innerHTML = mail;
    cell7.innerHTML = experience;
    cell8.innerHTML = `<a onClick ="onEdit(this)">Edit</a>
                        <a onClick ="onDelete(this)">Delete</a>`;

    row++;
    
    
}

function clear (td){
    document.getElementById('name').value = "";
    document.getElementById('lastname').value = "";
    //document.getElementsByName("gender").value = "";
    // var ele = document.getElementsByName("gender");
    // for(var i=0;i<ele.length;i++)
    //    ele[i].checked = false;
    document.getElementById('dob').value = "";
    document.getElementById('qualification').value = "";
    // var checkedValue=document.getElementsByClassName('chkbx');
    // for(var i=0;i<checkedValue.length;i++)
    // {
    // if(checkedValue[i].type=='checkbox')
    // {
    //     checkedValue[i].checked=true;
    // }
    // }
    document.getElementById('phonenumber').value = "";
    document.getElementById('mail').value = "";
    document.getElementById('experience').value = "";
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
   // document.getElementsByName("gender").value = selectedRow.cells[2].innerHTML;
    
    document.getElementById("dob").value =selectedRow.cells[2].innerHTML;
    document.getElementById("qualification").value =selectedRow.cells[3].innerHTML;
    document.getElementById("phonenumber").value =selectedRow.cells[4].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[5].innerHTML;
    document.getElementById("experience").value = selectedRow.cells[6].innerHTML;


}

function updateRecord(){

selectedRow.cells[0].innerHTML =  document.getElementById("name").value ;
selectedRow.cells[1].innerHTML =  document.getElementById("lastname").value;
selectedRow.cells[2].innerHTML =  document.getElementById("dob").value;
selectedRow.cells[3].innerHTML =  document.getElementById("qualification").value;
selectedRow.cells[4].innerHTML =  document.getElementById("phonenumber").value;
selectedRow.cells[5].innerHTML =  document.getElementById("mail").value;
selectedRow.cells[6].innerHTML =  document.getElementById("experience").value;

}

function onDelete(td) {
    row = td.parentElement.parentElement;
    if(confirm('Are sure want to delete this record')){
        document.getElementById("display").deleteRow(row.rowIndex);
        clear();
    }
 
}