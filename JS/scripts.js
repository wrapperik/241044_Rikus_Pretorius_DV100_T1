const minusOne = document.querySelector('.minus');
const plusOne = document.querySelector('.plus');
const ticketNumber = document.querySelector('.number');

console.log(minusOne);
console.log(plusOne);

// here im just testing if everthing is working so far.
minusOne.addEventListener('click', function() {
    console.log("Minus button clicked!");
   
  }) ;

  plusOne.addEventListener('click', function() {
    console.log("Plus button clicked!");
    
  }) ;

  //im not sure how to make it do the math and display it in the .number class yet but im working on it

  //this message should only pop-up when all fields have been completed and the form has actually been pushed. 

  function success(){
    alert("Form Submitted! We'll get back to you shortly!");
}



