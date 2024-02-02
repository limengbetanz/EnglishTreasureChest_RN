export type Topic = {
    title: string;
    color: string;
    id: string;
};

class LearningModel {
    getAllTopics(): Topic[] {
        return [{title: "实用口语", color: "crimson", id: "0"}, 
                {title: "同义词辨析", color: "steelblue", id: "1"},
                {title: "场景对话", color: "peru", id: "2"},
                {title: "一分钟语法", color: "darkcyan", id: "3"},
                {title: "我的笔记本", color: "darkorange", id: "4"}];
    }
}

export default LearningModel;