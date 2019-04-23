function makeObj() {
var makeObj = [];
var ascii = GM_getResourceText("ascii").split(/\n/);
makeObj.push({"a":"A", "b":"B", "ans":function(t){return ascii.findIndex(z => z == t);}});
makeObj.push({"a":"B", "b":"C", "ans":function(t){return ascii.findIndex(z => z != t);}});
  console.log('aaa');
return; }
