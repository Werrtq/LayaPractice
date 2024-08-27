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
    pipe: Laya.Image;

    pipeSelected: boolean;
    selectInfo: any = {};
    checkIndex: number;
    inputPort: number;

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
        console.log(dataSource.type);
        if (dataSource.type === '' || typeof dataSource.type === "undefined") {
            preFab.visible = true;          //这里一开始是等于undefined,结果一直有bug，加上“”后就好了。
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
        this.pipe = this.owner.getChildByName('pipe') as Laya.Image;
        this.pipe.visible = false;

        this.assemableList = this.owner.getChildByName('assemableList') as Laya.List;
        this.assemableList.renderHandler = new Laya.Handler(this, this.renderAssemableList);
        this.assemableList.mouseHandler = new Laya.Handler(this, this.mouseOnAssemableList);

        this.toolList = this.owner.getChildByName('toolList') as Laya.List;
        this.toolList.array = this.toolInfo;
        this.toolList.renderHandler = new Laya.Handler(this, this.renderToolList);
        this.toolList.mouseHandler = new Laya.Handler(this, this.mouseOnToolList);
    }

    mouseOnToolList(e: Event, index: number) {
        //console.log("mouseOnToolList:", index, "e,type", e.type);
        if (e.type == 'mousedown') {
            this.pipeSelected = true;
            this.selectInfo = this.toolList.array[index];
            this.pipe.skin = this.selectInfo.pipeImage;
            this.pipe.pos(Laya.InputManager.mouseX, Laya.InputManager.mouseY, true);
            this.pipe.visible = true;
        }
    }

    mouseOnAssemableList(e: Event, index: number) {
        //console.log("mouseOnToolList:", index, "e,type", e.type);
        if (e.type == 'mouseup') {
            if (index === 0 || index === 8) return;
            this.assemableInfo[index].type = this.selectInfo.type;
            this.assemableInfo[index].pipeImage = this.selectInfo.pipeImage;
            this.assemableInfo[index].port1 = this.selectInfo.port1;
            this.assemableInfo[index].port2 = this.selectInfo.port2;

            this.assemableList.array = this.assemableInfo;
            console.log(this.assemableList.array);
            this.checkConnected();
        }
    }

    /**核对连通性 */
    checkConnected() {
        this.checkIndex = 0;
        this.inputPort = 3;
        this.chcking(this.checkIndex, this.inputPort);
    }

    chcking(checkIndex: number, inputPort: number) {
        let result = this.checkUnit(checkIndex, inputPort);
        if (result.connected === true) {
            console.log("【连通了】");
        }
        else {
            //可以检测下一个单元
            if (result.nextIndex !== -1) {
                console.log("检测下一个单元");
                this.chcking(result.nextIndex, result.nextInputPort);
            }
        }
    }

    /**检测单元 */
    checkUnit(checkIndex: number, inputPort: number) {

        let nextIndex = -1;
        let nextInputPort = 0;
        let connected = false;
        let connectPort = 0;
        switch (inputPort) {
            case 1: connectPort = 3; break;
            case 2: connectPort = 4; break;
            case 3: connectPort = 1; break;
            case 4: connectPort = 2; break;
        }

        //当前核查单元
        let currentUnit = this.assemableInfo[checkIndex];
        let port1 = currentUnit.port1;
        let port2 = currentUnit.port2;

        //当前单元为空
        if (port1 === 0 && port2 === 0) {
            //空操作
        }
        //到达末端单元
        else if (checkIndex === 8) {
            if (connectPort === port1 || connectPort === port2) {
                connected = true;
            }
        }
        //中间单元检测--确定下一连接点
        else {
            if (connectPort === port1) {
                nextInputPort = port2;
            }
            // 不直接使用else，避免this.assembleData数据错误
            if (connectPort === port2) {
                nextInputPort = port1;
            }

            // 存在有效出口
            if (connectPort !== nextInputPort) {
                switch (nextInputPort) {
                    //左
                    case 1: {
                        if (checkIndex === 0 || checkIndex === 3 || checkIndex === 6) {
                            nextIndex = -1;
                        }
                        else {
                            nextIndex = checkIndex - 1;
                        }
                    } break;
                    //上
                    case 2: {
                        if (checkIndex === 0 || checkIndex === 1 || checkIndex === 2) {
                            nextIndex = -1;
                        }
                        else {
                            nextIndex = checkIndex - 3;
                        }
                    } break;
                    //右
                    case 3: {
                        if (checkIndex === 2 || checkIndex === 5) {
                            nextIndex = -1;
                        }
                        else {
                            nextIndex = checkIndex + 1;
                        }
                    } break;
                    //左
                    case 4: {
                        if (checkIndex === 6 || checkIndex === 7) {
                            nextIndex = -1;
                        }
                        else {
                            nextIndex = checkIndex + 3;
                        }
                    } break;
                    default: {
                        nextIndex = -1;
                    } break;
                }
            }
        }

        console.log("当前单元,索引：", checkIndex, " 入口：",
            inputPort, " connectPort: ", connectPort, " nextInputPort: ", nextInputPort);

        return { nextIndex, nextInputPort, connected };
    }

    onMouseDrag(evt: Laya.Event): void {
        this.pipe.pos(Laya.InputManager.mouseX, Laya.InputManager.mouseY, true);
    }

    onMouseDragEnd(evt: Laya.Event): void {
        //console.log(this.assemableList.array);
        this.selectInfo = {};
        this.pipeSelected = false;
        this.pipe.visible = false;
        //console.log(this.assemableList.array);
    }

    initAssemableInfo() {
        this.assemableInfo = [
            { index: 0, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 1, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 2, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 3, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 4, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 5, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 6, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 7, type: '', pipeImage: '', port1: 0, port2: 0 },
            { index: 8, type: '', pipeImage: '', port1: 0, port2: 0 },
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