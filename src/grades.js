function performAction() {
    var maths = document.querySelector("#maths").value; 
    var science = document.querySelector("#science").value; 
    var english = document.querySelector("#english").value; 
    var health = document.querySelector("#health").value; 
    var pe = document.querySelector("#pe").value; 
    var social = document.querySelector("#social").value; 
    var totalMarks = (Number(maths)+Number(english)+Number(science)+Number(social)+Number(health)+Number(pe));
    var avg = (totalMarks/6);
    var grade = document.querySelector("#grade");
    if(grade === null){
        grade = document.createElement("p");
        document.querySelector("#body").appendChild(grade);
    }


    /*
        * if average is greater than 90, display “Grade: A”
        * if average is greater than 75 and less than 90, display “Grade: B”
        * if average is greater than 60 and less than 75, display “Grade:C”
        * if average is greater than 45 and less than 60, display “Grade D”
        * if average is greater than 35 and less than 45, display “Grade E”
        * if average is less than 35. display “Grade: F”
    */
    grade.textContent = "The total marks scored are: "+ totalMarks;
    grade.textContent += "<br> The average marks scored are:" + avg+"<br>";
    if(avg >= 90){
        grade.textContent += "Grade A";
    }else if(avg >=75 && avg<90){
        grade.textContent +="Grade B";
    }else if(avg >=60 && avg<75){
        grade.textContent += "Grade C";
    }else if(avg >=45 && avg<60){
        grade.textContent += "Grade D";
    }else if(avg >=35 && avg<45){
        grade.textContent += "Grade E";
    }else {
        grade.textContent += "Grade F";
    }

}
