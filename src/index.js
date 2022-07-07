import './bundle.css';

class Cell {
  constructor(x, y) {
    this._x = x,
    this._y = y,
    this.stringXY = String(this.x) + String(this.y)
  }
  set x(val) {
    this._x = val;
    this.stringXY = String(val) + String(this.y)
  }
  get x() {
    return this._x
  }
  set y(val) {
    this._y = val;
    this.stringXY = String(this.x) + String(val)
  }
  get y() {
    return this._y
  }
}
// import './srcClassChes/classChes.js'
// import whitePawn from './srcClassChes/classChes.js';
let cell = {
  a1: new Cell (1, 1),
  a2: new Cell (2, 1),
  a3: new Cell (3, 1),
  a4: new Cell (4, 1),
  a5: new Cell (5, 1),
  a6: new Cell (6, 1),
  a7: new Cell (7, 1),
  a8: new Cell (8, 1),
  b1: new Cell (1, 2),
  b2: new Cell (2, 2),
  b3: new Cell (3, 2),
  b4: new Cell (4, 2),
  b5: new Cell (5, 2),
  b6: new Cell (6, 2),
  b7: new Cell (7, 2),
  b8: new Cell (8, 2),
  c1: new Cell (1, 3),
  c2: new Cell (2, 3),
  c3: new Cell (3, 3),
  c4: new Cell (4, 3),
  c5: new Cell (5, 3),
  c6: new Cell (6, 3),
  c7: new Cell (7, 3),
  c8: new Cell (8, 3),
  d1: new Cell (1, 4),
  d2: new Cell (2, 4),
  d3: new Cell (3, 4),
  d4: new Cell (4, 4),
  d5: new Cell (5, 4),
  d6: new Cell (6, 4),
  d7: new Cell (7, 4),
  d8: new Cell (8, 4),
  e1: new Cell (1, 5),
  e2: new Cell (2, 5),
  e3: new Cell (3, 5),
  e4: new Cell (4, 5),
  e5: new Cell (5, 5),
  e6: new Cell (6, 5),
  e7: new Cell (7, 5),
  e8: new Cell (8, 5),
  f1: new Cell (1, 6),
  f2: new Cell (2, 6),
  f3: new Cell (3, 6),
  f4: new Cell (4, 6),
  f5: new Cell (5, 6),
  f6: new Cell (6, 6),
  f7: new Cell (7, 6),
  f8: new Cell (8, 6),
  g1: new Cell (1, 7),
  g2: new Cell (2, 7),
  g3: new Cell (3, 7),
  g4: new Cell (4, 7),
  g5: new Cell (5, 7),
  g6: new Cell (6, 7),
  g7: new Cell (7, 7),
  g8: new Cell (8, 7),
  h1: new Cell (1, 8),
  h2: new Cell (2, 8),
  h3: new Cell (3, 8),
  h4: new Cell (4, 8),
  h5: new Cell (5, 8),
  h6: new Cell (6, 8),
  h7: new Cell (7, 8),
  h8: new Cell (8, 8),
}

var por = [];
let widthWindoe = window.innerWidth;
// console.log(widthWindoe)


class whitePawn {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    this._x = x,
    this._y = y,
    this.stringXY = String(x) + String(y),
    this.firstHod = true,
    this._life = true,
    this.name = name,
    this.kallibrTop = kallibrTop,
    this.kallibrLeft = kallibrLeft
  }
  set x(val) {
    this.stringXY = String(val) + String(this.y);
    this._x = val
    if (widthWindoe > 1100) {
      document.getElementById(`${this.name}`).style.top = `-${this.kallibrTop + (10 * val)}%`
      } else {
        document.getElementById(`${this.name}`).style.top = `-${this.kallibrLeft + (9.9 * val)}vw`
      }
    }
  get x() {
    return this._x
  }
  set y(val) {
    this.stringXY = String(this.x) + String(val);
    this._y = val
    if (widthWindoe > 1100) {
      document.getElementById(this.name).style.left = `${-10.5 + (12.5 * val)}%`
    } else {
    document.getElementById(this.name).style.left = `${-10.5 + (12.3 * val)}vw`
    }
  }
  get y() {
    return this._y
  }
  set life(val) {
    if (val === false) {
      this.x = 0;
      this.y = 0;
      document.getElementById(this.name).style.visibility = 'hidden';
      this._life = val;
    }
  }
  get life() {
    return this._life
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
          document.getElementById([key]).classList.add('ceel_active');
                                ///////////////////
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
          // this.firstHod = false;
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
        document.getElementById([key]).classList.add('ceel_active');
      }
    }
    for (let key in cell) {
      if (cell[key].stringXY === obj3.stringXY) {
        if (o3) {
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
    }
    let obj4 = new Cell(this.x + 1, this.y - 1);
    let o4 = false;
    for (let key in chessmenBlack) {
      if (chessmenBlack[key].stringXY === obj4.stringXY) {
        o4 = true;
        document.getElementById([key]).classList.add('ceel_active');
      }
    }
    for (let key in cell) {
      if (cell[key].stringXY === obj4.stringXY) {
        if (o4) {
          document.getElementById([key]).classList.add('ceel_active');
          // document.getElementById(this.name).classList.add('ceel_active');
        }
      }
    }
    por.push(this.x, this.y, this.name);
  }
}
class blackPawn {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    this._x = x,
    this._y = y,
    this.stringXY = String(x) + String(y),
    this.firstHod = true,
    this._life = true,
    this.name = name,
    this.kallibrTop = kallibrTop,
    this.kallibrLeft = kallibrLeft
  }
  set x(val) {
    this.stringXY = String(val) + String(this.y);
    this._x = val;
    if (widthWindoe > 1100) {
    document.getElementById(`${this.name}`).style.top = `-${this.kallibrTop + (10 * val)}%`
    } else {
      document.getElementById(`${this.name}`).style.top = `-${this.kallibrLeft + (9.9 * val)}vw`
    }
  }
  get x() {
    return this._x
  }
  set y(val) {
    this.stringXY = String(this.x) + String(val);
    this._y = val;
    if (widthWindoe > 1100) {
      document.getElementById(this.name).style.left = `${-10.5 + (12.5 * val)}%`
    } else {
    document.getElementById(this.name).style.left = `${-10.5 + (12.3 * val)}vw`
    }
  }
  get y() {
    return this._y
  }
  set life(val) {
    if (val === false) {
      this.x = 0;
      this.y = 0;
      document.getElementById(this.name).style.visibility = 'hidden';
      this._life = val;
    }
  }
  get life() {
    return this._life
  }
  hod() {
    let obj = new Cell(this.x - 1, this.y);
    let o1 = true;
    for (let key in chessmenBlack) {
      if (chessmenBlack[key].stringXY === obj.stringXY) {
        o1 = false;
      }
    }
    for (let key in chessmenWhite) {
      if (chessmenWhite[key].stringXY === obj.stringXY) {
        o1 = false;
      }
    }
    for (let key in cell) {
      if (cell[key].stringXY === obj.stringXY) {
        if (o1) {
          document.getElementById([key]).classList.add('ceel_active');
                                ///////////////////
        }
      }
    }
    if (this.firstHod) {
      if (o1) {
      let obj2 = new Cell(this.x - 2, this.y);
      let o2 = true;
      for (let key in chessmenBlack) {
        if (chessmenBlack[key].stringXY === obj2.stringXY) {
          o2 = false;
        }
      }
      for (let key in chessmenWhite) {
        if (chessmenWhite[key].stringXY === obj2.stringXY) {
          o2 = false;
        }
      }
      for (let key in cell) {
        if (cell[key].stringXY === obj2.stringXY) {
          if (o1 & o2) {
          document.getElementById([key]).classList.add('ceel_active');
          }
        }
      }
    }
    }
    let obj3 = new Cell(this.x - 1, this.y - 1);
    let o3 = false;
    for (let key in chessmenWhite) {
      if (chessmenWhite[key].stringXY === obj3.stringXY) {
        o3 = true;
        document.getElementById([key]).classList.add('ceel_active');
      }
    }
    for (let key in cell) {
      if (cell[key].stringXY === obj3.stringXY) {
        if (o3) {
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
    }
    let obj4 = new Cell(this.x - 1, this.y + 1);
    let o4 = false;
    for (let key in chessmenWhite) {
      if (chessmenWhite[key].stringXY === obj4.stringXY) {
        o4 = true;
        document.getElementById([key]).classList.add('ceel_active');
      }
    }
    for (let key in cell) {
      if (cell[key].stringXY === obj4.stringXY) {
        if (o4) {
          document.getElementById([key]).classList.add('ceel_active');
          // document.getElementById(this.name).classList.add('ceel_active');
        }
      }
    }
    por.push(this.x, this.y, this.name);
  }
}

class whiteRook extends whitePawn {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    super(x, y, name, kallibrTop, kallibrLeft)
  }
  hod() {
    let Obj = new Cell (this.x, this.y);
    por.push(this.x, this.y, this.name);
    cikl: while (Obj.x < 8) {
      Obj.x += 1;
      for (let key in cell) {
        if (Obj.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj.stringXY) {
              break cikl
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj2 = new Cell (this.x, this.y);
    cikl2: while (Obj2.x > 1) {
      Obj2.x = Obj2.x - 1;
      for (let key in cell) {
        if (Obj2.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj2.stringXY) {
              break cikl2
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj2.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl2;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj3 = new Cell (this.x, this.y);
    cikl3: while (Obj3.y > 1) {
      Obj3.y = Obj3.y - 1;
      for (let key in cell) {
        if (Obj3.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj3.stringXY) {
              break cikl3
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj3.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl3;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj4 = new Cell (this.x, this.y);
    cikl4: while (Obj4.y < 8) {
      Obj4.y = Obj4.y + 1;
      for (let key in cell) {
        if (Obj4.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj4.stringXY) {
              break cikl4
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj4.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl4;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
  }
}
class blackRook extends whitePawn {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    super(x, y, name, kallibrTop, kallibrLeft)
  }
  hod() {
    let Obj = new Cell (this.x, this.y);
    por.push(this.x, this.y, this.name);
    cikl: while (Obj.x < 8) {
      Obj.x += 1;
      for (let key in cell) {
        if (Obj.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj.stringXY) {
              break cikl
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj2 = new Cell (this.x, this.y);
    cikl2: while (Obj2.x > 0) {
      Obj2.x = Obj2.x - 1;
      for (let key in cell) {
        if (Obj2.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj2.stringXY) {
              break cikl2
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj2.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl2;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj3 = new Cell (this.x, this.y);
    cikl3: while (Obj3.y > 0) {
      Obj3.y = Obj3.y - 1;
      for (let key in cell) {
        if (Obj3.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj3.stringXY) {
              break cikl3
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj3.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl3;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj4 = new Cell (this.x, this.y);
    cikl4: while (Obj4.y < 8) {
      Obj4.y = Obj4.y + 1;
      for (let key in cell) {
        if (Obj4.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj4.stringXY) {
              break cikl4
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj4.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl4;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
  }
}
class whiteHors extends whitePawn {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    super(x, y, name, kallibrTop, kallibrLeft)
  }
  hod() {
    por.push(this.x, this.y, this.name);
    function oneHod (obj, o) {
      for (let key in chessmenBlack) {
        if (chessmenBlack[key].stringXY === obj.stringXY) {
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
      for (let key in chessmenWhite) {
        if (chessmenWhite[key].stringXY === obj.stringXY) {
          o = false;
        }
      }
      for (let key in cell) {
        if (cell[key].stringXY === obj.stringXY) {
          if (o) {
            document.getElementById([key]).classList.add('ceel_active');
          }
        }
      }
    }
    let Obj = new Cell (this.x + 2, this.y + 1);
    let o = true;
    oneHod(Obj, o);
    let Obj2 = new Cell (this.x + 2, this.y - 1);
    let o2 = true;
    oneHod(Obj2, o2);
    let Obj3 = new Cell (this.x + 1, this.y + 2);
    let o3 = true;
    oneHod(Obj3, o3);
    let Obj4 = new Cell (this.x - 1, this.y + 2);
    let o4 = true;
    oneHod(Obj4, o4);
    let Obj5 = new Cell (this.x - 2, this.y + 1);
    let o5 = true;
    oneHod(Obj5, o5);
    let Obj6 = new Cell (this.x - 2, this.y - 1);
    let o6 = true;
    oneHod(Obj6, o6);
    let Obj7 = new Cell (this.x + 1, this.y - 2);
    let o7 = true;
    oneHod(Obj7, o7);
    let Obj8 = new Cell (this.x - 1, this.y - 2);
    let o8 = true;
    oneHod(Obj8, o8);
  }
}
class blackHors extends whitePawn {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    super(x, y, name, kallibrTop, kallibrLeft)
  }
  hod() {
    por.push(this.x, this.y, this.name);
    function oneHod (obj, o) {
      for (let key in chessmenWhite) {
        if (chessmenWhite[key].stringXY === obj.stringXY) {
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
      for (let key in chessmenBlack) {
        if (chessmenBlack[key].stringXY === obj.stringXY) {
          o = false;
        }
      }
      for (let key in cell) {
        if (cell[key].stringXY === obj.stringXY) {
          if (o) {
            document.getElementById([key]).classList.add('ceel_active');
          }
        }
      }
    }
    let Obj = new Cell (this.x + 2, this.y + 1);
    let o = true;
    oneHod(Obj, o);
    let Obj2 = new Cell (this.x + 2, this.y - 1);
    let o2 = true;
    oneHod(Obj2, o2);
    let Obj3 = new Cell (this.x + 1, this.y + 2);
    let o3 = true;
    oneHod(Obj3, o3);
    let Obj4 = new Cell (this.x - 1, this.y + 2);
    let o4 = true;
    oneHod(Obj4, o4);
    let Obj5 = new Cell (this.x - 2, this.y + 1);
    let o5 = true;
    oneHod(Obj5, o5);
    let Obj6 = new Cell (this.x - 2, this.y - 1);
    let o6 = true;
    oneHod(Obj6, o6);
    let Obj7 = new Cell (this.x + 1, this.y - 2);
    let o7 = true;
    oneHod(Obj7, o7);
    let Obj8 = new Cell (this.x - 1, this.y - 2);
    let o8 = true;
    oneHod(Obj8, o8);
  }
}
class whiteOfficer extends whitePawn {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    super(x, y, name, kallibrTop, kallibrLeft);
  }
  hod() {
    let Obj = new Cell (this.x, this.y);
    por.push(this.x, this.y, this.name);
    cikl: while (Obj.x < 8 && Obj.y < 8) {
      Obj.x += 1;
      Obj.y += 1;
      for (let key in cell) {
        if (Obj.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj.stringXY) {
              break cikl
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              break cikl;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
    }
    let Obj2 = new Cell (this.x, this.y);
    cikl2: while (Obj2.x < 8 && Obj.y > 1) {
      Obj2.x += 1;
      Obj2.y = Obj2.y - 1;
      for (let key in cell) {
        if (Obj2.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj2.stringXY) {
              break cikl2
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj2.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              break cikl2;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
    }
    let Obj3 = new Cell (this.x, this.y);
    cikl3: while (Obj3.x > 1 && Obj3.y < 8) {
      Obj3.x = Obj3.x - 1;
      Obj3.y += 1;
      for (let key in cell) {
        if (Obj3.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj3.stringXY) {
              break cikl3
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj3.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              break cikl3;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
    }
    let Obj4 = new Cell (this.x, this.y);
    cikl4: while (Obj4.x > 1 && Obj4.y > 1) {
      Obj4.x = Obj4.x - 1;
      Obj4.y = Obj4.y - 1;
      for (let key in cell) {
        if (Obj4.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj4.stringXY) {
              break cikl4
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj4.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              break cikl4;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
    }
  }
}
class blackOfficer extends whitePawn {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    super(x, y, name, kallibrTop, kallibrLeft);
  }
  hod() {
    let Obj = new Cell (this.x, this.y);
    por.push(this.x, this.y, this.name);
    cikl: while (Obj.x < 8 && Obj.y < 8) {
      Obj.x += 1;
      Obj.y += 1;
      for (let key in cell) {
        if (Obj.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj.stringXY) {
              break cikl
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              break cikl;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
    }
    let Obj2 = new Cell (this.x, this.y);
    cikl2: while (Obj2.x < 8 && Obj.y > 1) {
      Obj2.x += 1;
      Obj2.y = Obj2.y - 1;
      for (let key in cell) {
        if (Obj2.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj2.stringXY) {
              break cikl2
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj2.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              break cikl2;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
    }
    let Obj3 = new Cell (this.x, this.y);
    cikl3: while (Obj3.x > 1 && Obj3.y < 8) {
      Obj3.x = Obj3.x - 1;
      Obj3.y += 1;
      for (let key in cell) {
        if (Obj3.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj3.stringXY) {
              break cikl3
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj3.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              break cikl3;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
    }
    let Obj4 = new Cell (this.x, this.y);
    cikl4: while (Obj4.x > 1 && Obj4.y > 1) {
      Obj4.x = Obj4.x - 1;
      Obj4.y = Obj4.y - 1;
      for (let key in cell) {
        if (Obj4.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj4.stringXY) {
              break cikl4
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj4.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              break cikl4;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
    }
  }
}
class whiteQueen extends whiteOfficer {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    super(x, y, name, kallibrTop, kallibrLeft);
  }
  hod() {
    super.hod();
    let Obj5 = new Cell (this.x, this.y);
    cikl5: while (Obj5.x < 8) {
    Obj5.x = Obj5.x + 1;
      for (let key in cell) {
        if (Obj5.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj5.stringXY) {
              break cikl5
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj5.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl5;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj6 = new Cell (this.x, this.y);
    cikl6: while (Obj6.x > 1) {
      Obj6.x = Obj6.x - 1;
      for (let key in cell) {
        if (Obj6.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj6.stringXY) {
              break cikl6
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj6.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl6;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj7 = new Cell (this.x, this.y);
    cikl7: while (Obj7.y > 1) {
      Obj7.y = Obj7.y - 1;
      for (let key in cell) {
        if (Obj7.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj7.stringXY) {
              break cikl7
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj7.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl7;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj8 = new Cell (this.x, this.y);
    cikl8: while (Obj8.y < 8) {
      Obj8.y = Obj8.y + 1;
      for (let key in cell) {
        if (Obj8.stringXY === cell[key].stringXY) {
          for (let i in chessmenWhite) {
            if (chessmenWhite[i].stringXY === Obj8.stringXY) {
              break cikl8
            }
          }
          for (let j in chessmenBlack) {
            if (chessmenBlack[j].stringXY === Obj8.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl8;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
  }
}
class blackQueen extends blackOfficer {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    super(x, y, name, kallibrTop, kallibrLeft);
  }
  hod() {
    super.hod();
    let Obj5 = new Cell (this.x, this.y);
    cikl5: while (Obj5.x < 8) {
      Obj5.x += 1;
      for (let key in cell) {
        if (Obj5.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj5.stringXY) {
              break cikl5
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj5.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl5;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj6 = new Cell (this.x, this.y);
    cikl6: while (Obj6.x > 0) {
      Obj6.x = Obj6.x - 1;
      for (let key in cell) {
        if (Obj6.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj6.stringXY) {
              break cikl6
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj6.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl6;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj7 = new Cell (this.x, this.y);
    cikl7: while (Obj7.y > 0) {
      Obj7.y = Obj7.y - 1;
      for (let key in cell) {
        if (Obj7.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj7.stringXY) {
              break cikl7
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj7.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl7;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
    let Obj8 = new Cell (this.x, this.y);
    cikl8: while (Obj8.y < 8) {
      Obj8.y = Obj8.y + 1;
      for (let key in cell) {
        if (Obj8.stringXY === cell[key].stringXY) {
          for (let i in chessmenBlack) {
            if (chessmenBlack[i].stringXY === Obj8.stringXY) {
              break cikl8
            }
          }
          for (let j in chessmenWhite) {
            if (chessmenWhite[j].stringXY === Obj8.stringXY) {
              document.getElementById([j]).classList.add('ceel_active');
              /////
              break cikl8;
            }
          }
          document.getElementById([key]).classList.add('ceel_active');
          ////
        }
      }
    }
  }
}
class whiteKing extends whitePawn {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    super(x, y, name, kallibrTop, kallibrLeft)
  }
  hod() {
    por.push(this.x, this.y, this.name);
    function oneHod (obj, o) {
      for (let key in chessmenBlack) {
        if (chessmenBlack[key].stringXY === obj.stringXY) {
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
      for (let key in chessmenWhite) {
        if (chessmenWhite[key].stringXY === obj.stringXY) {
          o = false;
        }
      }
      for (let key in cell) {
        if (cell[key].stringXY === obj.stringXY) {
          if (o) {
            document.getElementById([key]).classList.add('ceel_active');
          }
        }
      }
    }
    let Obj = new Cell (this.x + 1, this.y);
    let o = true;
    oneHod(Obj, o);
    let Obj2 = new Cell (this.x + 1, this.y + 1);
    let o2 = true;
    oneHod(Obj2, o2);
    let Obj3 = new Cell (this.x, this.y + 1);
    let o3 = true;
    oneHod(Obj3, o3);
    let Obj4 = new Cell (this.x - 1, this.y - 1);
    let o4 = true;
    oneHod(Obj4, o4);
    let Obj5 = new Cell (this.x - 1, this.y);
    let o5 = true;
    oneHod(Obj5, o5);
    let Obj6 = new Cell (this.x - 1, this.y + 1);
    let o6 = true;
    oneHod(Obj6, o6);
    let Obj7 = new Cell (this.x + 1, this.y - 1);
    let o7 = true;
    oneHod(Obj7, o7);
    let Obj8 = new Cell (this.x , this.y - 1);
    let o8 = true;
    oneHod(Obj8, o8);
  }
}
class blackKing extends whitePawn {
  constructor(x, y, name, kallibrTop, kallibrLeft) {
    super(x, y, name, kallibrTop, kallibrLeft)
  }
  hod() {
    por.push(this.x, this.y, this.name);
    function oneHod (obj, o) {
      for (let key in chessmenWhite) {
        if (chessmenWhite[key].stringXY === obj.stringXY) {
          document.getElementById([key]).classList.add('ceel_active');
        }
      }
      for (let key in chessmenBlack) {
        if (chessmenBlack[key].stringXY === obj.stringXY) {
          o = false;
        }
      }
      for (let key in cell) {
        if (cell[key].stringXY === obj.stringXY) {
          if (o) {
            document.getElementById([key]).classList.add('ceel_active');
          }
        }
      }
    }
    let Obj = new Cell (this.x + 1, this.y + 1);
    let o = true;
    oneHod(Obj, o);
    let Obj2 = new Cell (this.x + 1, this.y - 1);
    let o2 = true;
    oneHod(Obj2, o2);
    let Obj3 = new Cell (this.x + 1, this.y);
    let o3 = true;
    oneHod(Obj3, o3);
    let Obj4 = new Cell (this.x - 1, this.y + 1);
    let o4 = true;
    oneHod(Obj4, o4);
    let Obj5 = new Cell (this.x - 1, this.y - 1);
    let o5 = true;
    oneHod(Obj5, o5);
    let Obj6 = new Cell (this.x - 1, this.y);
    let o6 = true;
    oneHod(Obj6, o6);
    let Obj7 = new Cell (this.x, this.y - 1);
    let o7 = true;
    oneHod(Obj7, o7);
    let Obj8 = new Cell (this.x, this.y + 1);
    let o8 = true;
    oneHod(Obj8, o8);
  }
}
let chessmenWhite = {
  whitePawnA: new whitePawn(2, 1, 'whitePawnA', 107.5, 101),
  whitePawnB: new whitePawn(2, 2, 'whitePawnB', 116.5, 109.5),
  whitePawnC: new whitePawn(2, 3, 'whitePawnC', 125.5, 118),
  whitePawnD: new whitePawn(2, 4, 'whitePawnD', 134.5, 126.5),
  whitePawnE: new whitePawn(2, 5, 'whitePawnE', 143.5, 135),
  whitePawnF: new whitePawn(2, 6, 'whitePawnF', 152.5, 143.5),
  whitePawnG: new whitePawn(2, 7, 'whitePawnG', 161.5, 152),
  whitePawnH: new whitePawn(2, 8, 'whitePawnH', 170.5, 160.5),
  whiteRookA: new whiteRook(1, 1, 'whiteRookA', 71.5, 67),
  whiteRookH: new whiteRook(1, 8, 'whiteRookH', 89.5, 84),
  whiteHorsB: new whiteHors(1, 2, 'whiteHorsB', -0.5, -1),
  whiteHorsG: new whiteHors(1, 7, 'whiteHorsG', 8.5, 7.5),
  whiteOfficerC: new whiteOfficer(1, 3, 'whiteOfficerC', 35.5, 33),
  whiteOfficerF: new whiteOfficer(1, 6, 'whiteOfficerF', 53.5, 50),
  whiteQueen: new whiteQueen (1, 4, 'whiteQueen', 269.5, 254),
  whiteKing: new whiteKing (1, 5, 'whiteKing', 251.5, 237)
}

let chessmenBlack = {
  blackPawnA: new blackPawn(7, 1, 'blackPawnA', 179.5, 169),
  blackPawnB: new blackPawn(7, 2, 'blackPawnB', 188.5, 177.5),
  blackPawnC: new blackPawn(7, 3, 'blackPawnC', 197.5, 186),
  blackPawnD: new blackPawn(7, 4, 'blackPawnD', 206.5, 194.5),
  blackPawnE: new blackPawn(7, 5, 'blackPawnE', 215.5, 203),
  blackPawnF: new blackPawn(7, 6, 'blackPawnF', 224.5, 211.5),
  blackPawnG: new blackPawn(7, 7, 'blackPawnG', 233.5, 220),
  blackPawnH: new blackPawn(7, 8, 'blackPawnH', 242.5, 228.5),
  blackRookA: new blackRook(8, 1, 'blackRookA', 80.5, 75.5),
  blackRookH: new blackRook(8, 8, 'blackRookH', 98.5, 92.5),
  blackHorsB: new blackHors(8, 2, 'blackHorsB', 17.5, 16),
  blackHorsG: new blackHors(8, 7, 'blackHorsG', 26.5, 24.5),
  blackOfficerC: new blackOfficer(8, 3, 'blackOfficerC', 44.5, 41.5),
  blackOfficerF: new blackOfficer(8, 6, 'blackOfficerF', 62.5, 58.5),
  blackQueen: new blackQueen(8, 4, 'blackQueen', 278.5, 262.5),
  blackKing: new blackKing(8, 5, 'blackKing', 260.5, 245.5)
}
// let i = document.querySelector('body');

// i.addEventListener('mousemove', e => {

  
// })


document.querySelector('.board').addEventListener("click", event => {
  let a = event.target.id;
  if (cell[a]) {
        if (document.getElementById(a).classList[1] == 'ceel_active') {
          for (let key in chessmenWhite) {
            if (key === por[2]) {
              chessmenWhite[key].x = cell[a].x;
              chessmenWhite[key].y = cell[a].y;
              chessmenWhite[key].firstHod = false;              
              por = [];
              document.querySelectorAll('.ceel_active').forEach(function (item) {
                item.classList.remove('ceel_active')
              })
            }
          }
          for (let key in chessmenBlack) {
            if (key === por[2]) {
              chessmenBlack[key].x = cell[a].x;
              chessmenBlack[key].y = cell[a].y;
              chessmenBlack[key].firstHod = false;
              por = [];
              document.querySelectorAll('.ceel_active').forEach(function (item) {
                item.classList.remove('ceel_active')
              })
            }
          }
        } else {
    for (let key in chessmenWhite) {
      if (chessmenWhite[key].stringXY === cell[a].stringXY) {
        por = [];
        document.querySelectorAll('.ceel_active').forEach(function (item) {
          item.classList.remove('ceel_active')
        })
        chessmenWhite[key].hod();
      }
    }
    for (let key in chessmenBlack) {                                //black
      if (chessmenBlack[key].stringXY === cell[a].stringXY) {
        por = [];
        document.querySelectorAll('.ceel_active').forEach(function (item) {
          item.classList.remove('ceel_active')
        })
        chessmenBlack[key].hod();
      }
    }
  }
  } else {
    if (document.getElementById(a).classList[1] == 'ceel_active') {

      for (let key in chessmenWhite) {
        if (key === por[2]) {
          chessmenWhite[key].x = chessmenBlack[a].x;
          chessmenWhite[key].y = chessmenBlack[a].y;
          chessmenWhite[key].firstHod = false;
          por = [];
          chessmenBlack[a].life = false;
          document.querySelectorAll('.ceel_active').forEach(function (item) {
            item.classList.remove('ceel_active')
          })
        }
      }
      for (let key in chessmenBlack) {
        if (key === por[2]) {
          chessmenBlack[key].x = chessmenWhite[a].x;
          chessmenBlack[key].y = chessmenWhite[a].y;
          chessmenBlack[key].firstHod = false;
          por = [];
          chessmenWhite[a].life = false;
          document.querySelectorAll('.ceel_active').forEach(function (item) {
            item.classList.remove('ceel_active')
          })
        }
      }
    } else {
    if (chessmenWhite[a]) {
      por = []
      document.querySelectorAll('.ceel_active').forEach(function (item) {
        item.classList.remove('ceel_active')
      })
      chessmenWhite[a].hod();
    }
    if (chessmenBlack[a]) { 
      por = []
      document.querySelectorAll('.ceel_active').forEach(function (item) {
        item.classList.remove('ceel_active')
      })                                         //black
      chessmenBlack[a].hod();
    }
  }
  }
});
