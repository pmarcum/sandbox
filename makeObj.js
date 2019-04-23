var makeObj = [];
makeObj.push({"a":"A", "b":"B", "ans":function(t,i){return this.a + t.replace(new RegExp(i,'g'),'Z');}});
makeObj.push({"a":"B", "b":"C", "ans":function(t,i){return t.replace(new RegExp(i,'g'),'Y') + this.b;}});
