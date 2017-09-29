window.onload = function() {
  var btn = document.getElementById("btn");

  btn.addEventListener("click", function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    myRequest.onload = function () {
        var myData = JSON.parse(myRequest.responseText);
        changehtml(myData);

        }

    myRequest.send();

  });
}

function changehtml(data) {
  var htmlString = [''];

  for(i = 0; i < data.length; i++){
    htmlString[i] = "<p>" + data[i].name+" is " + data[i].species;

    for(j = 0; j < data[i].foods.likes.length ; j++){

      htmlString[i]+="likes to eat "+data[i].foods.likes[j]+"</p>"
    }
    var mainText = document.getElementsByClassName("main");
    console.log(htmlString[i]);



  }
}
