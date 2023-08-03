import './theme.scss'

function Theme(props) {
    return (
        <div className="theme">
            <input type="checkbox" />
            <span className="theme-toggler">
                {props.theme ? '🌙' : '☀️'}
            </span>
        </div>
    );
}

export default Theme;