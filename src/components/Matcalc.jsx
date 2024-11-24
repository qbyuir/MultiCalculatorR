import { useState } from "react";

export function Matcalc() {

    return (
     <>
       {/* <div id="sciCalc" className="text-center p-8 ml-15 w-[calc(100% - 240px)]">
            <h2 id="sciTitle" className="text-default text-2r max-w-60r left-1/2 bottom-7/8 absolute -translate-x-2/4 -translate-y-2/4">Calculadora Científica</h2>
         <div id="sci-calculator" className="absolute m-0 mx-auto text-28px w-40 pt-20 pb-8 px-0 top-55 left-1/2 -translate-x-2/4 -translate-y-2/4">
            <button class="clear" id="clear" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">C</button>
            <div class="viewer "id="viewer" className="text-default float-left text-right text-ellipsis overflow-hidden leading-3r pr-1.6 w-7.5 h-12">0</div>
            <button class="num" data-num="7" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">7</button>
            <button class="num" data-num="8" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">8</button>
            <button class="num" data-num="9" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">9</button>
            <button class="ops" data-ops="plus" id="plus" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">+</button>

            <button class="num" data-num="4" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">4</button>
            <button class="num" data-num="5" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">5</button>
            <button class="num" data-num="6" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">6</button>
            <button class="ops" data-ops="minus" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">-</button>

            <button class="num" data-num="1" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">1</button>
            <button class="num" data-num="2" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">2</button>
            <button class="num" data-num="3" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">3</button>
            <button class="ops" data-ops="times" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">*</button>

            <button class="num" data-num="0" className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">0</button>
            <button class="num" data-num="." className="text-default cursor-pointer bg-transparent float-left w-8 h-8 m-1 border-0 rounded-2xl transition-btn">.</button>
         </div>
       </div> */}
        <h2 id="calcTitle" className="absolute text-2r max-w-60r bottom-7/8 left-1/2 -translate-x-1/2 -translate-y-1/2"> Calculadora Científica </h2>
        
        <div className="absolute m-0 w-40 text-28px pt-20 pb-8 top-55 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center" class="calculator">
        
          <button class="clear" className="">C</button>
          <div class="viewer" className=" float-left text-right text-ellipsis overflow-hidden leading-3r w-7.5 h-12 pr-1.6">0</div>
          
          <button class="num" className="">7</button>
          <button class="num" className="">8</button>
          <button class="num" className="">9</button>
          <button class="ops" data-ops="ops" className="">+</button>
          
          <button class="num" className="">4</button>
          <button class="num" className="">5</button>
          <button class="num" className="">6</button>
          <button class="ops" className="">-</button>
          
          <button class="num" className="">1</button>
          <button class="num" className="">2</button>
          <button class="num" className="">3</button>
          <button class="ops" className="">*</button>
          
          <button class="num" className="">0</button>
          <button class="num" className="">.</button>
          <button class="equals" className="">=</button>
          <button class="ops" className="">/</button>

          <button class="sin">sin</button>
          <button class="cos">cos</button>
          <button class="tan">tan</button>
        
          <button class="pi">π</button>
          <button class="root">√</button>
          <button class="exp">tan</button>
          <button class="exp">sin</button>
          <button class="ops">cos</button>
          <button class="ops">tan</button>
          <button class="ops">tan</button>
        
 
 
        </div>

     </>
    )
}