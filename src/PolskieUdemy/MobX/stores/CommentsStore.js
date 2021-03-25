import { observable, action, makeObservable } from "mobx";

const NO_RESULT = -1;
export default class CommentsStore {
  // @observable
  comments = [
    {
      id: 5532532,
      comment: "Super kniga",
    },
  ];

    constructor() {
      makeObservable(this, {
        comments: observable,
        addComment: action,
        removeComment: action,
      });
    }

  // @action
  addComment = (comment) => this.comments.push(comment);

  // @action
  removeComment = (id) => {
    const index = this.comments.findIndex((comment) => comment.id === id);
    if (id === NO_RESULT) {
      return;
    }
    this.comments = this.comments.filter((comment) => comment.id !== id);
  };
}
