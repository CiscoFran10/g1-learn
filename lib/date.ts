import moment from "moment";
import "moment/locale/pt-br";

export const dateFormat = (date: Date) => {
	moment.locale("pt-br");
	return moment(date).fromNow();
};
