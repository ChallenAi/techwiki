// export const countFormatter = (count) => {
//   if (count < 1000) return String(count);
//   count /= 100;
//   if (count % 10 != 0) {
//     return String(count / 10) + "." + String(count % 10 != 0) + "k";
//   }
//   return String(count / 10) + "k";
// };

export const countFormatter = (count) => {
  return count;
};
