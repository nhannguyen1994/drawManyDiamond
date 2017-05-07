
# Run

 #### Vẽ hình bằng console.log
```
node index.js
```


# Yêu cầu bài toán:
```
- Chuyển đổi code C++ sang JavaScript cho bài toán vẽ N hình thoi với chiều cao H :

```
void drawManyDiamond(int N, int H) {
  if (N < 1 || H < 1 || H % 2 == 0) {
       return;
    }
    int h = H / 2 + 1; // H=7, h=4
    int width = H - 1; // width=6

    for (int i = 0; i < H; i++) {
        if (i < h) {
            for (int j = 0; j < N * H - 2; j++) {
                int j2 = j % width;
                if ((j2 === h - 1 - i) || (j2 === h - 1 + i)){
                   cout << "*";
                } else {
                    cout << " ";
                }
            }
        } else {
            for (int j = 0; j < N * H - 2; j++) {
                int j2 = j % width;
                if ((j2 === i - h + 1) || (j2 === h - (i - h) + 1)) {
                   cout << "*";
                } else {
                   cout << " ";
                }
            }

        }
         cout << endl
    }
}
```


# Cách giải quyết bài toán:

TH1: Nếu N nhỏ hơn 1 hoặc H nhỏ hơn 1 hoặc H là số chẵn thì không thoả mãn bài toán và cần nhập lại N và H.
```

TH2: ### Ta cần vẽ nửa trên và nửa dưới của hình thoi.

- #### Vẽ nửa trên của hình thoi (khi i<h) được thực hiện bởi đoạn code sau:
```
if (i <h) {
            for (let j = 0; j < N * H -2; j++) {
                let j2 = j % width;
                if ((j2 === h - 1 - i) || (j2 === h - 1 + i)) {
                    str += "*";
                } else {
                    str += ' ';
                }
            }
        }
```
- #### Vẽ nửa dưới của hình thoi (khi i>h) được thực hiện bởi đoạn code sau: 
```
else {
            for (let j = 0; j < N * H - 2; j++) {
                let j2 = j % width;
                if ((j2 === i - h + 1) || (j2 === h - (i - h )+ 1)) {
                    str += '*';
                }
                else {
                    str += ' ';
                }
            }
        }
```
```
