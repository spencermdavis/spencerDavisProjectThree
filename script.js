const trackerApp = {};

trackerApp.incrementDecrement = () => {
  $(".player1 .increment1").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").text());
    lifeTotal++;
    $(".p1Life").text(lifeTotal);
  });
  $(".player2 .increment1").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal++;
    $(".p2Life").text(lifeTotal);
  });
  $(".player3 .increment1").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal++;
    $(".p3Life").text(lifeTotal);
  });
  $(".player4 .increment1").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal++;
    $(".p4Life").text(lifeTotal);
  });
  $(".player1 .decrement1").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").html());
    lifeTotal--;
    $(".p1Life").text(lifeTotal);
  });
  $(".player2 .decrement1").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal--;
    $(".p2Life").text(lifeTotal);
  });
  $(".player3 .decrement1").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal--;
    $(".p3Life").text(lifeTotal);
  });
  $(".player4 .decrement1").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal--;
    $(".p4Life").text(lifeTotal);
  });
  $(".player1 .increment5").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").html());
    lifeTotal = lifeTotal + 5;
    $(".p1Life").text(lifeTotal);
  });
  $(".player2 .increment5").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal = lifeTotal + 5;
    $(".p2Life").text(lifeTotal);
  });
  $(".player3 .increment5").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal = lifeTotal + 5;
    $(".p3Life").text(lifeTotal);
  });
  $(".player4 .increment5").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal = lifeTotal + 5;
    $(".p4Life").text(lifeTotal);
  });
  $(".player1 .decrement5").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").html());
    lifeTotal = lifeTotal - 5;
    $(".p1Life").text(lifeTotal);
  });
  $(".player2 .decrement5").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal = lifeTotal - 5;
    $(".p2Life").text(lifeTotal);
  });
  $(".player3 .decrement5").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal = lifeTotal - 5;
    $(".p3Life").text(lifeTotal);
  });
  $(".player4 .decrement5").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal = lifeTotal - 5;
    $(".p4Life").text(lifeTotal);
  });
  $(".player1 .increment10").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").html());
    lifeTotal = lifeTotal + 10;
    $(".p1Life").text(lifeTotal);
  });
  $(".player2 .increment10").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal = lifeTotal + 10;
    $(".p2Life").text(lifeTotal);
  });
  $(".player3 .increment10").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal = lifeTotal + 10;
    $(".p3Life").text(lifeTotal);
  });
  $(".player4 .increment10").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal = lifeTotal + 10;
    $(".p4Life").text(lifeTotal);
  });
  $(".player1 .decrement10").on("click", function () {
    let lifeTotal = parseInt($(".p1Life").html());
    lifeTotal = lifeTotal - 10;
    $(".p1Life").text(lifeTotal);
  });
  $(".player2 .decrement10").on("click", function () {
    let lifeTotal = parseInt($(".p2Life").html());
    lifeTotal = lifeTotal - 10;
    $(".p2Life").text(lifeTotal);
  });
  $(".player3 .decrement10").on("click", function () {
    let lifeTotal = parseInt($(".p3Life").html());
    lifeTotal = lifeTotal - 10;
    $(".p3Life").text(lifeTotal);
  });
  $(".player4 .decrement10").on("click", function () {
    let lifeTotal = parseInt($(".p4Life").html());
    lifeTotal = lifeTotal - 10;
    $(".p4Life").text(lifeTotal);
  });
};

trackerApp.displaySetter = () => {
  $("form").on("submit", function (e) {
    e.preventDefault();
    playerNumber = parseInt($("#playerNumber").val());
    console.log("trackerApp.displaySetter -> playerNumber", playerNumber);
    const startingLife = parseInt($("#startingLife").val());
    console.log("trackerApp.displaySetter -> startingLife", startingLife);
    if (isNaN(playerNumber)) {
      $("#playerNumber").reset();
    } else if (playerNumber < 0) {
      $("#playerNumber").reset();
    } else if (playerNumber === 0) {
      $(".player1").toggleClass("divHider");
      $(".player2").toggleClass("divHider");
      $(".player3").toggleClass("divHider");
      $(".player4").toggleClass("divHider");
    } else if (playerNumber === 1) {
      $(".player2").toggleClass("divHider");
      $(".player3").toggleClass("divHider");
      $(".player4").toggleClass("divHider");
    } else if (playerNumber === 2) {
      $(".player3").toggleClass("divHider");
      $(".player4").toggleClass("divHider");
    } else if (playerNumber === 3) {
      $(".player4").toggleClass("divHider");
    }
    if (isNaN(startingLife)) {
      $("playerNumber").text("");
    } else {
      $(".p1Life").html(startingLife);
      $(".p2Life").html(startingLife);
      $(".p3Life").html(startingLife);
      $(".p4Life").html(startingLife);
    }
    if (!isNaN(playerNumber) && !isNaN(startingLife)) {
      document.querySelector("#main").scrollIntoView({
        behavior: "smooth",
      });
    }
  });
};

trackerApp.init = () => {
  trackerApp.incrementDecrement();
  trackerApp.displaySetter();
};

$(function () {
  trackerApp.init();
});
