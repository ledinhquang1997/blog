import React from "react";
import { useEntity } from "../../../../redux/entities/hooks";
import { EntitiesName } from "../../../../redux/entities/constants";
import { List, Space, Avatar } from "antd";
import { Article } from "../../services/typings";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

interface IProps {
  id: string;
}

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function Feed(props: IProps) {
  const { id } = props;
  const data: Article = useEntity(EntitiesName.articles, id);
  return (
    <List.Item
      key={data.slug}
      actions={[
        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        <IconText
          icon={MessageOutlined}
          text="2"
          key="list-vertical-message"
        />,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={data?.author?.image} />}
        title={data.title}
        description={data.description}
      />
      {data.body}
    </List.Item>
  );
}

export default Feed;
