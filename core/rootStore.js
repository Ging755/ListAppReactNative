import TaskStore from '../application/stores/taskStore'

export default class RootStore {
    taskStore = new TaskStore;
}