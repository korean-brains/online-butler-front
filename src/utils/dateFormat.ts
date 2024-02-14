import dayjs from "dayjs";

const dateFormat = (date: Date, format: string) => {
  const d = dayjs(date);
  return d.format(format);
};

export default dateFormat;
