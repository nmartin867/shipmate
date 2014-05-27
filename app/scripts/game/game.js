function attachGraphicsDevice () {
    TurbulenzEngine = WebGLTurbulenzEngine.create({
        canvas: document.getElementById("canvas")
    });

    var graphicsDevice = TurbulenzEngine.createGraphicsDevice({});

    var ship = Draw2DSprite.create({
        width: 64,
        height: 128,
        x: graphicsDevice.width / 2,
        y: graphicsDevice.height / 2,
        color: [1.0, 1.0, 1.0, 1.0],
        rotation: Math.PI / 2
    });

    var shipTexture = graphicsDevice.createTexture({
        src: "asset/pirate_ship64x128.png",
        mipmaps: true,
        onload: function (texture) {
            if (texture) {
                ship.setTexture(texture);
                ship.setTextureRectangle([0, 0, texture.width, texture.height]);
            }
        }
    });

    var bgSprite = Draw2DSprite.create({
        width: graphicsDevice.width,
        height: graphicsDevice.height,
        x: graphicsDevice.width / 2,
        y: graphicsDevice.height / 2,
        color: [1.0, 1.0, 1.0, 1.0]
    });

    var waterTexture = graphicsDevice.createTexture({
        src: "asset/water.png",
        mipmaps: true,
        onload: function (texture) {
            if (texture) {
                bgSprite.setTexture(texture);
                bgSprite.setTextureRectangle([0, 0, texture.width, texture.height]);
            }
        }
    });

    var draw2D = Draw2D.create({
        graphicsDevice: graphicsDevice
    });

    function update() {
        /* Update code goes here */

        if (graphicsDevice.beginFrame()) {
            graphicsDevice.clear(1.0);
            /* Rendering code goes here */
            draw2D.begin('alpha');
            draw2D.drawSprite(bgSprite);
            draw2D.drawSprite(ship);
            draw2D.end();
            graphicsDevice.endFrame();
        }
    }

    TurbulenzEngine.setInterval(update, 1000 / 60);
}