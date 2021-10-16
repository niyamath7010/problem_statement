
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
        var arr=["monday","tuesday","wednessday","thursday","friday","saturday","sunday","day not found"]
            function weakdays(days){
                if(days==1){
                    console.log(arr[0])
                }else{
                    if(days==2){
                        console.log[1]
                    }else{
                        if(days==3){
                            console.log(arr[2])
                        }else{
                            if(days==4){
                                console.log(arr[3])
                            }else{
                                if(days==5){
                                    console.log(arr[4])
                                }else{
                                    if(days==6){
                                        console.log(arr[5])
                                    }else{
                                        if(days==7){
                                            console.log(arr[6])
                                        }else{
                                            if(days>8){
                                                console.log(arr[7])
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }



    //Q6. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using ternary operator only.

    var arr=["monday","tuesday","wednessday","thursday","friday","saturday","sunday","day not found"]

    function find(day){
        (day==1)?console.log(arr[0]):
        (day==2)?console.log(arr[1]):
        (day==3)?console.log(arr[2]):
        (day==4)?console.log(arr[3]):
        (day==5)?console.log(arr[4]):
        (day==6)?console.log(arr[5]):
        (day==7)?console.log(arr[6]):
        console.log(arr[7])
    }
          
            
   //Q7. WAF to search an element in the array?


        var arr=["niyamath","ayush","danish","virat","dhoni"]
            let index=arr.indexOf(1)
            console.log(index)
        

// Q11. WAF to reverse an array.

 //(a):reverse a string

    let number=[0,1,2,3,4,"javascript"]

    let num=number.reverse();

    console.log(num)


//(b):reverse a string and its sentance

let sentance="CSK WON IPL TITLE"

let csk=sentance.split("").reverse().join('')
console.log(csk)




