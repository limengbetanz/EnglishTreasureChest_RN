import { observable, action } from "mobx";
import PracticalOralEnglishModel from "./PracticalOralEnglishModel";
import Colors from "../../consts/Colors";
import type { PracticalOralEnglishItem } from "./PracticalOralEnglishModel";

class PracticalOralEnglishViewModel {
    readonly themeColor = Colors.PracticalOralEnglishViewThemeColor;
    readonly navTitle: string = "实用口语";
    readonly navDescription: string = "地道英语脱口而出";

    allItems: Record<string, PracticalOralEnglishItem[]> = {};

    @observable displayedItems: PracticalOralEnglishItem[] = [];
    @observable searchedItems: PracticalOralEnglishItem[] = [];
    @observable options: string[] = [];
    @observable selectedOption: string = "";

    constructor() {
        console.log("PracticalOralEnglishViewModel constructor");
    }

    @action
    getItems() {
        const model = new PracticalOralEnglishModel();
        const items = model.getItems();

        this.allItems = {};

        for (const item of items) {
            if (!this.allItems[item.type]) {
                this.allItems[item.type] = [item];
            } else {
                this.allItems[item.type].push(item);
            }
        }

        this.options = Object.keys(this.allItems);

        if (items.length > 0) {
            this.selectedOption = items[0].type;
        }
    }

    @action
    selectOption(selectedOption: string) {
        this.selectedOption = selectedOption;
    }
}

export default PracticalOralEnglishViewModel;
