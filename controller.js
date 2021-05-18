export default function Controller(model,view) { 
    function setupEventListeners () {
        var DOM = view.getDOMstrings();
        document.getElementById(DOM.btn).addEventListener('click', AddItem);
        document.addEventListener('click', (e) => {
            if(e.target.classList.contains('delete')) {
                onDelete(e)
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

    var onDelete = function (e) {
        model.deteleItem();
        view.onDelete(e);
    }

    return {
        init: function () {
            setupEventListeners();
        }
}
};
// End of Controller