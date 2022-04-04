alert(Date());

window.onload=function(){
	var img=document.getElementById("img")
	img.onmouseover=function(){
		img.src="1.jpg";
	}
	img.onmouseout=function(){
		this.src="2.png"
	}
}
function change(){
document.getElementById('one').innerHTML = 'Romeo and Juliet'
}
function popup(){
	alert("alert")

}
function CHANGE(){
var select = document.getElementById('one');
  select.style.backgroundColor = 'purple';
  select.style.fontFamliy = 'Arial';
  select.style.textAlign="left"
}


