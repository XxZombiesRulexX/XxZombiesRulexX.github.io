(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:

        createPlatform(700, 590, 0.7, .25);
        createPlatform(250, 490, 0.7, .25);
        createPlatform(605, 390, 0.8, .25);
        createPlatform(400, 290, 0.4, .25);
        createPlatform(200, 290, 0.4, .25);
        createPlatform(50, 190, 0.3, .25);
        createPlatform(300, 190, 0.4, .25); 
        createPlatform(700, 590, 0.1, 3);    
        createPlatform(700, 670, 2, 3);   
        createPlatform(700, 590, 0.7, .25);
        createPlatform(700, 670, 2, 3);
        createPlatform(550, 190, 0.4, .25);
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        }
    platform.init = init;
})(window);