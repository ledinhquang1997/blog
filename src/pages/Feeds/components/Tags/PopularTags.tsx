import React from "react";
import { Card, Tag } from "antd";

function PopularTags() {
  return (
    <Card
      bodyStyle={{ height: "auto" }}
      title="Popular tags"
      style={{
        width: 290,
        margin: "0 auto",
        height: "auto",
        boxShadow: "1px 1px 3px #f2f3f5",
        transform: "translateY(-14px)",
      }}
    >
      {[
        "SIDA",
        "HITLER",
        "test",
        "butt",
        "dragons",
        "training",
        "tag1",
        "tag2",
        "tags",
        "as",
        "coffee",
        "animation",
        "baby",
        "flowers",
        "money",
        "japan",
        "cars",
        "caramel",
        "happiness",
        "sushi",
      ].map((item: string) => (
        <Tag>{item}</Tag>
      ))}
    </Card>
  );
}

export default PopularTags;
