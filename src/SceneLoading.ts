const { regClass } = Laya;
import GameManager from "./GameManager";
import { SceneLoadingBase } from "./SceneLoading.generated";

@regClass()
export class SceneLoading extends SceneLoadingBase {
    onEnable(): void {
        this.loadingBar.value = 0.75;
        this.loadToolInfoConfig();
        this.loadAudioConfig();
        this.getLocalStorage();
    }

    loadToolInfoConfig() {
        const jsonPath: string = "./resources/config/config_toolInfo.json";
        Laya.loader.load(jsonPath, Laya.Loader.JSON).then((json) => {
            GameManager.getInstance().toolInfo = json.data;
            console.log("【GameManager.getInstance().toolInfo】", GameManager.getInstance().toolInfo);
        });
    }

    loadAudioConfig() {
        const jsonPath: string = "./resources/config/config_audio.json";
        Laya.loader.load(jsonPath, Laya.Loader.JSON).then((json) => {
            let audioPath = json.data;
            console.log("【audioPath】", audioPath);
            this.loadAudio(audioPath);
        });
    }

    loadAudio(path: string[]) {
        Laya.loader.load(path, null, Laya.Handler.create(this, this.onloading, null, false))
            .then((result) => {
                console.log("[result]", result);
                if (result) {
                    Laya.Scene.open("./resources/Scene/Scene_start.ls", true);
                }
            });
    }

    onloading(progress: number): void {
        this.loadingBar.value = progress;
        console.log("【加载进度】", progress);
    }

    getLocalStorage() {
        let level = localStorage.getItem("level");
        if (level == null) {
            localStorage.setItem("level", "1");
            GameManager.getInstance().level = 1;
        } else {
            GameManager.getInstance().level = parseInt(level);
        }
    }
}