var student_array=[];
function submit(){
var display_student_array=[];



for (var j=1; j<=4; j++)
{
    var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
    console.log(name_of_the_student);

    student_array.push(name_of_the_student);

}
console.log(student_array);
var lentofarray=student_array.lenght;
console.log(lentofarray);

for (var k=0; k< lentofarray; k++){

    display_student_array.push("<h4>Name-" +student_array[k]+"</h4>");
    console.log(display_student_array);}

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var removecomas=display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=removecomas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}


function sorting(){
student_array.sort();
console.log(student_array);
var array_sort=[];
var lentofarray=student_array.lenght;
console.log(lentofarray);

for (var k=0; k< lentofarray; k++){

    display_student_array.push("<h4>Name-" +student_array[k]+"</h4>");

    console.log(display_student_array);
}
var removecomas=display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=removecomas;


}