(function(){
	var app=angular.module("myGem",[]);
	app.controller("myGemStore",function(){
		this.product=gem;
	});

	var gem=[
	{ 
		name: 'Red Paana',
		price: 25,
		canPurchase: true,
		soldOut: false
	},
	{ 	
		name: 'Azurite', 
		price: 2.95,
		canPurchase: true,
		soldOut: true
	},
    { 	
    	name: 'Bloodstone', 
    	price: 5.95,
    	canPurchase: true,
		soldOut: false
    },
    { 
    	name: 'Zircon', 
    	price: 3.95,
    	canPurchase: true,
		soldOut: true
    }
	];
})();