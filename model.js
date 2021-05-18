export default function Model() { 
    var list = [
        {
        code :"first",
        desks:"23",
        projector:"available",
        devices:"23",
        chairs:"43",
        floor:"dsdf"
        }  
    ];  
    
    return {
        addtolist: function (formData) {
            list.push(formData);
        },
        deteleItem: function (formData) {
            list.pop(formData);
        },
        getLastItem: function() {
            return list[list.length - 1];
        },
        getItems: function() {
            return list;
        },
    }
};
