// window.onload = function() {
//     document.getElementById("btn").addEventListener("click", onSuِbmit)
//     buildTable(list)
// }

// function onSubmit() { 
//     var formData = Model();
//     View(formData);
//     addtolist(formData)
//     resetForm()
// }

// document.addEventListener('click', (e) => {
//     console.log(e.target);
//     if(e.target.classList.contains('delete')) {
//         onDelete(e)
//     } else {
//         console.log('not')
//     }
// })


function Model() { 
    var list = [
    ];  
    
    return {
        addtolist: function (formData) {
            list.push(formData);
        },
    }
};

function View() {
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
    // var formData = {};
    // formData[DOMstrings.code] = document.getElementById(DOMstrings.code).value.trim();
    // formData[DOMstrings.desks] = document.getElementById(DOMstrings.desks).value.trim();
    // formData[DOMstrings.projector] = document.getElementById(DOMstrings.projector).value.trim();
    // formData[DOMstrings.devices] = document.getElementById(DOMstrings.devices).value.trim();
    // formData[DOMstrings.chairs] = document.getElementById(DOMstrings.chairs).value.trim();
    // formData[DOMstrings.floor] = document.getElementById(DOMstrings.floor).value.trim();

    return {
        addtoList: function (data) {
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
            cell7 = newRow.insertCell(6);
            cell7.innerHTML = '<a class="delete">مسح</a>';
       
        },
        getDOMstrings: function () {
            return DOMstrings;
        },
        getInput: function () {
            return formData;
        }
    }
    
};

function Controller(data,view) { 
    function setupEventListeners () {
        var DOM = view.getDOMstrings();
        // document.querySelector(DOM.btn).addEventListener('click', AddItem);
        document.getElementById(DOM.btn).addEventListener('click', AddItem);
    }


    
    var AddItem = function () {
        var DOM = view.getDOMstrings();
        var input = {};
        input[DOM.code] = document.getElementById(DOM.code).value.trim();
        input[DOM.desks] = document.getElementById(DOM.desks).value.trim();
        input[DOM.projector] = document.getElementById(DOM.projector).value.trim();
        input[DOM.devices] = document.getElementById(DOM.devices).value.trim();
        input[DOM.chairs] = document.getElementById(DOM.chairs).value.trim();
        input[DOM.floor] = document.getElementById(DOM.floor).value.trim();
        // var input;
        // input = view.getInput();
        // if (input.code == ''){
        //     console.log("something");
        // } else {
        //     console.log(input.code);
        // }  
        if (input.code !== "" && input.desks !== "" && input.projector !== "" && input.devices !== "" && input.chairs !== "" && input.floor !== "" ) {
            data.addtolist(input);
            view.addtoList(input);
            // data.getLastItem()
        } else {
            alert('you must write something');
        }
    }

    return {
        init: function () {
            setupEventListeners();
        }
}
};

window.onload = function() {
    data = new Model();
    view = new View();
    controller = new Controller(data, view);
    controller.init(); 
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
    row = td.target.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    resetForm();    
}
