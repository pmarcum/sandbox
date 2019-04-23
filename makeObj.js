var makeObj = [];
var ascii = GM_getResourceText("ascii").split(/\n/);
makeObj.push({"a":"A", "b":"B", "ans":function(t){var tmp = getTheIndex(t,ascii); return tmp;}});
makeObj.push({"a":"B", "b":"C", "ans":function(t){var tmp = getTheIndex(t,ascii); return tmp;}});
function getTheIndex(tt,asc) {return asc.findIndex(z => z == tt);}
