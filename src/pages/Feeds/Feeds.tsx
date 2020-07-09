import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import { Tabs, Card, Tag } from "antd";
import { Container } from "../../components/Container";
import { WhiteSpace } from "../../base";
import styled, { keyframes } from "styled-components";
import GlobalFeeds from "./components/GlobalFeeds/GlobalFeeds";
import { injector } from "../../redux/injector";
import articleReducers from "./reducers";
import tagReducers from './components/Tags/reducers';
import { articlesSaga } from "./sagas";
import PopularTags from "./components/Tags/PopularTags";
import { tagsSaga } from "./components/Tags/sagas";

enum FeedTabs {
  global_feeds = "global_feeds",
  personal_feeds = "personal_feeds",
}
const { TabPane } = Tabs;

const AnimatedFrame = styled.div`
  padding-bottom: 20px;
`;

function Feeds() {
  return (
    <AnimatedFrame>
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
              <GlobalFeeds />
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
          <PopularTags />
        </div>
      </Container>
    </AnimatedFrame>
  );
}

export default injector({
  reducers: [articleReducers, tagReducers],
  sagas: [articlesSaga, tagsSaga],
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
