namespace SpriteKind {
    export const Goal = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const Equip = SpriteKind.create()
    export const Close = SpriteKind.create()
    export const Shop = SpriteKind.create()
}
namespace StatusBarKind {
    export const Coins = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Close, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        closeShop()
        blockSettings.writeNumber("Shop", 0)
    }
})
function restoreState () {
    info.setScore(blockSettings.readNumber("Level"))
    info.setLife(blockSettings.readNumber("Life"))
    gameIntialize()
    goalpost.setPosition(blockSettings.readNumber("GoalX"), blockSettings.readNumber("GoalY"))
    scaling.scaleToPercent(goalpost, scale, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    coins = blockSettings.readNumber("Coins")
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    menu()
})
function menu () {
    gameSaveState()
    destroyAllSprites()
    blockSettings.writeNumber("Menu", 1)
    EquipBlock = sprites.create(assets.image`equip`, SpriteKind.Equip)
    shopBlock = sprites.create(assets.image`myImage1`, SpriteKind.Shop)
    xBlock = sprites.create(assets.image`X`, SpriteKind.Close)
    mouse = sprites.create(assets.image`myImage2`, SpriteKind.Cursor)
    controller.moveSprite(mouse)
    xBlock.setPosition(136, 17)
    shopBlock.setPosition(40, 60)
    EquipBlock.setPosition(120, 60)
    scaling.scaleToPixels(shopBlock, 32, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleToPixels(EquipBlock, 32, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scene.setBackgroundColor(7)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blockSettings.readNumber("Shop") == 0) {
        football.throwDart()
        pauseUntil(() => football.x == 10 && football.y == 60)
    }
})
function closeShop () {
    destroyAllSprites()
    restoreState()
}
function death () {
    game.splash("You Died!", "Your Levels + Coins Reset")
    info.setScore(1)
    info.setLife(5)
    gameSaveState()
    restoreState()
    destroyAllSprites()
}
function goalIntializer () {
    sprites.destroy(goalpost)
    if (info.score() == 1) {
        goalpost = sprites.create(goalList[blockSettings.readNumber("GoalItem")], SpriteKind.Goal)
        scaling.scaleToPercent(goalpost, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        goalpost.setPosition(140, 60)
    }
    if (info.score() <= 5 && info.score() != 1) {
        goalpost = sprites.create(img`
            .............cc.
            ............cbbc
            ............cbbc
            ...........b9cc.
            ...........b9bb.
            ..........b99c..
            ..........b9bb..
            .........b99c...
            .........b9bb...
            ........b99c....
            ........b9bb....
            .......b99c.....
            .......b9bb.....
            ......b99c......
            ......b9bb......
            .....b99c.......
            .....b9bb.......
            ....b99c........
            ....b9bb........
            ...b99c.........
            ...b9bb.........
            ..b99c..........
            ..b9bb..........
            .b99c...........
            .b9bb...........
            b99c............
            b99c............
            b99c............
            b99c.........cc.
            b99c........cbbc
            b99c........cbbc
            b99c.......b9cc.
            b99c.......b9bb.
            b99c......b99c..
            b99bccc...b9bb..
            b99bbbbccc99c...
            b99bcccbcc9bb...
            b99b..ccb99c....
            b99b...cc9bbc...
            b99b...b99cbc...
            b99b...b9bbcac..
            b99b..b99c.fac..
            b99b..b9bb.faf..
            b99b.b99c..faf..
            b99b.b9bb..faf..
            b99bb99c...faf..
            b99bb9bb...faf..
            b99b99c...cfafc.
            b9999bb..cbfafbc
            b9999c...cdfffdc
            b999bb...cdcfcdc
            c999c....cadddac
            c99bb....caaaaac
            c99c.....caaaaac
            c9bb.....caaaaac
            .cc......caaaaac
            .........caaaaac
            .........caaaaac
            .........caaaaac
            .........8aaaaa8
            .........8aaaaa8
            .........6aaaaa6
            ..........6aaa6.
            ...........666..
            `, SpriteKind.Goal)
        scale = randint(50, 80)
        scaling.scaleToPercent(goalpost, scale, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        goalpost.setPosition(140, 60)
    }
    if (info.score() > 5 && info.score() <= 20) {
        goalpost = sprites.create(img`
            .............cc.
            ............cbbc
            ............cbbc
            ...........b9cc.
            ...........b9bb.
            ..........b99c..
            ..........b9bb..
            .........b99c...
            .........b9bb...
            ........b99c....
            ........b9bb....
            .......b99c.....
            .......b9bb.....
            ......b99c......
            ......b9bb......
            .....b99c.......
            .....b9bb.......
            ....b99c........
            ....b9bb........
            ...b99c.........
            ...b9bb.........
            ..b99c..........
            ..b9bb..........
            .b99c...........
            .b9bb...........
            b99c............
            b99c............
            b99c............
            b99c.........cc.
            b99c........cbbc
            b99c........cbbc
            b99c.......b9cc.
            b99c.......b9bb.
            b99c......b99c..
            b99bccc...b9bb..
            b99bbbbccc99c...
            b99bcccbcc9bb...
            b99b..ccb99c....
            b99b...cc9bbc...
            b99b...b99cbc...
            b99b...b9bbcac..
            b99b..b99c.8ac..
            b99b..b9bb.8a8..
            b99b.b99c..8a8..
            b99b.b9bb..8a8..
            b99bb99c...8a8..
            b99bb9bb...8a8..
            b99b99c...c8a8c.
            b9999bb..cb8a8bc
            b9999c...cd888dc
            b999bb...cdc8cdc
            c999c....c8ddd8c
            c99bb....c88888c
            c99c.....c88888c
            c9bb.....c88888c
            .cc......c88888c
            .........c88888c
            .........c88888c
            .........c88888c
            .........8888888
            .........8888888
            .........6888886
            ..........68886.
            ...........666..
            `, SpriteKind.Goal)
        scale = randint(40, 55)
        scaling.scaleToPercent(goalpost, scale, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        goalpost.setPosition(randint(120, 160), randint(10, 110))
    }
    if (info.score() > 20) {
        goalpost = sprites.create(img`
            .............cc.
            ............cbbc
            ............cbbc
            ...........b9cc.
            ...........b9bb.
            ..........b99c..
            ..........b9bb..
            .........b99c...
            .........b9bb...
            ........b99c....
            ........b9bb....
            .......b99c.....
            .......b9bb.....
            ......b99c......
            ......b9bb......
            .....b99c.......
            .....b9bb.......
            ....b99c........
            ....b9bb........
            ...b99c.........
            ...b9bb.........
            ..b99c..........
            ..b9bb..........
            .b99c...........
            .b9bb...........
            b99c............
            b99c............
            b99c............
            b99c.........cc.
            b99c........cbbc
            b99c........cbbc
            b99c.......b9cc.
            b99c.......b9bb.
            b99c......b99c..
            b99bccc...b9bb..
            b99bbbbccc99c...
            b99bcccbcc9bb...
            b99b..ccb99c....
            b99b...cc9bbc...
            b99b...b99cbc...
            b99b...b9bbc8c..
            b99b..b99c.f8c..
            b99b..b9bb.f8f..
            b99b.b99c..f8f..
            b99b.b9bb..f8f..
            b99bb99c...f8f..
            b99bb9bb...f8f..
            b99b99c...cf8fc.
            b9999bb..cbf8fbc
            b9999c...cdfffdc
            b999bb...cdcfcdc
            c999c....c8ddd8c
            c99bb....c88888c
            c99c.....c88888c
            c9bb.....c88888c
            .cc......c88888c
            .........c88888c
            .........c88888c
            .........c88888c
            .........8888888
            .........8888888
            .........6888886
            ..........68886.
            ...........666..
            `, SpriteKind.Goal)
        scale = randint(30, 40)
        scaling.scaleToPercent(goalpost, scale, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        goalpost.setPosition(randint(120, 160), randint(10, 110))
    }
}
function setDefaultPosition () {
    sprites.destroy(football)
    football = darts.create(assets.image`myImage`, SpriteKind.Ball)
    football.setTrace()
    football.controlWithArrowKeys()
    football.stopDart()
    football.setPosition(10, 60)
    scene.setBackgroundColor(15)
}
function gameSaveState () {
    blockSettings.writeNumber("Level", info.score())
    blockSettings.writeNumber("Life", info.life())
    blockSettings.writeNumber("GoalX", goalpost.x)
    blockSettings.writeNumber("GoalY", goalpost.y)
    blockSettings.writeNumber("GoalScale", scale)
}
function menuSaveState () {
    blockSettings.writeNumber("Coin", coins)
}
function gameIntialize () {
    setDefaultPosition()
    goalIntializer()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("You Scored!")
    info.changeScoreBy(1)
    info.setLife(5)
    setDefaultPosition()
    goalIntializer()
    gameSaveState()
    coinsSprite += 1
    pause(100)
})
function destroyAllSprites () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Ball)
    sprites.destroyAllSpritesOfKind(SpriteKind.Goal)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Obstacle)
    sprites.destroyAllSpritesOfKind(SpriteKind.Cursor)
    sprites.destroyAllSpritesOfKind(SpriteKind.Equip)
    sprites.destroyAllSpritesOfKind(SpriteKind.Close)
    sprites.destroyAllSpritesOfKind(SpriteKind.Shop)
}
let coinsSprite = 0
let football: Dart = null
let mouse: Sprite = null
let xBlock: Sprite = null
let shopBlock: Sprite = null
let EquipBlock: Sprite = null
let scale = 0
let goalpost: Sprite = null
let coins = 0
let goalList: Image[] = []
let ballList = [
assets.image`myImage`,
assets.image`myImage3`,
assets.image`myImage5`,
assets.image`goofyahlookinthing`,
assets.image`goofyahlookinthing0`
]
goalList = [img`
    .............cc.
    ............cbbc
    ............cbbc
    ...........b9cc.
    ...........b9bb.
    ..........b99c..
    ..........b9bb..
    .........b99c...
    .........b9bb...
    ........b99c....
    ........b9bb....
    .......b99c.....
    .......b9bb.....
    ......b99c......
    ......b9bb......
    .....b99c.......
    .....b9bb.......
    ....b99c........
    ....b9bb........
    ...b99c.........
    ...b9bb.........
    ..b99c..........
    ..b9bb..........
    .b99c...........
    .b9bb...........
    b99c............
    b99c............
    b99c............
    b99c.........cc.
    b99c........cbbc
    b99c........cbbc
    b99c.......b9cc.
    b99c.......b9bb.
    b99c......b99c..
    b99bccc...b9bb..
    b99bbbbccc99c...
    b99bcccbcc9bb...
    b99b..ccb99c....
    b99b...cc9bbc...
    b99b...b99cbc...
    b99b...b9bbc8c..
    b99b..b99c.f8c..
    b99b..b9bb.f8f..
    b99b.b99c..f8f..
    b99b.b9bb..f8f..
    b99bb99c...f8f..
    b99bb9bb...f8f..
    b99b99c...cf8fc.
    b9999bb..cbf8fbc
    b9999c...cdfffdc
    b999bb...cdcfcdc
    c999c....c8ddd8c
    c99bb....c88888c
    c99c.....c88888c
    c9bb.....c88888c
    .cc......c88888c
    .........c88888c
    .........c88888c
    .........c88888c
    .........8888888
    .........8888888
    .........6888886
    ..........68886.
    ...........666..
    `, assets.image`Hoop`]
let obstacleList = [assets.image`myImage0`]
if (blockSettings.readNumber("Shop") == 1) {
    closeShop()
} else {
    blockSettings.writeNumber("Shop", 0)
}
if (!(blockSettings.exists("Level"))) {
    game.splash("Welcome To", "(Game Name)")
    game.splash("Instructions:", "Use Arrow Keys To Aim")
    game.splash("Press B To Open Menu")
    game.splash("Press A To Throw", "Try To Hit The Goal!")
    game.splash("You Have 5 Tries Each Level", "Try To Get The Highest Score")
    blockSettings.writeNumber("BallItem", 0)
    blockSettings.writeNumber("GoalItem", 0)
    blockSettings.writeNumber("ObstacleItem", 0)
    info.setLife(5)
    info.setScore(1)
    coins = 1
    gameIntialize()
} else if (info.score() == 1) {
    gameSaveState()
} else {
    restoreState()
}
forever(function () {
    if (info.life() == 1 && (football.x > 160 || football.x < 0 || (football.y < 0 || football.y > 120))) {
        death()
        gameIntialize()
        gameSaveState()
    } else if (!(info.life() == 1) && (football.x > 160 || football.x < 0 || (football.y < 0 || football.y > 120))) {
        info.changeLifeBy(-1)
        setDefaultPosition()
        pause(100)
    }
})
