var pathname = location.pathname;

var GA_ID = 'UA-98426697-3';


var GA_Host = 'auto';

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', GA_ID, GA_Host);
  ga('send', 'pageview');


//Basic Function
function setTrackPV(nam) {
	ga('send', 'pageview'  , nam);

}

function setTrackEvent(category, action, opt_label) {

	ga('send', 'event', category, action, opt_label);
}

function setTrackButton(opt_label)
{
	setTrackEvent("Button", "click", opt_label)	
}

function  trackOutboundLink(url , label) {

	var label = label || url

   ga('send', 'event', 'outbound', 'click', label, {'hitCallback':
     function () {
     document.location = url;
     }
   });
}

// var mobile = (!/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? false : true);

$(document).ready(function() {
	var mobile = (!/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? false : true);
	$("a").bind("click", function() {

		var _ga = $(this).attr("ga")
		var _href = $(this).attr("href")
		var _target = $(this).attr("target")
		if (_ga != undefined) 
		{
			var aTmp = _ga.split("|");
			setTrackEvent.apply(this,aTmp)
		}

		var _ga_btn = $(this).attr("ga-btn")
		if (_ga_btn != undefined) 
		{
			if (mobile) _ga_btn = _ga_btn.replace("btn_pc_", "btn_m_");
			setTrackButton(_ga_btn)

			if(_href){

				if(_href.indexOf("javascript:") >= 0 || _href.indexOf("#") >= 0 ){
					//return false
				}else if(_target != "_blank"){
					setTimeout(function(){
					document.location = _href;				
					} ,200)

					return false
				}

			}


			
			
		}

		var _ga_btn_link = $(this).attr("ga-btn-link")
		if (_ga_btn_link != undefined) 
		{
			trackOutboundLink(_ga_btn_link)
		}

	});
});