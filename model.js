export default function Model() { 
    var list = JSON.parse(localStorage.getItem('class'));
    // var list = [
    //     {
    //     code :"first",
    //     desks:"23",
    //     projector:"available",
    //     devices:"23",
    //     chairs:"43",
    //     floor:"dsdf"
    //     } 
    // ];  
    
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
            // for (var item = 0; item < list.length; item++){
            //     localStorage.setItem('class' , JSON.stringify(list[item]))
            // }
            localStorage.setItem('class' , JSON.stringify(list))
            return list;
        },
    }
};
