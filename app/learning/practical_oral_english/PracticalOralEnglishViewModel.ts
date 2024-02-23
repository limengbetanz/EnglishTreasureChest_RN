import { makeObservable, observable, action } from "mobx";
import model from "./PracticalOralEnglishModel";
import Colors from "../../consts/Colors";
import type { PracticalOralEnglishItem } from "./PracticalOralEnglishModel";

class PracticalOralEnglishViewModel {
    readonly themeColor = Colors.PracticalOralEnglishViewThemeColor;
    readonly navTitle: string = "实用口语";
    readonly navDescription: string = "地道英语脱口而出";
    searchKeyword = "";

    allItems: Record<string, PracticalOralEnglishItem[]> = {};

    displayedItems: PracticalOralEnglishItem[] = [];
    searchedItems: PracticalOralEnglishItem[] = [];
    options: string[] = [];
    selectedOption: string = "";
    searchViewPresented = false;

    constructor() {
        makeObservable(this, {
            displayedItems: observable,
            searchedItems: observable,
            options: observable,
            selectedOption: observable,
            searchViewPresented: observable,
            getItems: action,
            selectOption: action,
            showSearchView: action,
            searchItems: action,
            restSearchedItems: action,
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

    showSearchView = (show: boolean) => {
        this.searchViewPresented = show;
    };

    searchItems = (keyword: string) => {
        this.searchKeyword = keyword;
        const result: PracticalOralEnglishItem[] = [];
        const k = keyword.toLowerCase();

        Object.entries(this.allItems).forEach(([key, value]) => {
            const matchedItems = value.filter(
                (item) =>
                    item.title.toLowerCase().includes(k) ||
                    item.content.toLowerCase().includes(k),
            );
            result.push(...matchedItems);
        });

        const maxCount = result.length > 10 ? 10 : result.length;
        this.searchedItems = result.slice(0, maxCount);
    };

    restSearchedItems() {
        this.searchKeyword = "";
        this.searchedItems = [];
    }
}

const viewModel = new PracticalOralEnglishViewModel();
export default viewModel;
export type { PracticalOralEnglishItem };
