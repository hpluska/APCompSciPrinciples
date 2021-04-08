
var values = [1, 2, 3, 4, 5, 8, 8, 8]; 
var target = 8;   

console.log(binarySearch(values, target));

function binarySearch(data, target) { 
  
    var start = 0;   
    var end = data.length - 1;   
    
    while (start <= end)   {     
         var mid = Math.floor((start + end) / 2);     /* Calculate midpoint */   
      
         if (target < data[mid])     {       
              end = mid - 1;     
         }     else if (target > data[mid])     {       
              start = mid + 1;     
         }     else     {       
              return mid;     
         }   
    }   
    return -1; 
}
    