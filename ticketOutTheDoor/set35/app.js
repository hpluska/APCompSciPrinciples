
var values = [2, 7, 11, 12, 12, 13, 13, 13]; 
var target = 8;   

console.log(binarySearch(values, target));

function binarySearch(data, target) { 
  
    var start = 0;   
    var end = data.length - 1;   
    var count = 0;
    
    while (start <= end)   {    
     count++;
         var mid = Math.floor((start + end) / 2);     /* Calculate midpoint */   
      
         if (target < data[mid])     {       
              end = mid - 1;     
         }     else if (target > data[mid])     {       
              start = mid + 1;     
         }     else     {       
              return mid;     
         }   
    }   
    return count; 
}
    