

var s,
student_list = {
  settings: {
    students: [
    {
      name: "anubhav",
      age: 76,
      marks: [65,54,66]
    },
    {
      name: "anu",
      age: 76,
      marks: [65,54,66]
    }
    ]
  },

  init: function() {
    s = this.settings;
  },

  add_details: function(name,age,marks){
  s.students.push({name: name,age: age,marks: marks});
  },


  search: function(name) {
    var i = null;
    for (i = 0; s.students.length > i; i += 1) {
      if (s.students[i].name === name) {
        //return s.students[i].name;
        //return student_list.percentage(s.students[i].marks);
        return s.students[i].age;
      }
    }
  },

  print: function() {
    var i;
    for (i = 0; s.students.length > i; i += 1) {

      console.log(s.students[i].name);
      console.log(student_list.percentage(s.students[i].marks));
      //return s.students[i].age;

    }
  },

  percentage: function(arr) {
    var total_score = arr.length*100;
    var marks = 0;
    for( var i = 0; i< arr.length;i++) {

      marks = marks + arr[i];
    }
    console.log(marks);
    var percent = marks/total_score*100;
    console.log(percent);
  }


};
student_list.init();
student_list.add_details("amit",76,[76,54,76]);