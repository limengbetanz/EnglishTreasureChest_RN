type SceneDialoguesItem = {
    id: string;
    type: string;
    title: string;
    roleA: string;
    roleB: string;
    roleADialgues: string[];
    roleBDialgues: string[];
};

class SceneDialoguesModel {
    constructor() {}

    getItems(): SceneDialoguesItem[] {
        const jsonData = require("../../../resources/local_data/sdis.json");
        const items: SceneDialoguesItem[] = jsonData;
        return items;
    }
}

export type { SceneDialoguesItem };
const model = new SceneDialoguesModel();
export default model;
