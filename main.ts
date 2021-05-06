scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (Level == 1) {
        info.stopCountdown()
        Level += 1
        game.showLongText("You're tired. Go and get some rest.", DialogLayout.Full)
        info.startCountdown(60)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (Level == 2) {
        info.stopCountdown()
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c . . . . . . . . . . 
            . . . c b b c f f f . . e e . . 
            . . . c b 5 5 f f f f e b e . . 
            . . c c 5 5 5 5 f f f e f f c . 
            . . c c b b 5 5 b 1 b f b 5 b f 
            c c c 5 5 b b 5 f f b e 5 5 5 f 
            c 5 5 5 5 5 b 5 e b b e b 5 5 f 
            c b 5 5 5 5 b 5 e b b e b 5 5 f 
            . c c 5 5 b b 5 f f b e 5 5 5 f 
            . . c c b b 5 5 b 1 b f b 5 b f 
            . . c b 5 5 5 5 f f f e c f c . 
            . . . c b 5 5 f f f f e b e . . 
            . . . c b b f f f f . . e e . . 
            . . . . c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        Level += 1
        game.showLongText("Good morning! Go and pick some apples at the orchard for breakfast.", DialogLayout.Full)
        info.startCountdown(60)
    }
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingOak, function (sprite, location) {
    if (Level == 3) {
        info.stopCountdown()
        Level += 1
        game.showLongText("Mmm, apples. Congratulations! You just beat the game!", DialogLayout.Full)
        game.over(true)
    }
})
let Level = 0
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.showLongText("Find your way to your house!", DialogLayout.Full)
Level = 1
info.startCountdown(180)
game.onUpdate(function () {
    mySprite.setImage(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
