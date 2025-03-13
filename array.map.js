
        // array.map() = executes a provided callback function
        //                   once for each element in an array
        //                   AND creates a new array


        let students = [1, 2, 3, 4 , 5];
        let squares = students.map(square);
        let cubes = students.map(cube);

        cubes.forEach(print);
        function square(element) {
            return Math.pow(element, 2);
        }

        function cube(element) {
            return Math.pow(element, 3);
        }
      
        function print(element) {
            console.log(element);
        }


