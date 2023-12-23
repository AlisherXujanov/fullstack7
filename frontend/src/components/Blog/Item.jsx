function Item(props) {
    return (
        <>
            <div className="content">
                <div className="left">
                    <img src={props.img} alt="Blog" width={"100%"}  height={300} />
                </div>
                <div className="right">
                    <h4>Менеджемент</h4>
                    <h2>{props.h2}</h2>
                    <h4>Арман Арманов, Октябрь 13, 2022</h4>
                    <p>Минфин разработал новый формат индивидуальных инвестиционных счетов (ИИС-III) — его включат в систему единого налогового вычета наряду с пенсионными и страховыми инвестициями. С 2024 года ИИС-III полностью заменит ИИС-I, запущенный в 2015 году. Новый инвестсчет будет неинтересен для инвесторов в предложенной </p>
                    <button className="warning-btn">
                        Подробнее 
                    </button>
                </div>
            </div>
        </>
    );
}

export default Item;