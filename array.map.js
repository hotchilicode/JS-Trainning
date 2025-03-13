<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>

        body {
            background: rgb(0, 0, 0);
            color: rgb(255, 248, 248);
        }
    </style>
</head>
<body>

    <script>
        
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


    </script>
    
</body>
</html>