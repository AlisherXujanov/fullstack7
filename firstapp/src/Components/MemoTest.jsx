import { memo } from "react";


function MemoTest() {
    console.log("Memo is working")

    return (
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut atque blanditiis id a, minus, amet consequuntur voluptatum saepe aliquid ducimus quibusdam reprehenderit ullam expedita ad impedit deserunt deleniti possimus quod.</p>
        </div>
    );
}

export default memo(MemoTest);