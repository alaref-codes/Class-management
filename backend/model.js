export default function Model() { 
    var list = [];
    list = list.push(JSON.parse(localStorage.getItem('class'))); 
    // var inital = {
    //     code: "321",
    //     desks: "21",
    //     projector: "available",
    //     devices: "21",
    //     chairs: "21",
    //     floor: "first",
    // }
    // list.push(inital)
    
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
            // for (var item = 0; item < list.length; item++){ Delete this
            //     localStorage.setItem('class' , JSON.stringify(list[item]))
            // }
            localStorage.setItem('class' , JSON.stringify(list))
            // list = JSON.parse(localStorage.getItem('class')); 
            return list;
        },
    }
};
