controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . f f f 1 . . . . . . . . 
    . . . . f f f f 1 1 . . . . . . 
    . . . . f f f 1 1 1 1 . . . e . 
    . . f f f f f f f f f . . e e . 
    . . f f f f f f f f f . . a . . 
    . . f f f f f f f f f . . a . . 
    . . f f f f f f f f f f f a . . 
    f f f f f . . . f f f . . a . . 
    . . f f f . . . f f f . . a . . 
    . . f f f . . . f f f . . a . . 
    . . f f f . . . f f f f . 3 . . 
    . . f f f . . . f f f . . 3 3 . 
    `, SpriteKind.Player)
forever(function () {
    scene.setBackgroundColor(6)
})
