import LearningModel, { Topic } from './LearningModel';

class LearningViewModel {
    topics: Topic[];

    constructor() {
        const model = new LearningModel();
        this.topics = model.getAllTopics();
    }
}

export type { Topic };
export default LearningViewModel;
