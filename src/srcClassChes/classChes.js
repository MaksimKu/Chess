class Cell {
  constructor(x, y) {
    this.x = x,
    this.y = y,
    this.stringXY = String(x) + String(y)
  }
}

class whitePawn {
  constructor(x, y) {
    this.x = x,
    this.y = y,
    this.stringXY = String(x) + String(y),
    this.firstHod = true,
    this.life = true
  }
  hod() {
    let obj = new Cell(this.x + 1, this.y);
    let o1 = true;
    for (let key in chessmenWhite) {
      if (chessmenWhite[key].stringXY === obj.stringXY) {
        o1 = false;
      }
    }
    for (let key in chessmenBlack) {
      if (chessmenBlack[key].stringXY === obj.stringXY) {
        o1 = false;
      }
    }
    for (let key in cell) {
      if (cell[key].stringXY === obj.stringXY) {
        if (o1) {
          document.getElementById([key]).classList.add('ceel_active')
        }
      }
    }
    if (this.firstHod) {
      if (o1) {
      let obj2 = new Cell(this.x + 2, this.y);
      let o2 = true;
      for (let key in chessmenWhite) {
        if (chessmenWhite[key].stringXY === obj2.stringXY) {
          o2 = false;
        }
      }
      for (let key in chessmenBlack) {
        if (chessmenBlack[key].stringXY === obj2.stringXY) {
          o2 = false;
        }
      }
      for (let key in cell) {
        if (cell[key].stringXY === obj2.stringXY) {
          if (o1 & o2) {
          document.getElementById([key]).classList.add('ceel_active');
          this.firstHod = false;
          }
        }
      }
    }
    }
    let obj3 = new Cell(this.x + 1, this.y + 1);
    let o3 = false;
    for (let key in chessmenBlack) {
      if (chessmenBlack[key].stringXY === obj3.stringXY) {
        o3 = true;
        console.log(o3)
      }
    }
    for (let key in cell) {
      if (cell[key].stringXY === obj3.stringXY) {
        if (o3) {
          document.getElementById([key]).classList.add('ceel_active')
        }
      }
    }
    let obj4 = new Cell(this.x + 1, this.y - 1);
    let o4 = false;
    for (let key in chessmenBlack) {
      if (chessmenBlack[key].stringXY === obj4.stringXY) {
        o4 = true;
      }
    }
    for (let key in cell) {
      if (cell[key].stringXY === obj4.stringXY) {
        if (o4) {
          document.getElementById([key]).classList.add('ceel_active')
        }
      }
    }
  }
}

export default whitePawn;
