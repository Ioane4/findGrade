function findGrade(score){
    if(score >= 90 && score<=100){
        alert("A");
    }
    else if(score>=80 && score<90){
        alert("B");
    }else if(score>=70 && score<80){
        alert("C");
    }else if(score>=60 && score<70){
        alert("D");
    }else if(score>=0 && score<60){
        alert("F");
    }else{
        alert("enter corect value");
    }
}
scoreNum = Number(prompt("Enter your score betwine 0 - 100"));
findGrade(scoreNum);