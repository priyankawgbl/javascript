var s
assignment3 = {


  settings: {
    array1 = [7,4,8,5];
    array2 = [5,9,3,6];
    number = 5;
  },

  init: function() {
    s = this.settings;
  },

  percentage: function (arr) {
    var total_score = arr.length*100;
    var marks = 0;
    for( var i = 0; i< arr.length;i++)
    {

      marks = marks + arr[i];
    }
    console.log(marks);
    var percent = marks/total_score*100;
    console.log(percent);
  },

  switch_case: function(operation,a,b) {
  var i = operation;
  var num1 = a;
  var num2 = b;

    switch (i)
    {
     case "add":
          var num3 = a+b;
         document.write(num3);
         break;
     case "subtract":
          var num3 = a-b;
         document.write(num3);
         break;
     case "divide":
         var num3 = a/b;
         document.write(num3);
         break;
     case "multiply":
         var num3 = a*b;
          document.write(num3);
     break;
     default:
         document.write("please enter numbers");
      }
  },

  multiplication: function (num) {

    var table = 0;
    for( var i = 0; i< 10;i++)
    {
      table = table + num;
      console.log(table);
    }

  },


  get_length: function getlength(number) {
      return number.toString().length;
  },


  average: function (arr) {
    var total_length = arr.length;
    var marks = 0;
    var i;
    for( i = 0; i< arr.length;i++)
    {

      marks = marks + arr[i];
    }
    console.log(marks);
    var average = marks/total_length;
    console.log(average);
  },

  largest: function (a) {
    var i;
    for( i = 0; i< a.length;i++)
    {
      for(var j = i+1; j<a.length;j++)
      {
        if (a[i] < a[j])
        {
          var temp = a[i];
          a[i] = a[j];
          a[j] = temp;
        }
      }
    }
    console.log(a[0]);

  },


  add_array: function (array1,array2) {
  var array3 = [];
  var i;
  for( i = 0; i< array1.length;i++)
    {
      array3[i] = array1[i] + array2[i];
    }
    console.log(array3);
  },


  reverse: function (a) {
    var i;
    var j = a.length-1;
    for( i = 0; i< a.length/2;i++)
    {

        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        j--;
    }
    return (a);
  }



 }