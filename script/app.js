(function(){
	var app=angular.module("myGem",['mystoreModule']);

	app.controller("myGemStore",['$http',function($http){
		var mydata=this;
    mydata.products=[];
    $http.get('jsondata/my-json-data.json').success(function(data){
        mydata.products=data;
    });
	}]);

  app.controller("myReviewController",function(){
    this.myrev={};
    this.addReview=function(value){
      value.reviews.push(this.myrev);
      this.myrev.createdOn=Date.now();
      this.myrev={};
    };
  });

	/*app.controller("myTabController",function(){
		this.tab=1;
		this.setTab=function(setTab){
			this.tab=setTab;
		};
		this.isSet=function(isSet){
			return this.tab==isSet;
		};
	});*/

	/*app.controller("myGalleryController",function(){
		this.current=0;
		this.setCurrent=function(value){
			this.current=value || 0;
		};
	});*/
  

  /*app.directive("pdfile",function(){
    return {
      restrict : 'E',
      templateUrl : 'pdfile.html'
    }
  });*/
})();