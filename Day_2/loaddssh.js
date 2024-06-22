var _ = require('lodash');

var data= [8,7,6,5,5,4,3,2,1];

function aa(){
    console.log(_.sortBy(data));
    console.log(_.uniq(data));
    console.log(_.isString("bishwajit"));
    console.log(_.isString(true));
}
aa();
module.exports={
    aa
}