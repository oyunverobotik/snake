controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    dir = 0
    snake.setImage(Rotate.rotateNormal(assets.image`myImage`, 180))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    snake.setImage(Rotate.rotateNormal(assets.image`myImage`, 270))
})
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
    snakePos = Position.position(2, 5)
    snake.setPosition(Position.getPos(snakePos, PosEnum.X), Position.getPos(snakePos, PosEnum.Y))
    snake.setStayInScreen(true)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    dir = 3
    snake.setImage(Rotate.rotateNormal(assets.image`myImage`, 90))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    dir = 1
    snake.setImage(Rotate.rotateNormal(assets.image`myImage`, 270))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    dir = 2
    snake.setImage(Rotate.rotateNormal(assets.image`myImage`, 0))
})
let snakePos: Position.Position = null
let snake: Sprite = null
let dir = 0
tiles.setTilemap(tilemap`level1`)
createSnake()
dir = 1
snake.setImage(Rotate.rotateNormal(assets.image`myImage`, 270))
game.onUpdateInterval(500, function () {
    advance()
})
