$(document).ready(function () {
    console.log("javascript loaded")
    
    //Zugriff auf das Videoelement
    var myVideo = $("#videoElement");
    var videoFile = "video/00_intro.mp4";
	var timer;
 
	
    $(".hs").hide();
	$(".game").hide();
	$("#kiste").hide();
	
    //Buttons programmieren
    $("#play").on('click', function() {
        myVideo[0].play();
      $(".hs").hide();
    })
    
    $("#pause").on('click', function() {
        myVideo[0].pause();
		$(".hs").hide();
    })
    
    $("#stop").on('click', function() {
        myVideo[0].pause();
        myVideo[0].currentTime=0;
		$(".hs").hide();
    })
	
	$("#skip").on('click', function() {
		myVideo[0].currentTime=50;
	})
 
  
   //Videos verknüpfen
    $(myVideo).on('ended', function() {
        console.log("ended")
		switch(videoFile) {
			case "video/00_intro.mp4":
				videoFile = "video/01_start.mp4";
				$('video source').attr('src', videoFile);
        		$("video")[0].load();
        		$("video")[0].play();
				$(".hs").hide();
				break;
			case "video/01_start.mp4":
				$("#start").css("display", "block");
				$("#next").css("display", "block");
				break;
			case "video/02_buchvor_01.mp4":
				$("#start").css("display", "block");
				$("#prev").css("display", "block");
				$("#next").css("display", "block");
				break;
			case "video/02_buchvor_02.mp4":
				$("#start").css("display", "block");
				$("#prev").css("display", "block");
				break;
			case "video/03_buchzurueck_01.mp4":
				$("#start").css("display", "block");
				$("#next").css("display", "block");
				break;
			case "video/03_buchzurueck_02.mp4":
				$("#start").css("display", "block");
				$("#next").css("display", "block");
				$("#prev").css("display", "block");
				break;
			case "video/04_wirtshaus.mp4":
				$("#money").css("display", "block");
				$("#clock").css("display", "block");
				$(myVideo).css("filter", "blur(5px)");
				break;
			case "video/05_geld.mp4":
				videoFile = "video/07_gericht.mp4";
				$('video source').attr('src', videoFile);
        		$("video")[0].load();
        		$("video")[0].play();
				$(".hs").hide();
				break;
			case "video/06_uhr.mp4":
				videoFile = "video/07_gericht.mp4";
				$('video source').attr('src', videoFile);
        		$("video")[0].load();
        		$("video")[0].play();
				$(".hs").hide();
				break;
			case "video/07_gericht.mp4":
				$(myVideo).css("filter", "blur(5px)");
				$("#plea").css("display", "block");
				$("#silence").css("display", "block");
				break;
			case "video/08_schweigen.mp4":
				$(myVideo).css("filter", "blur(5px)");
				$("#fight").css("display", "block");
				$("#resign").css("display", "block");
				break;
			case "video/09_gnade.mp4":
				$(myVideo).css("filter", "blur(5px)");
				$("#fight").css("display", "block");
				$("#resign").css("display", "block");
				break;
			case "video/10_abhauen.mp4":
				videoFile = "video/12_zigarren.mp4";
				$('video source').attr('src', videoFile);
        		$("video")[0].load();
        		$("video")[0].play();
				$(".hs").hide();
				gameStart();
				break;
			case "video/11_freiwillig.mp4":
				videoFile = "video/12_zigarren.mp4";
				$('video source').attr('src', videoFile);
        		$("video")[0].load();
        		$("video")[0].play();
				$(".hs").hide();
				gameStart();
				break;
			case "video/13_strafe.mp4":
				$("#restart").css("display", "block");
				$("#end").css("display", "block");
				
				break;
		}
		
    })
	
    
    //Events bei Clicks auf Hotspots
	
	//Videostart
	$("#begin").on('click', function () {
		myVideo[0].play();
      	$("#begin").hide();
	})
	
	//Hotspots Buch
    $("#start").on('click', function () {
        videoFile = "video/04_wirtshaus.mp4";
        $('video source').attr('src', videoFile);
        $("video")[0].load();
        $("video")[0].play();
		$(".hs").hide();
	})
	
	$("#next").on('click', function () {
		switch(videoFile) {
			case "video/01_start.mp4":
				videoFile = "video/02_buchvor_01.mp4";
				$('video source').attr('src', videoFile);
				$("video")[0].load();
				$("video")[0].play();
				$(".hs").hide();
				break;
			case "video/02_buchvor_01.mp4":
				videoFile = "video/02_buchvor_02.mp4";
				$('video source').attr('src', videoFile);
				$("video")[0].load();
				$("video")[0].play();
				$(".hs").hide();
				break;
			case "video/03_buchzurueck_01.mp4":
				videoFile = "video/02_buchvor_01.mp4";
				$('video source').attr('src', videoFile);
				$("video")[0].load();
				$("video")[0].play();
				$(".hs").hide();
				break;
		}
	})
	
	$("#prev").on('click', function () {
		switch(videoFile) {
			case "video/02_buchvor_01.mp4":
				videoFile = "video/03_buchzurueck_01.mp4";
				$('video source').attr('src', videoFile);
				$("video")[0].load();
				$("video")[0].play();
				$(".hs").hide();
				break;
			case "video/02_buchvor_02.mp4":
				videoFile = "video/03_buchzurueck_02.mp4";
				$('video source').attr('src', videoFile);
				$("video")[0].load();
				$("video")[0].play();
				$(".hs").hide();
				break;
			case "video/03_buchzurueck_02.mp4":
				videoFile = "video/03_buchzurueck_01.mp4";
				$('video source').attr('src', videoFile);
				$("video")[0].load();
				$("video")[0].play();
				$(".hs").hide();
				break;
		}
	})
	
	$("#restart").on('click', function () {
        videoFile = "video/00_intro.mp4";
        $('video source').attr('src', videoFile);
        $("video")[0].load();
        $("video")[0].play();
		$(".hs").hide();
	})
	
	$("#end").on('click', function () {
        videoFile = "video/14_ende.mp4";
        $('video source').attr('src', videoFile);
        $("video")[0].load();
        $("video")[0].play();
		$(".hs").hide();
	})
	
	
	//Hotspots Gasthaus
	$("#clock").on('click', function () {
		$(myVideo).css("filter", "blur(0px)");
        videoFile = "video/06_uhr.mp4";		
        $('video source').attr('src', videoFile);
        $("video")[0].load();
        $("video")[0].play();
		$(".hs").hide();
		
	})
    
	$("#money").on('click', function () {
		$(myVideo).css("filter", "blur(0px)");
        videoFile = "video/05_geld.mp4";		
        $('video source').attr('src', videoFile);
        $("video")[0].load();
        $("video")[0].play();
		$(".hs").hide();
        
        
    })
	
	//Hotspots Gericht
	$("#plea").on('click', function () {
		$(myVideo).css("filter", "blur(0px)");
        videoFile = "video/09_gnade.mp4";		
        $('video source').attr('src', videoFile);
        $("video")[0].load();
        $("video")[0].play();
		$(".hs").hide();
	})
		
	$("#silence").on('click', function () {
		$(myVideo).css("filter", "blur(0px)");
        videoFile = "video/08_schweigen.mp4";		
        $('video source').attr('src', videoFile);
        $("video")[0].load();
        $("video")[0].play();
		$(".hs").hide();
	})
	
	//Hotspots Gefängnis
  	$("#fight").on('click', function () {
		$(myVideo).css("filter", "blur(0px)");
        videoFile = "video/10_abhauen.mp4";		
        $('video source').attr('src', videoFile);
        $("video")[0].load();
        $("video")[0].play();
		$(".hs").hide();
	})
	
		$("#resign").on('click', function () {
		$(myVideo).css("filter", "blur(0px)");
        videoFile = "video/11_freiwillig.mp4";		
        $('video source').attr('src', videoFile);
        $("video")[0].load();
        $("video")[0].play();
		$(".hs").hide();
	})
	
	//Spielstart	
	function gameStart() {
		$("#explain").show();	
		timer = setTimeout(respond, 8000);
		
	}
	
	function respond() {
		$("#explain").hide()
		$(".game").show();
		gameDuration();
	}
	
	function gameDuration() {
		var randomNr = Math.floor(Math.random() * 30000) + 30000;
		console.log(randomNr);
		timer = setTimeout(gameEnd, randomNr);
	}
	
	function gameEnd() {
		$(".game").hide();
		$(".hs").hide();
		videoFile = "video/13_strafe.mp4";		
        $('video source').attr('src', videoFile);
        $("video")[0].load();
        $("video")[0].play();
		$(".hs").hide();
	}
	
	//Klickspiel
	var dropzones = $('.tabak-dropzone');
	var drags = $('.drag');
	var droppedTabakCount = 0;
	var droppedCigarCount = 0;
	var zigarre = $('#zigarre');
	var kiste = $('#kiste');
	var imagePathPattern = 'img/spiel/kiste_{count}.svg';
	

	drags.on('dragstart', function (event) {
		event.originalEvent.dataTransfer.setData("dragId", event.target.id);
	});

	dropzones.on('dragover', function (event) {
		event.preventDefault();
		$(event.currentTarget).css("opacity", "1");
	});

	dropzones.on('dragleave', function (event) {
		event.preventDefault();
		$(event.currentTarget).css("opacity", "0.3");
	});

	dropzones.on('drop', function (event) {
		event.preventDefault();

		// wenn das Event-Ziel schon ein Image als Child hat, abbrechen
		if($(event.currentTarget).find('img').length > 0) {
			return;
		}

		var dragId = event.originalEvent.dataTransfer.getData("dragId");
		event.target.appendChild(document.getElementById(dragId));
		droppedTabakCount++;

		if(droppedTabakCount === 3) {
			zigarreAnzeigen();
		}
	});

	function zigarreAnzeigen() {
		$(".tabak").hide();
		$(".tabak-dropzone").hide();
		$("#paper1").hide();
		$("#paper").hide();
		$("#zigarre").show();
		$("#kiste").show();
	}

	zigarre.on('dragstart', function (event) {
		event.originalEvent.dataTransfer.setData("cigarId", event.target.id);
	});


	kiste.on('dragover', function (event) {
		event.preventDefault();
	});


	kiste.on('drop', function (event) {
		event.preventDefault();
		droppedCigarCount++;
		var kiste = $(event.currentTarget);
		var imagePath = imagePathPattern.replace('{count}', droppedCigarCount);
		kiste.attr('src', imagePath);
		zigarre.hide();
		resetPlayground();
	});

	function resetPlayground() {
		$('.tabak').show();
		$('.tabak').append($('.tabakhaufen'));	
		$(".tabak-dropzone").show();
		$("#paper1").show();
		$("#paper").show();
		droppedTabakCount = 0;	
	}
	
});
