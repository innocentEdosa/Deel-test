import dataOptions from "../mockData/dataOptions.json";

const filterMovieDataByTitle = (filterParam: string): Promise<{title: string, year: number}[]> => {
  return new Promise((resolve) => {
    const options = dataOptions.filter((datum) => datum.title.toLowerCase().includes(filterParam.toLowerCase()));
    setTimeout(() => resolve(options))
    // return resolve(options);
  });
};

export default filterMovieDataByTitle;
