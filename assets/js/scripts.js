$( document ).ready(function() {
    $('#select-cat').click(function() {
    	console.log('clcik');
    	var elem = $('.dropdown-category');
  		elem.toggleClass('active')
  		elem.parent().find('.input--holder').toggleClass('active-drop')

  		if(elem.hasClass('active')) {
  			elem.slideDown()
  		} else {
  			elem.slideUp()
  		}
  	});

  	$('.category-list li').click(function(e) {
  		var text = $(this).text();
  		$('#select-cat').text(text);
  		$('.dropdown-category').slideUp()
  	});
  	
  	$('#other-category').click(function(e) {
  		$('.modal-con').animate({top : '50%'},{
  			duration: 400,
  			start: function() {
  				$('.modal-wrap').show();
  			}
  		});
  	});

  	$('#modal-close').click(function(e) {
  		$('.modal-con').animate({top : '-100%'},{
  			duration: 400,
  			complete: function() {
  				$('.modal-wrap').hide();
  			}
  		});
  	});

  	$('.modal-category-list li').click(function(e) {
  		var text = $(this).text();
  		$('#select-cat').text(text);
  		$('.modal-con').animate({top : '-100%'},{
  			duration: 400,
  			complete: function() {
  				$('.modal-wrap').hide();
  			}
  		});
  	});

  	
});
