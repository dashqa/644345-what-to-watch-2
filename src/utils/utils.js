import moment from "moment/moment";
import 'moment-duration-format';
import {USER_RATINGS} from "@constants";

export const computeRatingLevel = (rating) => USER_RATINGS.filter((rank) => rank.min <= rating).pop().title;
export const formatTime = (time, unit, format) => moment.duration(time, unit).format(format, {trim: false});
export const formatDate = (date, format) => moment(date).format(format);
