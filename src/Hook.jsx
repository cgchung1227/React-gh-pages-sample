import { useState } from "react";

// 用UseState定義
// [值, 寫入的方法]
// let a = 1;  


function Hooks(){
    
    const [a, setA] = useState(1) ;

    const [text, setText] = useState('CG');

    // 函式觸發（HandleOnChange） 也可以用函式方式帶入下方OnClick
    function handleOnClick(){
        setA( a +1 )
        console.log(a);
    }

    return (<div>
        Hooks
        <button onClick= {handleOnClick}>{a}</button>

        {text}
        <input type="text"  value={text} onChange={(event) =>{
            console.log(event.target.value)
        // 事件參數 event  
        // React中從事件參數中取值
        // event中 traget屬性中的 value 可取到輸入的值

        setText(event.target.value) //可寫入text的值

        }} />
        
    </div>)
}


export default Hooks;
