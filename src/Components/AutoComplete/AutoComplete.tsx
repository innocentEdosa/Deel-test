import { useCallback, useState, useEffect } from "react";
import InputComponent from "../InputComponent";
import SuggestionList from "../SuggestionList";
import styles from "./autocomplete.module.css";

type options = { label?: string; value: string }[];
type AutoCompleteState = {
  suggestions: options;
  showSuggestions: boolean;
  userInput: string;
};

type AutoCompleteProps = {
  getAutoCompleteData: (params: string) => Promise<options>;
};

const AutoComplete = ({ getAutoCompleteData }: AutoCompleteProps) => {
  const [autoCompleteState, setAutoCompleteState] = useState<AutoCompleteState>(
    {
      suggestions: [],
      showSuggestions: false,
      userInput: "",
    }
  );


  const onBlur = useCallback(() => {

    // This is a terrible hack ...lol, to make sure this fires after the onclick event for a selected option fires
    setTimeout(() => setAutoCompleteState((prev) => ({
      ...prev,
      showSuggestions: false,
    })), 100)

  }, []);

  const onChange = async (value: string) => {
    setAutoCompleteState((prev) => ({
      ...prev,
      showSuggestions: true,
      userInput: value,
    }));
  };

  const getSuggestionHandler = useCallback(
    async (value: string) => {
      const options = await getAutoCompleteData(value);
      setAutoCompleteState((prev) => ({
        ...prev,
        suggestions: options,
      }));
    },
    [getAutoCompleteData]
  );

  const onSuggestionClick = (value: string) => {
    console.log(value, 'i am clied')
    setAutoCompleteState((prev) => ({ ...prev, userInput: value }));
  };

  useEffect(() => {
    getSuggestionHandler(autoCompleteState.userInput);
  }, [autoCompleteState.userInput, getSuggestionHandler]);

  const renderSuggestionList = () => {
    if (autoCompleteState.showSuggestions && !!autoCompleteState.userInput) {
      return (
        <SuggestionList
          onClick={onSuggestionClick}
          suggestions={autoCompleteState.suggestions}
          selectedSuggestion={autoCompleteState.userInput}
        />
      );
    }
    return null;
  };

  return (
    <div className={styles.autocomplete}>
      <InputComponent
        onBlur={onBlur}
        label="Auto-complete"
        onChange={onChange}
        value={autoCompleteState.userInput}
      />
      {renderSuggestionList()}
    </div>
  );
};

export default AutoComplete;
