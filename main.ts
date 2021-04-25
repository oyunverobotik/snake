function advance () {
    if (dir == 0) {
        Position.advance(snakePos, DirEnum.up)
    } else if (dir == 1) {
        Position.advance(snakePos, DirEnum.right)
    } else if (dir == 2) {
        Position.advance(snakePos, DirEnum.down)
    } else if (dir == 3) {
        Position.advance(snakePos, DirEnum.left)
    }
    snake.setPosition(Position.getPos(snakePos, PosEnum.X), Position.getPos(snakePos, PosEnum.Y))
}
function createSnake () {
    snake = sprites.create(assets.image`myImage`, SpriteKind.Player)
    snakePos = Position.position(3, 5)
    snake.setPosition(Position.getPos(snakePos, PosEnum.X), Position.getPos(snakePos, PosEnum.Y))
    snake.setStayInScreen(true)
}
let snake: Sprite = null
let snakePos: Position.Position = null
let dir = 0
scene.setBackgroundColor(4)
tiles.setTilemap(tilemap`level1`)
createSnake()
tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
dir = 1
game.onUpdateInterval(500, function () {
    if (controller.up.isPressed()) {
        dir = 0
    } else if (controller.right.isPressed()) {
        dir = 1
    } else if (controller.down.isPressed()) {
        dir = 2
    } else if (controller.left.isPressed()) {
        dir = 3
    }
    advance()
})
