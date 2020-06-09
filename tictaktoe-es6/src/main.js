window.addEventListener('load', function() {
    const board = new Board();
    const game = new Game();    
    const status = new Status();

    board.init(game, status);
    game.init(status, board);

    board.renderMap();
    board.initEventHandlers();
});