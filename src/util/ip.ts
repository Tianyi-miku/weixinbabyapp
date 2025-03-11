import dayjs from "dayjs";

export const ipAddress = "https://baobaocz.cn/"
export const uploadUrl = "https://baobaocz.cn/file/upload"
export const documentUrl = "https://baobaocz.cn/file/home/baby/uploadimg/"

const time1 = "2025-3-12 13:00:00";
const date1 = dayjs(time1);

const time2 = new Date();
const date2 = dayjs(time2);
export const isShowWz =  date2.isAfter(date1);

// export const ipAddress = "http://101.200.154.210:8070"
// export const uploadUrl = "http://101.200.154.210:8070/file/upload"
// export const documentUrl = "http://101.200.154.210:8070/file/"

// export const ipAddress = "http://192.168.1.71:8070"
// export const uploadUrl = "http://192.168.1.71:8070/file/upload"
// export const documentUrl = "http://192.168.1.71:8070/file/"