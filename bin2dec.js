function getData() {
    let getData = document.getElementById('userInput').value;
    let filteredData = '';
    let filteredDataArray = [];
    let lastData = '';
    for(let countA = 0; countA < getData.length; countA++){
        if(getData[countA] == '0' || getData[countA] == '1'){
            filteredData = filteredData + getData[countA];
        }else {
            if(lastData == '0' || lastData == '1'){
                filteredDataArray.push(filteredData);
                filteredData = '';
            }
        }
        lastData = getData[countA];
    }
    filteredDataArray.push(filteredData);
    filteredData = '';
    binToDec(filteredDataArray)
}

function binToDec(str) {
    let strBin = '';
    let binExponent = [];
    let decSumm = 0;
    let resultList = [];
    for(let countC = 0; countC < str.length; countC++){
        strBin = str[countC];
        if(strBin.length <= 8){
            for(let countA = (strBin.length - 1); countA >= 0; countA--){
                binExponent.push(Math.pow(2, countA));
            }
            for(let countB = 0; countB < strBin.length; countB++){
                decSumm = decSumm + (parseInt(strBin[countB]) * binExponent[countB]);
            }
            resultList.push(decSumm);
            binExponent = [];
            strBin = '';
            decSumm = 0; 
        } else {
            renderOutput('Only up to 8 digits.');
        }
    }
    renderOutput(resultList);
}

function renderOutput(data) {
    document.getElementById('userOutput').innerHTML = data.join(', ');
    console.log(data);
}

