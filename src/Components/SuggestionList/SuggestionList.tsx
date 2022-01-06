import styles from "./suggestionlist.module.css";

type SuggestionListProps = {
  suggestions: { label?: string; value: string }[];
  selectedSuggestion: string;
  onClick: (value: string) => void
};

const SuggestionList = ({
  suggestions,
  selectedSuggestion,
  onClick,
}: SuggestionListProps) => {
  return (
    <div className={styles.suggestion__wrapper}>
      {!!suggestions.length && (
        <ul className={styles.suggestion__list}>
          {suggestions.map((suggestion) => {
            const className =
              suggestion.value === selectedSuggestion
                ? styles.suggestion__listItem__active
                : styles.suggestion__listItem;
            return (
              <li onClick={() => onClick(suggestion.value)} key={suggestion.value} className={className}>
                {suggestion?.label || suggestion.value}
              </li>
            );
          })}
        </ul>
      )}
      {!suggestions.length && <em>No options</em>}
    </div>
  );
};

export default SuggestionList;
