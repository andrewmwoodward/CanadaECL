function expandAccordionWithParents(accordionId) {
  var accordion = document.getElementById(accordionId);
  accordion.classList.add("active");
  var panel = accordion.nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
  
  var parent = accordion.parentElement;
  while (parent && parent.tagName !== "BODY") {
    if (parent.classList.contains("panel")) {
      parent.style.maxHeight = parent.scrollHeight + "px";
      parent.previousElementSibling.classList.add("active");
    }
    parent = parent.parentElement;
  }
}