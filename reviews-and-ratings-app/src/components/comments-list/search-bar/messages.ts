import { defineMessages } from 'react-intl';

export default defineMessages({
  label: {
    id: 'ReviewsAndRatings.search.label',
    defaultMessage: 'Search comments',
  },
  placeholder: {
    id: 'ReviewsAndRatings.search.placeholder',
    defaultMessage: 'Search by reviewer, title or text',
  },
  capped: {
    id: 'ReviewsAndRatings.search.capped',
    defaultMessage:
      'The search looks at the {count} newest comments of this filter. Pick a state to narrow it.',
  },
});
