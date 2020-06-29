import React from "react";
import { useEntity } from "../../../../redux/entities/hooks";
import { EntitiesName } from "../../../../redux/entities/constants";
import { List, Space, Avatar, Tag } from "antd";
import { Article } from "../../services/typings";
import {
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import { WhiteSpace } from "../../../../base";
import Title from "antd/lib/typography/Title";
import moment from "moment";
import styled, { keyframes } from "styled-components";

interface IProps {
  id: string;
}
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(20deg);
  }
 
  40% {
    transform: rotate(-20deg);

  }
  60% {
    transform: rotate(20deg);
  }
 
  80% {
    transform: rotate(-20deg);

  }
  100% {
    transform: rotate(0deg);
  }
`;
const AnimatedHeartOutlined = styled(HeartOutlined)`
  transition: font-size 0.2s;
  :hover {
    font-size: 2rem;
    cursor: pointer;
    animation: ${rotate} 0.5s;
  }

  :active {
  }
`;

const IconText = ({ text, favorited }: any) => (
  <Space style={{ color: "#3b8550" }}>
    {favorited ? <HeartFilled /> : <AnimatedHeartOutlined />}
    {text}
  </Space>
);

function Feed(props: IProps) {
  const { id } = props;
  const data: Article = useEntity(EntitiesName.articles, id);
  return (
    <List.Item key={data.slug}>
      <List.Item.Meta
        style={{ display: "flex", alignItems: "center" }}
        avatar={
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar src={data?.author?.image} />
            <WhiteSpace size="15px" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text style={{ fontSize: "1.6rem" }}>
                {data?.author.username}
              </Text>
              <Text style={{ fontSize: "1.2rem" }} type="secondary">
                {moment(data.createdAt).fromNow()}
              </Text>
            </div>
          </div>
        }
      />
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <Title level={4}>{data.title}</Title>
          <Text>{data.description}</Text>
        </div>
        <IconText
          text={data.favoritesCount}
          favorited={data.favorited}
          key="list-vertical-like-o"
        />
      </div>
      <div style={{ paddingTop: 20 }}>
        {data.tagList.map((item: string) => (
          <Tag color="green">{item}</Tag>
        ))}
      </div>
    </List.Item>
  );
}

export default Feed;
