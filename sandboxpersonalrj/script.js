/* ============================================================
   Gallery filter — plain JavaScript, no libraries.
   How it works:
   1. Find every filter button and every work item on the page.
   2. When a button is clicked, read its data-filter word
      (all, design, portraits, picture-day, or events).
   3. Show the items whose data-category matches that word,
      and hide the rest. "all" shows everything.
   ============================================================ */

// Step 1: grab the buttons and the items
var filterButtons = document.querySelectorAll(".filter-button");
var workItems = document.querySelectorAll(".work-item");

// Step 2: listen for a click on each button
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {

    // The word this button filters by
    var chosen = button.getAttribute("data-filter");

    // Move the orange "active" style to the button just clicked
    filterButtons.forEach(function (otherButton) {
      otherButton.classList.remove("active");
    });
    button.classList.add("active");

    // Step 3: show matching items, hide the others
    workItems.forEach(function (item) {
      var category = item.getAttribute("data-category");
      if (chosen === "all" || category === chosen) {
        item.style.display = "";   // "" brings back the normal display
      } else {
        item.style.display = "none";
      }
    });

  });
});
