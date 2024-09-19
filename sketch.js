function setup() {
  createCanvas(400, 400);
  background(100);
}

//waarde 0 = leeg, waarde 1 = rood, waard 2 = blauw;

let cell1 = 0;
let cell2 = 0;
let cell3 = 0;
let cell4 = 0;

let activeplayer = 1;

let activeCell = 0;

function mouseClicked() {
  //console.log(cell1 + "-" + cell2 + "-" + cell3 + "-" + cell4);

  let hokjemaggekliktworden = false;

  //cell1
  if (mouseX > 0 && mouseX < 100) {
    if (mouseY > 0 && mouseY < 100) {
      console.log("vakje 1 is geklikt");
      if (cell1 == 0) {
        cell1 = activeplayer;
        hokjemaggekliktworden = true;
      }
    }
  }

  //cell2
  if (mouseX > 100 && mouseX < 200) {
    if (mouseY > 0 && mouseY < 100) {
      console.log("vakje 2 is geklikt");
      if (cell2 == 0) {
        cell2 = activeplayer;
        hokjemaggekliktworden = true;
      }
    }
  }

  //cell3
  if (mouseX > 0 && mouseX < 100) {
    if (mouseY > 100 && mouseY < 200) {
      console.log("vakje 3 is geklikt");
      if (cell3 == 0) {
        cell3 = activeplayer;
        hokjemaggekliktworden = true;
      }
    }
  }

  //cell4
  if (mouseX > 100 && mouseX < 200) {
    if (mouseY > 100 && mouseY < 200) {
      console.log("vakje 4 is geklikt");
      if (cell4 == 0) {
        cell4 = activeplayer;
        hokjemaggekliktworden = true;
      }
    }
  }

  if (hokjemaggekliktworden == true) {
    if (activeplayer == 1) {
      activeplayer = 2;
    } else {
      activeplayer = 1;
    }
  }

  console.log(cell1 + "-" + cell2 + "-" + cell3 + "-" + cell4);
}

function draw() {
  background(100);

  activeCell = 0;

  fill(255);
  square(0, 0, 100);
  square(100, 0, 100);
  square(0, 100, 100);
  square(100, 100, 100);

  textSize(32);
  text("x:" + mouseX, 200, 200);
  text("y:" + mouseY, 200, 250);

  //cell1
  if (mouseX > 0 && mouseX < 100) {
    if (mouseY > 0 && mouseY < 100) {
      fill("gray");
      square(0, 0, 100);
      text("cell1", 200, 300);
      activeCell = 1;
    }
  }

  //cell2
  if (mouseX > 100 && mouseX < 200) {
    if (mouseY > 0 && mouseY < 100) {
      fill("gray");
      square(100, 0, 100);
      text("cell2", 200, 300);
      activeCell = 2;
    }
  }

  //cell3
  if (mouseX > 0 && mouseX < 100) {
    if (mouseY > 100 && mouseY < 200) {
      fill("gray");
      square(0, 100, 100);
      text("cell3", 200, 300);
      activeCell = 3;
    }
  }

  //cell4
  if (mouseX > 100 && mouseX < 200) {
    if (mouseY > 100 && mouseY < 200) {
      fill("gray");
      square(100, 100, 100);
      text("cell4", 200, 300);
      activeCell = 4;
    }
  }

  //controller of cellen rood zijn
  if (cell1 == 1) {
    fill("red");
    square(0, 0, 100);
  }
  if (cell2 == 1) {
    fill("red");
    square(100, 0, 100);
  }
  if (cell3 == 1) {
    fill("red");
    square(0, 100, 100);
  }
  if (cell4 == 1) {
    fill("red");
    square(100, 100, 100);
  }

  //controller of cellen blauw zijn
  if (cell1 == 2) {
    fill("blue");
    square(0, 0, 100);
  }
  if (cell2 == 2) {
    fill("blue");
    square(100, 0, 100);
  }
  if (cell3 == 2) {
    fill("blue");
    square(0, 100, 100);
  }
  if (cell4 == 2) {
    fill("blue");
    square(100, 100, 100);
  }

  text("activeCell:" + activeCell, 200, 350);
  text("activeplayer:" + activeplayer, 200, 400);

  if (cell1 == 1 && cell2 == 1) {
    console.log("speler 1 heeft gewonnen");
  }
  if (cell3 == 1 && cell4 == 1) {
    console.log("speler 1 heeft gewonnen");
  }
  if (cell1 == 1 && cell3 == 1) {
    console.log("speler 1 heeft gewonnen");
  }
  if (cell2 == 1 && cell4 == 1) {
    console.log("speler 1 heeft gewonnen");
  }
  /*
  if (cell1 == 1 && cell4 == 1) {
    console.log("speler 1 heeft gewonnen");
  }
  if (cell2 == 1 && cell3 == 1) {
    console.log("speler 1 heeft gewonnen");
  }
*/
}
