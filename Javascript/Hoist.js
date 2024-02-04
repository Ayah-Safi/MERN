var hello;
hello = 'world';  
console.log(hello);                                   

var needle;
needle = 'haystack';
function test(){
    needle = 'magnet';
    console.log(needle);
}
test();

var brendan ;
brendan = 'super cool';

console.log(brendan);


var food;
food = 'chicken';
console.log(food);
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
eat();


var mean ;
console.log(food);
var mean = function() {
    var food ;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
mean();


var genre ;
console.log(genre);
genre = "disco";
function rewind() {
    var genre ;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
rewind();


var dojo ;
dojo = "san jose";
console.log(dojo);
function learn() {
    var dojo ;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);



function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));