// =============== 1 ===============
function alert(text) {
  return console.log(text);
}

alert('text');

// =============== 1 ===============



// =============== 2 ===============
var console = {
  log: function (text) {
    return alert(text);
  }
};

console.log('text inside');
// =============== 2 ===============



// =============== 3 ===============
var bool = false;
if (bool.toString().length !== 4) {
	//
}
// =============== 3 ===============