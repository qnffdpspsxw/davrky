class SceneTitle extends GameScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function(){
            var s = Scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        // draw labels
        this.game.context.fillStyle = "white"
        this.game.context.fillText('按 k 开始游戏', 160, 150)
    }
}
