import * as S from '../styles'

function Refeicao() {
    return (
        <S.Refeicao>
            <div>
                <S.Label>Refeição</S.Label>
            </div>
            <div className='icon-wrapper'>
                <div className='icons'>
                    <span className="material-icons icon">local_cafe</span>
                    <span className="material-icons icon">restaurant</span>
                    <span className="material-icons icon">lunch_dining</span>
                    <span className="material-icons icon">local_bar</span>
                    <span className="material-icons icon">loupe</span>
                </div>
            </div>
        </S.Refeicao>
    )
}

export default Refeicao