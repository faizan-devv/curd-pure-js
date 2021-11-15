function getDataFromForm()
{   const user={'name':'', 'mail':'', 'password':'', 'rollno':''};
    let name = document.getElementById("name");
    let email = document.getElementById("mail");
    let password = document.getElementById("password");
    let rollno = document.getElementById("rollno");
    user.name=name;
    user.mail=email;
    user.password=password;
    user.rollno=rollno;
    return user;
}
function getDataFromEditor()
{   const user={'name':'', 'mail':'', 'password':'', 'rollno':''};
    let name = document.getElementById("name1");
    let email = document.getElementById("mail1");
    let password = document.getElementById("password1");
    let rollno = document.getElementById("rollno1");
    user.name=name;
    user.mail=email;
    user.password=password;
    user.rollno=rollno;
    return user;
}


function tablePopulator() {
    const userData=getDataFromForm();
   if(userData.name.value===''||userData.mail.value===''||userData.password.value===''||userData.rollno.value==='')
   {
    alert('Fill Out The Form completely');
   }
   else
   {
    let table = document.getElementById("tbody");
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= userData.name.value;
    row.insertCell(1).innerHTML= userData.mail.value;
    row.insertCell(2).innerHTML= userData.rollno.value;
    row.insertCell(3).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(4).innerHTML= '<input type="button" value = "Edit" id="edit-btn" onClick="Javacsript:displayEditor(this)">';
   }

}
function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    console.log(obj);
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
}
function displayEditor(obj){
    rowElement=obj;
    let form = document.getElementById("form");
    let editor = document.getElementById("editor");
    form.classList.remove("displayblock");
    form.classList.add("displaynone");
    editor.classList.remove("displaynone");
    document.getElementById("editor").innerHTML= '<h1>Edit Here</h1>'+
    '<label for="name">Name:</label><br>'+
    '<input type="text" id="name1" name="name" required><br>'+
    '<label for="email1">Email</label><br>'+
    '<input type="email" id="mail1" name="email" required><br>'+
    '<label for="password">Password:</label><br>'+
    '<input type="password" id="password1" name="password"required> <br>'+
    '<label for="rollno">Roll No</label><br>'+
    '<input type="number" id="rollno1" name="rollno"> <br>'+
    '<input  type="button" id="submit" value="save" onclick="editRow(rowElement)"> <br></br>';
}
function editRow(obj) {
    let index = obj.parentNode.parentNode.rowIndex;
    console.log("I am here");
    let userData=getDataFromEditor();
    let row = document.getElementById("tbody").rows[index-1].cells;
    if(userData.name.value!=='')
    row[0].innerHTML = userData.name.value;
    if(userData.mail.value!=='')
    row[1].innerHTML = userData.mail.value;
    if(userData.rollno.value!=='')
    row[2].innerHTML = userData.rollno.value;
}

