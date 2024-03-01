type DesynonymisationItem = {
    synonyms: string[];
    meanings: string[];
    title: string;
    description: string;
    id: string;
};

class DesynonymisationModel {
    constructor() {}

    getItems(): DesynonymisationItem[] {
        const jsonData = require("../../../resources/local_data/dis.json");
        const items: DesynonymisationItem[] = jsonData;
        return items;
    }
}

export type { DesynonymisationItem };
const model = new DesynonymisationModel();
export default model;
