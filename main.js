function loadjson(file,callback) {
var rawfile= new XMLHttpRequest();
rawfile.overrideMimeType("application/json");
rawfile.open("GET",file,true);
rawfile.onreadystatechange=function(){
  if (rawfile.readyState===4 && rawfile.status=="200") {
    callback(rawfile.responseText);
  }
}
rawfile.send();
}


loadjson("resume.json",function (text) {
 var data =JSON.parse(text);
 // console.log(data);
 basic(data.basics);
});

var main=document.getElementById('mainDiv');
var left=document.getElementById('leftDiv');
var right=document.getElementById('rightDiv');

function basic(basics) {
  // console.log(basics.name);
  var lchild1=document.createElement("div");
}
