namespace SpriteKind {
    export const Goal = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const Equip = SpriteKind.create()
    export const Close = SpriteKind.create()
    export const Shop = SpriteKind.create()
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
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    menu()
})
function menu () {
    saveState()
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
    gameIntialize()
    destroyAllSprites()
    saveState()
}
function goalIntializer () {
    sprites.destroy(goalpost)
    if (info.score() == 1) {
        goalpost = sprites.create(img`
            .............cc.
            ............cbbc
            ............cbbc
            ...........b5cc.
            ...........b5bb.
            ..........b55c..
            ..........b5bb..
            .........b55c...
            .........b5bb...
            ........b55c....
            ........b5bb....
            .......b55c.....
            .......b5bb.....
            ......b55c......
            ......b5bb......
            .....b55c.......
            .....b5bb.......
            ....b55c........
            ....b5bb........
            ...b55c.........
            ...b5bb.........
            ..b55c..........
            ..b5bb..........
            .b55c...........
            .b5bb...........
            b55c............
            b55c............
            b55c............
            b55c.........cc.
            b55c........cbbc
            b55c........cbbc
            b55c.......b5cc.
            b55c.......b5bb.
            b55c......b55c..
            b55bccc...b5bb..
            b55bbbbccc55c...
            b55bcccbcc5bb...
            b55b..ccb55c....
            b55b...cc5bbc...
            b55b...b55cbc...
            b55b...b5bbcac..
            b55b..b55c.fac..
            b55b..b5bb.faf..
            b55b.b55c..faf..
            b55b.b5bb..faf..
            b55bb55c...faf..
            b55bb5bb...faf..
            b55b55c...cfafc.
            b5555bb..cbfafbc
            b5555c...cdfffdc
            b555bb...cdcfcdc
            c555c....cadddac
            c55bb....caaaaac
            c55c.....caaaaac
            c5bb.....caaaaac
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
        scaling.scaleToPercent(goalpost, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        goalpost.setPosition(140, 60)
    }
    if (info.score() <= 5 && info.score() != 1) {
        goalpost = sprites.create(img`
            .............cc.
            ............cbbc
            ............cbbc
            ...........b5cc.
            ...........b5bb.
            ..........b55c..
            ..........b5bb..
            .........b55c...
            .........b5bb...
            ........b55c....
            ........b5bb....
            .......b55c.....
            .......b5bb.....
            ......b55c......
            ......b5bb......
            .....b55c.......
            .....b5bb.......
            ....b55c........
            ....b5bb........
            ...b55c.........
            ...b5bb.........
            ..b55c..........
            ..b5bb..........
            .b55c...........
            .b5bb...........
            b55c............
            b55c............
            b55c............
            b55c.........cc.
            b55c........cbbc
            b55c........cbbc
            b55c.......b5cc.
            b55c.......b5bb.
            b55c......b55c..
            b55bccc...b5bb..
            b55bbbbccc55c...
            b55bcccbcc5bb...
            b55b..ccb55c....
            b55b...cc5bbc...
            b55b...b55cbc...
            b55b...b5bbcac..
            b55b..b55c.fac..
            b55b..b5bb.faf..
            b55b.b55c..faf..
            b55b.b5bb..faf..
            b55bb55c...faf..
            b55bb5bb...faf..
            b55b55c...cfafc.
            b5555bb..cbfafbc
            b5555c...cdfffdc
            b555bb...cdcfcdc
            c555c....cadddac
            c55bb....caaaaac
            c55c.....caaaaac
            c5bb.....caaaaac
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
            ...........b5cc.
            ...........b5bb.
            ..........b55c..
            ..........b5bb..
            .........b55c...
            .........b5bb...
            ........b55c....
            ........b5bb....
            .......b55c.....
            .......b5bb.....
            ......b55c......
            ......b5bb......
            .....b55c.......
            .....b5bb.......
            ....b55c........
            ....b5bb........
            ...b55c.........
            ...b5bb.........
            ..b55c..........
            ..b5bb..........
            .b55c...........
            .b5bb...........
            b55c............
            b55c............
            b55c............
            b55c.........cc.
            b55c........cbbc
            b55c........cbbc
            b55c.......b5cc.
            b55c.......b5bb.
            b55c......b55c..
            b55bccc...b5bb..
            b55bbbbccc55c...
            b55bcccbcc5bb...
            b55b..ccb55c....
            b55b...cc5bbc...
            b55b...b55cbc...
            b55b...b5bbcac..
            b55b..b55c.fac..
            b55b..b5bb.faf..
            b55b.b55c..faf..
            b55b.b5bb..faf..
            b55bb55c...faf..
            b55bb5bb...faf..
            b55b55c...cfafc.
            b5555bb..cbfafbc
            b5555c...cdfffdc
            b555bb...cdcfcdc
            c555c....cadddac
            c55bb....caaaaac
            c55c.....caaaaac
            c5bb.....caaaaac
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
        scale = randint(40, 55)
        scaling.scaleToPercent(goalpost, scale, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        goalpost.setPosition(randint(120, 160), randint(10, 110))
    }
    if (info.score() > 20) {
        goalpost = sprites.create(img`
            .............cc.
            ............cbbc
            ............cbbc
            ...........b5cc.
            ...........b5bb.
            ..........b55c..
            ..........b5bb..
            .........b55c...
            .........b5bb...
            ........b55c....
            ........b5bb....
            .......b55c.....
            .......b5bb.....
            ......b55c......
            ......b5bb......
            .....b55c.......
            .....b5bb.......
            ....b55c........
            ....b5bb........
            ...b55c.........
            ...b5bb.........
            ..b55c..........
            ..b5bb..........
            .b55c...........
            .b5bb...........
            b55c............
            b55c............
            b55c............
            b55c.........cc.
            b55c........cbbc
            b55c........cbbc
            b55c.......b5cc.
            b55c.......b5bb.
            b55c......b55c..
            b55bccc...b5bb..
            b55bbbbccc55c...
            b55bcccbcc5bb...
            b55b..ccb55c....
            b55b...cc5bbc...
            b55b...b55cbc...
            b55b...b5bbcac..
            b55b..b55c.fac..
            b55b..b5bb.faf..
            b55b.b55c..faf..
            b55b.b5bb..faf..
            b55bb55c...faf..
            b55bb5bb...faf..
            b55b55c...cfafc.
            b5555bb..cbfafbc
            b5555c...cdfffdc
            b555bb...cdcfcdc
            c555c....cadddac
            c55bb....caaaaac
            c55c.....caaaaac
            c5bb.....caaaaac
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
function saveState () {
    blockSettings.writeNumber("Level", info.score())
    blockSettings.writeNumber("Life", info.life())
    blockSettings.writeNumber("GoalX", goalpost.x)
    blockSettings.writeNumber("GoalY", goalpost.y)
    blockSettings.writeNumber("GoalScale", scale)
}
function obstacleinitializer () {
    tree = sprites.create(img`
        ................86..................
        ...........6688867886...............
        ...........8666877688868............
        ............868777767768............
        .........688667777776688............
        ........67767777777778666...........
        .........6776667767666868...........
        ..........866667667677688...........
        .........8666666666667778...........
        ........667766666666666676..........
        .......67766667666776667776.........
        ......886667776676777666688.........
        .....67766777667767777666768........
        ....6776666666777667776666776.......
        .....8667776667766676677776776......
        ......8777666666667776777776688.....
        ....6887766776677677777777776776....
        ..8866666677767777777777766666778...
        .86666666777667767777766666776668...
        ..88677666666777677677666667776668..
        ..86776677666666666666667776666668..
        886666677766667666666776677766668...
        6668666676667766767767766677666668..
        88866666666777677677667666666776668.
        .86668866666766776776666667766666668
        .86688666666666776666667667776666688
        .668866666666666666666677666666688..
        ..8866686666666666677667776666668...
        ...866886666666666677667776666668...
        ...86886668666666667666666666888....
        ....88866886686666666666666668......
        ......86886668666866668666868.......
        ......88866688668866688866888.......
        ........8888888688888ce868..........
        ..............e88e88.ec.8...........
        ...............eeee..e..............
        ...............ceef.ce..............
        ...............ceefcec..............
        ...............feefce...............
        ...............fceeec...............
        ...............ffceec...............
        `, SpriteKind.Obstacle)
}
function gameIntialize () {
    setDefaultPosition()
    goalIntializer()
    obstacleinitializer()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("You Scored!")
    info.changeScoreBy(1)
    info.setLife(5)
    setDefaultPosition()
    goalIntializer()
    saveState()
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
let tree: Sprite = null
let football: Dart = null
let mouse: Sprite = null
let xBlock: Sprite = null
let shopBlock: Sprite = null
let EquipBlock: Sprite = null
let scale = 0
let goalpost: Sprite = null
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
    info.setLife(5)
    info.setScore(1)
    gameIntialize()
} else {
    restoreState()
}
forever(function () {
    if (info.life() == 1 && (football.x > 160 || football.x < 0 || (football.y < 0 || football.y > 120))) {
        death()
        gameIntialize()
    } else if (!(info.life() == 1) && (football.x > 160 || football.x < 0 || (football.y < 0 || football.y > 120))) {
        info.changeLifeBy(-1)
        setDefaultPosition()
        pause(100)
    }
})
