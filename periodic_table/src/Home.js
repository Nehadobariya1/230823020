import Table from './Table.js'
import './App.css';
import React from 'react';

function Home(props)
{
    return(
        <>
       <style>
        {
            `
            .main{
               
                height: 35px;
                border-radius: 5px;
                margin-top: 20px;
                background-color: red;
                margin-left: 10px;
                
            }
            .sub-row {
                display: flex;
                flex-direction: column;
                margin-top: 10px;
            }
            .sub-column {
                flex: 1;
              
                padding: 10px;
                margin: 5px;
            `
        }
       </style>

        <div className="container">
            <h1 className='mt-3'><center><b>Periodic Table of the Elements</b></center></h1>
        <div className="row g-0" style={{marginTop:"-15px"}} >
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"10px"}}>
                     <div className="col" ><Table count="1" alpha="H" name="Hydrogen" value="1.008" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                
                </div>
            </div>
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"1x"}}>
                    <div className="col" ></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="2" alpha="He" name="Helium" value="4.003" color='pink'/></div>
                </div>
                </div>
        </div>
        <div className="row g-0" style={{marginTop:"-15px"}} >
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"10px"}}>
                    <div className="col" ><Table count="3" alpha="Li" name="Lithium" value="6.941" color='red'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="4" alpha="Be" name="Beryllium" value="9.012" color='orange'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                
                </div>
            </div>
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"1x"}}>
                    <div className="col" ></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="5" alpha="B" name="Boron" value="10.811" color='yellow'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="6" alpha="C" name="Carbon" value="12.011" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="7" alpha="N" name="Nitrogen" value="14.007" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="8" alpha="O" name="Oxygen" value="15.999" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="9" alpha="F" name="Fluorine" value="18.998" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="10" alpha="Ne" name="Neon" value="20.180" color='pink'/></div>
                </div>
                </div>
        </div>
        <div className="row g-0" style={{marginTop:"-15px"}} >
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"10px"}}>
                    <div className="col" ><Table count="11" alpha="Na" name="Sodium" value="22.990" color='red'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="12" alpha="Mg" name="Megnesium" value="24.305" color='orange'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                
                </div>
            </div>
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"1x"}}>
                    <div className="col" ></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="13" alpha="Al" name="Aluminum" value="26.982" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="14" alpha="Si" name="Silicon" value="28.086" color='yellow'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="15" alpha="P" name="Phosphorus" value="30.974" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="16" alpha="S" name="sulfur" value="32.066" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="17" alpha="Cl" name="Chlorine" value="35.453" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="18" alpha="Ar" name="Argon" value="39.948" color='pink'/></div>
                </div>
                </div>
        </div>
        <div className="row g-0" style={{marginTop:"-15px"}} >
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"10px"}}>
                    <div className="col" ><Table count="19" alpha="K" name="Potassium" value="39.098" color='red'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="20" alpha="Ca" name="calcium" value="40.078" color='orange'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="21" alpha="Sc" name="scandium" value="44.956" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="22" alpha="Ti" name="Titanium" value="47.867" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="23" alpha="V" name="Vanadium" value="50.942" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="24" alpha="Cr" name="Chromium" value="51.996" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="25" alpha="Mn" name="Manganese" value="54.938" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="26" alpha="Fe" name="Iron" value="55.845" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="27" alpha="Co" name="Cobalt" value="58.993" color='#33CCFF'/></div>
                
                </div>
            </div>
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"1x"}}>
                    <div className="col" ><Table count="28" alpha="Ni" name="Nickel" value="58.693" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="29" alpha="Cu" name="Copper" value="63.546" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="30" alpha="Zn" name="Zine" value="65.39" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="31" alpha="Ga" name="gallium" value="69.723" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="32" alpha="Ge" name="Germanium" value="72.61" color='yellow'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="33" alpha="As" name="Arsenic" value="74.922" color='yellow'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="34" alpha="Se" name="Selenium" value="78.96" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="35" alpha="Br" name="Bromine" value="79.904" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="36" alpha="Kr" name="Krypton" value="83.80" color='pink'/></div>
                </div>
                </div>
        </div>
        <div className="row g-0" style={{marginTop:"-15px"}} >
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"10px"}}>
                    <div className="col" ><Table count="37" alpha="Rb" name="Rubidium" value="85.468" color='red'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="38" alpha="Sr" name="Strontium" value="87.62" color='orange'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="39" alpha="Y" name="Yttrium" value="88.096" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="40" alpha="Zr" name="Zirconium" value="91.224" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="41" alpha="Nb" name="Niobium" value="92.906" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="42" alpha="Mo" name="Molybdenum" value="95.94" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="43" alpha="Tc" name="Technetium" value="98" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="44" alpha="Ru" name="Rethenium" value="101.07" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="45" alpha="Rh" name="Rhodium" value="102.91" color='#33CCFF'/></div>
                
                </div>
            </div>
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"1x"}}>
                    <div className="col" ><Table count="46" alpha="Pd" name="Palladium" value="106.42" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="47" alpha="Ag" name="Silver" value="107.87" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="48" alpha="Cd" name="Cadmium" value="112.41" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="49" alpha="In" name="Indium" value="114.82" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="50" alpha="Sn" name="Tin" value="118.71" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="51" alpha="Sb" name="Antimony" value="121.76" color='yellow'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="52" alpha="Te" name="Tellurium" value="127.60" color='yellow'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="53" alpha="I" name="Iodine" value="126.90" color='rgb(65, 187, 65)'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="54" alpha="Xe" name="Xenon" value="131.29" color='pink'/></div>
                </div>
                </div>
        </div>
        <div className="row g-0" style={{marginTop:"-15px"}} >
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"10px"}}>
                    <div className="col" ><Table count="55" alpha="Cs" name="Cesium" value="132.905" color='red'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="56" alpha="Ba" name="Barium" value="137.328" color='orange'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="57-71" alpha="" name="Lanthanides" value="" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="72" alpha="Hf" name="Hafnium" value="178.49" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="73" alpha="Ta" name="Tantalum" value="180.95" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="74" alpha="W" name="Tungsten" value="183.84" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="75" alpha="Re" name="Rhenium" value="186.21" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="76" alpha="Os" name="Osmium" value="190.23" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="77" alpha="Ir" name="Iridium" value="192.22" color='#33CCFF'/></div>
                
                </div>
            </div>
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"1x"}}>
                    <div className="col" ><Table count="78" alpha="Pt" name="Platinum" value="195.08" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="79" alpha="Au" name="Gold" value="196.97" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="80" alpha="Hg" name="Mercury" value="200.59" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="81" alpha="Ti" name="Thallium" value="204.38" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="82" alpha="Pb" name="Lead" value="207.2" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="83" alpha="Bi" name="Bismuth" value="208.98" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="84" alpha="Po" name="Polonium" value="209" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="85" alpha="At" name="Astatine" value="210" color='yellow'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="86" alpha="Rn" name="Radon" value="222" color='pink'/></div>
                </div>
                </div>
        </div>
        <div className="row g-0" style={{marginTop:"-15px"}} >
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"10px"}}>
                    <div className="col" ><Table count="87" alpha="Fr" name="Francium" value="223.020" color='red'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="88" alpha="Ra" name="Radium" value="226.025" color='orange'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="89-103" alpha="" name="Actnides" value="" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="104" alpha="Rf" name="Rutherfordium" value="261" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="105" alpha="Db" name="Dubnium" value="262" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="106" alpha="Sg" name="Seaborgium" value="266" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="107" alpha="Bh" name="Bohrium" value="264" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="108" alpha="Hs" name="Hassium" value="269" color='#33CCFF'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="109" alpha="Mt" name="Meitnerium" value="268" color='gray'/></div>
                
                </div>
            </div>
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"1x"}}>
                    <div className="col" ><Table count="110" alpha="Ds" name="Darmstadtium" value="269" color='gray'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="111" alpha="rg" name="Roentgenium" value="272" color='gray'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="112" alpha="Cn" name="Copernicium" value="277" color='#be2ed6'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="113" alpha="Nh" name="Nihonium" value="" color='gray'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="114" alpha="Fl" name="Flerovium" value="289" color='gray'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="115" alpha="Mc" name="Moscovium" value="" color='gray'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="116" alpha="Lv" name="Livermorium" value="298" color='gray'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="117" alpha="Ts" name="Temmessine" value="" color='gray'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="118" alpha="Og" name="Oganesson" value="" color='gray'/></div>
                </div>
                </div>
        </div>
        <br />
        <div className="row g-0" style={{marginTop:"-15px"}} >
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"10px"}}>
                    <div className="col" ></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="57" alpha="La" name="Lanthanum" value="138.91" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="58" alpha="Ce" name="Cerium" value="140.12" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="59" alpha="Pr" name="Praseodymium" value="140.91" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="60" alpha="Nd" name="Neodymium" value="144.21" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="61" alpha="Pm" name="Promethium" value="145" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="62" alpha="Sm" name="Samarium" value="150.96" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="63" alpha="Eu" name="Europium" value="151.96" color='#0484fc'/></div>
                
                </div>
            </div>
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"1x"}}>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="64" alpha="Gd" name="Gadolinium" value="157.25" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="65" alpha="Tb" name="Terbium" value="158.93" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="66" alpha="Dy" name="Dysprosium" value="162.50" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="67" alpha="Ho" name="Holmium" value="164.93" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="68" alpha="Er" name="Erbium" value="167.26" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="69" alpha="Tm" name="Thulium" value="168.93" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="70" alpha="Yb" name="Ytterbium" value="173.04" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="71" alpha="Lu" name="Lutetium" value="174.97" color='#0484fc'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                </div>
                </div>
        </div>
        <div className="row g-0" style={{marginTop:"-15px"}} >
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"10px"}}>
                    <div className="col" ></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="89" alpha="Ac" name="Actinium" value="227" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="90" alpha="Th" name="Thorium" value="232.04" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="91" alpha="Pa" name="Protactinium" value="231.04" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="92" alpha="U" name="Uranium" value="238.03" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="93" alpha="Np" name="Neptunium" value="237.048" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="94" alpha="Pu" name="Plutonium" value="244.061" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="95" alpha="Am" name="Americium" value="243.061" color='#00A572'/></div>
                
                </div>
            </div>
            <div className="col-6">
                <div className="row g-0" style={{marginLeft:"1x"}}>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="96" alpha="Cm" name="Curium" value="247" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="97" alpha="Bk" name="Berkelium" value="247.070" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="98" alpha="Cf" name="Californium" value="251.080" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="99" alpha="Es" name="Einstenium" value="254" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="100" alpha="Fm" name="Fermium" value="257.095" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="101" alpha="Md" name="Mendelevium" value="258.1" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="102" alpha="No" name="Nobelium" value="259.101" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}><Table count="103" alpha="Lr" name="Lawrencium" value="262" color='#00A572'/></div>
                    <div className="col" style={{marginLeft:"-5px"}}></div>
                </div>
                </div>
        </div>
        <br />
        <div className="row">
        <div className="col">State of Matter(color of name)<br/><b style={{color:"red"}}>GAS </b><b style={{color:"blue"}}>LIQUID </b><b>SOLIDE </b><b>UNKNOWN</b></div>
        </div>
        <div className="row" style={{marginTop:"-15px"}}>
            
            <div className="col mt-3" style={{display:"flex"}}>
                <div className="row sub-row">
                    <div className="col sub-column">
                     <center><div className=" " style={{height:"20px",width:"80px",background:"red"}}></div></center> 
                     <h6  className="mt-3" >Alkali Metals</h6>
                     </div>
                </div>
            </div>
            <div className="col mt-3" style={{display:"flex"}}>
                <div className="row sub-row">
                    <div className="col sub-column">
                     <center><div className=" " style={{height:"20px",width:"80px",background:"orange"}}></div></center> 
                     <h6  className="mt-3" >Alkaline Earth Metals</h6>
                     </div>
                </div>
            </div>
            <div className="col mt-3" style={{display:"flex"}}>
                <div className="row sub-row">
                    <div className="col sub-column">
                     <center><div className=" " style={{height:"20px",width:"80px",background:"#33CCFF"}}></div></center> 
                     <h6  className="mt-3" >Transition Metals</h6>
                     </div>
                </div>
            </div>
            <div className="col mt-3" style={{display:"flex"}}>
                <div className="row sub-row">
                    <div className="col sub-column">
                     <center><div className=" " style={{height:"20px",width:"80px",background:"#be2ed6"}}></div></center> 
                     <h6  className="mt-3" >Post-Transition Metals</h6>
                     </div>
                </div>
            </div>
            <div className="col mt-3" style={{display:"flex"}}>
                <div className="row sub-row">
                    <div className="col sub-column">
                     <center><div className=" " style={{height:"20px",width:"80px",background:"yellow"}}></div></center> 
                     <h6  className="mt-3" >Metalloids</h6>
                     </div>
                </div>
            </div>
            <div className="col mt-3" style={{display:"flex"}}>
                <div className="row sub-row">
                    <div className="col sub-column">
                     <center><div className=" " style={{height:"20px",width:"80px",background:"rgb(65, 187, 65)"}}></div></center> 
                     <h6  className="mt-3" >Reactive NonMetals</h6>
                     </div>
                </div>
            </div>
            <div className="col mt-3" style={{display:"flex"}}>
                <div className="row sub-row">
                    <div className="col sub-column">
                     <center><div className=" " style={{height:"20px",width:"80px",background:"pink"}}></div></center> 
                     <h6  className="mt-3" >Noble gases</h6>
                     </div>
                </div>
            </div>
            <div className="col mt-3" style={{display:"flex"}}>
                <div className="row sub-row">
                    <div className="col sub-column">
                     <center><div className=" " style={{height:"20px",width:"80px",background:"gray"}}></div></center> 
                     <h6  className="mt-3" >Unknown Chemical Properties</h6>
                     </div>
                </div>
            </div>
            <div className="col mt-3" style={{display:"flex"}}>
                <div className="row sub-row">
                    <div className="col sub-column">
                     <center><div className=" " style={{height:"20px",width:"80px",background:"#00A572"}}></div></center> 
                     <h6  className="mt-3" >Actinides</h6>
                     </div>
                </div>
            </div>
            <div className="col mt-3" style={{display:"flex"}}>
                <div className="row sub-row">
                    <div className="col sub-column">
                     <center><div className=" " style={{height:"20px",width:"80px",background:"#0484fc"}}></div></center> 
                     <h6  className="mt-3" >Lanthanides</h6>
                     </div>
                </div>
            </div>
            
            
            
        </div>
        
       
        
       
        </div>
        
   


        </>
    );
}


export default Home;
