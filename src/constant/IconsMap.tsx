import React from "react"
import Acne from "../../assets/icons/Acne.svg"
import Anxiety from "../../assets/icons/Anxiety.svg"
import Diabetes from "../../assets/icons/Diabetes.svg"
import Eczema from "../../assets/icons/Eczema.svg"
import Frostbite from "../../assets/icons/Frostbite.svg"
import HyperTension from "../../assets/icons/HyperTension.svg"
import Hypothermia from "../../assets/icons/Hypothermia.svg"
import Obesity from "../../assets/icons/Obesity.svg"
import PCOS from "../../assets/icons/PCOS.svg"
import Rubella from "../../assets/icons/Rubella.svg"
import Mild from "../../assets/icons/Mild.svg"
import Moderate from "../../assets/icons/Moderate.svg"
import Severe from "../../assets/icons/Severe.svg"


type SvgIconComponent = React.FC<React.SVGProps<SVGSVGElement>>

export const iconMap : {[key:string]:SvgIconComponent} = {
    Acne: Acne,
    Anxiety: Anxiety,
    Diabetes: Diabetes,
    Eczema: Eczema,
    Frostbite: Frostbite,
    HyperTension: HyperTension,
    Hypothermia: Hypothermia,
    Obesity: Obesity,
    PCOS: PCOS,
    Rubella: Rubella,
    Mild:Mild,
    Moderate:Moderate,
    Severe:Severe
}