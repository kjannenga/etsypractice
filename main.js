// question one



var sum = (items.reduce(function(a,b){
return a + b.price
}, 0) / items.length).toFixed(2)

//question two

var priceRange = items.filter(function(val){
	if (val.price > 14.00 && val.price < 18.00){ //return item.price > 14 && item.price < 18
		return val
	}
}).map(function(val){
	return val.title
})


 //question three

 var gbp = items.filter(function(val){
 	if (val.currency_code === "GBP"){  // return val.currency_code === "GBP"
 		return val
 	}
 }).map(function(val){
 	return { // return as object
     title: val.title,
     price: val.price.toFixed(2)
   }
 })


//question four



var wood = items.filter(function(val) {

	if(val.materials.includes('wood')) {//return val.materials.indexOf('wood') !== -1

		return val
	}

}).map(function(val){

	return val.title
	
})




// question five


var numberItems = items.filter(function(val){
	//if(val.materials.length >=8){  return val
		return item.materials.length >= 8
		
	
}).forEach(function(item){
	answer5html += `\n${item.title}\n\n`
	item.materials.forEach(function(material){
		abswer5html += '${material}\n'
	})

//.map(function(val){   return {
	//	title: val.title,
	//	materials: val.materials
	//}
})

answer5.innerHTML = answer5html

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
answer1.innerHTML = `The average price is $${sum}`


var answer2 = document.querySelector("#answer2")
answer2.innerHTML = `${priceRange}`

var answer3 = document.querySelector("#answer3")
answer3.innerHTML = `${gbp}`

var answer4 = document.querySelector("#answer4")
answer4.innerHTML = `${wood}`

var answer5 = document.querySelector("#answer5")
answer5.innerHTML = `${numberItems}`

var answer6 = document.querySelector("#answer6")
answer6.innerHTML = `${whoMade}`






