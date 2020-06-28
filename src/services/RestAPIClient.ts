import { config } from '../config';

export type ProcessResponseData = (res: Response) => Promise<any>;

abstract class RestAPIClient {
  constructor(private contextPath: string, private endpoint?: string) {
    this.endpoint = endpoint || config.api;
    this.contextPath = contextPath;
  }

  protected defaultProcessData: ProcessResponseData = res => res.json();

  getContextPath() {
    return `${this.endpoint}/${this.contextPath}`;
  }

  // process403Error(res: any) {
  //   setTimeout(
  //     () =>
  //       ModalManager.alert({
  //         isTranslateContent: true,
  //         content: 'error_403_alert',
  //       }),
  //     100,
  //   );

  //   StoreHolder.getStore().dispatch(
  //     getAllOrgRoles({
  //       userId: currentUserIdSelector(StoreHolder.getStore().getState()),
  //     }),
  //   );
  // }

  // process401Error() {
  //   AsyncStorage.removeItem('@atalink:authToken');

  //   StoreHolder.getStore().dispatch(
  //     resetNavigationAction({
  //       routeName: 'SignInRoot',
  //     }),
  //   );
  // }

  // process500Error() {
  //   ModalManager.alert({
  //     isTranslateContent: true,
  //     content: 'error_500_alert',
  //   });
  // }

  getAccessToken(): string {
    // return accessTokenSelector(StoreHolder.getStore().getState());
    return '';
  }

  // tslint:disable-next-line:function-name
  private async _doRequest(
    uri: string,
    options: {},
    processData: ProcessResponseData = this.defaultProcessData,
  ) {
    const res: any = await fetch(uri, options);
    const resData = await processData(res);
    switch (res.status) {
      case 403:
        // this.process403Error(res);
        throw resData;
      case 200:
      case 201:
        return resData;
      case 401:
        // this.process401Error();
        throw resData;
      case 500:
        // this.process500Error();
        throw resData;
      default:
        throw resData;
    }
  }

  public async request(
    path: string,
    method?: string,
    data?: {},
    options?: {},
    processData?: ProcessResponseData,
  ) {
    const httpMethod = method || 'GET';
    const accessToken = this.getAccessToken();

    const [prefixPath, query = ''] = path.split('?');
    // const newQuery = `${query}${
    //   query ? '&' : ''
    // }locale=${localeService.getCurrentLocale()}`;
    const reqUrl = `/${this.contextPath}${prefixPath}?${query}`;

    const opts = Object.assign(
      {
        method: httpMethod,
        headers: {
          'Content-Type': 'application/json',
          // locale: localeService.getCurrentLocale(),
          Authorization: accessToken,
          // ...(await generateHmac(httpMethod, reqUrl)),
        },
        body: JSON.stringify(data),
      },
      options,
    );

    return await this._doRequest(
      `${this.endpoint}${reqUrl}`,
      opts,
      processData,
    );
  }

  public async requestMultipart(path: string, data: FormData) {
    const accessToken = this.getAccessToken();
    const url = `${this.getContextPath()}${path}`;
    const opts = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: accessToken,
        // ...(await generateHmac('POST', url)),
      },
      body: data,
    };
    return await this._doRequest(url, opts);
  }

  public async requestFile(
    path: string,
    method: string = 'GET',
    data?: FormData,
  ) {
    const accessToken = this.getAccessToken();
    const url = `${this.getContextPath()}${path}`;
    const opts = {
      method,
      headers: {
        Authorization: accessToken,
        // ...(await generateHmac('POST', url)),
      },
      body: data,
    };
    return await this._doRequest(url, opts);
  }
  /* tslint:disable-next-line */
  protected async get(path: string = ""): Promise<any> {
    return await this.request(path);
  }

  protected async getFiles(path: string = ''): Promise<any> {
    return await this.requestFile(path, 'GET');
  }

  /* tslint:disable-next-line */
  protected async post(path: string, data: any = {}): Promise<any> {
    return await this.request(path, 'POST', data);
  }

  /* tslint:disable-next-line */
  protected async put(path: string, data: any): Promise<any> {
    return await this.request(path, 'PUT', data);
  }

  /* tslint:disable-next-line */
  protected async del(path: string, data?: {}): Promise<any> {
    return await this.request(path, 'DELETE', data);
  }

  /* tslint:disable-next-line */
  protected async uploadData(path: string, data: FormData): Promise<any> {
    return await this.requestMultipart(path, data);
  }

  protected async uploadFiles(path: string, data: FormData): Promise<any> {
    return await this.requestFile(path, 'POST', data);
  }
}

export default RestAPIClient;
