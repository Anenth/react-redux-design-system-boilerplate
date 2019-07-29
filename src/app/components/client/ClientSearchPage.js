// @flow
import React from 'react';
import Form, { Input } from '../../visual-components/Form';
import Space from '../../visual-components/Grid';
import List, { ListItem } from '../../visual-components/List';
import { LoadingSpin } from '../../visual-components/Loading';
import type { ClientType } from './ClientService';

type Props = {
  searchForClient: (data: {}) => {},
  clients: Array<ClientType>,
  isLoading: boolean,
};

export default function ClientSearchPage(props: Props) {
  const { searchForClient, clients, isLoading } = props;

  return (
    <div>
      <Form onSubmit={searchForClient}>
        <Input name="searchTerm" autoFocus placeholder="eg. google" />
      </Form>
      <Space vertical size={8} />
      {isLoading && <LoadingSpin />}
      <List>
        {clients.map(client => (
          <ListItem key={client.id}>{client.name}</ListItem>
        ))}
      </List>
    </div>
  );
}
