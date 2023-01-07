function edit() {
  let nickNameOne = prompt(
    `Change ${document.querySelector("#nickName-1").innerText} name`
  );

  let nickNameTwo = prompt(
    `Change ${document.querySelector("#nickName-2").innerText} name`
  );

  if (nickNameOne) {
    document.querySelector("#nickName-1").innerText = nickNameOne;
  }
  if (nickNameTwo) {
    document.querySelector("#nickName-2").innerText = nickNameTwo;
  }

  document.querySelector("#edit").blur();
}

function roll() {
  let dice = document.querySelectorAll("img");
  console.log(dice);
  dice.forEach((diceImg) => {
    diceImg.classList.add("shake");
  });
  setTimeout(() => {
    dice.forEach((diceImg) => {
      diceImg.classList.remove("shake");
    });
    let randomNumOne = Math.floor(Math.random() * 6) + 1;
    let randomNumTwo = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumOne, randomNumTwo);

    document
      .querySelector("#dice-1")
      .setAttribute("src", `./assets/dice-${randomNumOne}.svg`);
    document
      .querySelector("#dice-2")
      .setAttribute("src", `./assets/dice-${randomNumTwo}.svg`);

    if (randomNumOne === randomNumTwo) {
      document.querySelector("#result").innerText = "Draw!";
    } else if (randomNumOne > randomNumTwo) {
      document.querySelector("#result").innerText = `${
        document.querySelector("#nickName-1").innerText
      } Wins!`;
    } else {
      document.querySelector("#result").innerText = `${
        document.querySelector("#nickName-2").innerText
      } Wins!`;
    }
  }, 1000);
}
