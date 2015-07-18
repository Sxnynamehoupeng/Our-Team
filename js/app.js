function getWindowSize() {
	var size = {};
	size.width = (document.documentElement && document.documentElement.clientWidth) || document.body.clientWidth;
	size.height = (document.documentElement&&document.documentElement.clientHeight) || document.body.clientHeight;
	return size;
}

window.addEventListener('load',function(){
	(function(){
		var size = getWindowSize();
		var team = document.getElementsByClassName('team')[0];
		team.style.height = size.height + 'px';
	})();

	moveBackground(document.body);
	showName();

	(function(){
		var next = document.getElementById('next');
		var currentPage = 1;
		next.addEventListener('click', function(){
			console.log(currentPage);
			if(currentPage == 1){
				var member = document.getElementById('member');
				member.style.display = 'block';
		 		toButton(member);

		 		var persons = member.getElementsByClassName('person');
		 		(function(){
					var len = persons.length;
					var i =0 ;
					(function showPerson(){
						if(i < len){
							setTimeout(showPerson,400);
							persons[i].style.opacity = 1;
							i++;
						}
					})();		 			
		 		})();
			}

			if(currentPage == 2){
				var goal = document.getElementById('goal');
				goal.style.display = 'block';
				var footer = document.getElementsByTagName('footer')[0];
				footer.style.display = 'block';
				toButton(goal);
				document.getElementById('next').style.display = 'none';
			}

	 		currentPage +=1;
		});


		function toButton(node){
			var offsetTop = node.offsetTop;
			var contentHight = document.body.offsetHeight;
			scrollHight =  3000;
			var i = 0;
			(function _toButton(){
				i += 10;
				window.scrollBy(0,10);
				if(i<scrollHight){
					setTimeout(_toButton,10);
				}
			})();
		}
	})();



	// var bg = document.getElementById('bg');
	// bg.addEventListener('click',function(){
	// 	var dialog = document.getElementById('dialog');
	// 	dialog.classList.add('over-box-quit');
	// 	bg.classList.add('box-quit');
	// });

});



function moveBackground(node){
	var size = getWindowSize();
	var xRange = size.width * 0.2; 
	var yRange = size.height*0.2;
	var x=0,y=0;
	var moveToLeft = true;
	var IdofInterval = setInterval(function(){
		node.style.backgroundPosition = x+'px '+y+'px';
		if(moveToLeft==true){
			x -= 1;
			y -= 1;
			if(Math.abs(x)>xRange || Math.abs(y)>yRange){
				moveToLeft = !moveToLeft;
			}
		}else{
			x += 1;
			y += 1;
			if(Math.abs(x)==0 || Math.abs(y) == 0){
				moveToLeft = !moveToLeft;
			}
		}
	},200);
}



function showName(){
	var team = document.getElementsByClassName('team')[0];
	var teamName = team.getElementsByTagName('h1')[0];
	var teamNameMean = team.getElementsByTagName('h2')[0];
	var i = 0;
	!function draw(){
		if(i<100){
			teamName.innerHTML  = ''+(i/100).toFixed(2);
		}else if(i==100){
			teamName.innerHTML  = ''+(i/100).toFixed(0);
		}else if(i==101){
			teamName.innerHTML  = 'Z T O';
		}else if(i == 102){
			teamName.innerHTML = 'Zero To One';
		}else if(i == 103){
			teamNameMean.innerHTML = 'We are on the way of ZTO!';
		}


		if(i<5){
			setTimeout(draw,500);
		}else if(i<95){
			setTimeout(draw,50);
		}else if(i<101){
			setTimeout(draw,500);
		}else if(i<104){
			setTimeout(draw,1000);
		}
		i++;
	}();
}