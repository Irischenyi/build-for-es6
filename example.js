// 'use strict';
import 'babel-polyfill';
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n ++;
    }
    return a;
}

var f = fib(5);
f.next();
f.next();
f.next();
