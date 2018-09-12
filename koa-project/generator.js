function* a() {
	console.log('1');
	yeild;
	console.log('2');
}

var b = a();

b.next();
b.next();