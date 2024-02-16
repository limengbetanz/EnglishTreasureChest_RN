import MyNotebookModel from "./MyNotebookModel";
import Colors from "../../consts/Colors";

class MyNotebookViewModel {
    themeColor = Colors.MyNotebookViewThemeColor;
    navTitle: string = "我的笔记本";
    navDescription: string = "随时随地做笔记";

    constructor() {}
}

export default MyNotebookViewModel;
