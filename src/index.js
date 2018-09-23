module.exports = function getZerosCount(number, base) {
	var zeros = number;
	var tempBase, prime, c, tempNumb;
	tempBase = base;

	for(var i=2; i<=base; i++){
		
		if(tempBase%i == 0){
			prime = 0;
			while(tempBase%i == 0){
				prime++;
				tempBase /= i;
			}

			c = 0;
			tempNumb = number;
			while(tempNumb/i > 0){
				c += parseInt(tempNumb/i);
				tempNumb = parseInt(tempNumb/i);
			}
			zeros = Math.min(zeros, parseInt(c/prime));
		}
	}

	return zeros;
}