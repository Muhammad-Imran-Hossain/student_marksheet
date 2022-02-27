
function Result(){

    this.result = function (mark) {
         
        let gpa;
        let grad;

        if( mark >= 0 && mark < 33 ){
            gpa = 0;
            grad = 'F';
        }else if( mark >= 33 && mark < 40 ){
            gpa = 1;
            grad = 'D';
        }else if( mark >= 40 && mark < 50 ){
            gpa = 2;
            grad = 'C';
        }else if( mark >= 50 && mark < 60 ){
            gpa = 3;
            grad = 'B';
        }else if( mark >= 60 && mark < 70 ){
            gpa = 3.5;
            grad = 'A-';
        }else if( mark >= 70 && mark < 80 ){
            gpa = 4;
            grad = 'A';
        }else if( mark >= 80 && mark < 100 ){
            gpa = 5;
            grad = 'A+';
        }else {
            gpa = 'Invalid';
            grad = 'Invalid';
        }

        return{
            gpa :  gpa,
            grad : grad
        }
        
    };



    this.finalResult = function (ban, eng, phy, che, bio, math) {

        let finalgrade;
        let cgpa;
        let totalgpa =
          this.result(ban).gpa +
          this.result(eng).gpa +
          this.result(phy).gpa +
          this.result(che).gpa +
          this.result(bio).gpa +
          this.result(math).gpa;
    
        cgpa = totalgpa / 6;
        
    
        if ( ban < 33 || eng < 33 || phy < 33 || che < 33 || bio < 33 || math < 33 ){
          cgpa = 0;
          finalgrade = 'F';
        }else if(cgpa >=  1 && cgpa < 2){
  
            finalgrade = 'D';
        }else if(cgpa >= 2 && cgpa < 3){
     
            finalgrade = 'C';
        }else if(cgpa >=  3 && cgpa < 3.5){
    
            finalgrade = 'B';
        }else if(cgpa >=  3.5 && cgpa < 4){
    
            finalgrade = 'A-';
        }else if(cgpa >= 4 && cgpa < 5){
   
            finalgrade = 'A';
        }else if(cgpa ==  5){
     
            finalgrade = 'A+';
        }
    
        return{
          cgpa :  cgpa.toFixed(2),
          finalgrade : finalgrade
        }
      };
}



