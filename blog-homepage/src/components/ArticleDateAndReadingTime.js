import React from 'react';
import PropTypes from 'prop-types';

const ArticleDateAndReadingTime = (props) => {
  const { postedDate, minutesToRead } = props
  const monthAbbreviations = ['Jan',
                              'Feb',
                              'Mar',
                              'Apr',
                              'May',
                              'Jun',
                              'Jul',
                              'Aug',
                              'Sep',
                              'Oct',
                              'Nov',
                              'Dec']
  const articleDate = new Date(postedDate);
  const articleMonthAbbreviation = monthAbbreviations[articleDate.getMonth()];
  const monthAndDate = `${articleMonthAbbreviation} ${articleDate.getDate()}`;

  return (
    <p className={'article-date-reading'}>{monthAndDate} &middot; {`${minutesToRead} min read`}</p>
  );
}

ArticleDateAndReadingTime.propTypes = {
  postedDate: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number.isRequired,
}

export default ArticleDateAndReadingTime;
