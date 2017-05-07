
function drawManyDiamond(N, H) {
    if (N < 1 || H < 1 || H % 2 == 0) {
        console.log("n nho hon 1 hoac H nho hon 1 hoac la so chan")
    }
    const h = Math.floor((H / 2) + 1); // H=7, h=4
    const width = H - 1; // width=6

    for (var i = 0; i < H; i++) {
        if (i < h) {
            for (var j = 0; j < N * H - 2; j++) {
                const j2 = j % width;
                if ((j2 === h - 1 - i) || (j2 === h - 1 + i)) {
                    console.log("*");
                } else {
                    console.log(" ");
                }
            }
        }
        else {
            for (var j = 0; j < N * H - 2; j++) {
                const j2 = j % width;
                if ((j2 === i - h + 1) || (j2 === h - ((i - h + 1)))) {
                    console.log("*");
                } else {
                    console.log(" ");
                }
            }

        }
    }
}
drawManyDiamond(2,5);