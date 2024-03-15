type OneMinuteGrammarItem = {
    keywords: string[];
    meanings: string[];
    title: string;
    description: string;
    id: string;
};

class OneMinuteGrammarModel {
    constructor() {}

    getItems(): OneMinuteGrammarItem[] {
        const jsonData = require("../../../resources/local_data/omgis.json");
        const items: OneMinuteGrammarItem[] = jsonData;
        return items;
    }
}

export type { OneMinuteGrammarItem };
const model = new OneMinuteGrammarModel();
export default model;
