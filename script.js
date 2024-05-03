//random number betwen 1 to 3
let randomNumber = Math.floor(Math.random() * 3) + 1;

console.log(randomNumber);

function choose(){
    event.preventDefault(); //prevent default 

    let  inp = document.getElementById("in").value;

    // count++;
    // console.log(count);
    // document.getElementById("count").innerHTML =`No. of Tries: ${count}`;
    
    // if(randomNumber==inp){
    //     //it's the actual value
    //     document.getElementById("content").innerHTML ="Congratulation! You guessed the right number.";
    //     setTimeout(function() {
    //     location.reload();
    //     }, 5000);
    //   return;
    // }
    // if(randomNumber>inp){
    //     //actual value is small
    //     document.getElementById("content").innerHTML = `The number is higher than ${inp}. Try again.`;
        
    // }else{
    //     //acutal value is larger
    //     document.getElementById("content").innerHTML= `The number is smaller than ${inp}. Try again.`;
       
    // }
  }