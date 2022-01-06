import AutoComplete from "../../Components/AutoComplete";
import filterMovieDataByTitle from "../../utils/filterMovieDataByTitle";
import styles from "./home.module.css";

function Home() {

  const getAutoCompleteData = async (movieTitle: string): Promise<{label?: string, value: string}[]> => {
    const movies: { title: string, year: number}[] =  await filterMovieDataByTitle(movieTitle);
    const movieOptions = movies.map((movie: { title: string, year: number}) => ({ value: movie.title}))
    return movieOptions;
  };

  return (
    <main className={styles.main} aria-label="Home section">
      <div className={styles.main__autocomplete}>
        <AutoComplete getAutoCompleteData={getAutoCompleteData} />
      </div>
    </main>
  );
}

export default Home;
