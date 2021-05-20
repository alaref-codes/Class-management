export default function Model() { 
    var list = [];


    var storageValue = JSON.parse(localStorage.getItem('class'));

    if (storageValue !== null) {
        list = storageValue;
    }

        
    if (list.length == 0) {
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
            var d =  JSON.parse(localStorage.getItem('class'));
            var ind = d.indexOf(formData)
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


