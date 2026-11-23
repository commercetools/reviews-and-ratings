import { defineMessages } from 'react-intl';

export default defineMessages({
  label: { id: 'ReviewsAndRatings.bulk.label', defaultMessage: 'Bulk actions' },
  selected: {
    id: 'ReviewsAndRatings.bulk.selected',
    defaultMessage:
      '{count, plural, one {# comment selected} other {# comments selected}}',
  },
  moveTo: {
    id: 'ReviewsAndRatings.bulk.moveTo',
    defaultMessage: 'Move selected to {state}',
  },
  clear: {
    id: 'ReviewsAndRatings.bulk.clear',
    defaultMessage: 'Clear selection',
  },
  result: {
    id: 'ReviewsAndRatings.bulk.result',
    defaultMessage: '{changed} changed, {skipped} skipped, {failed} failed.',
  },
});
