# text-expand-animation
Text Expand Animation 是一個用於生成文本展開動畫效果的前端專案。它可以使單詞的首尾字母逐漸向外擴展，形成完整的單詞。這個特效適用於網站標題、按鈕、標籤等元素，為用戶提供有趣且吸引人的視覺體驗。本專案使用 HTML、CSS 和 JavaScript 實現，易於理解並可自由地應用於您的網站或應用程序中。

文字擴散動畫效果
========

此專案展示了如何使用原生 JavaScript 和 CSS 實現將單詞從中心向兩側擴散的動畫效果。例如，將單詞 "Developer" 分成多個步驟：

```
     Dr     
    Deer    
   Devper   
  Deveoper  
 Developer
```

目錄
--

*   [HTML 結構](https://chat.openai.com/chat/2d95567a-95d3-4996-837c-012d7c915f1c#html-%E7%B5%90%E6%A7%8B)
    
*   [JavaScript 實現](https://chat.openai.com/chat/2d95567a-95d3-4996-837c-012d7c915f1c#javascript-%E5%AF%A6%E7%8F%BE)
    
*   [CSS 樣式](https://chat.openai.com/chat/2d95567a-95d3-4996-837c-012d7c915f1c#css-%E6%A8%A3%E5%BC%8F)
    

HTML 結構
-------

在 HTML 文件中，添加一個帶有唯一 ID 的 `<div>` 元素，用於顯示動畫效果：

```
<div id="text"></div>
```

JavaScript 實現
-------------

首先，選擇要顯示的單詞，並編寫一個 `generateSteps` 函數來生成每個動畫步驟：

```
const word = "Developer";function generateSteps(word) {  const wordLength = word.length;  const steps = \[\];  const padding = " ".repeat(Math.floor(wordLength / 2));  for (let i = 0; i <= Math.floor(wordLength / 2); i++) {    const leftPart = i === 0 ? word\[0\] : padding.slice(0, -i) + word.slice(0, i);    const rightPart = word.slice(-(i + 1)) + padding.slice(i + 1);    const step = leftPart + rightPart;
    steps.push(step);
  }  return steps;
}
```

然後，使用 `generateSteps` 函數生成步驟，並創建一個名為 `animateText` 的函數以顯示動畫。在每個步驟之間設置一個定時器（例如 500 毫秒）以控制動畫速度：

```
const steps = generateSteps(word);let currentStep = 0;function animateText() {  if (currentStep < steps.length) {
    textElement.textContent = steps\[currentStep\];
    currentStep++;    setTimeout(animateText, 500);
  }
}animateText();
```

CSS 樣式
------


為了使動畫效果更具吸引力，可以為文字元素添加一些 CSS 樣式。以下是一些建議的樣式：

```
body {  font-family: Arial, sans-serif;  display: flex;  justify-content: center;  align-items: center;  height: 100vh;  margin: 0;  background-color: #f0f0f0;
}#text {  font-size: 3rem;  font-weight: bold;  color: #333;  background: linear-gradient(90deg, rgba(58,123,241,1) 0%, rgba(58,96,240,1) 50%,
```

rgba(122,49,222,1) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-align: center;
padding: 10px;
border-radius: 5px;
}



這些樣式包括：

1. 將頁面背景顏色設置為淺灰色 `#f0f0f0`。
2. 使用 Flexbox 將文字元素置於頁面中央。
3. 將字體大小設置為 `3rem`，字重設置為粗體。
4. 使用 `-webkit-background-clip` 和 `-webkit-text-fill-color` 屬性為文字應用漸變顏色。
5. 將文字對齊方式設置為居中。
6. 為文字元素添加一些內邊距和圓角。

您可以根據需要自由修改這些樣式。

## 使用方法

1. 在 HTML 文件中放置一個帶有唯一 ID 的 `<div>` 元素，用於顯示動畫效果。
2. 將 JavaScript 代碼添加到 `<script>` 標籤中或單獨的 JavaScript 文件中。
3. 在 CSS 文件中為文字元素添加樣式，或將樣式添加到 HTML 文件的 `<style>` 標籤中。

完成以上步驟後，當您載入 HTML 頁面時，將看到指定單詞的文字擴散動畫效果。

--- 

以上為 Markdown 格式的技術文檔，它概述了如何使用原生 JavaScript 和 CSS 實現文字擴散動畫效果。希望這對您有所幫助！