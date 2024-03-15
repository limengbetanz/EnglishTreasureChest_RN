import { makeObservable, observable, action } from "mobx";
import model from "./OneMinuteGrammarModel";
import type { OneMinuteGrammarItem } from "./OneMinuteGrammarModel";
import Colors from "../../consts/Colors";

class OneMinuteGrammarViewModel {
    readonly themeColor = Colors.OneMinuteGrammarViewThemeColor;
    readonly navTitle: string = "一分钟语法";
    readonly navDescription: string = "让表达更准确";

    allItems: OneMinuteGrammarItem[] = [];
    searchedItems: OneMinuteGrammarItem[] = [];

    searchKeyword = "";
    searchViewPresented = false;

    constructor() {
        makeObservable(this, {
            searchedItems: observable,
            searchViewPresented: observable,
            getItems: action,
            showSearchView: action,
            searchItems: action,
            restSearchedItems: action,
        });
    }

    getItems() {
        this.allItems = model.getItems();
    }

    showSearchView = (show: boolean) => {
        this.searchViewPresented = show;
    };

    searchItems = (keyword: string) => {
        this.searchKeyword = keyword;
        const k = keyword.toLowerCase();

        const matchedItems = this.allItems.filter(
            (item) =>
                item.title.toLowerCase().includes(k) ||
                item.description.toLowerCase().includes(k) ||
                item.meanings.join("").toLowerCase().includes(k) ||
                item.keywords.join("").toLowerCase().includes(k),
        );

        const maxCount = matchedItems.length > 10 ? 10 : matchedItems.length;
        this.searchedItems = matchedItems.slice(0, maxCount);
    };

    restSearchedItems() {
        this.searchKeyword = "";
        this.searchedItems = [];
    }
}

export type { OneMinuteGrammarItem };
const viewModel = new OneMinuteGrammarViewModel();
export default viewModel;
