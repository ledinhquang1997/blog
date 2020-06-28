import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import { Tabs } from "antd";
import { Container } from "../../components/Container";
import { WhiteSpace } from "../../base";
import styled from "styled-components";
import GlobalFeeds from "./components/GlobalFeeds/GlobalFeeds";

enum FeedTabs {
  global_feeds = "global_feeds",
  personal_feeds = "personal_feeds",
}
const { TabPane } = Tabs;

function Feeds() {
  const [tab, setTab] = useState(FeedTabs.global_feeds);
  return (
    <div>
      <Jumbotron />
      <WhiteSpace vertical size="20px" />
      <Container>
        <StyleTab key={tab} defaultActiveKey={FeedTabs.global_feeds}>
          <TabPane tab={<span>Global Feeds</span>} key={FeedTabs.global_feeds}>
            <GlobalFeeds></GlobalFeeds>
          </TabPane>
          <TabPane tab={<span>Your Feeds</span>} key={FeedTabs.personal_feeds}>
            Tab 2
          </TabPane>
        </StyleTab>
      </Container>
    </div>
  );
}

export default Feeds;

const StyleTab = styled(Tabs)`
  .ant-tabs-nav .ant-tabs-tab {
    color: #3b8550;
  }

  .ant-tabs-ink-bar {
    background-color: #3b8550;
  }
`;
