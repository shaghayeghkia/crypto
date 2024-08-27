const convertData = (data, type) => {
  console.log(data[type]);
  const convertedData = data[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });
  // console.log(data[type]);
  return convertedData;
};
export { convertData };
