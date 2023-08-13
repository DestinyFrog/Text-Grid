const Actions = {
    ["🐪"]: undefined,
    ["🌾"]: undefined
};
;class Celula {
    id;
    value;
    celula;
    constructor(id, value = "") {
        this.id = id;
        this.value = value;
        this.celula = document.createElement('div');
        this.celula.className = "cell";
        this.celula.addEventListener('click', (_ev) => {
            this.setValue();
        });
        document.getElementById("content").appendChild(this.celula);
    }
    ;
    setValue(newValue = Selector.getCurrent()) {
        this.value = newValue;
    }
    update() {
        this.celula.textContent = this.value;
        if (Actions[this.value])
            Actions[this.value](this.id);
    }
}
;const DELAY = 60;
const Celulas = [];
const Rows = 13;
const start = () => {
    document.getElementById('content').style.gridTemplateColumns = `repeat(${Rows},1fr)`;
    for (let c = 0; c < Rows; c++) {
        for (let r = 0; r < Rows; r++) {
            Celulas.push(new Celula(parseID(c, r)));
        }
    }
};
const update = () => Celulas.forEach(obj => obj.update());
async function main() {
    update();
    setTimeout(() => requestAnimationFrame(main), DELAY);
}
start();
main();
;class Selector {
    static element = document.getElementById("selector");
    static list = ["❌", ...Object.entries(Actions).map(o => o[0])];
    static index = 0;
    static current = this.list[0];
    static getCurrent() {
        return (this.current == "❌") ? "" : this.current;
    }
    static NextValue() {
        this.index++;
        if (this.index >= this.list.length) {
            this.index = 0;
        }
        this.current = this.list[this.index];
        this.element.textContent = this.current;
    }
    static PrevValue() {
        this.index--;
        if (this.index < 0) {
            this.index = this.list.length - 1;
        }
        this.current = this.list[this.index];
        this.element.textContent = this.current;
    }
}
Selector.element.textContent = "❌";
document.addEventListener('keydown', ({ key }) => {
    if (key == "ArrowUp")
        Selector.NextValue();
    if (key == "ArrowDown")
        Selector.PrevValue();
});
document.getElementById("selector")
    .addEventListener('click', () => Selector.NextValue());
;function IDtoString(id) {
    var [letter, ...number] = id.split('');
    return [letter, parseInt(number.join(''))];
}
function parseID(row, col) {
    return `${String.fromCharCode(96 + row)}${col.toString()}`;
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGF2aW9yLnRzIiwiYmVoYXZpb3IuanMiLCJjZWxsLnRzIiwiY2VsbC5qcyIsIm1haW4udHMiLCJtYWluLmpzIiwic2VsZWN0b3IudHMiLCJzZWxlY3Rvci5qcyIsInV0aWwudHMiLCJ1dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0FDQUE7QUFDQTtBQUNBO0FBQ0EsQ0NEQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3RCQTtBQUNBO0FBQ0E7QUFFQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBREtBO0FBRUE7QUFFQTtBQ0xBO0FBQ0E7QURPQTtBQUFFO0FBQVM7QUNIWCxDQ2xCQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBREdBO0FBRUE7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBREVBO0FBRUE7QUNEQTtBQUNBLENDbENBO0FDQUE7QUFDQTtBREVBO0FBR0E7QUNGQTtBRElBO0FDRkEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY29uc3QgQWN0aW9ucyA9IHtcclxuICAgIFtcIvCfkKpcIl06IHVuZGVmaW5lZCxcclxuICAgIFtcIvCfjL5cIl06IHVuZGVmaW5lZFxyXG59XHJcbiIsbnVsbCwiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuL2JlaGF2aW9yLmpzXCI7XHJcbmltcG9ydCB7IFNlbGVjdG9yIH0gZnJvbSBcIi4vc2VsZWN0b3IuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDZWx1bGEge1xyXG4gICAgY2VsdWxhOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHVibGljIGlkOnN0cmluZywgcHVibGljIHZhbHVlID0gXCJcIiApe1xyXG4gICAgICAgIHRoaXMuY2VsdWxhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICB0aGlzLmNlbHVsYS5jbGFzc05hbWUgPSBcImNlbGxcIjtcclxuXHJcbiAgICAgICAgdGhpcy5jZWx1bGEuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKF9ldikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKCk7XHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggXCJjb250ZW50XCIgKS5hcHBlbmRDaGlsZCggdGhpcy5jZWx1bGEgKTtcclxuICAgIH07XHJcblxyXG4gICAgc2V0VmFsdWUoIG5ld1ZhbHVlOnN0cmluZyA9IFNlbGVjdG9yLmdldEN1cnJlbnQoKSApIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5jZWx1bGEudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICggQWN0aW9uc1t0aGlzLnZhbHVlXSApIEFjdGlvbnNbdGhpcy52YWx1ZV0oIHRoaXMuaWQgKTtcclxuICAgIH1cclxufVxyXG4iLG51bGwsImltcG9ydCB7IENlbHVsYSB9IGZyb20gXCIuL2NlbGwuanNcIjtcclxuaW1wb3J0IHsgU2VsZWN0b3IgfSBmcm9tIFwiLi9zZWxlY3Rvci5qc1wiO1xyXG5pbXBvcnQgeyBwYXJzZUlEIH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xyXG5cclxuY29uc3QgREVMQVkgPSA2MDtcclxuZXhwb3J0IGNvbnN0IENlbHVsYXMgPSBbXTtcclxuY29uc3QgUm93cyA9IDEzO1xyXG5cclxuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Um93c30sMWZyKWA7XHJcblxyXG4gICAgZm9yICggbGV0IGMgPSAwOyBjIDwgUm93czsgYysrICkge1xyXG4gICAgICAgIGZvciAoIGxldCByID0gMDsgciA8IFJvd3M7IHIrKyApIHtcclxuICAgICAgICAgICAgQ2VsdWxhcy5wdXNoKCBuZXcgQ2VsdWxhKCBwYXJzZUlEKCBjLCByICkgKSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGUgPSAoKSA9PiBDZWx1bGFzLmZvckVhY2goIG9iaiA9PiBvYmoudXBkYXRlKCkgKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgICB1cGRhdGUoKVxyXG4gICAgc2V0VGltZW91dCggKCkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBtYWluICksIERFTEFZICk7XHJcbn0gc3RhcnQoKTsgbWFpbigpOyIsbnVsbCwiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuL2JlaGF2aW9yLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3Ige1xyXG4gICAgc3RhdGljIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdG9yXCIpO1xyXG4gICAgLy8gc3RhdGljIGxpc3QgPSBbXCLinYxcIixcIvCfkKpcIixcIvCfjL5cIixcIvCfkqdcIl07XHJcbiAgICBzdGF0aWMgbGlzdCA9IFsgXCLinYxcIiwgLi4uT2JqZWN0LmVudHJpZXMoIEFjdGlvbnMgKS5tYXAoIG8gPT4gb1swXSApIF07XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbmRleCA9IDA7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBjdXJyZW50OnN0cmluZyA9IHRoaXMubGlzdFswXTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0Q3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gKCB0aGlzLmN1cnJlbnQgPT0gXCLinYxcIiApID8gXCJcIiA6IHRoaXMuY3VycmVudFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBOZXh0VmFsdWUoKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIGlmICggdGhpcy5pbmRleCA+PSB0aGlzLmxpc3QubGVuZ3RoICkgeyB0aGlzLmluZGV4ID0gMDsgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMubGlzdFt0aGlzLmluZGV4XTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFByZXZWYWx1ZSgpIHtcclxuICAgICAgICB0aGlzLmluZGV4LS07XHJcbiAgICAgICAgaWYgKCB0aGlzLmluZGV4IDwgMCApIHsgdGhpcy5pbmRleCA9IHRoaXMubGlzdC5sZW5ndGgtMTsgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMubGlzdFt0aGlzLmluZGV4XTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblNlbGVjdG9yLmVsZW1lbnQudGV4dENvbnRlbnQgPSBcIuKdjFwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCAoe2tleX0pID0+IHtcclxuICAgIGlmICgga2V5ID09IFwiQXJyb3dVcFwiICkgICBTZWxlY3Rvci5OZXh0VmFsdWUoKTtcclxuICAgIGlmICgga2V5ID09IFwiQXJyb3dEb3duXCIgKSBTZWxlY3Rvci5QcmV2VmFsdWUoKTtcclxufSApO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RvclwiKVxyXG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCk9PlNlbGVjdG9yLk5leHRWYWx1ZSgpICkiLG51bGwsIlxyXG5leHBvcnQgZnVuY3Rpb24gSUR0b1N0cmluZyAoIGlkOnN0cmluZyApOltzdHJpbmcsbnVtYmVyXSB7XHJcbiAgICB2YXIgWyBsZXR0ZXIsIC4uLm51bWJlciBdID0gaWQuc3BsaXQoJycpO1xyXG4gICAgcmV0dXJuIFsgbGV0dGVyLCBwYXJzZUludCggbnVtYmVyLmpvaW4oJycpICkgXTtcclxufVxyXG5cclxuLy8gRnVuw6fDo28gcXVlIGNvbnZlcnRlIFZldG9yKCB4LHkgKSBlbSBJRCggYTEgKVxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJRCAoIHJvdzpudW1iZXIsIGNvbDpudW1iZXIgKTpzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke1N0cmluZy5mcm9tQ2hhckNvZGUoOTYrcm93KX0ke2NvbC50b1N0cmluZygpfWBcclxufVxyXG4iLG51bGxdfQ==
