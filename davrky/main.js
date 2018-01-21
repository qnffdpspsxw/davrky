var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    var ball = Ball(game)
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event) {
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        // } else if ('1234567'.includes(k)) {
        //     // 为了 debug 临时加的载入关卡功能
        //     blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    e('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var _main = function() {
    var images = {
        ball: 'img/ball.png',
        block: 'img/block.png',
        paddle: 'img/paddle.png',
    }
    // var game = new Game(30, images, function(g) {
    //     // var s = SceneTitle.new(g)
    //     var s = new SceneTitle(g)
    //     g.runWithScene(s)
    // })
    var game = new Game(30, images)
    enableDebugMode(game, true)
}

_main()
