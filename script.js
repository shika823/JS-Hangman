var lives = 0;

var chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var countries = [
  "ecuador",
  "denmark",
  "italy",
  "brazil",
  "iraq",
  "kuwait",
  "libya",
  "mexico",
  "portugal",
  "tonga",
  "zambia",
];

var btn;
var t;
var wordString = "";
var the = "the";
var position;
var stringPos;
var count = 0;

function randomWord(countries) {
  return countries[Math.floor(Math.random() * countries.length)];
}

String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function liveCheck() {
  if (lives == 0) {
    $("#hmImg").attr("src", "images/0.jpg");
  } else if (lives == 1) {
    $("#hmImg").attr("src", "images/1.jpg");
  } else if (lives == 2) {
    $("#hmImg").attr("src", "images/2.jpg");
  } else if (lives == 3) {
    $("#hmImg").attr("src", "images/3.jpg");
  } else if (lives == 4) {
    $("#hmImg").attr("src", "images/4.jpg");
  } else if (lives == 5) {
    $("#hmImg").attr("src", "images/5.jpg");
  } else if (lives == 6) {
    $("#hmImg").attr("src", "images/6.jpg");
  } else if (lives == 7) {
    $("#hmImg").attr("src", "images/7.jpg");
  } else if (lives == 8) {
    $("#hmImg").attr("src", "images/8.jpg");
  } else if (lives == 9) {
    $("#hmImg").attr("src", "images/9.jpg");
  } else if (lives == 10) {
    $("#hmImg").attr("src", "images/10.jpg");
  }
}

function createButtons() {
  for (var i = 0; i < chars.length; i++) {
    $("#buttons").append('<button class="btn" >' + chars[i] + "</button>");
  }

  var btnsLen = $(".btn").length;

  $(".btn").click(function () {
    position = word.indexOf($(this).text());

    if (word.includes($(this).text())) {
      console.log("Correct Guess");
      console.log(word.indexOf($(this).text(), 0));
      $("#response").html("Correct!");

      if (word.indexOf($(this).text()) == 0) {
        stringPos = 0;
      } else {
        stringPos = position * 2;
      }

      wordString = wordString.replaceAt(stringPos, $(this).text());
      $("#wordString").html(wordString);
    } else {
      $("#response").html("Incorrect, try again!");
      lives += 1;
      liveCheck();
    }

    $(this).remove();
    if (lives == 10) {
      $("#response").html("Game Over");
    }

    if (!wordString.includes("_")) {
      $("#wordString").html("You Win!");
    }
  });
}



var word = randomWord(countries);

for (var i = 0; i < word.length; i++) {
  wordString += "_ ";
  $("#wordString").html(wordString);
}

$("#response").html("Guess a country");

liveCheck();


if (window.addEventListener) {
  window.addEventListener("load", createButtons);
} else if (window.attachEvent) {
  window.attachEvent("onload", createButtons);
} else {
  alert(
    "Could not attach 'SampleValidator.setup' to the 'window.onload' event"
  );
}
