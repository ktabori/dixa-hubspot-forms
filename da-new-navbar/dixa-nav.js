window.onload = () => {
const body = document.body;
//Hamburger
const button = document.getElementById("dnNavMenu");
const topLine = document.getElementById("topLine");
const middleLine = document.getElementById("middleLine");
const bottomLine = document.getElementById("bottomLine");
//Nav Menu
const menuContainer = document.getElementById("menucontainer");
//Nav Dropdown
const menuDropDown = document.querySelectorAll(".dn-dropdown-button");
//Click event toggle on hamburger button
button.addEventListener("click", () => {
  menuContainer.classList.toggle("open");
  body.classList.toggle("noscroll");
  topLine.classList.toggle("top");
  middleLine.classList.toggle("hide");
  bottomLine.classList.toggle("bot");
});
//Click event toggle on nav dropdown
menuDropDown.forEach(item => {
  item.addEventListener("click", element => {
    //traverse DOM tree to find dropdown parent
    var content = element.target;
    while (content.className !== "dn-dropdown") {
      content = content.parentElement;
    }
    //show dn-dropdown-content
    content.lastElementChild.classList.toggle("open");
    //animate dn-caret
    content.firstElementChild.lastElementChild.classList.toggle("open");
  });
});
};
</script>
<script>
// Prevents body scroll on mobile only (including iOS)
(function () {
  var _overlay = document.getElementById('menucontainer');
  var _clientY = null; // remember Y position on touch start
  _overlay.addEventListener('touchstart', function (event) {
      if (event.targetTouches.length === 1) {
          // detect single touch
          _clientY = event.targetTouches[0].clientY;
      }
  }, false);
  _overlay.addEventListener('touchmove', function (event) {
      if (event.targetTouches.length === 1) {
          // detect single touch
          disableRubberBand(event);
      }
  }, false);
  function disableRubberBand(event) {
      var clientY = event.targetTouches[0].clientY - _clientY;
      if (_overlay.scrollTop === 0 && clientY > 0) {
          // element is at the top of its scroll
          event.preventDefault();
      }
      if (isOverlayTotallyScrolled() && clientY < 0) {
          //element is at the top of its scroll
          event.preventDefault();
           }
  }
  function isOverlayTotallyScrolled() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
      return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
  }
}())
