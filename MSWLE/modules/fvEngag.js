//Type your code here

var FVQtCatLst = new Array();
/*
FVQtCatLst[0] = "Job Safety Analysis (JSA)";
FVQtCatLst[1] = "Short Service Employee Management";
FVQtCatLst[2] = "Emergency Management";
FVQtCatLst[3] = "Permit to Work";*/

/*
Emergency Management (EM)  
Job Safety Analysis (JSA) 
Permit To Work (PTW) 
Short Service Employee Management (SSE) 
Confined Space Entry (CSE) 
Diving 
Electrical Work (De-Energized)
Electrical Work (Energized/Live) 
Excavation (Entry)
Excavation (No Entry) 
Hot Work 
Isolation of Hazardous Energy (IHE) 
Lifting & Rigging 
Other (including local V&V) 
Portable Gas Detection 
Vacuum Truck Ops (Control of Static Electricity - Transfer of flammable/combustible or classified area work) 
Work at Height
*/
FVQtCatLst[0] = "Emergency Management (EM)";
FVQtCatLst[1] = "Job Safety Analysis (JSA)";
FVQtCatLst[2] = "Permit to Work (PTW)";
FVQtCatLst[3] = "Short Service Employee Management (SSE)";
FVQtCatLst[4] = "Confined Space Entry (CSE)";
FVQtCatLst[5] = "Diving";
FVQtCatLst[6] = "Electrical Work (De-Energized)";
FVQtCatLst[7] = "Electrical Work (Energized/Live)";
FVQtCatLst[8] = "Excavation (Entry)";
FVQtCatLst[9] = "Excavation (No Entry)";
FVQtCatLst[10] = "Hot Work";
FVQtCatLst[11] = "Isolation of Hazardous Energy (IHE)";
FVQtCatLst[12] = "Lifting & Rigging";
FVQtCatLst[13] = "Other (including local V&V)";
FVQtCatLst[14] = "Portable Gas Detection";
FVQtCatLst[15] = "Vacuum Truck  Ops (Control of Static Electricity- Transfer of flammable/combustible or classified area work)";
FVQtCatLst[16] = "Work at Height";

var FVQtAns = new Array();
//em yes 1636-1638 no 1758 1760
FVQtAns[0] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EM_1_comments",noId:1758,yesId:1636,field:"msw-udf-fv-eng-em-1",qt:"1.Work crews are knowledgeable about facility alarms and muster points.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EM_2_comments",noId:1759,yesId:1637,field:"msw-udf-fv-eng-em-2",qt:"2.Work crew is able to explain site specific emergency evacuation procedures.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EM_3_comments",noId:1760,yesId:1638,field:"msw-udf-fv-eng-em-3",qt:"3.Emergency/Evacuation Drills are performed as per schedule",ans:"none"}];
//jsa yes 1624 -1632 no 1746 - 1754
FVQtAns[1] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_1_comments",noId:1746,yesId:1624,field:"msw-udf-fv-eng-jsa-1" ,qt:"1.All identified critical steps where serious injury, fatality or loss of containment could occur are documented.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_2_comments",noId:1747,yesId:1625,field:"msw-udf-fv-eng-jsa-2",qt:"2.Hazards associated with these critical steps are identified and documented.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_3_comments",noId:1748,yesId:1626,field:"msw-udf-fv-eng-jsa-3",qt:"3.The crew also identified and documented potential process safety or work environment hazards that could seriously or fatally injure them.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_4_comments",noId:1749,yesId:1627,field:"msw-udf-fv-eng-jsa-4",qt: "4.The safeguards adequately addressed hazards that could seriously or fatally injure affected personnel in the work area.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_5_comments",noId:1750,yesId:1628,field:"msw-udf-fv-eng-jsa-5",qt:"5.Work crew is able to describe that critical Safeguards were verified to be in place and functioning prior to conducting work.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_6_comments",noId:1751,yesId:1629,field:"msw-udf-fv-eng-jsa-6",qt:"6.The work crew discussed stop work situations specific to the task prior to conducting work.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_7_comments",noId:1752,yesId:1630,field:"msw-udf-fv-eng-jsa-7",qt: "7.The work crew discussed the necessary conditions to safely start work (e.g. SWC, Essential Checklist, etc.)",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_8_comments",noId:1753,yesId:1631,field:"msw-udf-fv-eng-jsa-8",qt: "8.Workers know what actions to take if conditions change or unplanned event occur (e.g., stop and seek assistance).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_9_comments",noId:1754,yesId:1632,field:"msw-udf-fv-eng-jsa-9",qt: "9.All work crew members participated in JSA development and hazard identification discussion.",ans:"none"}
             ];
//ptw yes 1639-1643 no 1761  1765
FVQtAns[2] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PTW_1_comments",noId:1761,yesId:1639,field:"msw-udf-fv-eng-ptw-1" ,qt:"1.Applicable permits have been authorized by a qualified permit approver.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PTW_2_comments",noId:1762,yesId:1640,field:"msw-udf-fv-eng-ptw-2",qt:"2.The task scope has been defined on applicable work permits.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PTW_3_comments",noId:1763,yesId:1641,field:"msw-udf-fv-eng-ptw-3",qt:"3.The work crew understands the work scope as defined on the applicable work permit.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PTW_4_comments",noId:1764,yesId:1642,field:"msw-udf-fv-eng-ptw-4",qt: "4.The work crew is working within the approved work scope.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PTW_5_comments",noId:1765,yesId:1643,field:"msw-udf-fv-eng-ptw-5",qt:"5.A site checker or other competent personnel is periodically monitoring and verifying that work is being performed safely.",ans:"none"},
             ];
//ssem yes 1633-1635 no 1755 - 1757
FVQtAns[3] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_1_comments",noId:1755,yesId:1633,field:"msw-udf-fv-eng-ssem-1",qt:"1.SSEs are visibly identifiable.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_2_comments",noId:1756,yesId:1634,field:"msw-udf-fv-eng-ssem-2",qt:"2.Are SSEs assigned mentors?",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_3_comments",noId:1757,yesId:1635,field:"msw-udf-fv-eng-ssem-3",qt:"3.Are assigned mentors on site?",ans:"none"}];

//cse yes 1644 - 1652 no 1766 1774
FVQtAns[4] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_CSE_1_comments",noId:1766,yesId:1644,field:"msw-udf-fv-eng-cse-1" ,qt:"1.Required isolations are in place, secure, and verified by crew representative(s). Note: if IHE is required for entry, fill out IHE section",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_CSE_2_comments",noId:1767,yesId:1645,field:"msw-udf-fv-eng-cse-2",qt:"2.Atmosphere has been determined to be within SBU allowed limits (including ambient temperature if applicable) for entry. ",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_CSE_3_comments",noId:1768,yesId:1646,field:"msw-udf-fv-eng-cse-3",qt:"3.Gas testing frequency has been appropriately determined and documented (continuous, periodic, etc.).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_CSE_4_comments",noId:1769,yesId:1647,field:"msw-udf-fv-eng-cse-4",qt: "4.Confined space is ventilated (natural and/or mechanical) to dilute the air from containing dust, fumes, mist, vapors, gases, heat etc. ",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_CSE_5_comments",noId:1770,yesId:1648,field:"msw-udf-fv-eng-cse-5",qt:"5.An entry watch is present directly outside the point of entry and is monitoring conditions within the space, and is maintaining the entry log.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_CSE_6_comments",noId:1771,yesId:1649,field:"msw-udf-fv-eng-cse-6",qt:"6.An entry watch is able to communicate with the entrant(s) and knows when to stop work.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_CSE_7_comments",noId:1772,yesId:1650,field:"msw-udf-fv-eng-cse-7",qt: "7.Rescue personnel, equipment identified and worn by entrants, and its availability are appropriate for the type of rescue that would be required in case of an emergency. swc #6",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_CSE_8_comments",noId:1773,yesId:1651,field:"msw-udf-fv-eng-cse-8",qt: "8.Work crew has confirmed the rescue plan can be executed as written (e.g., drill, rescue equipment confirmation, etc.).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_CSE_9_comments",noId:1774,yesId:1652,field:"msw-udf-fv-eng-cse-9",qt: "9.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"}
             ];

//diving dv yes 1653 - 1662 no 1775 1784
FVQtAns[5] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_DV_1_comments",noId:1775,yesId:1653,field:"msw-udf-fv-eng-dv-1" ,qt:"1.Diving is being conducted in accordance with the required procedures and dive permit; all documentation is onsite.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_DV_2_comments",noId:1776,yesId:1654,field:"msw-udf-fv-eng-dv-2",qt:"2.Diving operations have been evaluated for other potential activities, e.g. SimOps, IHE, Marine Assurance.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_DV_3_comments",noId:1777,yesId:1655,field:"msw-udf-fv-eng-dv-3",qt:"3.The minimum 5-person dive team is present: 1 Supervisor, 2 Divers (Main and Standby), and 2 Tenders (one for each diver).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_DV_4_comments",noId:1778,yesId:1656,field:"msw-udf-fv-eng-dv-4",qt: "4.Rescue plans were developed, documented, designated rescue equipment is on hand, and crew members understand their assigned roles.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_DV_5_comments",noId:1779,yesId:1657,field:"msw-udf-fv-eng-dv-5",qt:"5.Work crew has confirmed the rescue plan can be executed as written (e.g., drill, rescue equipment confirmation, etc.).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_DV_6_comments",noId:1780,yesId:1658,field:"msw-udf-fv-eng-dv-6",qt:"6.All diving equipment have been inspected, found to be adequate, and documented on the contractor pre-dive checklist prior to beginning work.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_DV_7_comments",noId:1781,yesId:1659,field:"msw-udf-fv-eng-dv-7",qt: "7.Agreed upon conditions for termination of the dive are understood by the crew (e.g. wildlife presence, equipment operability, weather conditions, scope changes, etc.).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_DV_8_comments",noId:1782,yesId:1660,field:"msw-udf-fv-eng-dv-8",qt: "8.Diving operations have been evaluated for other potential activities, e.g. SimOps, IHE, Marine Assurance.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_DV_9_comments",noId:1783,yesId:1661,field:"msw-udf-fv-eng-dv-9",qt: "9.Communications have been agreed to and confirmed to be functioning between all parties associated with the work activities.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_DV_10_comments",noId:1784,yesId:1662,field:"msw-udf-fv-eng-dv-10",qt: "10.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"}
             ];

//de-ener ewde yes 1663 - 1671 no 1785 1793
FVQtAns[6] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWDE_1_comments",noId:1785,yesId:1663,field:"msw-udf-fv-eng-ewde-1" ,qt:"1.Electrical work is being conducted by a qualified electrical person(s).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWDE_2_comments",noId:1786,yesId:1664,field:"msw-udf-fv-eng-ewde-2",qt:"2.The electrical equipment being worked on is the equipment identified in the plan.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWDE_3_comments",noId:1787,yesId:1665,field:"msw-udf-fv-eng-ewde-3",qt:"3.Electrical work is being performed, following the site specific electrical plan/diagram, procedure, process, standard or instruction.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWDE_4_comments",noId:1788,yesId:1666,field:"msw-udf-fv-eng-ewde-4",qt: "4.Required isolation points and devices are in the proper position, secure, and verified electrically safe per work plan/diagram.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWDE_5_comments",noId:1789,yesId:1667,field:"msw-udf-fv-eng-ewde-5",qt:"5.Access to the electrical work area is restricted until it is confirmed to be de-energized to prevent unqualified/non-essential personnel from entry. ",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWDE_6_comments",noId:1790,yesId:1668,field:"msw-udf-fv-eng-ewde-6",qt:"6.Isolation points are locked / tagged and properly controlled by affected crew member or their supervisor, and inaccessible until work is completed.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWDE_7_comments",noId:1791,yesId:1669,field:"msw-udf-fv-eng-ewde-7",qt: "7.Live equipment in the adjacent area has been identified or does not exist, and hazards have been mitigated (e.g. insulating materials).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWDE_8_comments",noId:1792,yesId:1670,field:"msw-udf-fv-eng-ewde-8",qt: "8.Testing equipment and insulated tools have been inspected for damage, and are rated for the task, and function tested on a known source prior to use.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWDE_9_comments",noId:1793,yesId:1671,field:"msw-udf-fv-eng-ewde-9",qt: "9.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"},
             ];

//energized/live ewel yes 1672 - 1682 no 1794 1804
FVQtAns[7] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_1_comments",noId:1794,yesId:1672,field:"msw-udf-fv-eng-ewel-1" ,qt:"1.Electrical work is being conducted by a qualified electrical person(s).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_2_comments",noId:1795,yesId:1673,field:"msw-udf-fv-eng-ewel-2",qt:"2.Electrical work is being performed, following the site specific electrical procedure, process, standard or instruction.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_3_comments",noId:1796,yesId:1674,field:"msw-udf-fv-eng-ewel-3",qt:"3.Alternatives to complete this work de-energized have been assessed.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_4_comments",noId:1797,yesId:1675,field:"msw-udf-fv-eng-ewel-4",qt: "4.The authorized work scope and energized electrical work permit (or equivalent) has been reviewed and approved before work begins, by appropriate personnel. ",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_5_comments",noId:1798,yesId:1676,field:"msw-udf-fv-eng-ewel-5",qt:"5.Properly rated PPE for the potential arc flash and electrical voltage has been determined and is available for use by electrical person, prior to entering the limited approach boundary. ",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_6_comments",noId:1799,yesId:1677,field:"msw-udf-fv-eng-ewel-6",qt:"6.Circuit / equipment being worked on is the one identified per the diagram and/or plan (e.g. tag number, cable markings or equivalent identification).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_7_comments",noId:1800,yesId:1678,field:"msw-udf-fv-eng-ewel-7",qt: "7.Access to the electrical work area is restricted to prevent unqualified/non-essential personnel from entry. swc #4",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_8_comments",noId:1801,yesId:1679,field:"msw-udf-fv-eng-ewel-8",qt: "8.Standby person has been identified and a communication plan has been agreed to, including stop work signals. Note: If electrical equipment being worked on is less than 50 volts, or the equipment has a built-in grounding device, verify the physical ground can be visibly confirmed in lieu of a standby person.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_9_comments",noId:1802,yesId:1680,field:"msw-udf-fv-eng-ewel-9",qt: "9.Appropriate clearance distances between mobile equipment and energized electrical components are maintained (e.g. restricted/limited approach boundaries, overhead/buried power lines, etc.). ",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_10_comments",noId:1803,yesId:1681,field:"msw-udf-fv-eng-ewel-10",qt: "10.Testing equipment and insulated tools have been inspected for damage, and are rated for the task.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EWEL_11_comments",noId:1804,yesId:1682,field:"msw-udf-fv-eng-ewel-11",qt: "11.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"}
             ]; 
//entry evace yes 1690 - 1701 no 1812 1823
FVQtAns[8] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_1_comments",noId:1812,yesId:1690,field:"msw-udf-fv-eng-evace-1" ,qt:"1.Excavation has been evaluated to determine if it is a confined space.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_2_comments",noId:1813,yesId:1691,field:"msw-udf-fv-eng-evace-2",qt:"2.Underground utilities/subsurface installations have been positively identified or the area is confirmed to be clear via a reliable method (e.g. ground-penetrating radar, underground cable locators, hydro-excavation, hand-digging, accurate drawings, etc.) and are visibly marked if present.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_3_comments",noId:1814,yesId:1692,field:"msw-udf-fv-eng-evace-3",qt:"3.Isolations are either not required or isolations are in place, secure, and verified.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_4_comments",noId:1815,yesId:1693,field:"msw-udf-fv-eng-evace-4",qt: "4.Excavations deeper than 4 feet (1.2 meters) have a safe means of access and egress.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_5_comments",noId:1816,yesId:1694,field:"msw-udf-fv-eng-evace-5",qt:"5.Excavation area is barricaded to prevent unauthorized and inadvertent access by vehicles and personnel.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_6_comments",noId:1817,yesId:1695,field:"msw-udf-fv-eng-evace-6",qt:"6.Protective systems are in place as required to protect the excavation from cave-in (e.g. shoring, trenching, sloping, benching, trench boxing, shielding).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_7_comments",noId:1818,yesId:1696,field:"msw-udf-fv-eng-evace-7",qt: "7.The work crew understands when gas testing is required.  (e.g. the excavation becomes a confined space, the potential exists for hazardous atmospheric conditions, when soil contamination is suspected, liquid accumulation in the excavation is detected, and/or odors are detected.) ",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_8_comments",noId:1819,yesId:1697,field:"msw-udf-fv-eng-evace-8",qt: "8.Gas testing has either been conducted or is not required.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_9_comments",noId:1820,yesId:1698,field:"msw-udf-fv-eng-evace-9",qt: "9.A competent person has conducted and documented a daily inspection before the start of each work shift as well as when potential conditions have changed.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_10_comments",noId:1821,yesId:1699,field:"msw-udf-fv-eng-evace-10",qt: "10.An emergency rescue plan, equipment, and rescue personnel are available as determined by the hazard analysis.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_11_comments",noId:1822,yesId:1700,field:"msw-udf-fv-eng-evace-11",qt: "11.The required number of points and means of egress are in place and suitable.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACE_12_comments",noId:1823,yesId:1701,field:"msw-udf-fv-eng-evace-12",qt: "12.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"}
             ]; 
//no entry evacne yes 1684 - 1689 no 1806 1811
FVQtAns[9] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACNE_1_comments",noId:1806,yesId:1684,field:"msw-udf-fv-eng-evacne-1" ,qt:"1.Underground utilities/subsurface installations have been positively identified or the area is confirmed to be clear via a reliable method (e.g. ground-penetrating radar, underground.  cable locators, hydro-excavation, hand-digging, accurate drawings, etc.) and are visibly marked if present. ",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACNE_2_comments",noId:1807,yesId:1685,field:"msw-udf-fv-eng-evacne-2",qt:"2.Excavation equipment maintains minimum clearance from overhead obstructions. ",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACNE_3_comments",noId:1808,yesId:1686,field:"msw-udf-fv-eng-evacne-3",qt:"3.Isolations are either not required or isolations are in place, secure, and verified.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACNE_4_comments",noId:1809,yesId:1687,field:"msw-udf-fv-eng-evacne-4",qt: "4.Excavation area is barricaded to prevent unauthorized and inadvertent access by vehicles and personnel.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACNE_5_comments",noId:1810,yesId:1688,field:"msw-udf-fv-eng-evacne-5",qt:"5.Protective systems are in place as required to protect the excavation from cave-in (e.g. shoring, trenching, sloping, benching, trench boxing, shielding).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EVACNE_6_comments",noId:1811,yesId:1689,field:"msw-udf-fv-eng-evacne-6",qt:"6.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"},
             ]; 


//hw yes 1702 - 1708 no 1824 1830
FVQtAns[10] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_HW_1_comments",noId:1824,yesId:1702,field:"msw-udf-fv-eng-hw-1" ,qt:"1.The atmosphere has been initially assessed and is being monitored by a qualified gas tester and results are within acceptable limits. Note: if hot work requires IHE, fill out IHE section.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_HW_2_comments",noId:1825,yesId:1703,field:"msw-udf-fv-eng-hw-2",qt:"2.Combustible materials are absent or protected from the hot work activity area (e.g. area is saturated with water, drains are sealed, potential generated heat, slag, or sparks are contained, vapor sources are mitigated).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_HW_3_comments",noId:1826,yesId:1704,field:"msw-udf-fv-eng-hw-3",qt:"3.A fire watch is onsite monitoring conditions or work is being conducted in a designated safe hot work area or is non-open flame.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_HW_4_comments",noId:1827,yesId:1705,field:"msw-udf-fv-eng-hw-4",qt: "4.Emergency personnel, equipment, and availability are appropriate for the type of fire response that would be required in case of an emergency.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_HW_5_comments",noId:1828,yesId:1706,field:"msw-udf-fv-eng-hw-5",qt:"5.Hot work is being performed, following the site specific hot work procedure, process, standard or instruction.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_HW_6_comments",noId:1829,yesId:1707,field:"msw-udf-fv-eng-hw-6",qt:"6.System has been de-inventoried or purged to remove residual flammable/combustible materials and required isolations are in place, secure, and verified.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_HW_7_comments",noId:1830,yesId:1708,field:"msw-udf-fv-eng-hw-7",qt: "7.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"}
              ]; 
//ihe yes 1710 - 1716 no 1832 1838
FVQtAns[11] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_IHE_1_comments",noId:1832,yesId:1710,field:"msw-udf-fv-eng-ihe-1" ,qt:"1.All potential energy sources are isolated prior to conducting work. ",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_IHE_2_comments",noId:1833,yesId:1711,field:"msw-udf-fv-eng-ihe-2",qt:"2.The isolation is a simple isolation, or an isolation diagram or Equipment Specific Isolation Procedure (EIP) is used to confirm, communicate, and document the isolations.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_IHE_3_comments",noId:1834,yesId:1712,field:"msw-udf-fv-eng-ihe-3",qt:"3.IHE devices are in place, following the site specific IHE plan/procedure, process, standard or instruction. (i.e. locked, tagged, restrained, blocked-and rated for the appropriate pressure).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_IHE_4_comments",noId:1835,yesId:1713,field:"msw-udf-fv-eng-ihe-4",qt: "4.Equipment has been de-energized and tested for residual or stored energy.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_IHE_5_comments",noId:1836,yesId:1714,field:"msw-udf-fv-eng-ihe-5",qt:"5.Personnel are protected by their personal lock with exclusive control of their key, or where allowed a group lock has a clearly identified isolation owner.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_IHE_6_comments",noId:1837,yesId:1715,field:"msw-udf-fv-eng-ihe-6",qt:"6.Locks and tags used for isolations indicate the identity of the individual who applied the lock.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_IHE_7_comments",noId:1838,yesId:1716,field:"msw-udf-fv-eng-ihe-7",qt: "7.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"}
              ]; 
//lr yes 1717 - 1725 no 1839 1847
FVQtAns[12] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_LR_1_comments",noId:1839,yesId:1717,field:"msw-udf-fv-eng-lr-1" ,qt:"1.A documented/written lift plan, required for critical or non-routine lifts, is complete, utilized, and available at the worksite. (if not applicable, select yes, and put ‘routine’ in the comment box). Note: Routine lifts do not require a written lift plan.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_LR_2_comments",noId:1840,yesId:1718,field:"msw-udf-fv-eng-lr-2",qt:"2.Qualified/certified operators, riggers and signalmen are conducting the lifting and rigging work.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_LR_3_comments",noId:1841,yesId:1719,field:"msw-udf-fv-eng-lr-3",qt:"3.Load weight is within the range of the equipment’s safe working limit and load chart for the crane operated is present on the crane for review.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_LR_4_comments",noId:1842,yesId:1720,field:"msw-udf-fv-eng-lr-4",qt: "4.Lifting and rigging equipment has been inspected prior to use, found adequate/rated for lift (e.g. certified, non-modified), and results are documented.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_LR_5_comments",noId:1843,yesId:1721,field:"msw-udf-fv-eng-lr-5",qt:"5.Communication plan is agreed by all workers involved (e.g. emergency stop, hand/radio signal agreement, load shifts, lift path, dropped objects, exclusion zones, etc.) ",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_LR_6_comments",noId:1844,yesId:1722,field:"msw-udf-fv-eng-lr-6",qt:"6.Plan is in place to prevent and mitigate the following potential scenarios: Load shifts, dropped objects, load path obstruction, overhead obstructions, working under suspended loads.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_LR_7_comments",noId:1845,yesId:1723,field:"msw-udf-fv-eng-lr-7",qt: "7.Pick up and lay down zones are established, visible and free of obstructions, debris, and non-essential personnel.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_LR_8_comments",noId:1846,yesId:1724,field:"msw-udf-fv-eng-lr-8",qt:"8.Minimum clearance distances from obstructions are understood (e.g. power lines, pipe racks, structures, equipment, etc.) and maintained or there are no obstructions in the area.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_LR_9_comments",noId:1847,yesId:1725,field:"msw-udf-fv-eng-lr-9",qt: "9.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"}
              ]; 
//other
FVQtAns[13] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_OTHER_comments",noId:"",yesId:"",field:"MSW_VV_SCOREID" ,qt:"Other Specialized Activity/Local V&V Comments",ans:"none"},
              ]; 
//pgd yes 1726 - 1731 no 1848 1853
FVQtAns[14] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PGD_1_comments",noId:1848,yesId:1726,field:"msw-udf-fv-eng-pgd-1" ,qt:"1.All gas testing is performed by a qualified gas tester who understands BU specific atmospheric limits (i.e., LEL, O2, CO, H2S). ",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PGD_2_comments",noId:1849,yesId:1727,field:"msw-udf-fv-eng-pgd-2",qt:"2.Portable gas detection equipment has been verified for accuracy using a functional/bump test per manufacturer/BU expectations prior to starting work.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PGD_3_comments",noId:1850,yesId:1728,field:"msw-udf-fv-eng-pgd-3",qt:"3.Initial gas testing has been conducted and results are documented and within acceptable limits prior to starting work.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PGD_4_comments",noId:1851,yesId:1729,field:"msw-udf-fv-eng-pgd-4",qt: "4.Follow-up gas testing frequency (e.g., initial only, periodic, continuous) has been determined established and results are documented per permit or procedure expectation. - hot work.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PGD_5_comments",noId:1852,yesId:1730,field:"msw-udf-fv-eng-pgd-5",qt:"5.Gas testing is conducted in a manner that would adequately detect potential hazardous atmospheres (sample locations, amount of time at location, etc.) or qualified gas tester is able to describe how the gas testing was conducted for the task.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PGD_6_comments",noId:1853,yesId:1731,field:"msw-udf-fv-eng-pgd-6",qt:"6.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"},
              ]; 
//vto yes 1740 - 1745 no 1862 1867
FVQtAns[15] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_VTO_1_comments",noId:1862,yesId:1740,field:"msw-udf-fv-eng-vto-1" ,qt:"1.Vacuum truck transfer is utilizing practices to reduce static accumulation (e.g., reduced rate until fill line covered, transfer to bottom only/no splash loading, submersed hose end).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_VTO_2_comments",noId:1863,yesId:1741,field:"msw-udf-fv-eng-vto-2",qt:"2.Conductive hoses and bonding/grounding clamps with hardened steel point(s) are being used.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_VTO_3_comments",noId:1864,yesId:1742,field:"msw-udf-fv-eng-vto-3",qt:"3.All equipment, including connectors, have been inspected for deficiencies prior to use.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_VTO_4_comments",noId:1865,yesId:1743,field:"msw-udf-fv-eng-vto-4",qt:"4.Vacuum truck is grounded to an approved, verified ground point.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_VTO_5_comments",noId:1866,yesId:1744,field:"msw-udf-fv-eng-vto-5",qt:"5.Vacuum truck connections (e.g. collection containers and exhaust scrubbers , etc.) are properly bonded to source and conductivity path through truck to ground point tested and verified.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_VTO_6_comments",noId:1867,yesId:1745,field:"msw-udf-fv-eng-vto-6",qt:"6.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"},
              ]; 

//work at height wah yes 1732 - 1739 no 1854 1861
FVQtAns[16] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_WAH_1_comments",noId:1854,yesId:1732,field:"msw-udf-fv-eng-wah-1" ,qt:"1.Fall protection equipment is configured (anchor point w/SRL or lanyard) to prevent the wearer from free-falling, as per specific local regulatory requirements, and from hitting the ground in the event of a fall.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_WAH_2_comments",noId:1855,yesId:1733,field:"msw-udf-fv-eng-wah-2",qt:"2.A documented rescue plan, including identified resources (e.g. rescue team, standby attendant and equipment), is in place and communicated to the work crew or fall restraint is in use.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_WAH_3_comments",noId:1856,yesId:1734,field:"msw-udf-fv-eng-wah-3",qt:"3.Personnel working at height are appropriately wearing fall protection (e.g., restraint, arrest, properly fitted harness, self-retracting lanyard, or shock absorbing lanyard).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_WAH_4_comments",noId:1857,yesId:1735,field:"msw-udf-fv-eng-wah-4",qt:"4.Personnel working at height are 100% tied off, or fall prevention is in place (e.g., guardrails, toe boards, safety nets, etc.).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_WAH_5_comments",noId:1858,yesId:1736,field:"msw-udf-fv-eng-wah-5",qt:"5.Workers have inspected their fall protection gear prior to use.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_WAH_6_comments",noId:1859,yesId:1737,field:"msw-udf-fv-eng-wah-6",qt:"6.Minimum clearance distances from hazards are maintained (e.g., overhead powerlines, uninsulated product lines, etc.).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_WAH_7_comments",noId:1860,yesId:1738,field:"msw-udf-fv-eng-wah-7",qt:"7.All tools/equipment being used are properly secured with lanyards or similar devices to prevent dropped objects or area is appropriately barricaded.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_WAH_8_comments",noId:1861,yesId:1739,field:"msw-udf-fv-eng-wah-8",qt:"8.Workers are conducting their work according to industry and/or Chevron required practices and (where required) can present valid training certifications/qualification cards/credentials.",ans:"none"},
              ]; 


/*
FVQtAns[0] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_1_comments",noId:282,yesId:187,field:"msw-udf-fv-eng-jsa-1" ,qt:"1.All steps associated with the work task were identified and documented.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_2_comments",noId:283,yesId:188,field:"msw-udf-fv-eng-jsa-2",qt:"2.Hazards associated with each task step were documented.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_3_comments",noId:284,yesId:189,field:"msw-udf-fv-eng-jsa-3",qt:"3.Each mitigation was documented.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_4_comments",noId:285,yesId:190,field:"msw-udf-fv-eng-jsa-4",qt: "4.Hazards & mitigations were identified based on consequence potential (i.e. with the potential to cause serious injury or fatality death) and documented.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_5_comments",noId:286,yesId:191,field:"msw-udf-fv-eng-jsa-5",qt:"5.Hazards & mitigations identified were appropriate for the work task.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_6_comments",noId:287,yesId:192,field:"msw-udf-fv-eng-jsa-6",qt:"6.Each mitigation was verified and individually documented on the JSA prior to starting work.	",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_7_comments",noId:288,yesId:193,field:"msw-udf-fv-eng-jsa-7",qt: "7.Stop work situations were discussed with the work crew.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_8_comments",noId:289,yesId:194,field:"msw-udf-fv-eng-jsa-8",qt: "8.Workers are knowledgeable and confident to conduct the work?",ans:"none"},
             {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_JSA_9_comments",noId:290,yesId:195,field:"msw-udf-fv-eng-jsa-9",qt: "9.Actions to take if conditions change or unplanned events occur (e.g. stop and seek assistance)",ans:"none"}
             ];

FVQtAns[1] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_1_comments",noId:291,yesId:196,field:"msw-udf-fv-eng-ssem-1",qt:"1.Did work crew contain SSEs? (If ‘no’, skip questions 2-7).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_2_comments",noId:292,yesId:197,field:"msw-udf-fv-eng-ssem-2",qt:"2.Was a SSE Risk Reduction Plan in place? (If ‘yes’, skip questions 3-7.).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_3_comments",noId:293,yesId:198,field:"msw-udf-fv-eng-ssem-3",qt:"3.SSEs were visibly identifiable.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_4a_comments",noId:294,yesId:199,field:"msw-udf-fv-eng-ssem-4a",qt:"4A.Was crew size less than 5 workers? (If ‘no’, skip question 4B.)",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_4b_comments",noId:295,yesId:200,field:"msw-udf-fv-eng-ssem-4b",qt:"4B.Crew does not contain more than 1 SSE or is working under approved variance.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_5a_comments",noId:296,yesId:201,field:"msw-udf-fv-eng-ssem-5a",qt:"5A.Was crew size in excess of 5 workers? (If ‘no’, skip question 5B.)",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_5b_comments",noId:297,yesId:202,field:"msw-udf-fv-eng-ssem-5b",qt:"5B.Crew does not contain more than 20% SSEs or is working under an approved variance.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_6_comments",noId:298,yesId:203,field:"msw-udf-fv-eng-ssem-6",qt:"6.SSEs were assigned mentors.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_SSEM_7_comments",noId:299,yesId:204,field:"msw-udf-fv-eng-ssem-7",qt:"7.Mentors were on site.",ans:"none"}];

FVQtAns[2] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EM_1_comments",noId:300,yesId:205,field:"udf-MSW_UDF_FV_EM_1",qt:"1.Knowledgeable about facility alarms and muster points.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_EM_2_comments",noId:301,yesId:206,field:"udf-MSW_UDF_FV_EM_2",qt:"2.Able to explain emergency evacuation procedures.",ans:"none"}
             ];

FVQtAns[3] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PTW_1_comments",noId:302,yesId:207,field:"msw-udf-fv-eng-ptw-1",qt:"1.Permits were authorized by a qualified Permit Approver.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PTW_2_comments",noId:303,yesId:208,field:"msw-udf-fv-eng-ptw-2",qt:"2.The task scope was defined on the work permit (and on any specialty permits/certificates).",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PTW_3_comments",noId:304,yesId:209,field:"msw-udf-fv-eng-ptw-3",qt:"3.The work conditions under which the permit is valid were discussed and understood by the work crew.",ans:"none"},
              {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"MSW_UDF_FV_PTW_4_comments",noId:305,yesId:210,field:"msw-udf-fv-eng-ptw-4",qt:"4.A competent individual was designated responsibility to monitor and verify work is performed safely and is consistent with the permit conditions.",ans:"none"}
             ];


             */