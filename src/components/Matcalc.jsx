import React, { useState, useEffect } from "react";

export default function Matcalc() {
  useEffect(() => {
    var viewer = document.querySelector('#viewer');
    var equals = document.querySelector('#equals');
    var clear = document.querySelector('#clear');
    var nums = document.querySelectorAll('#num');
    var ops = document.querySelectorAll('#ops');

    var theNum = '';
    var prevNum = '';
    var resultNum;
    var operator;
    var lastInput = ''

    nums.forEach((num) => {
      num.addEventListener('click', (e) => {
        theNum += e.target.getAttribute('data-num');
        viewer.innerText = theNum;
      });
    });

    ops.forEach((op) => {
      op.addEventListener('click', (e) => {
        prevNum = theNum;
        theNum = '';
        operator = e.target.getAttribute('data-ops');
        switch (operator) {
          case 'plus':
            viewer.innerText = '+';
            break;
          case 'minus':
            viewer.innerText = '-';
            break;
          case 'times':
            viewer.innerText = '*';
            break;
          case 'divided by':
            viewer.innerText = '/';
            break;
          case 'sin':
            viewer.innerText = 'sin('
            break;
          case 'cos':
            viewer.innerText = 'cos('
            break;
          case 'tan':
            viewer.innerText = 'tan('
            break;
          case 'pi':
            viewer.innerText = 'π'
            break;
          case 'sqrt':
            viewer.innerText = '√'
            break;
          case 'nth-root':
            viewer.innerText = 'n√('
            break;
          case 'power':
            viewer.innerText = '^'
            break;
          case 'nth-power':
            viewer.innerText = 'x^n'
            break;
          }
          lastInput = operator
      });
    });

    equals.addEventListener('click', () => {
      prevNum = parseFloat(prevNum);
      theNum = parseFloat(theNum);
      switch (operator) {
        case 'plus':
          resultNum = prevNum + theNum;
          break;
        case 'minus':
          resultNum = prevNum - theNum;
          break;
        case 'times':
          resultNum = prevNum * theNum;
          break;
        case 'divided by':
          resultNum = prevNum / theNum;
          break;
        case 'sin':
          resultNum = Math.sin(theNum)
          break;
        case 'cos':
          resultNum = Math.cos(theNum)
          break;
        case 'tan':
          resultNum = Math.tan(theNum)
          break;
        case 'pi':
          resultNum = Math.PI
          break;
        case 'sqrt':
          resultNum = Math.sqrt(theNum)
          break;
        case 'nth-root':
          resultNum = Math.pow(prevNum, 1 / theNum)
          break;
        case 'power':
          resultNum = Math.pow(prevNum, theNum)
          break;
        case 'nth-power':
          resultNum = Math.pow(prevNum, theNum)
          break;
        default:
          resultNum = theNum;
      }
      viewer.innerText = resultNum;
      prevNum = '';
      theNum = resultNum;
    });

    clear.addEventListener('click', () => {
      prevNum = '';
      theNum = '';
      viewer.innerText = '0';
    });

    return () => {
      nums.forEach((num) => num.removeEventListener('click', () => {}));
      ops.forEach((op) => op.removeEventListener('click', () => {}));
      equals.removeEventListener('click', () => {});
      clear.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <>
      <h2 id="calcTitle" className="absolute font-normal text-2r max-w-60r bottom-7/8 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Calculadora Científica
      </h2>

      <div id="calculator" className="absolute mx-[auto] my-0 w-[10em] text-[28px] pt-[5em] px-0 pb-[2em] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <button id="clear" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">C</button>
        <div id="viewer" className="whitespace-nowrapfloat-left text-right text-ellipsis overflow-hidden leading-[2.5em] w-[7.5em] h-[3em] pr-[1.6rem]">0</div>

        <button id="num" data-num="7" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">7</button>
        <button id="num" data-num="8" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">8</button>
        <button id="num" data-num="9" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">9</button>
        <button id="ops" data-ops="plus" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">+</button>

        <button id="num" data-num="4" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">4</button>
        <button id="num" data-num="5" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">5</button>
        <button id="num" data-num="6" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">6</button>
        <button id="ops" data-ops="minus" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">-</button>

        <button id="num" data-num="1" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">1</button>
        <button id="num" data-num="2" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">2</button>
        <button id="num" data-num="3" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">3</button>
        <button id="ops" data-ops="times" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">*</button>

        <button id="num" data-num="0" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">0</button>
        <button id="num" data-num="." className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">.</button>
        <button id="equals" data-result="" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">=</button>
        <button id="ops" data-ops="divided by" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">/</button>

        <button id="ops" data-ops="sin" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">sin</button>
        <button id="ops" data-ops="cos" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">cos</button>
        <button id="ops" data-ops="tan" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">tan</button>
        <button id="ops" data-ops="pi" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">π</button>
        
        <button id="ops" data-ops="sqrt" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">√</button>
        <button id="ops" data-ops="nth-root" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">ⁿ√</button>
        <button id="ops" data-ops="power" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">a²</button>
        <button id="ops" data-ops="nth-power" className="float-left [font:inherit] border-[0] rounded-[1em] m-[0.25em] w-[2em] h-[2em] hover:bg-[rgba(42,_50,_113,_0.28)] [transition:all_0.5s]">aᵇ</button>
      </div>
    </>
  );
}