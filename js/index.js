$(".context-menu").click((_) => {
  $("nav").css("display", "block");
  $("nav").animate({ width: "250px" }, 500);
  $("main").animate({ "margin-left": "250px" }, 500);
});

$("nav button").click((_) => {
  $("nav").animate({ width: 0 }, 500, (_) => {
    $("nav").css("display", "none");
  });
  $("main").animate({ "margin-left": 0 }, 500);
});
