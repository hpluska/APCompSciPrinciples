var sum = 0;
for(var outer = 0; outer < 5; outer++) {

    for(var inner = 0;inner< 8;inner++){

        sum += 1;

    }//end inner loop

}//end outerloop
    
console.log(sum);
var result = "";
for(var row = 10; row > 0; row--){
    for(var col = 0; col < row; col++){
        result += "*";
    }
result += "\n";
}

console.log(result);


var m = 0, k = 0, p = 0;
for(m = 97; m <=195; m++){
    k = k * k + 3 * m;
    p = p + m + 1;
}

var word = "tacocat";
console.log(word.length);

