// question one



var sum = (items.reduce(function(a,b){
return a + b.price
}, 0) / items.length).toFixed(2)

//question two

var priceRange = items.filter(function(val){
	if (val.price > 14.00 && val.price < 18.00){
		return val
	}
}).map(function(val){
	return val.title
})


 //question three

 var gbp = items.filter(function(val){
 	return val.currency_code === "GBP"
 })
 var answer3html=""
 gbp.forEach(function(val){
 	answer3html += `${val.title} costs &pound;${val.price}\n`
 })




//question four



var wood = items.filter(function(val) {

	if(val.materials.includes('wood')) {

		return val
	}

}).map(function(val){

	return val.title
	
})




// question five

var answer5html = ""
var numberItems = items.filter(function(val){
	return val.materials.length >=8
}).forEach(function(val){
	answer5html +=`${val.title}\n\n`
	val.materials.forEach(function(material){
		answer5html += `${material}\n`
	})
})


//question six


var whoMade = items.filter(function(val){
	if(val.who_made === "i_did"){
		return val
	}
}).map(function(val){
	return val.title 
})





//console.log(priceRange)



//console.log(wood)

// console.log(gbp[0].title, gbp[0].price)

var answer1 = document.querySelector("#answer1")
answer1.innerHTML = `The average is ${sum}`


var answer2 = document.querySelector("#answer2")
answer2.innerHTML = `${priceRange}`

var answer3 = document.querySelector("#answer3")
answer3.innerHTML = answer3html

var answer4 = document.querySelector("#answer4")
answer4.innerHTML = `${wood}`

var answer5 = document.querySelector("#answer5")
answer5.innerHTML = answer5html

var answer6 = document.querySelector("#answer6")
answer6.innerHTML = `${whoMade}`
