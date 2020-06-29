import React, { useEffect, useMemo } from "react";
import { useDispatchLoadArticles, useArticleListState } from "../../hooks";
import { List } from "antd";
import Feed from "../Feed/Feed";
import { getArticleList } from "../../actions";

function GlobalFeeds() {
  const dispatchLoadArticles = useDispatchLoadArticles();
  const { action, data: stateData, request } = useArticleListState();
  const { data, total } = stateData;

  useEffect(() => {
    dispatchLoadArticles({
      limit: 20,
      offset: 0,
      tag: ["reactjs"],
    });
  }, []);

  const handleChangePage = (page: number) => {
    dispatchLoadArticles({
      offset: page * request.limit,
      tag: ["reactjs"],
    });
  };

  const renderItem = (item: string) => {
    return <Feed id={item} />;
  };

  const isLoading = useMemo(() => {
    return getArticleList.toString() === action;
  }, [action]);

  return (
    <List
      loading={isLoading}
      itemLayout="vertical"
      size="large"
      pagination={{
        total,
        pageSize: 20,
        onChange: handleChangePage,
      }}
      dataSource={data}
      renderItem={renderItem}
      rowKey={(item) => item}
    />
  );
}

export default GlobalFeeds;
