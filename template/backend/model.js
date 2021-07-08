export default function Model() { 
    var list = [];
    var storageValue = JSON.parse(localStorage.getItem('class'));

    if (storageValue !== null) { 
        list = storageValue;
    }
      
    if (list.length == 0) { // This condition purpose is to not let the inital value be pushed every time the code run
        var initalValue = {
            code: "321",
            desks: "21",
            projector: "available",
            devices: "21",
            chairs: "21",
            floor: "first", 
        }
        list.push(initalValue)
    }

    return {
        addtolist: function (formData) {
            list.push(formData);
            localStorage.setItem('class' , JSON.stringify(list))
        },
        deteleItem: function (formData) {
            
            var index = 0;

            for(var i = 0; i < list.length; i++){
                if (JSON.stringify(formData) === JSON.stringify(list[i])) {
                    index = i
                }
            }

            var ind = list.indexOf(list[index])

            list.splice(ind,1)
            localStorage.setItem('class' , JSON.stringify(list))
        },
        getLastItem: function() {
            return list[list.length - 1];
        },
        getItems: function() {
            localStorage.setItem('class' , JSON.stringify(list))
      
            return list;
        },
    }
};


