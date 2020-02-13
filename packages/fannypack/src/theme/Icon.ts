// @ts-ignore
import _get from 'lodash/get';
import * as faInfoCircle from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import * as faChevronDown from '@fortawesome/free-solid-svg-icons/faChevronDown';
import * as faChevronLeft from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import * as faChevronRight from '@fortawesome/free-solid-svg-icons/faChevronRight';
import * as faExclamationTriangle from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import * as faCheckCircle from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import * as faExclamationCircle from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import * as faQuestionCircle from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import * as faTimes from '@fortawesome/free-solid-svg-icons/faTimes';
import * as faSearch from '@fortawesome/free-solid-svg-icons/faSearch';

import { parseIcons, Opts as ParseIconsOpts, Icons } from '../utils/parseIcons';

const parseOverrideIcons = (
  icons: Array<{ icons: Icons; type: ParseIconsOpts['type']; prefix: ParseIconsOpts['prefix'] }>
) =>
  icons.reduce(
    (currentIcons: {}, iconSet: { icons: Icons; type: ParseIconsOpts['type']; prefix: ParseIconsOpts['prefix'] }) => ({
      ...currentIcons,
      ...parseIcons(iconSet.icons, { type: iconSet.type, prefix: iconSet.prefix })
    }),
    {}
  );

export default (overrides: any) => ({
  ...overrides,
  icons: {
    ...parseIcons(
      [
        faChevronDown,
        faChevronLeft,
        faChevronRight,
        faInfoCircle,
        faExclamationTriangle,
        faCheckCircle,
        faExclamationCircle,
        faQuestionCircle,
        faTimes,
        faSearch
      ],
      {
        type: 'font-awesome-standalone'
      }
    ),
    ...parseOverrideIcons(_get(overrides, 'iconSets', [])),
    close: {
      viewBoxHeight: 512,
      viewBoxWidth: 320,
      paths: [
        'M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'
      ]
    },
    ..._get(overrides, 'icons', {})
  },
  iconNames: {
    info: 'info-circle',
    warning: 'exclamation-triangle',
    success: 'check-circle',
    danger: 'exclamation-circle',
    ..._get(overrides, 'iconNames', {})
  }
});
