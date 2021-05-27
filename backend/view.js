export default function View() {
    var DOMstrings = {
        btn: "btn",
        table: "table",
        code: "code",
        desks:"desks",
        projector:"projector",
        devices:"devices",
        chairs:"chairs",
        floor:"floor"
    }
    var formData = {};

    return {
        addtoList: function (data) {
            var table = document.getElementById("table").getElementsByTagName("tbody")[0];
            var newRow = table.insertRow(table.length);
            var cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.code;
            var cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.desks;  
            var cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.projector;
            var cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.devices;
            var cell5 = newRow.insertCell(4);
            cell5.innerHTML = data.chairs;
            var cell6 = newRow.insertCell(5);
            cell6.innerHTML = data.floor;
            var cell7 = newRow.insertCell(6);
            cell7.innerHTML = '<a class="delete">مسح</a>';

        },
        getDOMstrings: function () {
            return DOMstrings;
        },
        getInput: function () {      
            formData[DOMstrings.code] = document.getElementById(DOMstrings.code).value.trim();
            formData[DOMstrings.desks] = document.getElementById(DOMstrings.desks).value.trim();
            formData[DOMstrings.projector] = document.getElementById(DOMstrings.projector).value.trim();
            formData[DOMstrings.devices] = document.getElementById(DOMstrings.devices).value.trim();
            formData[DOMstrings.chairs] = document.getElementById(DOMstrings.chairs).value.trim();
            formData[DOMstrings.floor] = document.getElementById(DOMstrings.floor).value.trim();
            return formData;
        },
        resetForm: function() {
            document.getElementById(DOMstrings.code).value = "";  // Use DOMstrings over here
            document.getElementById(DOMstrings.desks).value = "";
            document.getElementById(DOMstrings.projector).value = "";
            document.getElementById(DOMstrings.devices).value = "";
            document.getElementById(DOMstrings.chairs).value = "";
            document.getElementById(DOMstrings.floor).value = "";
        },
        erase: function(td) {
            var row = td.target.parentElement.parentElement;
            document.getElementById("table").deleteRow(row.rowIndex);
        },
        getSelectedData: function(td) {
            var selected = td.target.parentElement.parentElement;
            var  selectedData = {}
            selectedData[DOMstrings.code] = selected.cells[0].innerHTML;  // Use DOMstrings over here
            selectedData[DOMstrings.desks] =  selected.cells[1].innerHTML;
            selectedData[DOMstrings.projector] =  selected.cells[2].innerHTML;
            selectedData[DOMstrings.devices]=  selected.cells[3].innerHTML;
            selectedData[DOMstrings.chairs] =  selected.cells[4].innerHTML;
            selectedData[DOMstrings.floor] =  selected.cells[5].innerHTML;
            return selectedData;
        } 
    }   
};
