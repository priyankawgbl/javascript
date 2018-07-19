
var s,
dom_example = {
  settings: {
    btn: $("#button1"),
    capture: $("#capture"),
    switchboard: $("#switch_board1"),
    text1: $("#p1"),
    tr: $("tr"),
    text2: $("#p2")
  },

  init: function() {

    s=this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {
      s.btn.click( function() {
      dom_example.change_color();
    });
       s.capture.change(function() {
      dom_example.status_change(this);
    });

  },



  change_color: function () {
    s.tr.each( function( index, element ) {
    if ( ($( this ).index() % 2)==0 ) {
       s.tr.css("background-color","black");
    }
    else {
      s.tr.css("background-color","grey");
      }
    });


    if(s.switchboard.css( "background-color") == "red") {
      s.switchboard.css( "background-color","grey" );
    }
    else {
       s.switchboard.css( "background-color","red" );
    }
  },

  status_change: function (j) {

    if("j:checked") {
      s.btn.css("background-color","green");
      s.text1.html("Switch is On");
      s.text2.html("hello");
      }
    else {
      s.btn.css("background-color","yellow");
      s.text1.html("Switch is Off");
      s.text2.html("");
      }
    setTimeout(function(){ s.text2.html(""); }, 5000);
  },


};
dom_example.init();