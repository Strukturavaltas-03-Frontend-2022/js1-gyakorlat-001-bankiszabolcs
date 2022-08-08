const handleClick = () => {
  const buttonElements = document.getElementsByClassName("button");
  for (let i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener("click", function () {
      console.log(buttonElements[i].textContent);
    });
  }
};
