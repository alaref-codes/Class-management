export default function Controller(model,view) { 
    function setupEventListeners () {
        var DOM = view.getDOMstrings();
        document.getElementById(DOM.btn).addEventListener('click', AddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                AddItem();                                                         
            }
        });
        document.addEventListener('click', (e) => {
            if(e.target.classList.contains('delete')) {
                erase(e)
            } 
        })
    }
    
    var AddItem = function () {
        var input = view.getInput();

        if (input.code !== "" && input.desks !== "" && input.projector !== "" && input.devices !== "" && input.chairs !== "" && input.floor !== "" ) {
            model.addtolist(input);
            view.addtoList(model.getLastItem());
            view.resetForm();
        } else {
            alert('you must write something');
        }
    }

    var erase = function (e) {
        var deletedData = view.getSelectedData(e);
        model.deteleItem(deletedData);
        view.erase(e);
    }

    return {
        init: function () {
            var data = model.getItems();
            for (var i = 0; i < data.length; i++){
                view.addtoList(data[i])
            }
            setupEventListeners();
        }
}
};
