var EventEmitter = require("events").EventEmitter;
var util = require("util");
Even = function (count) {
    this.count = count;
};
util.inherits(Even, EventEmitter);
Even.prototype.increment = function () {
    var self = this;
    self.emit("evenCount");
    self.count++;
};
var countEven = new Even(10);
countEven.on("evenCount", function () {
    if (this.count % 2 == 0) {
        console.log("The count is : " + this.count);
        globalEvencount = this.count;
    }
});
exports.getEven = function () {
    countEven.increment();
    return globalEvencount;
}