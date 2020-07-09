import React, { useEffect, useMemo } from "react";
import { useDispatchLoadArticles, useArticleListState } from "../../hooks";
import { List } from "antd";
import Feed from "../Feed/Feed";
import { getArticleList } from "../../actions";
import { useTagFilters } from "../Tags/hooks";

function GlobalFeeds() {
  const dispatchLoadArticles = useDispatchLoadArticles();
  const { action, data: stateData, request } = useArticleListState();
  const { data, total } = stateData;

  useEffect(() => {
    dispatchLoadArticles({
      limit: 10,
      offset: 0,
    });
  }, []);

  const tags = useTagFilters();

  useEffect(() => {
    dispatchLoadArticles({
      ...request,
      offset: 0,
      tag:tags
    });
  }, [tags]);

  const handleChangePage = (page: number) => {
    dispatchLoadArticles({
      ...request,
      offset: page * request.limit,
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
        pageSize: 10,
        onChange: handleChangePage,
        showSizeChanger: false,
      }}
      dataSource={data}
      renderItem={renderItem}
      rowKey={(item) => item}
    />
  );
}

export default GlobalFeeds;
