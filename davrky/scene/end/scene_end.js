class SceneEnd extends GameScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            var s = new SceneTitle(game)
            game.replaceScene(s)
        })
    }
    draw() {
        // draw labels
        this.game.context.fillText('游戏结束, 按 r 返回开始界面', 130, 150)
    }
}
