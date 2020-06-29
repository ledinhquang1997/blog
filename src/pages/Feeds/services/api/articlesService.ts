import RestAPIClient from "../../../../services/RestAPIClient";
import querystring from 'querystring';
import { ArticlesRequest } from "../../state";

class ArticleService extends RestAPIClient {
  constructor() {
    super("articles");
  }

  getArticles = async (req: ArticlesRequest) => {
    const res = await this.get(`?${querystring.stringify(req as any)}`);
    return res;
  };
}

export default new ArticleService();