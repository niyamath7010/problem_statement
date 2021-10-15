
//Q1. Write a function to get the sum of n natural numbers.

function natural(n){
    if(n<10){
        console.log(`${n} is a natural number between 1 to 10`)
    }
    else
    {
        console.log(`${n} is not a natural number`)
    }
}


//Q2. write the function to check if the number is even or not by using only if else statement

    function find(even){
        if(even % 2==0){
            console.log(`${even} is an even number`)
        }
        else
        {
            console.log(`${even} is an odd number`)
        }
    }


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

   //Q7. WAF to search an element in the array?


        var find_array=["niyamath","ayush","danish","virat","dhoni"]

        find_array[1]
        











