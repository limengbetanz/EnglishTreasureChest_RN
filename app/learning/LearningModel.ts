enum TopicType {
    PracticalOralEnglish = "PracticalOralEnglish",
    Desynonymisation = "Desynonymisation",
    SceneDialogues = "SceneDialogues",
    OneMinuteGrammar = "OneMinuteGrammar",
    MyNotebook = "MyNotebook"
}

type Topic = {
    type: TopicType;
    name: string;
    description: string;
    themeColor: string
};

class LearningModel {
    getAllTopics(): Topic[] {
        return [{type: TopicType.PracticalOralEnglish, name: "实用口语", description: "地道英语脱口而出", themeColor: "crimson"}, 
                {type: TopicType.Desynonymisation, name: "同义词辨析", description: "一分钟解决困惑", themeColor: "steelblue"},
                {type: TopicType.SceneDialogues, name: "场景对话", description: "告别哑巴英语", themeColor: "peru"},
                {type: TopicType.OneMinuteGrammar, name: "一分钟语法", description: "让表达更准确", themeColor: "darkcyan"},
                {type: TopicType.MyNotebook, name: "我的笔记本", description: "随时随地做笔记", themeColor: "darkorange"}];
    }
}

export { TopicType };
export type { Topic };
export default LearningModel;