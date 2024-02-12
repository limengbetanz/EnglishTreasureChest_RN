enum PracticalOralEnglishItemType {
    Food = '食物',
    Life = '生活',
    Sport = '体育',
    Other = '其他'
}

type PracticalOralEnglishItem = {
    type: PracticalOralEnglishItemType
    title: String
    content: String
    id: String
}

class PracticalOralEnglishModel {
    items: PracticalOralEnglishItem[] = [];

    constructor() {

    }

    getItems(): PracticalOralEnglishItem[] {
        return []
    }
}

export { PracticalOralEnglishItemType };
export type { PracticalOralEnglishItem };
export default PracticalOralEnglishModel;