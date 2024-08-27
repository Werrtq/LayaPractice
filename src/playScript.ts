const { regClass, property } = Laya;

@regClass()
export class playScript extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner: Laya.Sprite;

    // @property(String)
    // public text: string = "";
    toolList: Laya.List;
    toolInfo: any[];
    assemableList: Laya.List;
    assemableInfo: any[];

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    onEnable(): void {
        this.initUI();
        this.initAssemableInfo();
        this.assemableList.array = this.assemableInfo;
    }

    renderToolList(item: Laya.Box, index: number) {
        let dataSource = item.dataSource;
        let pipeImage = item.getChildByName('pipeImage') as Laya.Image;
        pipeImage.skin = dataSource.pipeImage;
    }

    renderAssemableList(item: Laya.Box, index: number) {
        let dataSource = item.dataSource;
        let pipeImage = item.getChildByName('pipeImage') as Laya.Image;
        pipeImage.skin = dataSource.pipeImage;

        let preFab = item.getChildByName('Prefab') as Laya.UIComponent;
        console.log(preFab);
        if (dataSource.type === '' || typeof dataSource.type == undefined) {
            preFab.visible = true;
        } else {
            preFab.visible = false;
        }
    }

    initUI() {
        this.toolInfo = [
            { type: 'pipe01', pipeImage: 'atlas/img/pipe01.png', describe: '左右', port1: 1, port2: 3 },
            { type: 'pipe02', pipeImage: 'atlas/img/pipe02.png', describe: '上下', port1: 2, port2: 4 },
            { type: 'pipe03', pipeImage: 'atlas/img/pipe03.png', describe: '左下', port1: 1, port2: 4 },
            { type: 'pipe04', pipeImage: 'atlas/img/pipe04.png', describe: '右下', port1: 3, port2: 4 },
            { type: 'pipe05', pipeImage: 'atlas/img/pipe05.png', describe: '上右', port1: 2, port2: 3 },
            { type: 'pipe06', pipeImage: 'atlas/img/pipe06.png', describe: '上左', port1: 2, port2: 1 }
        ];

        this.assemableList = this.owner.getChildByName('assemableList') as Laya.List;
        this.assemableList.renderHandler = new Laya.Handler(this, this.renderAssemableList);

        this.toolList = this.owner.getChildByName('toolList') as Laya.List;
        this.toolList.array = this.toolInfo;
        this.toolList.renderHandler = new Laya.Handler(this, this.renderToolList);
    }

    initAssemableInfo() {
        this.assemableInfo = [
            { index: 0, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 1, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 2, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 3, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 4, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 6, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 7, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 8, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 9, type: '', pipeImage: '', port1: 0, port2: 0 },
        ];

        let random = Math.random();
        if (random > 0.5) {
            this.assemableInfo[0].port1 = this.toolInfo[0].port1;
            this.assemableInfo[0].port2 = this.toolInfo[0].port2;
            this.assemableInfo[0].type = this.toolInfo[0].type;
            this.assemableInfo[0].pipeImage = this.toolInfo[0].pipeImage;
        } else {
            this.assemableInfo[0].port1 = this.toolInfo[2].port1;
            this.assemableInfo[0].port2 = this.toolInfo[2].port2;
            this.assemableInfo[0].type = this.toolInfo[2].type;
            this.assemableInfo[0].pipeImage = this.toolInfo[2].pipeImage;
        }

        random = Math.random();
        if (random > 0.5) {
            this.assemableInfo[8].port1 = this.toolInfo[0].port1;
            this.assemableInfo[8].port2 = this.toolInfo[0].port2;
            this.assemableInfo[8].type = this.toolInfo[0].type;
            this.assemableInfo[8].pipeImage = this.toolInfo[0].pipeImage;
        } else {
            this.assemableInfo[8].port1 = this.toolInfo[4].port1;
            this.assemableInfo[8].port2 = this.toolInfo[4].port2;
            this.assemableInfo[8].type = this.toolInfo[4].type;
            this.assemableInfo[8].pipeImage = this.toolInfo[4].pipeImage;
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