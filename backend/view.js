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
            
//            var cells = {};
//            for (var elem = 1; elem <= 7; elem++ ){
//                cells[`cl${elem}`] = newRow.insertCell(elem - 1); 
//            } 
//
//            // changeing the innerHTML to each cell in the object.
//            for(var i = 1; i <= 7; i++){ // we can repalce <=7 with the object length
//                cells[`cl${elem}`].innerHTML = data.DOMstrings[i+1];
//            }
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
            for (const element in DOMstrings) {
                if(element === "btn" || element === "table"){continue} //to skip first two items in DOMStrigs
                formData[element] = document.getElementById(element).value.trim();
            }
            return formData;
        },
        resetForm: function() {
            for (const element in DOMstrings) {
                if(element === "btn" || element === "table"){continue} //to skip first two items in DOMStrigs
                else document.getElementById(element).value = "";
            }
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
