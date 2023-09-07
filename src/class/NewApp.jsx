
//建立元件

// 01 箭頭函式

// 02 function 

function NewApp(){
    let num = 100;

    function sum (a,b) {
        return a + b;
    }

    //可以運行函式

    {sum(1,2)}

    return <div>元件
        {100 * 2}
        <label htmlFor="123">這是labellll</label>
        <input type="text" id="123"></input>

        <input type="text" disabled={true} />

    {/* 核心:表達式(expression) 運算式    
    不能放入陳述式、流程控制(if)  
    
    可使用三元運算子、and、or */}


    </div>
}


// JSX就是在JS中撰寫HTML 但本質是JS




export default NewApp;