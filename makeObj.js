var makeObj = [];
makeObj.push({"a":"A", "b":"B", "ans":function(t,i){return this.a + t.replace(new RegExp(i,'g'),'Z');}, "outside":function(){return outside;}});
makeObj.push({"a":"B", "b":"C", "ans":function(t,i){return t.replace(new RegExp(i,'g'),'Y') + this.b;}, "outside":function(){return inside;}});
