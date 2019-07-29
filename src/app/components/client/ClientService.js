// @flow

export type ClientType = {
  name: string,
  id: number,
};

export function getClients(searchTerm: string): Promise<{ clients: Array<ClientType> }> {
  // eslint-disable-next-line
  console.log(searchTerm);
  return Promise.resolve({ clients: [] });
}
