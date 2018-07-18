var s,
dom_example = {
  settings: {
    btn: document.getElementById("button1"),
    capture: document.getElementById("capture"),
  },

  init: function() {

    s=this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {
      s.btn.addEventListener ("click", function() {
      dom_example.change_color();
    });

  },



  change_color: function () {
    var text = document.querySelectorAll("tr");

    for (var i = 0;i<text.length; i++) {
      if (text[i].style.backgroundColor=="black") {
        text[i].style.backgroundColor="grey";
      }
      else {
        text[i].style.backgroundColor="black";
      }
    }

    var b = document.getElementById("capture");
    if(b.style.backgroundColor == "red") {
      b.style.backgroundColor = "grey";
    }
    else {
      b.style.backgroundColor = "red";
    }
  },

  status_change: function (j) {
    var text1 = document.getElementById("p1");
    var b = document.getElementById("button1");
    var text2=  document.getElementById("p2");
    if(j.checked) {
      b.style.backgroundColor = "green";
      text1.innerHTML = "Switch is On";
      text2.innerHTML = "hello";
      }
    else {
      b.style.backgroundColor = "yellow";
      text1.innerHTML = "Switch is Off";
      text2.innerHTML = "";
      }
    setTimeout(function(){ document.getElementById("p2").innerHTML = ""; }, 2000);
  },
  on: function() {
    var text1 = document.querySelectorAll("tr");
    for (var i = 0;i<text1.length; i++) {
      if (i%2==0)
        text1[i].style.backgroundColor="grey";
      else
        text1[i].style.backgroundColor="black";
    }
  }


};
dom_example.init();