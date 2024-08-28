const { regClass, property } = Laya;
const GREEN = 1;
const YELLOW = 2;
const RED = 3;

@regClass()
export class stopWatchScript extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;

    @property(String)
    public text: string = "";
    baseSp: Laya.Sprite;
    insideSp: Laya.Sprite;
    timeMask: Laya.Sprite;
    cdUpdateTime: number;
    startRotation: number;
    CDtime: number;
    cdOffset: number;
    TimeLabel: Laya.Label;
    color: number;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    onEnable(): void {
        this.baseSp = this.owner.getChildByName('baseSp') as Laya.Sprite;
        this.insideSp = this.baseSp.getChildByName('insideSp') as Laya.Sprite;
        this.timeMask = this.baseSp.getChildByName('timeMask') as Laya.Sprite;
        this.TimeLabel = this.owner.getChildByName('TimeLabel') as Laya.Label;

        this.cdUpdateTime = 100;
        this.startRotation = -90;

        this.reset(20000);
    }

    drawBaseCircle(color: string) {
        this.insideSp.graphics.clear();
        this.insideSp.graphics.drawCircle(200, 200, 180, null, color, 40);
    }

    reset(fireCD: number) {
        this.TimeLabel.text = "" + fireCD / 1000;

        this.drawBaseCircle("#2fc97f");
        this.color = GREEN;
        this.cdUpdateTime = 100;
        this.CDtime = fireCD;
        this.cdOffset = 360 * this.cdUpdateTime / this.CDtime;
        this.startRotation = -90;

        this.timeMask.graphics.clear();
        this.timeMask.graphics.drawPie(200, 200, 200, this.startRotation, 270, "#ff0000");
    }

    coolDown() {
        Laya.timer.loop(this.cdUpdateTime, this, this.update);
    }

    update() {
        this.startRotation += this.cdOffset;
        this.timeMask.graphics.clear();
        this.timeMask.graphics.drawPie(200, 200, 200, this.startRotation, 270, "#ff0000");

        if (this.TimeLabel != null) {
            this.TimeLabel.text = "" + Math.ceil(this.CDtime / 1000 * (270 - this.startRotation) / 360);
        }
        if (this.startRotation >= 270) {
            this.stopRound(false);
        }

        if (this.startRotation > 30 && this.color === GREEN) {
            this.color = YELLOW;
            this.drawBaseCircle("#fadd41");
        }

        if (this.startRotation > 150 && this.color === YELLOW) {
            this.color = RED;
            this.drawBaseCircle("ff4d16");
        }
    }

    stopRound(manual: boolean) {
        Laya.timer.clear(this, this.update);

        if (manual == false) {
            Laya.stage.event(Laya.Event.MESSAGE, { type: "missionFail" });
        }
    }
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}