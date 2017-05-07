function drawManyDiamond(N, H) {
    if (N <= 1 || H <= 1 || H % 2 == 0) {
        console.log("N nhỏ hơn 1 hoặc H nhỏ hơn 1 hoặc H là số chẵn, nhập lại N va H ")
    }
    let h = Math.floor((H / 2) + 1);
    let width = H - 1; 
    for (let i = 0; i < H; i++) {
        let str = '';
        if (i < h) {
            for (let j = 0; j < N * H - 2; j++) {
                let j2 = j % width;
                if ((j2 === h - 1 - i) || (j2 === h - 1 + i)) {
                    str += "*";
                } else {
                    str += ' ';
                }
            }
        }

        else {
            for (let j = 0; j < N * H - 2; j++) {
                let j2 = j % width;
                if ((j2 === i - h + 1) || (j2 === width- ((i - h )+ 1))) {
                    str += '*';
                }
                else {
                    str += ' ';
                }
            }
        }

        console.log(str);

    }

}
drawManyDiamond(3,7);
