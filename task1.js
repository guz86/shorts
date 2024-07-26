var foo = 1;
function bar() { //foo = underfind    
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar();
