function setup() {
  createCanvas(500, 500);
  background(100);
}

let linksboven = "white";
let rechtsboven = "white";
let linksonder = "white";
let rechtsonder = "white";

let activeplayer = "blue";

function mouseClicked() {
  let isgeklikt = false;
  console.log("click");
  if (mouseX > 0 && mouseX < 100) {
    if (mouseY > 0 && mouseY < 100) {
      console.log("linksboven");
      if (linksboven == "white") {
        linksboven = activeplayer;
        isgeklikt = true;
      }
    }
  }
  if (mouseX > 100 && mouseX < 200) {
    if (mouseY > 0 && mouseY < 100) {
      console.log("rechtsboven");
      if (rechtsboven == "white") {
        rechtsboven = activeplayer;
        isgeklikt = true;
      }
    }
  }
  if (mouseX > 0 && mouseX < 100) {
    if (mouseY > 100 && mouseY < 200) {
      console.log("linksonder");
      if (linksonder == "white") {
        linksonder = activeplayer;
        isgeklikt = true;
      }
    }
  }
  if (mouseX > 100 && mouseX < 200) {
    if (mouseY > 100 && mouseY < 200) {
      if (rechtsonder == "white") {
        console.log("rechtsonder");
        rechtsonder = activeplayer;
        isgeklikt = true;
      }
    }
  }

  if (isgeklikt == true) {
    if (activeplayer == "red") {
      activeplayer = "blue";
    } else {
      activeplayer = "red";
    }
  }
}

function draw() {
  background(100);

  //linksboven
  fill(linksboven);
  square(0, 0, 100);
  //rechtsboven
  fill(rechtsboven);
  square(100, 0, 100);
  //linksonder
  fill(linksonder);
  square(0, 100, 100);
  //rechtsonder
  fill(rechtsonder);
  square(100, 100, 100);

  textSize(32);
  text("mouseX" + mouseX, 220, 40);
  text("mouseY" + mouseY, 220, 70);

  if (linksboven == "red" && rechtsboven == "red") {
    text("rood wint!", 220, 100);
  }
  if (rechtsonder == "blue" && linksonder == "blue") {
    text("blauw wint!", 220, 100);
  }
}
