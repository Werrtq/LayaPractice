"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/DialogFailScript.ts
  var { regClass, property } = Laya;
  var DialogFailScript = class extends Laya.Script {
    // @property(String)
    // public text: string = "";
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    // 组件被启用后执行，例如节点被添加到舞台后
    onEnable() {
      let background = this.owner.getChildByName("background");
      background.width = Laya.stage.width;
      background.height = Laya.stage.height;
      let dialog = this.owner.getChildByName("Dialog");
      dialog.width = Laya.stage.width;
      dialog.height = Laya.stage.height;
      let btnClose = dialog.getChildByName("btnClose");
      btnClose.on(Laya.Event.CLICK, () => {
        Laya.stage.event(Laya.Event.MESSAGE, { type: "tryAgain" });
        this.owner.destroy(true);
      });
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
  };
  __name(DialogFailScript, "DialogFailScript");
  DialogFailScript = __decorateClass([
    regClass("350f24e1-fd18-4c69-9d1e-1ca3e3d98483", "../src/DialogFailScript.ts")
  ], DialogFailScript);

  // src/GameManager.ts
  var _GameManager = class _GameManager {
    constructor() {
      this.level = 1;
    }
    static getInstance() {
      return _GameManager.instance;
    }
  };
  __name(_GameManager, "GameManager");
  _GameManager.instance = new _GameManager();
  var GameManager = _GameManager;

  // src/DialogStartScript.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var DialogStartScript = class extends Laya.Script {
    // @property(String)
    // public text: string = "";
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    // 组件被启用后执行，例如节点被添加到舞台后
    onEnable() {
      let background = this.owner.getChildByName("background");
      background.width = Laya.stage.width;
      background.height = Laya.stage.height;
      let dialog = this.owner.getChildByName("Dialog");
      dialog.width = Laya.stage.width;
      dialog.height = Laya.stage.height;
      let levelLabel = dialog.getChildByName("levelLabel");
      levelLabel.text = "关卡" + GameManager.getInstance().level;
      let btnStart = dialog.getChildByName("btnStart");
      btnStart.on(Laya.Event.CLICK, () => {
        Laya.stage.event(Laya.Event.MESSAGE, { type: "gameStart" });
        this.owner.destroy(true);
      });
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
  };
  __name(DialogStartScript, "DialogStartScript");
  DialogStartScript = __decorateClass([
    regClass2("562f163d-d084-4f17-8752-d1f917ea6f89", "../src/DialogStartScript.ts")
  ], DialogStartScript);

  // src/DialogSuccessScript.ts
  var { regClass: regClass3, property: property3 } = Laya;
  var DialogSuccessScript = class extends Laya.Script {
    // @property(String)
    // public text: string = "";
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    // 组件被启用后执行，例如节点被添加到舞台后
    onEnable() {
      let background = this.owner.getChildByName("background");
      background.width = Laya.stage.width;
      background.height = Laya.stage.height;
      let btnClose = this.owner.getChildByName("btnClose");
      btnClose.on(Laya.Event.CLICK, () => {
        Laya.stage.event(Laya.Event.MESSAGE, { type: "success" });
        this.owner.close();
      });
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
  };
  __name(DialogSuccessScript, "DialogSuccessScript");
  DialogSuccessScript = __decorateClass([
    regClass3("fef5da7b-2156-4dcb-8d4f-7fb3ba5f22a1", "../src/DialogSuccessScript.ts")
  ], DialogSuccessScript);

  // src/Main.ts
  var { regClass: regClass4, property: property4 } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass4("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

  // src/SceneStartScript.ts
  var { regClass: regClass5, property: property5 } = Laya;
  var SceneStartScript = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.text = "";
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    onEnable() {
      this.btnButton = this.owner.getChildByName("btnButton");
      this.btnButton.on(Laya.Event.CLICK, () => {
        Laya.Scene.open("./resources/Scene/ScenePaly.ls", true);
      });
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
  };
  __name(SceneStartScript, "SceneStartScript");
  __decorateClass([
    property5(String)
  ], SceneStartScript.prototype, "text", 2);
  SceneStartScript = __decorateClass([
    regClass5("cd2947ea-92aa-4cd4-8309-d811c236a55e", "../src/SceneStartScript.ts")
  ], SceneStartScript);

  // src/ballScript.ts
  var { regClass: regClass6, property: property6 } = Laya;
  var ballScript = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.speed = 1e3;
      this.auto = false;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    onEnable() {
      this.owner.pos(this.x, this.y);
      Laya.Tween.to(this.owner, {
        x: this.x2,
        y: this.y2
      }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
        this.owner.pos(this.x3, this.y3);
        this.auto = true;
      }), this.delay);
    }
    initball(x, y, x2, y2, x3, y3, delay = 0) {
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
    onUpdate() {
      if (!this.auto)
        return;
      this.owner.x += this.speed * Laya.timer.delta / 1e3;
      if (this.owner.x > 3e3) {
        this.owner.destroy(true);
      }
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __name(ballScript, "ballScript");
  ballScript = __decorateClass([
    regClass6("23d23240-1d41-48ad-9497-fde3cc6a29dd", "../src/ballScript.ts")
  ], ballScript);

  // src/stopWatchScript.ts
  var { regClass: regClass7, property: property7 } = Laya;
  var GREEN = 1;
  var YELLOW = 2;
  var RED = 3;
  var stopWatchScript = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.text = "";
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    onEnable() {
      this.baseSp = this.owner.getChildByName("baseSp");
      this.insideSp = this.baseSp.getChildByName("insideSp");
      this.timeMask = this.baseSp.getChildByName("timeMask");
      this.TimeLabel = this.owner.getChildByName("TimeLabel");
      this.cdUpdateTime = 100;
      this.startRotation = -90;
      this.reset(2e4);
    }
    drawBaseCircle(color) {
      this.insideSp.graphics.clear();
      this.insideSp.graphics.drawCircle(200, 200, 180, null, color, 40);
    }
    reset(fireCD) {
      this.TimeLabel.text = "" + fireCD / 1e3;
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
        this.TimeLabel.text = "" + Math.ceil(this.CDtime / 1e3 * (270 - this.startRotation) / 360);
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
    stopRound(manual) {
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
  };
  __name(stopWatchScript, "stopWatchScript");
  __decorateClass([
    property7(String)
  ], stopWatchScript.prototype, "text", 2);
  stopWatchScript = __decorateClass([
    regClass7("ad071f3a-f84b-4513-9cc1-7e0a2c55370e", "../src/stopWatchScript.ts")
  ], stopWatchScript);

  // src/playScript.ts
  var { regClass: regClass8, property: property8 } = Laya;
  var playScript = class extends Laya.Script {
    constructor() {
      super();
      this.selectInfo = {};
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    onEnable() {
      this.intercom();
      this.initUI();
      this.initLevel();
      const path = "./resources/preFab/ballPrefab.lh";
      Laya.loader.load(path).then((res) => {
        this.ballPrefab = res;
      });
    }
    renderToolList(item, index) {
      let dataSource = item.dataSource;
      let pipeImage = item.getChildByName("pipeImage");
      pipeImage.skin = dataSource.pipeImage;
    }
    renderAssemableList(item, index) {
      let dataSource = item.dataSource;
      let pipeImage = item.getChildByName("pipeImage");
      pipeImage.skin = dataSource.pipeImage;
      let preFab = item.getChildByName("Prefab");
      if (dataSource.type === "" || typeof dataSource.type === "undefined") {
        preFab.visible = true;
      } else {
        preFab.visible = false;
      }
    }
    intercom() {
      Laya.stage.on(Laya.Event.MESSAGE, this, (data) => {
        switch (data.type) {
          case "missionFail":
            console.log("倒计时超时");
            Laya.Scene.open("./resources/Scene/Dialog_fail.ls", false);
            break;
          case "gameStart":
            this.stopswitchSp.coolDown();
            break;
          case "tryAgain":
            Laya.timer.once(1e3, this, () => {
              this.stopswitchSp.reset(2e4);
              this.initLevel();
            });
            break;
          case "success":
            Laya.timer.once(1e3, this, () => {
              GameManager.getInstance().level++;
              this.stopswitchSp.reset(2e4);
              this.initLevel();
            });
            break;
        }
      });
    }
    initUI() {
      this.toolInfo = [
        { type: "pipe01", pipeImage: "atlas/img/pipe01.png", describe: "左右", port1: 1, port2: 3 },
        { type: "pipe02", pipeImage: "atlas/img/pipe02.png", describe: "上下", port1: 2, port2: 4 },
        { type: "pipe03", pipeImage: "atlas/img/pipe03.png", describe: "左下", port1: 1, port2: 4 },
        { type: "pipe04", pipeImage: "atlas/img/pipe04.png", describe: "右下", port1: 3, port2: 4 },
        { type: "pipe05", pipeImage: "atlas/img/pipe05.png", describe: "上右", port1: 2, port2: 3 },
        { type: "pipe06", pipeImage: "atlas/img/pipe06.png", describe: "上左", port1: 2, port2: 1 }
      ];
      let stopswitch = this.owner.getChildByName("stopwatchPrefab");
      this.stopswitchSp = stopswitch.getComponent(stopWatchScript);
      this.pipe = this.owner.getChildByName("pipe");
      this.pipe.visible = false;
      this.assemableList = this.owner.getChildByName("assemableList");
      this.assemableList.renderHandler = new Laya.Handler(this, this.renderAssemableList);
      this.assemableList.mouseHandler = new Laya.Handler(this, this.mouseOnAssemableList);
      this.toolList = this.owner.getChildByName("toolList");
      this.toolList.array = this.toolInfo;
      this.toolList.renderHandler = new Laya.Handler(this, this.renderToolList);
      this.toolList.mouseHandler = new Laya.Handler(this, this.mouseOnToolList);
      this.ballContainer = this.owner.getChildByName("ballContainer");
      this.ballContainer.width = this.owner.width;
      this.ballContainer.height = this.owner.height;
      this.assamableContainer = this.owner.getChildByName("assemableContainer");
    }
    initLevel() {
      this.initAssemableInfo();
      this.assemableList.array = this.assemableInfo;
      Laya.Scene.open("./resources/Scene/Dialog_start.ls", false);
    }
    mouseOnToolList(e, index) {
      if (e.type == "mousedown") {
        this.pipeSelected = true;
        this.selectInfo = this.toolList.array[index];
        this.pipe.skin = this.selectInfo.pipeImage;
        this.pipe.pos(Laya.InputManager.mouseX, Laya.InputManager.mouseY, true);
        this.pipe.visible = true;
      }
    }
    mouseOnAssemableList(e, index) {
      if (e.type == "mouseup") {
        if (index === 0 || index === 8)
          return;
        this.assemableInfo[index].type = this.selectInfo.type;
        this.assemableInfo[index].pipeImage = this.selectInfo.pipeImage;
        this.assemableInfo[index].port1 = this.selectInfo.port1;
        this.assemableInfo[index].port2 = this.selectInfo.port2;
        this.assemableList.array = this.assemableInfo;
        this.checkConnected();
      }
    }
    /**核对连通性 */
    checkConnected() {
      this.checkIndex = 0;
      this.inputPort = 3;
      this.chcking(this.checkIndex, this.inputPort);
    }
    chcking(checkIndex, inputPort) {
      let result = this.checkUnit(checkIndex, inputPort);
      if (result.connected === true) {
        console.log("【连通了】");
        this.success();
      } else {
        if (result.nextIndex !== -1) {
          console.log("检测下一个单元");
          this.chcking(result.nextIndex, result.nextInputPort);
        }
      }
    }
    success() {
      this.stopswitchSp.stopRound(true);
      Laya.Scene.open("./resources/preFab/Dialog_success.lh", false);
      for (let i = 0; i < 5; i++) {
        this.addball(i * 200);
      }
    }
    addball(delay = 0) {
      let x2 = this.assamableContainer.x;
      let y2 = this.assamableContainer.y + 115;
      let x3 = this.assamableContainer.x + this.assamableContainer.width;
      let y3 = this.assamableContainer.y + 515;
      let ball = Laya.Pool.getItemByCreateFun("ball", this.ballPrefab.create, this.ballPrefab);
      let ballSp = ball.getComponent(ballScript);
      ballSp.initball(-100, y2, x2, y2, x3, y3, delay);
      this.ballContainer.addChild(ball);
    }
    /**检测单元 */
    checkUnit(checkIndex, inputPort) {
      let nextIndex = -1;
      let nextInputPort = 0;
      let connected = false;
      let connectPort = 0;
      switch (inputPort) {
        case 1:
          connectPort = 3;
          break;
        case 2:
          connectPort = 4;
          break;
        case 3:
          connectPort = 1;
          break;
        case 4:
          connectPort = 2;
          break;
      }
      let currentUnit = this.assemableInfo[checkIndex];
      let port1 = currentUnit.port1;
      let port2 = currentUnit.port2;
      if (port1 === 0 && port2 === 0) {
      } else if (checkIndex === 8) {
        if (connectPort === port1 || connectPort === port2) {
          connected = true;
        }
      } else {
        if (connectPort === port1) {
          nextInputPort = port2;
        }
        if (connectPort === port2) {
          nextInputPort = port1;
        }
        if (connectPort !== nextInputPort) {
          switch (nextInputPort) {
            case 1:
              {
                if (checkIndex === 0 || checkIndex === 3 || checkIndex === 6) {
                  nextIndex = -1;
                } else {
                  nextIndex = checkIndex - 1;
                }
              }
              break;
            case 2:
              {
                if (checkIndex === 0 || checkIndex === 1 || checkIndex === 2) {
                  nextIndex = -1;
                } else {
                  nextIndex = checkIndex - 3;
                }
              }
              break;
            case 3:
              {
                if (checkIndex === 2 || checkIndex === 5) {
                  nextIndex = -1;
                } else {
                  nextIndex = checkIndex + 1;
                }
              }
              break;
            case 4:
              {
                if (checkIndex === 6 || checkIndex === 7) {
                  nextIndex = -1;
                } else {
                  nextIndex = checkIndex + 3;
                }
              }
              break;
            default:
              {
                nextIndex = -1;
              }
              break;
          }
        }
      }
      console.log(
        "当前单元,索引：",
        checkIndex,
        " 入口：",
        inputPort,
        " connectPort: ",
        connectPort,
        " nextInputPort: ",
        nextInputPort
      );
      return { nextIndex, nextInputPort, connected };
    }
    onMouseDrag(evt) {
      this.pipe.pos(Laya.InputManager.mouseX, Laya.InputManager.mouseY, true);
    }
    onMouseDragEnd(evt) {
      this.selectInfo = {};
      this.pipeSelected = false;
      this.pipe.visible = false;
    }
    initAssemableInfo() {
      this.assemableInfo = [
        { index: 0, type: "", pipeImage: "", port1: 0, port2: 0 },
        { index: 1, type: "", pipeImage: "", port1: 0, port2: 0 },
        { index: 2, type: "", pipeImage: "", port1: 0, port2: 0 },
        { index: 3, type: "", pipeImage: "", port1: 0, port2: 0 },
        { index: 4, type: "", pipeImage: "", port1: 0, port2: 0 },
        { index: 5, type: "", pipeImage: "", port1: 0, port2: 0 },
        { index: 6, type: "", pipeImage: "", port1: 0, port2: 0 },
        { index: 7, type: "", pipeImage: "", port1: 0, port2: 0 },
        { index: 8, type: "", pipeImage: "", port1: 0, port2: 0 }
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
  };
  __name(playScript, "playScript");
  __decorateClass([
    property8({ type: Laya.Box })
  ], playScript.prototype, "ball", 2);
  playScript = __decorateClass([
    regClass8("77efc593-71cd-4ec4-814b-3d6ddc4f69bc", "../src/playScript.ts")
  ], playScript);
})();
//# sourceMappingURL=bundle.scene.js.map
