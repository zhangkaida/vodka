var app = angular.module("app",["ngRoute"]);
app.controller("ctrl",function($scope,$http){
    $scope.fun = function(){
    	var swiper = new Swiper('.swiper-container', {             
   	    pagination: '.swiper-pagination',
   	    autoplay:5000,
   	    paginationClickable: true,
   	    autoplayDisableOnInteraction:false,            
   	    });
    }
    $scope.fun2 = function(){
    	$(".b-ul li").click(function(){
   	  	 $(this).addClass("on").siblings().removeClass("on") 
   	  })
    }
    $scope.fun3 = function(){
    	$("#left").click(function(){
   	  	if ($(".b-img>ul").css("left")=="-960px") {
   	  	  $(".b-img>ul").animate({"left":"0"})   	  		
   	  	}else{
   	  	  $(".b-img>ul").animate({"left":"-960px"})   	  		
   	  		
   	  	}
   	  	
   	  })
   	  $("#right").click(function(){
   	  	if ($(".b-img>ul").css("left")=="-960px") {
   	  	  $(".b-img>ul").animate({"left":"0"})   	  		
   	  	}else{
   	  	  $(".b-img>ul").animate({"left":"-960px"})   	  		
   	  		
   	  	}
   	  	
   	  })
    }
})
app.config(["$routeProvider",function($routeProvider){
    $routeProvider
    .when("/index2",{templateUrl:"index2.html"})
    .when("/index3",{templateUrl:"index3.html"})
    .when("/successful",{templateUrl:"successful.html"})
    .when("/media",{templateUrl:"media.html"})
    .when("/dream",{templateUrl:"dream.html"})
    .when("/about",{templateUrl:"about_us.html"})
    .when("/partners",{templateUrl:"partners.html"})
    .when("/contact",{templateUrl:"contact_us.html"})
    .when("/site_1",{templateUrl:"server/site_1.html"})
    .when("/site_2",{templateUrl:"server/site_2.html"})
    .when("/site_3",{templateUrl:"server/site_3.html"})
    .when("/site_4",{templateUrl:"server/site_4.html"})
    .when("/site_5",{templateUrl:"server/site_5.html"})
    .when("/site_6",{templateUrl:"server/site_6.html"})
	
    .otherwise({
        redirectTo:"index2"
    })
}]);
$(function() {
		$(window).scroll(function() {
			if($(window).scrollTop() > 200)
				$('#go_top').show();
			else
				$('#go_top').hide();
		});
		$('#go_top').click(function() {
			$('html, body').animate({ scrollTop: 0 }, 1000);
		});
		console.log(22);
		$("nav li").on("click",function(){
			$(this).addClass("active").siblings().removeClass("active")
		})
})