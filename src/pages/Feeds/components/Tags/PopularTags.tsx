import React, { useState, useEffect } from "react";
import { Card, Tag, Spin } from "antd";
import styled, { keyframes } from "styled-components";
import tagService from "./services/tagService";
import {
  useTagsState,
  useDispatchGetPopularTags,
  useDispatchSelectFilterTag,
  useDispatchRemoveFilterTag,
} from "./hooks";
import { getTags } from "./actions";

const boooomAnimation = keyframes`
  0%{
    transform: translateY(200px);
    opacity: 0;
  }
  100%{
    transform: translateY(-14px);
    opacity:1;
  }
`;

const AnimatedCard = styled(Card)`
  animation: ${boooomAnimation} 1s ease-out;
`;

function PopularTags() {
  const { data, action, selected } = useTagsState();

  const loading = getTags().type === action;

  const dispatchGetTag = useDispatchGetPopularTags();
  const dispatchSelectTag = useDispatchSelectFilterTag();
  const dispachRemoveTag = useDispatchRemoveFilterTag();
  useEffect(() => {
    dispatchGetTag();
  }, []);

  const handleSelectTag = (tag: string) => () => {
    const included = selected.includes(tag);
    if (included) {
      dispachRemoveTag(tag);
    } else dispatchSelectTag(tag);
  };
  return (
    <AnimatedCard
      bodyStyle={{ height: "auto" }}
      title="Popular tags"
      style={{
        width: 300,
        margin: "0 auto",
        height: "auto",
        boxShadow: "1px 1px 3px #f2f3f5",
        transform: "translateY(-14px)",
      }}
    >
      <Spin spinning={loading}>
        {data.map((item: string) => (
          <Tag
            onClick={handleSelectTag(item)}
            style={{ margin: "3px", cursor: "pointer" }}
            color={selected.includes(item) ? "volcano" : "default"}
          >
            {item}
          </Tag>
        ))}
      </Spin>
    </AnimatedCard>
  );
}

export default PopularTags;
