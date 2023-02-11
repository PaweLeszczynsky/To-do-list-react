import Header from "../../common/Header";
import MainContainer from "../../common/MainContainer";
import Section from "../../common/Section";

const Author = () => {
    return (
        <MainContainer>
            <Header
                title="O Autorze"
            />
            <Section
                title="Paweł Leszczyński"
                body={"Hej!!! Nazywam się Paweł Leszczyński i interesuje się sportem oraz programowaniem stron internetowych."}

            />
        </MainContainer>
    );
}
export default Author;