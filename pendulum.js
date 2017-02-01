(function() {
    function Pendulum(config) {
        var that = this;

        that.canvas = config.canvas;
        that.context = that.canvas.getContext("2d");
        that.angle = 90;
        that.centerX = PENDULUM_CENTER_X;
        that.centerY  = PENDULUM_CENTER_Y;
        that.x = that.centerX;
        that.y = that.centerY + PENDULUM_LENGTH;
        that.angleSpeed = 6;
    }

    Pendulum.prototype = {
        update: function() {
            var that = this;

            if ((that.angleSpeed > 0 && that.angle >= PENDULUM_MAX_ANGLE) || 
                    (that.angleSpeed < 0 && that.angle <= PENDULUM_MIN_ANGLE)) {
                that.angleSpeed *= -1;
            }

            that.angle += that.angleSpeed;

            that.x = PENDULUM_CENTER_X + (PENDULUM_LENGTH * Math.cos(this._toRadians(that.angle)));
            that.y = PENDULUM_CENTER_Y + (PENDULUM_LENGTH * Math.sin(this._toRadians(that.angle)));
        },

        render: function() {
            var that = this,
                ctx = that.context;
            
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = BLACK;
            ctx.moveTo(PENDULUM_CENTER_X, PENDULUM_CENTER_Y);
            ctx.lineTo(that.x, that.y);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = BLACK;
            ctx.arc(that.x, that.y, PENDULUM_RADIUS, 0, 2 * Math.PI);
            ctx.fillStyle = BLACK;
            ctx.fill();
            ctx.stroke();
        },

        _toRadians: function(degrees) {
            return degrees * Math.PI / ANGLES_180;
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
        PENDULUM_MIN_ANGLE = 60,
        PENDULUM_MAX_ANGLE = 120,
        ANGLES_180 = 180,
        BLACK = "#000";
})();