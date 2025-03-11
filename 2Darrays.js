   // 2D Arrays =  an array of arrays

   let fruits = ["apple", "banana", "orange"];
   let vegetables = ["carrot", "celery", "pea"];
   let proteins = ["chicken", "eggs", "beef"];


   let groceryList = [fruits, vegetables, proteins];

   groceryList[0][2] = "pineapple"; // we got to index the row and then the column

   for(let list of groceryList) {
       for(let food of list) {
           console.log(food);
       }
   }