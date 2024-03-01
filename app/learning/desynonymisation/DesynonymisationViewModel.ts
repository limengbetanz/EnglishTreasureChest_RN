import { makeObservable, observable, action } from "mobx";
import model from "./DesynonymisationModel";
import type { DesynonymisationItem } from "./DesynonymisationModel";
import Colors from "../../consts/Colors";

class DesynonymisationViewModel {
    readonly themeColor = Colors.DesynonymisationViewThemeColor;
    readonly navTitle: string = "同义词辨析";
    readonly navDescription: string = "一分钟解决困惑";

    allItems: DesynonymisationItem[] = [];
    searchedItems: DesynonymisationItem[] = [];

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

    searchItems = (keyword: string) => {};

    restSearchedItems() {
        this.searchKeyword = "";
        this.searchedItems = [];
    }
}

export type { DesynonymisationItem };
const viewModel = new DesynonymisationViewModel();
export default viewModel;
