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

  // src/DialogStartScript.ts
  var { regClass, property } = Laya;
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
      let btnStart = dialog.getChildByName("btnStart");
      btnStart.on(Laya.Event.CLICK, () => {
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
    regClass("562f163d-d084-4f17-8752-d1f917ea6f89", "../src/DialogStartScript.ts")
  ], DialogStartScript);

  // src/Main.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass2("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

  // src/SceneStartScript.ts
  var { regClass: regClass3, property: property3 } = Laya;
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
    property3(String)
  ], SceneStartScript.prototype, "text", 2);
  SceneStartScript = __decorateClass([
    regClass3("cd2947ea-92aa-4cd4-8309-d811c236a55e", "../src/SceneStartScript.ts")
  ], SceneStartScript);

  // src/playScript.ts
  var { regClass: regClass4, property: property4 } = Laya;
  var playScript = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.selectInfo = {};
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    onEnable() {
      this.initUI();
      this.initAssemableInfo();
      this.assemableList.array = this.assemableInfo;
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
      console.log(dataSource.type);
      if (dataSource.type === "" || typeof dataSource.type === "undefined") {
        preFab.visible = true;
      } else {
        preFab.visible = false;
      }
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
      this.pipe = this.owner.getChildByName("pipe");
      this.pipe.visible = false;
      this.assemableList = this.owner.getChildByName("assemableList");
      this.assemableList.renderHandler = new Laya.Handler(this, this.renderAssemableList);
      this.assemableList.mouseHandler = new Laya.Handler(this, this.mouseOnAssemableList);
      this.toolList = this.owner.getChildByName("toolList");
      this.toolList.array = this.toolInfo;
      this.toolList.renderHandler = new Laya.Handler(this, this.renderToolList);
      this.toolList.mouseHandler = new Laya.Handler(this, this.mouseOnToolList);
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
    chcking(checkIndex, inputPort) {
      let result = this.checkUnit(checkIndex, inputPort);
      if (result.connected === true) {
        console.log("【连通了】");
      } else {
        if (result.nextIndex !== -1) {
          console.log("检测下一个单元");
          this.chcking(result.nextIndex, result.nextInputPort);
        }
      }
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
  playScript = __decorateClass([
    regClass4("77efc593-71cd-4ec4-814b-3d6ddc4f69bc", "../src/playScript.ts")
  ], playScript);
})();
//# sourceMappingURL=bundle.scene.js.map
