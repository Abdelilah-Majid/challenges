let prime_bumbers = [];

function __main() {
 let index = 0;
 for (let i = 0; i <= 2000; i++) {
  let not_deviseble_by_two = false;
  let deviseble_by_prime = false;
  if (i % 2 !== 0 || i === 2) {
   not_deviseble_by_two = true;
  }
  if (not_deviseble_by_two && i !== 1) {
   for (j of prime_bumbers) {
    if (i % j === 0) {
     deviseble_by_prime = true;
    }
   }
  }
  if (not_deviseble_by_two && !deviseble_by_prime && i !== 1) {
   prime_bumbers.push(i);
  }
 }
 return prime_bumbers;
}

alert(__main());
