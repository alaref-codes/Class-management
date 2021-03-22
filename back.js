function addRow() {
    var code = document.getElementById('code').value.trim();
    var tables = document.getElementById('tables').value.trim();
    var projector = document.getElementById('projector').value.trim();
    var devices = document.getElementById('devices').value.trim();
    var chairs = document.getElementById('chairs').value.trim();
    var floor = document.getElementById('floor').value.trim();
    
    if (code !== "" && tables !== "" && projector !== "" && devices !== "" && chairs !== "" && floor !== "" ) {

        var table = document.getElementsByTagName('table')[1];
        var newRow = table.insertRow(1);

        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);

        cel1.innerHTML = floor;
        cel2.innerHTML = chairs;
        cel3.innerHTML = devices;
        cel4.innerHTML = projector;
        cel5.innerHTML = tables;
        cel6.innerHTML = code;
    }else{
        alert("All the fields are required");
    }
}

function show() {
    var myForm = document.getElementById('forms');

    var displaySetting = myForm.style.display;

    var formButton = document.getElementById('show');

    if (displaySetting == 'block') {
        myForm.style.display = 'none';
        formButton.innerHTML = 'أضافة قاعة';
    } else {
        myForm.style.display = 'block';
        formButton.innerHTML = 'ماصارش';
    }
}
