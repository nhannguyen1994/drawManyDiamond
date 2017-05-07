
# Run

 #### Vẽ hình bằng console.log
```
node index.js
```


# Yêu cầu bài toán:
```
- Chuyển đổi code C++ sang JavaScript cho bài toán vẽ N hình thoi với chiều cao H 
```

# Cách giải quyết bài toán:


#### TH1: Nếu N nhỏ hơn 1 hoặc H nhỏ hơn 1 hoặc H là số chẵn thì không thoả mãn bài toán và cần nhập lại H là số lẻ > 1.


#### TH2: Ta cần vẽ nửa trên và nửa dưới của hình thoi: 
```
 #### Vẽ nửa trên của hình thoi (khi i<h, với chiều cao là h = (H/2)-1, mỗi hình có chiều rộng là width = H-1). 
+ Tại i=0 thì j sẽ chạy từ 0 cho đến N*H-2 và j tăng (j++);
+ Tại các vị trí ( j % width ==h - 1 - i) hoặc (j % width ==h-1+i) thì kí tự  * sẽ được in ra, còn ngoài vị trí trên thì sẽ được in ra kí tự " " .

+ Đoạn code được thực hiện như sau:

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

- #### Vẽ nửa dưới của hình thoi (khi i>h) được thực hiện bởi đoạn code sau: 

else {
            for (let j = 0; j < N * H - 2; j++) {
                let j2 = j % width;
                if ((j2 === i - h + 1) || (j2 ===width - ((i - h )+ 1))) {
                    str += '*';
                }
                else {
                    str += ' ';
                }
            }
        }
```
# Kết quả ứng với các trường hợp tham số đầu vào khác nhau:
```
 (N,H) = (2,4)
 
N nhỏ hơn 1 hoặc H nhỏ hơn 1 hoặc H là số chẵn, nhập lại N va H 
*  * 
 *  *  
*  *  *
 ** ** 

```
```
(N,H) = (3,7)

  *     *     *   
  * *   * *   * *  
 *   * *   * *   * 
*     *     *     *
 *   * *   * *   * 
  * *   * *   * *  
   *     *     * 
```
