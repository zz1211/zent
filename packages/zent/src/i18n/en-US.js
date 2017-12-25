import { setLocale, enUS } from './time-locale';

const common = {
  confirm: 'Confirm',
  cancel: 'Cancel',
  comma: ', ',
  ok: 'OK'
};

export const mark = 'en-US';

export const CopyButton = {
  copy: 'Copy',
  success: 'Copied',
  error: 'Copy failed'
};

export const Pagination = {
  comma: common.comma,
  total: 'Total',
  pages: 'pages',
  items: ' items',
  perPage: ' per page'
};

export const Pop = {
  ...common
};

export const PreviewImage = {
  alt: 'Image download failed',
  prev: 'Previous',
  next: 'Next',
  rotate: 'Rotate'
};

export const RangePicker = {
  7: '7 days',
  30: '30 days'
};

export const Select = {
  input: 'Please choose...',
  search: 'No matches found'
};

export const Sweetalert = {
  ...common,
  title: 'Alert'
};

export const Switch = {
  checked: 'On',
  unchecked: 'Off'
};

export const TimePicker = () => {
  setLocale(enUS);
  return {
    ...common,
    date: 'Please select a date',
    week: 'Please select a week',
    month: 'Please select a month',
    quarter: 'Please select a quarter',
    year: 'Please select a year',
    range: 'Please select a range',
    rangeError: 'Please select the starting and ending time',
    start: 'Start date',
    end: 'End date',
    to: 'to',
    current: {
      time: 'Now',
      date: 'Today',
      week: 'This week',
      month: 'This month',
      year: 'This year'
    },
    panel: {
      hour: '',
      minute: '',
      second: '',
      hourSelect: 'Choose hours',
      minuteSelect: 'Choose minutes',
      secondSelect: 'Choose seconds',
      titleFormat: 'MMMM YYYY',
      quarterNames: [
        '1st Quarter',
        '2nd Quarter',
        '3rd Quarter',
        '4th Quarter'
      ],
      dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      monthNames: [
        'Jan',
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
        'Dec'
      ]
    }
  };
};
