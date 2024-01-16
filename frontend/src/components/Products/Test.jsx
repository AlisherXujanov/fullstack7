// memo effect allows not to render whole component
// whenever parent component is re-rendered
// RU: memo эффект позволяет не рендерить весь компонент
// при каждом рендере родительского компонента
import { memo } from "react";
function Test() {
    console.log("Test component is rendered")

    return (
        <>
            <h1>Test component</h1>
        </>
    );
}
export default memo(Test);