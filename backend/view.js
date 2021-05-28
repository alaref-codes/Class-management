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
            console.log()
           var cells = {};
           for (var elem = 1; elem <= Object.keys(data).length + 1 ; elem++ ){
               cells[`cl${elem}`] = newRow.insertCell(elem - 1); 

           } 
           var cad = ["code","desks","projector","devices","chairs","floor"];
           for (var i = 1; i <= Object.keys(data).length; i++) {
               cells[`cl${i}`].innerHTML = data[DOMstrings[cad[i-1]]];
           }
            cells[`cl${i}`].innerHTML = '<a class="delete">مسح</a>';  
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
                if(element === "btn" || element === "table"){continue} 
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
            selectedData[DOMstrings.code] = selected.cells[0].innerHTML; 
            selectedData[DOMstrings.desks] =  selected.cells[1].innerHTML;
            selectedData[DOMstrings.projector] =  selected.cells[2].innerHTML;
            selectedData[DOMstrings.devices]=  selected.cells[3].innerHTML;
            selectedData[DOMstrings.chairs] =  selected.cells[4].innerHTML;
            selectedData[DOMstrings.floor] =  selected.cells[5].innerHTML;
            return selectedData;
        } 
    }   
};
