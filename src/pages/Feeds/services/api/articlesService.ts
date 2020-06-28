import RestAPIClient from "../../../../services/RestAPIClient";
class ArticleService extends RestAPIClient {
  constructor() {
    super("articles");
  }

  getArticles = async () => {
    const res = await this.get();
    return res;
  };
}

export default new ArticleService();