// @flow

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { COLOR_SHADES } from '../visual-components/Color';
import { LoadingSpin } from '../visual-components/Loading';
import Page, { Content, Header } from '../visual-components/Page';
import Text, { TEXT_BOLDNESS, TEXT_SIZE } from '../visual-components/Text';
import ClientSearchPageContainer from './client/ClientSearchPageContainer';

type Props = {
  initData: () => {},
  isLoading: boolean,
};

export default function App(props: Props) {
  const { isLoading, initData } = props;
  useEffect(() => {
    initData();
  }, []);

  return (
    <div>
      <Header>
        <Text boldness={TEXT_BOLDNESS.BOLD} size={TEXT_SIZE.SIZE_2} color={COLOR_SHADES.DARKER}>
          App name
        </Text>
      </Header>

      <Page>
        <Content>
          {isLoading ? (
            <LoadingSpin />
          ) : (
            <Switch>
              <Route exact path="/" component={ClientSearchPageContainer} />
            </Switch>
          )}
        </Content>
      </Page>
    </div>
  );
}
