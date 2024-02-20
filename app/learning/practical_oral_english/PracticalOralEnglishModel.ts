type PracticalOralEnglishItem = {
    type: string;
    title: string;
    content: string;
    id: string;
};

class PracticalOralEnglishModel {
    constructor() {}

    getItems(): PracticalOralEnglishItem[] {
        const jsonData = require("../../../resources/local_data/poeis.json");
        const items: PracticalOralEnglishItem[] = jsonData;
        return items;
    }
}

export type { PracticalOralEnglishItem };
const model = new PracticalOralEnglishModel();
export default model;
