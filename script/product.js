(function(){
	var app=angular.module("mystoreModule",[]);
	
	app.directive("productDescription",function(){
    	return {
      		restrict : 'E',
      		templateUrl : 'product-description.html'
    	};
  	});

  	app.directive("productSpec",function(){
    	return {
      		restrict : 'A',
      		templateUrl : 'product-spec.html'
    	};
  	});

  	app.directive("productTabs",function(){
    	return {
      		restrict : 'E',
      		templateUrl : 'product-tabs.html',
      		controller : function() {
        		this.tab=1;
        		this.setTab=function(setTab){
          			this.tab=setTab;
        		};
        		this.isSet=function(isSet){
          			return this.tab==isSet;
        		};
      		},
      		controllerAs : 'tabs'
    	};
  	});

  	app.directive("productGallery",function(){
    	return {
      		restrict : 'E',
      		templateUrl : 'product-gallery.html',
      		controller : function(){
        		this.current=0;
        		this.setCurrent=function(value){
          			this.current=value || 0;
        		};
      		},
      		controllerAs : 'myGallery'
    	};
  	});
})();