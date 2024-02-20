import { makeObservable, observable, action } from "mobx";
import model from "./PracticalOralEnglishModel";
import Colors from "../../consts/Colors";
import type { PracticalOralEnglishItem } from "./PracticalOralEnglishModel";

class PracticalOralEnglishViewModel {
    readonly themeColor = Colors.PracticalOralEnglishViewThemeColor;
    readonly navTitle: string = "实用口语";
    readonly navDescription: string = "地道英语脱口而出";

    allItems: Record<string, PracticalOralEnglishItem[]> = {};

    displayedItems: PracticalOralEnglishItem[] = [];
    searchedItems: PracticalOralEnglishItem[] = [];
    options: string[] = [];
    selectedOption: string = "";

    constructor() {
        console.log("PracticalOralEnglishViewModel constructor");

        makeObservable(this, {
            displayedItems: observable,
            searchedItems: observable,
            options: observable,
            selectedOption: observable,
            getItems: action,
            selectOption: action,
        });
    }

    getItems() {
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
            this.selectOption(items[0].type);
        }
    }

    selectOption = (option: string) => {
        this.selectedOption = option;
        this.displayedItems = this.allItems[option];
    };
}

const viewModel = new PracticalOralEnglishViewModel();
export default viewModel;
export type { PracticalOralEnglishItem };
