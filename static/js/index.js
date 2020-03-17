$(document).ready(function(){



	function removeOpenClass(){
		$('.all_tabs').each(function(i,el){
			if ($(el).hasClass('open')) {
				$(el).removeClass('open');
			}
		});
	}

	// function hasOpenClass(){
	// 	$('.all_tabs').each(function(i,el){
	// 		if ($(el).hasClass('open')) {

	// 			return 1;
	// 		}
	// 		else{
	// 			return 0;
	// 		}
	// 	});
	// }

	function hasOpenClass() {
		var tabs = document.querySelectorAll('.all_tabs');
		var tabsArr = Array.prototype.slice.call(tabs);
		 for(i = 0 ; i < tabsArr.length ; i++) {
		 	if (tabsArr[i].classList.contains('open')) {
		 		return i+1;
		 	}

		 }
		 return 0;

	}

	$('.js-close').on('click', function(e){
		e.preventDefault();
		removeOpenClass();
	});

	$('.js-open-main_tab_1').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_1').css("display","block");
		setTimeout(function(){ $('.main_tab_1').addClass('open'); }, 500);
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_2').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_2').css("display","block");
		setTimeout(function(){ $('.main_tab_2').addClass('open'); }, 500);
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_3').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_3').css("display","block");
		setTimeout(function(){ $('.main_tab_3').addClass('open'); }, 500);
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});

	$('.js-open-main_tab_4').on('click',function(e){
		e.preventDefault();
		removeOpenClass();
		$('.main_tab_4').css("display","block");
		setTimeout(function(){ $('.main_tab_4').addClass('open'); }, 500);
		$('.tab_link_single').addClass('trans_close');
		$('.perm_header_center').addClass('trans_open');
	});


	$(window).on('scroll',function(){
		if(hasOpenClass() === 0){
		    if(($(window).scrollTop()) > (($('.main').height())-($(window).innerHeight()))){
		    	$('.all_tabs').css("display","none");
		    	$(document.body).css("overflow","hidden");
		    }
		}
		else if(hasOpenClass() === 1){
			if(($(window).scrollTop()) > (($('.main_tab_1').height())-($(window).innerHeight()))){
				$('.main_tab_1').css("display","block");
		    	$('.main_tab_2, .main_tab_3, .main_tab_4').css("display","none");
		    	$(document.body).css("overflow","hidden");
		    }
		}
		else if(hasOpenClass() === 2){
			if(($(window).scrollTop()) > (($('.main_tab_2').height())-($(window).innerHeight()))){
				$('.main_tab_2').css("display","block");
		    	$('.main_tab_1, .main_tab_3, .main_tab_4').css("display","none");
		    	$(document.body).css("overflow","hidden");
		    }
		}
		else if(hasOpenClass() === 3){
			if(($(window).scrollTop()) > (($('.main_tab_3').height())-($(window).innerHeight()))){
				$('.main_tab_3').css("display","block");
		    	$('.main_tab_1, .main_tab_2, .main_tab_4').css("display","none");
		    	$(document.body).css("overflow","hidden");
		    }
		}
		else if(hasOpenClass() === 4){
			if(($(window).scrollTop()) > (($('.main_tab_4').height())-($(window).innerHeight()))){
				$('.main_tab_4').css("display","block");
		    	$('.main_tab_1, .main_tab_2, .main_tab_3').css("display","none");
		    	$(document.body).css("overflow","hidden");
		    }
		}
  });


});


function appearModal(){

	var url = window.location.href;
	if(url.includes('getReceiver')){
		document.getElementById('modalButton').click();
	}
}

function close_btn(){
	console.log('hghnhbh');
	document.querySelector('.navigation__button').click();
}

function loaderFunc() {
    var preloader = document.querySelector('.loading');
    preloader.style.display = 'none';
    appearModal();
}