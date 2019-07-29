// @flow
export function getActionTypeFunction(SCOPE: string, isUi?: boolean) {
  const scopeType: string = `${SCOPE}${isUi ? '__UI' : ''}`;

  return function getActionType(type: string, verb: string) {
    if (!verb) return `${scopeType}__${type}`;

    return `${scopeType}__${type}__${verb}`;
  };
}

export default () => {};
