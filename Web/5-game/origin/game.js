class Tile {
  constructor(p, v) {
    this.row = p.row;
    this.column = p.column;
    this.value = v;

    this.prePosition = null;
    this.mergedTiles = null;
  }

  updatePosition(target) {
    this.prePosition = { row: this.row, column: this.column };

    this.row = target.row;
    this.column = target.column;
  }
}

class Grid {
  constructor(size = 4) {
    this.size = size;
    this.cells = [];
    this.el = document.querySelector("#tile-container");
    this.init(this.size);
  }

  init(size) {
    for (let i = 0; i < size; i++) {
      this.cells.push([]);
    }
    this.cells.map((item) => {
      for (let i = 0; i < size; i++) {
        item.push(null);
      }
    });
  }

  clear() {
    for (let i = 0; i < this.size; i++) {
      this.cells[i].fill(null);
    }
  }

  add(tile) {
    this.cells[tile.row][tile.column] = tile;
  }

  remove(tile) {
    this.cells[tile.row][tile.column] = null;
  }

  get(position) {
    return this.cells[position.row][position.column];
  }

  outOfRange(position) {
    return !(
      position.row < this.size &&
      position.row >= 0 &&
      position.column < this.size &&
      position.column >= 0
    );
  }

  render() {
    console.log(this.cells);
    this.el.innerHTML = "";
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.cells[i][j]) {
          this.renderTile(this.cells[i][j]);
        }
      }
    }
  }

  renderTile(tile) {
    const tileInner = document.createElement("div");
    tileInner.setAttribute("class", "tile-inner");
    tileInner.innerHTML = tile.value;

    const tileDom = document.createElement("div");
    let classList = [
      "tile",
      `tile-${tile.value}`,
      `tile-position-${tile.row + 1}-${tile.column + 1}`,
    ];

    if (tile.prePosition) {
      classList[2] = `tile-position-${tile.prePosition.row + 1}-${
        tile.prePosition.column + 1
      }`;
      setTimeout(function () {
        classList[2] = `tile-position-${tile.row + 1}-${tile.column + 1}`;
        tileDom.setAttribute("class", classList.join(" "));
      }, 16);
    } else if (tile.mergedTiles) {
      classList.push("tile-merged");
      tileDom.setAttribute("class", classList.join(" "));
      for (let i = 0; i < tile.mergedTiles.length; i++) {
        this.renderTile(tile.mergedTiles[i]);
      }
    } else {
      classList.push("tile-new");
    }

    tileDom.setAttribute("class", classList.join(" "));
    tileDom.appendChild(tileInner);
    this.el.appendChild(tileDom);
  }

  randomAvailableCell() {
    const cells = this.availableCells();
    if (cells.length > 0) {
      return cells[Math.floor(Math.random() * cells.length)];
    }
  }

  availableCells() {
    const availableCells = [];
    for (let row = 0; row < this.cells.length; row++) {
      for (let column = 0; column < this.cells[row].length; column++) {
        if (!this.cells[row][column]) {
          availableCells.push({ row, column });
        }
      }
    }
    return availableCells;
  }
}

class GameManager {
  constructor(size = 4) {
    this.size = size;
    this.grid = new Grid();
    this.inviteCode = "";
    this.mask = document.querySelector(".mask");
    this.content = document.querySelector(".mask .content");
    document.querySelector(".desc button").addEventListener("click", () => {
      this.newGame();
    });
    this.maskBtn = document.querySelector(".mask button");
    this.checkFunc = () => {
      this.startCheck();
    };
    this.maskBtn.addEventListener("click", this.checkFunc);
    this.start();
    let self = this;
    this.listener = new Listener({
      move: function (direction) {
        self.listenerFn(direction);
      },
    });
    this.mask.style = "display: flex;";
    this.maskBtn.innerHTML = "invited?";
    this.content.innerHTML =
      "<p>Plz input invite_code:</p><input id='input' value='1'/>";
  }

  checkInvited() {
    let args = [...arguments];

    let buf = new ArrayBuffer(24);
    const view = new DataView(buf);
    view.setUint8(0, 18);
    view.setUint8(1, 101);
    view.setUint8(2, 83);
    view.setUint8(3, 84);
    view.setUint16(4, 0x036d, true);
    view.setUint16(6, 0x0604, true);
    view.setUint16(8, 0x6b67, true);
    view.setUint16(10, 0x3e09, true);
    view.setUint32(12, 0x2f261100, true);
    view.setUint32(16, 0x063e5e52);
    view.setUint32(20, 0x120000);

    function check(code) {
      if (code.length !== 24) return false;
      let encode = [];
      for (let i = 0; i < code.length; i++) {
        if (~i % 2 === 0) {
          encode.push(code.charCodeAt(i) ^ code.charCodeAt(i - 2));
        } else {
          encode.push(code.charCodeAt(i) ^ code.charCodeAt(i + 1));
        }
      }
      for (let i = 0; i < code.length; i++) {
        if (view.getInt8(i) !== encode[i]) return false;
      }
      return true;
    }

    return function () {
      if (!!arguments.length) {
        [].push.apply(args, arguments);

        return arguments.callee;
      }

      return check(args.join(""));
    };
  }

  start() {
    for (let i = 0; i < 2; i++) {
      this.addRandomTile();
    }
    this.grid.render();
  }

  startCheck() {
    let input = document.querySelector("#input").value;
    if (this.checkInvited(input)()) {
      this.maskBtn.removeEventListener("click", this.checkFunc);
      this.maskBtn.addEventListener("click", () => {
        this.gameAgain();
      });
      this.mask.style = "display: none;";
      this.gameStute = "Playing";
    } else {
      this.content.innerHTML =
        "<p>Plz input invite_code:</p><input id='input' value='1'/><p>error~</p>";
      setTimeout(() => {
        this.content.innerHTML =
          "<p>Plz input invite_code:</p><input id='input' value='1'/>";
      }, 2000);
    }
  }

  newGame() {
    this.gameStute = "Playing";
    this.grid.el.innerHTML = "";
    this.grid.clear();
    this.start();
  }

  gameAgain() {
    this.gameStute = "Playing";
    this.mask.style = "display: none;";
    this.grid.el.innerHTML = "";
    this.grid.clear();
    this.start();
  }

  addRandomTile() {
    const position = this.grid.randomAvailableCell();
    if (!position) return;
    const value = Math.random() < 0.9 ? 2 : 4;
    this.grid.add(new Tile(position, value));
  }

  generatePath(direction) {
    let rowPath = [];
    let columnPath = [];
    for (let i = 0; i < this.size; i++) {
      rowPath.push(i);
      columnPath.push(i);
    }

    if (direction.row === 1) rowPath.reverse();
    if (direction.column === 1) columnPath.reverse();

    return {
      rowPath,
      columnPath,
    };
  }

  getTargetGrid(target, direction) {
    function vector(position, direction) {
      return {
        row: position.row + direction.row,
        column: position.column + direction.column,
      };
    }

    target = vector(target, direction);
    let next = !this.grid.outOfRange(target)
      ? this.grid.get(target)
      : undefined;

    while (!this.grid.outOfRange(target) && !next) {
      target = vector(target, direction);
      next = !this.grid.outOfRange(target) ? this.grid.get(target) : undefined;
    }

    target = {
      row: target.row - direction.row,
      column: target.column - direction.column,
    };

    return {
      target,
      next,
    };
  }

  checkFailure() {
    const emptyCells = this.grid.availableCells();
    if (emptyCells.length > 0) {
      return false;
    }

    for (let row = 0; row < this.grid.size; row++) {
      for (let column = 0; column < this.grid.size; column++) {
        let now = this.grid.get({ row, column });

        let directions = [
          { row: 0, column: 1 },
          { row: 0, column: -1 },
          { row: 1, column: 0 },
          { row: -1, column: 0 },
        ];
        for (let i = 0; i < directions.length; i++) {
          const direction = directions[i];
          const target = {
            row: row + direction.row,
            column: column + direction.column,
          };
          const next = !this.grid.outOfRange(target)
            ? this.grid.get(target)
            : undefined;
          if (next && next.value === now.value) {
            return false;
          }
        }
      }
    }
    return true;
  }

  listenerFn(direction) {
    if (this.gameStute !== "Playing") return;

    let moved = false;

    const { rowPath, columnPath } = this.generatePath(direction);

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const position = { row: rowPath[i], column: columnPath[j] };
        const tile = this.grid.get(position);
        if (tile) {
          const { target, next } = this.getTargetGrid(position, direction);

          if (next && next.value === tile.value) {
            const merged = new Tile(
              {
                row: next.row,
                column: next.column,
              },
              tile.value * 2
            );
            if (merged.value === (2281 ^ 233)) this.gameSuccess();
            merged.mergedTiles = [tile, next];
            this.grid.add(merged);
            this.grid.remove(tile);
            tile.updatePosition({ row: next.row, column: next.column });
          } else this.moveTile(tile, target);
          moved = true;
        }
      }
    }

    if (moved) {
      this.addRandomTile();
      if (this.checkFailure()) this.gameFail();
      this.grid.render();
    }
  }

  gameFail() {
    this.mask.style = "display: flex;";
    this.maskBtn.innerHTML = "Try Again";
    this.content.innerHTML = "Game Over!";
    this.gameStute = "Over";
  }

  gameSuccess() {
    this.mask.style = "display: flex;";
    this.maskBtn.innerHTML = "Play Again";
    this.gameStute = "Over";
    this.content.innerHTML = this.successReward();
  }

  successReward() {
    const code = this.inviteCode;
    let successContent = atob(
      "Iw0LQn9bQxRBMB0TUBYVPgBbTXJUU05TFh4VVD0Db1xZLxgYLxMRPgtQCF1GRAxGFggHXDJfXVlVfhU="
    );
    let len = code.length;
    let result = "";

    for (let i = 0; i < successContent.length; i++) {
      result += String.fromCharCode(
        successContent.charCodeAt(i) ^ code.charCodeAt(i % len)
      );
    }
    return result;
  }

  moveTile(tile, target) {
    this.grid.cells[tile.row][tile.column] = null;
    tile.updatePosition(target);
    this.grid.cells[tile.row][tile.column] = tile;
  }
}

function Listener({ move: moveFn }) {
  window.addEventListener("keyup", function (e) {
    switch (e.key) {
      case "ArrowUp":
        moveFn({ row: -1, column: 0 });
        break;
      case "ArrowDown":
        moveFn({ row: 1, column: 0 });
        break;
      case "ArrowLeft":
        moveFn({ row: 0, column: -1 });
        break;
      case "ArrowRight":
        moveFn({ row: 0, column: 1 });
    }
  });
}

new GameManager();
