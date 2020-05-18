import React from "react";
import { CodeBlock, CodeInline } from "./index";

export default {
  title: "Widgets",
};

const codes = [
  `sudo apt-get install vim`,
  `function qs(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array.splice(pivotIndex, 1)[0];  //从数组中取出我们的"基准"元素
    const left = [], right = [];
    array.forEach(item => {
        if (item < pivot) {
            left.push(item); 
        } else {
            right.push(item);
        }
    });
    return qs(left).concat(pivot, qs(right));
}

const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(qs(arr));  //输出：[ 3, 10, 15, 25, 25, 41, 42, 54, 72, 98, 121 ]`,

  `std::vector<double> numbers {2.5, 10.0, 3.5, 6.5, 8.0, 12.0, 1.5, 6.0};
std::make_heap(std::begin(numbers),std::end(numbers),std::greater<>()); //{1.5 6 2.5 6.5 8 12 3.5 10}
std::pop_heap(std::begin(numbers), std::end(numbers),std::greater<>()); //{2.5 6 3.5 6.5 8 12 10 1.5}
numbers.pop_back(); //{2.5 6 3.5 6.5 8 12 10}
`,
];

export const Code = () => {
  return (
    <div style={{ margin: "280px 300px" }}>
      <div>
        这是内联的：
        <CodeInline language="shell" value={codes[0]} />
      </div>
      <div style={{ marginTop: 20 }}></div>
      <CodeBlock language="javascript" value={codes[1]} />
      <div style={{ marginTop: 20 }}></div>
      <CodeBlock language="cpp" value={codes[2]} />
    </div>
  );
};
