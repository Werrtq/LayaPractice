const { regClass, property } = Laya;

@regClass()
export class ballScript extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner: Laya.Sprite;

    x: number;
    y: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;
    delay: number;
    speed: number = 1000;
    auto: boolean = false;


    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    onEnable(): void {
        this.owner.pos(this.x, this.y);
        Laya.Tween.to(this.owner, {
            x: this.x2,
            y: this.y2
        }, 1000, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
            this.owner.pos(this.x3, this.y3);
            this.auto = true;
        }), this.delay);
    }

    initball(x: number, y: number, x2: number, y2: number, x3: number, y3: number, delay: number = 0) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.delay = delay;
    }

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {
        if (!this.auto) return;
        this.owner.x += this.speed * Laya.timer.delta / 1000;
        if (this.owner.x > 3000) {
            this.owner.destroy(true);
        }
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}