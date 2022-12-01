// // Ex.1
function matrixProduct(mat1, mat2){
    let l = "";
    let t = [];
    for(let i = 0; i < mat1.length; i++){
        t[i] = [];
        for(let x = 0; x < mat2[0].length; x++){
            let sum = 0;
            for(let s = 0; s < mat1[0].length; s++){
                sum += mat1[i][s]*mat2[s][x];
            }
            t[i][x] = sum + " ";
        }
    }
    l = l.concat(t[0]);
    l += "\n";
    l = l.concat(t[1]);
    return l;
}


// Ex.2
function sumOFmatrices(mat1, mat2){
    let j ="";
    let f ="";
for(let i = 0; i < mat1.length; i++){
    for(let x = 0; x < mat1[i].length; x++){
        f = (mat1[i][x] + mat2[i][x]) + " ";
        j = j.concat(f);
    }
    j += "\n";
}
j = j.trim();
return j;
}




// Ex.3


function sumOfEachRow(mat){
    let o = 0;
    let v = [];
    for(let i = 0; i < mat.length; i++){
        for(let x = 0; x < mat[i].length; x++){
            o = o + mat[i][x];
        }
            v.push(o);
    }
    return v;
}

// Ex.4
function countwords(g){
    return g.split(" ").filter(w => w!= "").length;
}

// Ex.5
function trim(re){
    let l = false;
    let pr = "";
    for(let i = 0; i < re.length; i++){
        if(re[i] !== ' '){
            l = true
        }
        if(l){
            pr += re[i];
        }
    }
    return pr;
}

module.exports = {
    matrixProduct,
    sumOFmatrices,
    sumOfEachRow,
    countwords,
    trim
}