import { useState } from 'react'
import { Matcalc } from './matCalc'
import { IMCcalc } from './IMCcalc'

export function Multicalculator() {

    return (
        <div>
            <Matcalc />
            <IMCcalc />
        </div>
    )
}