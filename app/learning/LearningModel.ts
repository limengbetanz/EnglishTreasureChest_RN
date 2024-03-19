import ViewName from "../consts/ViewName";

type Topic = {
    type: ViewName;
    name: string;
    themeColor: string;
};

class LearningModel {
    getAllTopics(): Topic[] {
        return [
            {
                type: ViewName.PracticalOralEnglish,
                name: "实用口语",
                themeColor: "crimson",
            },
            {
                type: ViewName.Desynonymisation,
                name: "同义词辨析",
                themeColor: "steelblue",
            },
            {
                type: ViewName.SceneDialogues,
                name: "场景对话",
                themeColor: "peru",
            },
            {
                type: ViewName.OneMinuteGrammar,
                name: "一分钟语法",
                themeColor: "darkcyan",
            },
            {
                type: ViewName.MyNotebook,
                name: "我的笔记本",
                themeColor: "darkorange",
            },
        ];
    }
}

export type { Topic };
export default LearningModel;
