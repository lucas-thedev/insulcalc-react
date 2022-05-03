import * as S from './styles'
import Logo from './components/Logo'
import Results from './components/Results'
import Inputs from './components/Inputs';
import Refeicao from './components/Refeicao';

function Page1() {
    return (
        <S.Wrapper>
            <Logo />
            <Results result='15' />
            <Inputs label='Carboidratos' />
            <Inputs label='Glicemia' />
            <Refeicao />
            <S.SaveButton>Salvar</S.SaveButton>
        </S.Wrapper>
    );
}

export default Page1
