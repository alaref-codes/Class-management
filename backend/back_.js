import Model  from './model.js'
import View  from './view.js'
import Controller  from './controller.js'

var model = new Model();
var view = new View();
var controller = new Controller(model, view);
controller.init(); 
