/* eslint-disable max-len */
const countDownDate = new Date('Oct 22, 2021 18:00:00').getTime();

// Update the count down every 1 second
export function timer() {
  // Get today's date and time
  const now = new Date().getTime();
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  let message = days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ';
    
  // If the count down is over, write some text 
  if(distance < 0) {
    message = 'DONE';
  }

  return message;
}

