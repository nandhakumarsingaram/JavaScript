var i=2;
var j=2;
var myVar = setInterval(img, 4000);

function img(){
		var pic = document.getElementById("wall-image");
		pic.src = "img"+i+".jpg";
		pic.alt= "image"+i;
		var ico = document.getElementsByClassName("icon");
		for(j=0;j<4;j++){
			if(i==j+1){
				ico[j].src = "circle1.ico";
			}
			else{
				ico[j].src = "circle2.ico";
			}
			
		}
		i=i+1;
		if(i==5)
			i=1;
}

function img_change(j){
	i = j;
	img();
}
