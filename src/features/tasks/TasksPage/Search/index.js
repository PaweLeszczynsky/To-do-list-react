import { StyledInput } from "../../Input";
import searchQueryParamsName from "../searchQueryParamsName";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import { StyledInputContainer } from "./styled";

const Search = () => {
    const query = useQueryParameter(searchQueryParamsName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamsName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };
    return (
        <StyledInputContainer>
            <StyledInput
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </StyledInputContainer>
    );
};
export default Search;