!function(){
var testObj = [];
testObj.push({"param1":"A", "param2":"B", "answer": function(){return this.param1}});
testObj.push({"param1":"1", "param2":"2", "answer": function(){return this.param1}});
testObj.push({"param1":"z", "param2":"y", "answer": function(){return this.param1}});
return testObj;}();
