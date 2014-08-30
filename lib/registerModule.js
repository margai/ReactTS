var ReactDescriptor = require("react/lib/ReactDescriptor");
var ReactDescriptorValidator = require("react/lib/ReactDescriptorValidator");


module.exports=function(mdl){
    var _exports={};
    Object.defineProperty(mdl,"exports",{
        set:function(val){
            if( typeof val =="function"){
                _exports=createComponent(val)
            }else {
                _exports=val;
            }
        },
        get:function(val){
            return _exports;
        }
    });
}

//TODO ReactDescriptorValidator похоже что убрали
function createComponent(Constructor){
    var descriptorFactory=ReactDescriptor.createFactory(Constructor);
    if ("production" !== process.env.NODE_ENV) {
        var descriptorFactory=ReactDescriptorValidator.createFactory(
            descriptorFactory,
            Constructor.propTypes,
            Constructor.contextTypes
        );
    }
    return descriptorFactory;
}

//попробывать добавить строчку ниже
//module.exports.createComponent=createComponent;