# 使用手册

文件 [js-in-oi.js](js-in-oi.js) 提供了一个名为 `OI` 的对象，您只需将此文件粘贴到您的代码中即可。

当然，使用 `require` 导入这一对象也是可以的，不过大部分 OJ 只支持提交单文件。

## IO

### `OI.IO.readStream(stream,res,err)`

此函数读取流 stream 的所有数据直到流结束，将读到的所有数据存进一个 `Buffer` 里，用这个 `Buffer` 作为唯一的参数调用回调函数 `res(Buffer)` 。如果发生错误，调用回调函数 `err(error)` 。

### `OI.IO.Scanner`

此类提供了若干方法，可以把一个 `Buffer` 中的数据转化为若干字符、字符串和数字。

#### `new OI.IO.Scanner(buf)`

用 `Buffer buf` 初始化一个 `Scanner` 对象。

#### `OI.IO.Scanner.getCharASCII()`

在 `buf` 中读取下一个字符的 `ASCII` 码。如果已经读完，返回 `undefined`。

#### `OI.IO.Scanner.getCharASCIIUntilNotNull()`

在 `buf` 中读取下一个非空白字符的 `ASCII` 码。如果已经读完，返回 `undefined`。

#### `OI.IO.Scanner.getString()`

在 `buf` 中读取下一个字符串。

#### `OI.IO.Scanner.getNumber()`

在 `buf` 中读取下一个数字。

#### `OI.IO.Scanner.getLine()`

在 `buf` 中读取下一行字符串。

示例：

```javascript
//A+B Problem

const OI={...} // 文件js-in-oi.js

OI.IO.readStream(process.stdin,(res)=>{
    let scanner=new OI.IO.Scanner(res);
    let a=scanner.getNumber(),b=scanner.getNumber();
    console.log(a+b);
},(err)=>{console.log(err);})
```