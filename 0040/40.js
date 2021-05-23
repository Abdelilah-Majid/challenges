function __main(n) {
 console.log(n);
 if (n < 1000) {
  __main(n + 1);
 }
}
__main(1);
