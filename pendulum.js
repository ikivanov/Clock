(function() {
    function Pendulum(config) {
        var that = this;

        that.canvas = config.canvas;
        that.context = that.canvas.getContext("2d");
        that.angle = PENDULUM_MIN_ANGLE;
        that.centerX = PENDULUM_CENTER_X;
        that.centerY  = PENDULUM_CENTER_Y;
        that.x = that.centerX;
        that.y = that.centerY + PENDULUM_LENGTH;
        that.angleSpeed = -6;
    }

    Pendulum.prototype = {
        update: function(oldTime, newTime) {

        },

        render: function() {
            var ctx = this.context;
            
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = BLACK;
            ctx.moveTo(PENDULUM_CENTER_X, PENDULUM_CENTER_Y);
            ctx.lineTo(PENDULUM_CENTER_X, PENDULUM_CENTER_Y + PENDULUM_LENGTH);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = BLACK;
            ctx.arc(PENDULUM_CENTER_X, PENDULUM_CENTER_Y + PENDULUM_LENGTH, PENDULUM_RADIUS, 0, 2 * Math.PI);
            ctx.fillStyle = BLACK;
            ctx.fill();
            ctx.stroke();
        }
    };

    window.ClockNamespace = window.ClockNamespace || {};
    window.ClockNamespace.Pendulum = Pendulum;

    const WIDTH = 300,
        HEIGHT = 400,
        PENDULUM_CENTER_X = WIDTH / 2,
        PENDULUM_CENTER_Y = HEIGHT - 100,
        PENDULUM_LENGTH = 75,
        PENDULUM_RADIUS = 25,
        PENDULUM_MIN_ANGLE = 120, 
        PENDULUM_MAX_ANGLE = 60,
        BLACK = "#000";
})();