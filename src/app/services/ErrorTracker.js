// @flow
import * as Sentry from '@sentry/browser';
import { isProd } from './AppService';

function getIgnoreError() {
  return [];
}

function hasRaven() {
  return isProd();
}

const log = console;

function initRaven(data = {}) {
  Sentry.init({
    dsn: '',
    environment: isProd() ? 'production' : 'development',
    ignoreErrors: getIgnoreError(),
    attachStacktrace: true,
    whitelistUrls: [],
    ...data,
  });
}

export function setUserInfo(obj: {}) {
  Sentry.configureScope(scope => {
    scope.setTag('user_mode', 'admin');
    scope.setUser(obj);
  });
}

export function initErrorTracker(data: {}) {
  if (!hasRaven()) return;

  initRaven(data);
}

export function logMessage(message: string, type: string = 'info') {
  if (hasRaven()) {
    Sentry.captureMessage(message, {
      level: type,
    });
  }

  log.info(message);
}

export function logError(message: string, meta: {} = {}, type: string = 'error') {
  if (hasRaven()) {
    Sentry.captureException(message, {
      extra: { ...meta },
      level: type,
    });
  }

  log.error({ message, meta });
}

export const catchException = Sentry.captureException;

/**
 * This function will add the information to the Breadcrumb in sentry.
 * This will help us to understand what caused the error.
 */
export function logAction(message: string, meta: {} = {}, category: string = 'action') {
  if (hasRaven()) {
    Sentry.addBreadcrumb({
      message,
      category,
      data: meta,
    });
  }
  log.info({ message, meta });
}
