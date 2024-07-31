//CommonJs, every file is a module.
//Values are expoeted as objects

const names=require('./3-names')
const {vd,me}=names
const SayHello=require('./2-modules')

//console.log(names);


//console.log(names.Information);
//console.log(names.items);

//SayHello("Aakash");
//SayHello(vd);
//SayHello(me);

require('./4-Mind-Grenade')
