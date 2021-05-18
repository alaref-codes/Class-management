import Model  from '/model.js'
import View  from '/view.js'
import Controller  from '/controller.js'

var model = new Model();
var view = new View();

var data = model.getItems();
for (var i = 0; i < data.length; i++){
    view.addtoList(data[i])
}

var controller = new Controller(model, view);
controller.init(); 
