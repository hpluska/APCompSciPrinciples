console.log(Number.MAX_SAFE_INTEGER);
// We can go a little higher, but funny things happen...
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
// We can actually go way higher in the danger zone...
console.log(Math.pow(2, 1023));
// But pretty soon, we're at infinity!
console.log(Math.pow(2, 1024));
