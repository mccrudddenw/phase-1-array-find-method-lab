let superbowlWin = (record) => {
    let win = record.find(pizza => pizza.result === "W")

    return !!win ? win.year : undefined; 

    
} 