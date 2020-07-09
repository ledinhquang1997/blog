import RestAPIClient from "../../../../../services/RestAPIClient";

class TagService extends RestAPIClient {
  constructor() {
    super("tags");
  }

  getPopularTags = async () => {
    const res = await this.get();
    return res;
  };
}

export default new TagService();