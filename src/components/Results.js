import * as S from '../styles'

function Results(props) {
    return (
        <S.Results>
            <div class="calc-wrapper">
                <p className="calc-result">{props.result}</p>
            </div>
            <div className="calc-un">un.</div>
        </S.Results>
    )
}

export default Results