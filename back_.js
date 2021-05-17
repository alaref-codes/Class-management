onSubmit()

function onSubmit() { 
    var formData = model();
    view(formData);
    resetForm()
}

function model() { 
    var formData = {};
    formData["code"] = document.getElementById("code").value.trim();
    formData["desks"] = document.getElementById("desks").value.trim();
    formData["projector"] = document.getElementById("projector").value.trim();
    formData["devices"] = document.getElementById("devices").value.trim();
    formData["chairs"] = document.getElementById("chairs").value.trim();
    formData["floor"] = document.getElementById("floor").value.trim();
    return formData;
}


function view(data) {
    if (data["code"] !== "" && data["desks"] !== "" && data["projector"] !== "" && data["devices"] !== "" && data["chairs"] !== "" && data["floor"] !== "" ) {
        var table = document.getElementById("table").getElementsByTagName("tbody")[0];
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.code;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.desks;  
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.projector;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.devices;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.chairs;
        cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.floor;
        // cell7 = newRow.insertCell(6);
        // cell7.innerHTML = '<a onClick="onDelete(this)">مسح</a>';
    }else{
        alert("All the fields are required");
    }   
}
function resetForm() {
    document.getElementById("code").value = "";
    document.getElementById("desks").value = "";
    document.getElementById("projector").value = "";
    document.getElementById("devices").value = "";
    document.getElementById("chairs").value = "";
    document.getElementById("floor").value = "";
}

function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById("table").deletRow(row.rowIndex);
    resetForm();    
}
