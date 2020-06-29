import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import { Tabs, Card, Tag } from "antd";
import { Container } from "../../components/Container";
import { WhiteSpace } from "../../base";
import styled from "styled-components";
import GlobalFeeds from "./components/GlobalFeeds/GlobalFeeds";
import { injector } from "../../redux/injector";
import articleReducers from "./reducers";
import { articlesSaga } from "./sagas";
import PopularTags from "./components/Tags/PopularTags";

enum FeedTabs {
  global_feeds = "global_feeds",
  personal_feeds = "personal_feeds",
}
const { TabPane } = Tabs;

function Feeds() {
  return (
    <div style={{paddingBottom:20}}>
      <Jumbotron />
      <WhiteSpace vertical size="20px" />
      <Container>
        <div
          style={{
            display: "flex",
            flex: 0.7,
          }}
        >
          <StyleTab defaultActiveKey={FeedTabs.global_feeds}>
            <TabPane
              tab={<span>Global Feeds</span>}
              key={FeedTabs.global_feeds}
            >
              <GlobalFeeds></GlobalFeeds>
            </TabPane>
            <TabPane
              tab={<span>Your Feeds</span>}
              key={FeedTabs.personal_feeds}
            >
              Tab 2
            </TabPane>
          </StyleTab>
        </div>
        <div
          style={{
            display: "flex",
            flex: 0.3,
            height: 250,
          }}
        >
          <PopularTags/>
        </div>
      </Container>
    </div>
  );
}

export default injector({
  reducers: [articleReducers],
  sagas: [articlesSaga],
})(Feeds) as any;

const StyleTab = styled(Tabs)`
  flex: 1;
  .ant-tabs-nav .ant-tabs-tab {
    color: #3b8550;
  }

  .ant-tabs-ink-bar {
    background-color: #3b8550;
  }
`;
