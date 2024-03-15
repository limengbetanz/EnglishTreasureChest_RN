import { makeObservable, observable, action } from "mobx";
import model from "./SceneDialoguesModel";
import Colors from "../../consts/Colors";
import type { SceneDialoguesItem } from "./SceneDialoguesModel";

class SceneDialoguesViewModel {
    readonly themeColor = Colors.SceneDialoguesViewThemeColor;
    readonly navTitle: string = "场景对话";
    readonly navDescription: string = "告别哑巴英语";

    searchKeyword = "";

    allItems: Record<string, SceneDialoguesItem[]> = {};

    displayedItems: SceneDialoguesItem[] = [];
    searchedItems: SceneDialoguesItem[] = [];
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
        const result: SceneDialoguesItem[] = [];
        const k = keyword.toLowerCase();

        Object.entries(this.allItems).forEach(([key, value]) => {
            const matchedItems = value.filter(
                (item) =>
                    item.title.toLowerCase().includes(k) ||
                    item.roleA.toLowerCase().includes(k) ||
                    item.roleB.toLowerCase().includes(k) ||
                    item.roleADialgues.join("").toLowerCase().includes(k) ||
                    item.roleBDialgues.join("").toLowerCase().includes(k),
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

const viewModel = new SceneDialoguesViewModel();
export default viewModel;
export type { SceneDialoguesItem };
