
//Q3. Write a function it check if the number is prime or not.


function prime(num){
    if(num<7){
        return "these are the prime number"
    }else{
        return "these are not prime number"
    }
}


// Q4. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using switch case only

function weakend(n){
    let res="";
    
    switch(n){
        case 1:res="its monday today";
        break;
        case 2:res="its tuesday today"
        break;
        case 3:res="its wednessday today"
        break;
        case 4:res="its thursday today"
        break;
        case 5:res="its friday today"
        break;
        case 6:res="its saturday fun"
        break;
        case 7:res="hurrey!!! its sunday funday"
        break;
        default:res="invalid input"
    }
    return res;
}

//Q5. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using If Else only.

        function check(weak){
                if(weak<8){
                    return "yes!! 1 to 7 are weakdays"
                }
                else
                {
                    return "this a invalid weakdays"
                }
        }














