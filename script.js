function firstSequence(x){
	return x = x + 3;
}

function secondSequence(x){
	return x *= 3;
}

function thirdSequence(x){
	if (x % 2 === 0){
		return x -= 4;
	} else {
		return x += 4;
	}
}

console.log(secondSequence(thirdSequence(firstSequence(5))));
