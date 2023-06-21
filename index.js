const sw = new Stopwatch();
function Stopwatch() {
  let starded = false;
  let time = 0;
  let inter;
  this.duration = time;
  this.start = function () {
    if (!starded) {
      starded = true;
      inter = setInterval(() => {
        time++;
        this.duration = time;
      }, 1000);
    } else throw new Error("already starded");
  };
  this.stop = function () {
    if (starded) {
      starded = false;
      clearInterval(inter);
    } else throw new Error("already stopped");
  };
  this.reset = function () {
    time = 0;
  };
}
