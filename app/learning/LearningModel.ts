enum TopicType {
    PracticalOralEnglish = "PracticalOralEnglish",
    Desynonymisation = "Desynonymisation",
    SceneDialogues = "SceneDialogues",
    OneMinuteGrammar = "OneMinuteGrammar",
    MyNotebook = "MyNotebook",
}

type Topic = {
    type: TopicType;
    name: string;
    themeColor: string;
};

class LearningModel {
    getAllTopics(): Topic[] {
        return [
            {
                type: TopicType.PracticalOralEnglish,
                name: "实用口语",
                themeColor: "crimson",
            },
            {
                type: TopicType.Desynonymisation,
                name: "同义词辨析",
                themeColor: "steelblue",
            },
            {
                type: TopicType.SceneDialogues,
                name: "场景对话",
                themeColor: "peru",
            },
            {
                type: TopicType.OneMinuteGrammar,
                name: "一分钟语法",
                themeColor: "darkcyan",
            },
            {
                type: TopicType.MyNotebook,
                name: "我的笔记本",
                themeColor: "darkorange",
            },
        ];
    }
}

export { TopicType };
export type { Topic };
export default LearningModel;
