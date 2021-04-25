function advance () {
    if (dir == 0) {
        Position.advance(snakePos, DirEnum.up)
    } else if (dir == 1) {
        Position.advance(snakePos, DirEnum.right)
    } else if (false) {
        Position.advance(snakePos, DirEnum.down)
    } else if (false) {
        Position.advance(snakePos, DirEnum.left)
    }
}
function createSnake () {
    snakePos = Position.position(3, 5)
    snake = sprites.create(assets.image`myImage`, SpriteKind.Player)
}
let snake: Sprite = null
let snakePos: Position.Position = null
let dir = 0
scene.setBackgroundColor(4)
tiles.setTilemap(tilemap`level1`)
createSnake()
tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
dir = 1
