function snapCrackle (maxValue){
    let meuRetorno = "";

    for (let counter = 1; counter <= maxValue; counter++){
        if (counter % 2 === 0 && counter % 5 !== 0){
            meuRetorno += counter + ", ";
            continue;
        }
        if (counter % 2 !== 0 && counter % 5 === 0){
            meuRetorno += "SnapCrackle, ";
            continue;
        }
        if (counter % 5 === 0){
            meuRetorno += "Crackle, ";
            continue;
        }
        if (counter % 2 !== 0){
            meuRetorno += "Snap, ";
            continue;
        }
    }
    return meuRetorno;
}
console.log(snapCrackle(24));