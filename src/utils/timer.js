/* eslint-disable max-len */
const countDownDate = new Date('Oct 22, 2021 18:00:00').getTime();

export function timer() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  let message = days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ';
    
  if(distance <= 0) {
    message = 'DONE';
  }

  return message;
}

