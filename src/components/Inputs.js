import * as S from '../styles'

function Inputs(props) {
    return (
        <div>
            <S.Label>{props.label}</S.Label>
            <input type="text" id="carboidratos" />
        </div>
    )
}

export default Inputs