export default class GameManager {
    private static instance: GameManager = new GameManager();

    toolInfo: any;
    level: number = 1;

    private constructor() { }

    public static getInstance(): GameManager {
        return GameManager.instance;
    }
}