"use strict";

var A = 6,
	B = 11,
	K = 3; 

function solution(A, B, K) {

return (Math.floor(B/K) - Math.floor((A-1)/K)); 

}

solution(A, B, K);
console.log(solution(A, B, K));