// @flow
export function isProd(): boolean {
  return process.env.NODE_ENV === 'production';
}

export function getInitData(): Promise<{user: {}}> {
  return Promise.resolve({user: {}});
}
