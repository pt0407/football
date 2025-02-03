namespace SpriteKind {
    export const Goal = SpriteKind.create()
    export const Ball = SpriteKind.create()
}
function restoreState () {
	
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    football.throwDart()
    pauseUntil(() => football.vx == 0)
})
function goalIntializer () {
    info.setLife(5)
    sprites.destroy(Goal2)
    if (info.score() == 1) {
        Goal2 = sprites.create(img`
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
        scaling.scaleToPercent(Goal2, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        Goal2.setPosition(140, 60)
    }
    if (info.score() <= 5 && info.score() != 1) {
        Goal2 = sprites.create(img`
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
        scaling.scaleToPercent(Goal2, scale, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        Goal2.setPosition(140, 60)
    }
    if (info.score() > 5 && info.score() <= 20) {
        Goal2 = sprites.create(img`
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
        scaling.scaleToPercent(Goal2, scale, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        Goal2.setPosition(randint(120, 160), randint(10, 110))
    }
}
function setDefaultPosition () {
    football.stopDart()
    football.setPosition(10, 60)
}
function saveState () {
	
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("You Scored!")
    info.changeScoreBy(1)
    setDefaultPosition()
    goalIntializer()
    pause(100)
})
let scale = 0
let Goal2: Sprite = null
let football: Dart = null
game.splash("Welcome To", "(Game Name)")
game.splash("Instructions:", "Use Arrow Keys To Aim")
game.splash("Press A To Throw", "Try To Hit The Goal!")
game.splash("You Have 5 Tries Each Level", "Try To Get The Highest Score")
info.setLife(5)
info.setScore(1)
football = darts.create(assets.image`myImage`, SpriteKind.Ball)
football.setTrace()
football.controlWithArrowKeys()
setDefaultPosition()
goalIntializer()
forever(function () {
    if (football.x > 160 || football.x < 0 || football.y < 0 || football.y > 120) {
        info.changeLifeBy(-1)
        setDefaultPosition()
        pause(100)
    }
})
