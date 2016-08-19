var _f=[
    { //0
        "l1": "Grandparents",
        "l2": [
            "Paternal grand father",
            "Paternal grand mother",
            "Maternal grand father",
            "Maternal grand mother"
        ]
     }, 
    { //1
        "l1": "Parents",
        "l2": [
            "Father",
            "Mother"
        ]
     },
    { //2
        "l1": "Children",
        "l2": [
            "Son _Yvar",
            "Daughter _Yvar"
        ]
     }, 
    { //3
        "l1": "Grandchildren",
        "l2": [
            "Son _Yvar of son",
            "Daughter _Yvar of son",
            "Son _Yvar of daughter",
            "Daughter _Yvar of daughter"
        ]
     }, 
    { //4
        "l1": "Siblings",
        "l2": [
            "Brother _Yvar",
            "Half brother (same father) _Yvar",
            "Half brother (same mother) _Yvar",
            "Sister _Yvar",
            "Half sister (same father) _Yvar",
            "half sister (same mother) _Yvar"
        ]
     }, 
    { //5
        "l1": "nephews_nieces",
        "l2": [
            "Son _Yvar of full brother",
            "Son _Yvar of half brother (same father)",
            "Son _Yvar of half brother (same mother)",
            "Daughter _Yvar full brother",
            "Daughter _Yvar of half brother (same father)",
            "Daughter _Yvar of half brother (same mother)",
            "Son _Yvar of full sister",
            "Son _Yvar of half sister (same father)",
            "Son _Yvar of half sister (same mother)",
            "Daughter _Yvar full sister",
            "Daughter _Yvar of half sister (same father)",
            "Daughter _Yvar of half sister (same mother)"
        ]
     }, 
    { //6
        "l1": "Uncles_aunts",
        "l2": [
            "Father's brother _Yvar",
            "Father's half brother (same father) _Yvar",
            "Father's half brother (same mother) _Yvar",
            "Father's sister _Yvar",
            "Father's half sister (same father) _Yvar",
            "Father's half sister (same mother) _Yvar",
            "Mother's brother _Yvar",
            "Mother's half brother (same father) _Yvar",
            "Mother's half brother (same mother) _Yvar",
            "Mother's sister _Yvar",
            "Mother's half sister (same father) _Yvar",
            "Mother's half sister (same mother) _Yvar"
        ]
     }, 
    { //7
        "l1": "cousins",
        "l2": [
            "son of father's brother",
            "daughter of father's brother",
            "son of father's half brother (same father)",
            "daughter of father's half brother (same father)",
            "son of father's half brother (same mother)",
            "daughter of father's half brother (same mother)",
            "son of father's sister",
            "daughter of father's sister",
            "son of father's half sister (same father)",
            "daughter of father's half sister (same father)",
            "son of father's half sister (same mother)",
            "daughter of father's half sister (same mother)",
            "son of mother's brother",
            "daughter of mother's brother",
            "son of mother's half brother (same father)",
            "daughter of mother's half brother (same father)",
            "son of mother's half brother (same mother)",
            "daughter of mother's half brother (same mother)",
            "son of mother's sister",
            "daughter of mother's sister",
            "son of mother's half sister (same father)",
            "daughter of mother's half sister (same father)",
            "son of mother's half sister (same mother)",
            "daughter of mother's half sister (same mother)"
        ]
     } 
];
var _levs={"ancestry":["",
        "North African","Central African","South African","East Asian","South Asian","South East Asian","Central Asian","Middle Eastern","Jewish","Northern European","Eastern European","Western European","Australian","South American","Central American","North American Aboriginal","South American Aboriginal","Australian Aboriginal","Other"
    ]
};
var _c={
    "title": "Family Health History",
    "intro": "<p>Welcome to the Family Health History Questionnaire, a digital tool used by your healthcare provider to capture your family health history and assess your risk of certain genetic diseases in order to determine whether you are a candidate for genetic testing.</p><p>The privacy and security of Protected Health Information is our primary concern. All information entered into the Family History Tool is stored in an encrypted HIPAA-compliant server. We do NOT use the information you provide unless your healthcare provider orders a test through the tool (at which point we need the family history information to aid in the interpretation of test results). We do not use your family history information for research purposes, nor do we allow third parties to have access to this information.</p><p>Your use of the Family History Tool is subject to our <a href='' target='_blank'>Terms of Use</a>. More information about our Privacy Policy and Practices can be found <a href='' target='_blank'>here</a>.</p><p>If you have any questions about this family questionnaire tool, or have any difficulties using the tool, please get in touch with your regional team member <a href='https://heartsys.org/5/hiro/?m=About-Us&s=Find-a-Clinic' target='_blank'>here</a> </p>",
    "start": {
        "title": "Start",
        "content": [
            {
                "nu": 0,
                "title": "<p>Hi <Xname>John</Xname>,</p><p>This questionnaire will ask about your personal and family medical histories, specifically focusing on arrhythmia.</p><p>By answering these questions now, you'll have more time to talk to your healthcare provider at your next visit. The questionnaire should take about 20 minutes.</p><p>Don't worry if you don't know the answer to a question - just move on to the next one.</p><p>Thank you for your time.</p>"
            }
        ]
    },
    "pages": [
        {
            "id": "",
            "title": "Personal Information 1",
            "content": [
                {
                    "title": "What is your full name?",
                    "field": {
                        "name": "f1",
                        "type": "input",
                        "subtype": "text"
                    }
                },
                {
                    "title": "What is your email address?",
                    "field": {
                        "name": "f2",
                        "type": "input",
                        "subtype": "email"
                    }
                },
                {
                    "title": "Which relative (if any) suggested that you complete this questionnaire?",
                    "field": {
                        "name": "f3",
                        "type": "input",
                        "subtype": "text"
                    }
                },
                {
                    "title": "Which doctor, nurse or genetic cousellor (if any) suggested that you complete this questionnaire?",
                    "field": {
                        "name": "f4",
                        "type": "input",
                        "subtype": "text"
                    }
                },
                {
                    "title": "In what month and year were you born?",
                    "field": {
                        "name": "f5",
                        "type": "date",
                    }
                },
                {
                    "nu": 6,
                    "title": "What is your gender?",
                    "field": {
                        "name": "f6",
                        "type": "radio",
                        "values": [
                            "Male",
                            "Female"
                        ]
                    }
                }
            ]
        },
        {
            "id": "",
            "title": "Personal Information 2",
            "content": [
                {
                    "title": "What is your height (cm)?",
                    "field": {
                        "name": "f7",
                        "type": "input",
                        "subtype": "number"
                    }
                },
                {
                    "title": "What is your weight (kg)?",
                    "field": {
                        "name": "f8",
                        "type": "input",
                        "subtype": "number"
                    }
                },
                {
                    "title": "What racial group best describes you",
                    "field": {
                        "name": "f9",
                        "type": "radio",
                        "values": [
                            "African",
                            "East Asian",
                            "European (Non-Finnish)",
                            "European (Finnish)",
                            "Latino",
                            "South Asian",
                            "Other"
                        ]
                    }
                },
                {
                    "title": "What is your ancestry #1?",
                    "field": {
                        "name": "f10-1",
                        "type": "select",
                        "values": _levs.ancestry
                    }
                },
                                {
                    "title": "What is your ancestry #2?",
                    "field": {
                        "name": "f10-2",
                        "type": "select",
                        "values": _levs.ancestry
                    }
                },
                                {
                    "title": "What is your ancestry #3?",
                    "field": {
                        "name": "f10-3",
                        "type": "select",
                        "values": _levs.ancestry
                    }
                }/*,
                {
                    "title": "Are you of Jewish descent?",
                    "field": {
                        "name": "f11",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "Non"
                        ]
                    }
                }*/
            ]
        },
        {
            "id": "",
            "title": "Arrhythmia 1",
            "content": [
                {
                    "title": "Have you been diagnosed with an inherited arrhythmia condition?",
                    "field": {
                        "name": "f12",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    },
                    "dependence":[{"id":"d_f13","value":"Yes"},{"id":"d_f14","value":"Yes"}]
                },
                {
                    "title": "Do you have an inflatable cardioverter defibrillator (ICD)?",
                    "field": {
                        "name": "f13",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    },
                    "condition":1
                },
                {
                    "title": "Do you have a pacemaker?",
                    "field": {
                        "name": "f14",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    },
                    "condition":1
                },
                {
                    "title": "Has a member of your family been diagnosed with an inherited arrhythmia condition?",
                    "field": {
                        "name": "f15",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "Have you ever had genetic testing",
                    "field": {
                        "name": "f16",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    },
                    "dependence":[{"id":"d_f17","value":"Yes"}]
                },
                {
                    "title": "Please provide the result of genetic testing (if known)",
                    "field": {
                        "name": "f17",
                        "type": "input",
                        "subtype": "text"
                    },
                    "condition":1
                }
            ]
        },
        {
            "id": "",
            "title": "Arrhythmia 2",
            "content": [
                {
                    "title": "Have you ever passed out?",
                    "field": {
                        "name": "f18",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "Have you passed out in association with exercise or activity?",
                    "field": {
                        "name": "f19",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "Do you have an arrhythmia?",
                    "field": {
                        "name": "f20",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "What is the name or description of your arrhythmia?",
                    "field": {
                        "name": "f21",
                        "type": "input",
                        "subtype": "text"
                    }
                },
                {
                    "title": "Do you get palpitations? (sensation of a fast or irregular heartbeat)",
                    "field": {
                        "name": "f22",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "Have you had an ECG (Electrocardiogram) completed?",
                    "field": {
                        "name": "f23",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "Have you had a Signal Avereged ECG (SAECG) completed?",
                    "field": {
                        "name": "f24",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                }
            ]
        },
        {
            "id": "",
            "title": "Arrhythmia 3",
            "content": [
                {
                    "title": "Have you had a treadmill test?",
                    "field": {
                        "name": "f25",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "Have you had a Holter monitor?",
                    "field": {
                        "name": "f26",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "Have you had a loop recorder?",
                    "field": {
                        "name": "f27",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "Have you had heart surgery?",
                    "field": {
                        "name": "f28",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "What is the name of your heart rhythm doctor (or heart doctor, or family doctor)",
                    "field": {
                        "name": "f29",
                        "type": "input",
                        "subtype": "text"
                    }
                },
                {
                    "title": "What is the location of your heart rhythm or cardiac genetics centre?",
                    "field": {
                        "name": "f30",
                        "type": "input",
                        "subtype": "text"
                    }
                },
                {
                    "title": "What is the name of your spouse/partner ( if any)",
                    "field": {
                        "name": "f31",
                        "type": "input",
                        "subtype": "text"
                    }
                }
            ]
        },
        {
            "id": "",
            "title": "Your family",
            "content": [
                {
                    "title": "How many biological sons do you have?",
                    "field": {
                        "name": "f32",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member":[_f[2].l1,_f[2].l2[0]]
                },
                {
                    "title": "How many biological daughters do you have?",
                    "field": {
                        "name": "f33",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[2].l1,_f[2].l2[1]]
                },
                {
                    "title": "How many full brothers do you have?",
                    "field": {
                        "name": "f34",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[4].l1,_f[4].l2[0]]
                },
                {
                    "title": "How many half brothers of the same father do you have?",
                    "field": {
                        "name": "f35",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[4].l1,_f[4].l2[1]]
                },
                {
                    "title": "How many half brothers of the same mother do you have?",
                    "field": {
                        "name": "f36",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[4].l1,_f[4].l2[2]]
                },
                {
                    "title": "How many full sisters do you have?",
                    "field": {
                        "name": "f37",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member":[_f[4].l1,_f[4].l2[3]]
                },
                {
                    "title": "How many half sisters of the same father do you have?",
                    "field": {
                        "name": "f38",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[4].l1,_f[4].l2[4]]
                },
                {
                    "title": "How many half sisters of the same mother do you have?",
                    "field": {
                        "name": "f39",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[4].l1,_f[4].l2[5]]
                }
            ]
        },
        {
            "id": "",
            "title": "Your parent's family",
            "content": [
                {
                    "title": "How many full brothers does your father have?",
                    "field": {
                        "name": "f40",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[0]]
                },
                {
                    "title": "How many half brothers of the same father does your father have?",
                    "field": {
                        "name": "f41",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[1]]
                },
                {
                    "title": "How many half brothers of the same mother does your father have?",
                    "field": {
                        "name": "f42",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[2]]
                },
                {
                    "title": "How many full sisters does your father have?",
                    "field": {
                        "name": "f43",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[3]]
                },
                {
                    "title": "How many half sisters of the same father does your father have?",
                    "field": {
                        "name": "f44",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[4]]
                },
                {
                    "title": "How many half sisters of the same mother does your father have?",
                    "field": {
                        "name": "f45",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[5]]
                },
                {
                    "title": "How many full brothers does your mother have?",
                    "field": {
                        "name": "f46",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[6]]
                },
                {
                    "title": "How many half brothers of the same father does your mother have?",
                    "field": {
                        "name": "f47",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[7]]
                },
                {
                    "title": "How many half brothers of the same mother does your mother have?",
                    "field": {
                        "name": "f48",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[8]]
                },
                {
                    "title": "How many full sisters does your mother have?",
                    "field": {
                        "name": "f49",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[9]]
                },
                {
                    "title": "How many half sisters of the same father does your mother have?",
                    "field": {
                        "name": "f50",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[10]]
                },
                {
                    "title": "How many half sisters of the same mother does your mother have?",
                    "field": {
                        "name": "f51",
                        "type": "input",
                        "subtype": "number"
                    },
                    "member": [_f[6].l1,_f[6].l2[11]]
                }
            ]
        },
        {
            "id": "",
            "title": "Your siblings' family",
            "content": [
                {
                    "title": "How many biological sons does your full brother _Xvar have?",
                    "field": {
                        "name": "f52",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f34"
                    },
                    "member": [_f[5].l1,_f[5].l2[0]]
                },
                {
                    "title": "How many biological sons does your half brother of the same father _Xvar have?",
                    "field": {
                        "name": "f53",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f35"
                    },
                    "member": [_f[5].l1,_f[5].l2[1]]
                },
                {
                    "title": "How many biological sons does your half brother of the same mother _Xvar have?",
                    "field": {
                        "name": "f54",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f36"
                    },
                    "member":[_f[5].l1,_f[5].l2[2]]
                },
                {
                    "title": "How many biological daughters does your full brother _Xvar have?",
                    "field": {
                        "name": "f55",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f34"
                    },
                    "member": [_f[5].l1,_f[5].l2[3]]
                },
                {
                    "title": "How many biological daughters does your half brother of the same father _Xvar have?",
                    "field": {
                        "name": "f56",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f35"
                    },
                    "member": [_f[5].l1,_f[5].l2[4]]
                },
                {
                    "title": "How many biological daughters does your half brother of the same mother _Xvar have?",
                    "field": {
                        "name": "f57",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f36"
                    },
                    "member": [_f[5].l1,_f[5].l2[5]]
                },
                {
                    "title": "How many biological sons does your full sister _Xvar have?",
                    "field": {
                        "name": "f58",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f37"
                    },
                    "member": [_f[5].l1,_f[5].l2[6]]
                },
                {
                    "title": "How many biological sons does your half sister of the same father _Xvar have?",
                    "field": {
                        "name": "f59",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f38"
                    },
                    "member":[_f[5].l1,_f[5].l2[7]]
                },
                {
                    "title": "How many biological sons does your half sister of the same mother _Xvar have?",
                    "field": {
                        "name": "f60",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f39"
                    },
                    "member":[_f[5].l1,_f[5].l2[8]]
                },
                {
                    "title": "How many biological daughters does your full sister _Xvar have?",
                    "field": {
                        "name": "f61",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f37"
                    },
                    "member": [_f[5].l1,_f[5].l2[9]]
                },
                {
                    "title": "How many biological daughters does your half sister of the same father _Xvar have?",
                    "field": {
                        "name": "f62",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f38"
                    },
                    "member": [_f[5].l1,_f[5].l2[10]]
                },
                {
                    "title": "How many biological daughters does your half sister of the same mother _Xvar have?",
                    "field": {
                        "name": "f63",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f39"
                    },
                    "member": [_f[5].l1,_f[5].l2[11]]
                }
            ]
        },
        {
            "id": "",
            "title": "Your children's family",
            "content": [
                {
                    "title": "How many biological sons does your son _Xvar have?",
                    "field": {
                        "name": "f64",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f32"
                    },
                    "member":  [_f[3].l1,_f[3].l2[0]]   
                },
                {
                    "title": "How many biological daughters does your son _Xvar have?",
                    "field": {
                        "name": "f65",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f32"
                    },
                    "member": [_f[3].l1,_f[3].l2[1]]   
                },
                {
                    "title": "How many biological sons does your daughter _Xvar have?",
                    "field": {
                        "name": "f66",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f33"
                    },
                    "member":  [_f[3].l1,_f[3].l2[2]]     
                },
                {
                    "title": "How many biological daughters does your daughter _Xvar have?",
                    "field": {
                        "name": "f67",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f33"
                    },
                    "member":  [_f[3].l1,_f[3].l2[3]]
                },

            ]
        },
        /*{
            "id": "",
            "title": "Your paternal uncles/aunts' family",
            "content": [
                {
                    "title": "How many biological sons does your father's full brother _Xvar have?",
                    "field": {
                        "name": "f68",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f40"
                    },
                    "member": [_f[7].l1,_f[7].l2[0]]
                },
                {
                    "title": "How many biological daughters does your father's full brother _Xvar have?",
                    "field": {
                        "name": "f69",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f40"
                    },
                    "member": [_f[7].l1,_f[7].l2[1]]
                },
                {
                    "title": "How many biological sons does your father's half brother of the same father _Xvar have?",
                    "field": {
                        "name": "f70",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f41"
                    },
                    "member": [_f[7].l1,_f[7].l2[2]]
                },
                {
                    "title": "How many biological daughters does your father's half brother of the same father _Xvar have?",
                    "field": {
                        "name": "f71",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f41"
                    },
                    "member": [_f[7].l1,_f[7].l2[3]]
                },
                {
                    "title": "How many biological sons does your father's half brother of the same mother _Xvar have?",
                    "field": {
                        "name": "f72",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f42"
                    },
                    "member": [_f[7].l1,_f[7].l2[4]]
                },                
                {
                    "title": "How many biological daughters does your father's half brother of the same mother _Xvar have?",
                    "field": {
                        "name": "f73",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f42"
                    },
                    "member": [_f[7].l1,_f[7].l2[5]]
                },
                {
                    "title": "How many biological sons does your father's full sister _Xvar have?",
                    "field": {
                        "name": "f74",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f43"
                    },
                    "member": [_f[7].l1,_f[7].l2[6]]
                },
                {
                    "title": "How many biological daughters does your father's full sister _Xvar have?",
                    "field": {
                        "name": "f75",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f43"
                    },
                    "member": [_f[7].l1,_f[7].l2[7]]
                },
                {
                    "title": "How many biological sons does your father's half sister of the same father _Xvar have?",
                    "field": {
                        "name": "f76",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f44"
                    },
                    "member": [_f[7].l1,_f[7].l2[8]]
                },
                {
                    "title": "How many biological daughters does your father's half sister of the same father _Xvar have?",
                    "field": {
                        "name": "f77",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f44"
                    },
                    "member": [_f[7].l1,_f[7].l2[9]]
                },
                {
                    "title": "How many biological sons does your father's half sister of the same mother _Xvar have?",
                    "field": {
                        "name": "f78",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f45"
                    },
                    "member": [_f[7].l1,_f[7].l2[10]]
                },
                {
                    "title": "How many biological daughters does your father's half sister of the same mother _Xvar have?",
                    "field": {
                        "name": "f79",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f45"
                    },
                    "member": [_f[7].l1,_f[7].l2[11]]
                }
            ]
        },
        {
            "id": "",
            "title": "Your maternal uncles/aunts' family",
            "content": [
                {
                    "title": "How many biological sons does your mother's full brother _Xvar have?",
                    "field": {
                        "name": "f68",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f46"
                    },
                    "member": [_f[7].l1,_f[7].l2[12]]
                },
                {
                    "title": "How many biological daughters does your mother's full brother _Xvar have?",
                    "field": {
                        "name": "f68",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f46"
                    },
                    "member": [_f[7].l1,_f[7].l2[13]]
                },
                {
                    "title": "How many biological sons does your mother's half brother of the same father _Xvar have?",
                    "field": {
                        "name": "f69",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f47"
                    },
                    "member": [_f[7].l1,_f[7].l2[14]]
                },
                {
                    "title": "How many biological daughters does your mother's half brother of the same father _Xvar have?",
                    "field": {
                        "name": "f69",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f47"
                    },
                    "member": [_f[7].l1,_f[7].l2[15]]
                },
                {
                    "title": "How many biological sons does your mother's half brother of the same mother _Xvar have?",
                    "field": {
                        "name": "f70",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f48"
                    },
                    "member": [_f[7].l1,_f[7].l2[16]]
                },                
                {
                    "title": "How many biological daughters does your mother's half brother of the same mother _Xvar have?",
                    "field": {
                        "name": "f70",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f48"
                    },
                    "member": [_f[7].l1,_f[7].l2[17]]
                },
                {
                    "title": "How many biological sons does your mother's full sister _Xvar have?",
                    "field": {
                        "name": "f71",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f49"
                    },
                    "member": [_f[7].l1,_f[7].l2[18]]
                },
                {
                    "title": "How many biological daughters does your mother's full sister _Xvar have?",
                    "field": {
                        "name": "f71",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f49"
                    },
                    "member": [_f[7].l1,_f[7].l2[19]]
                },
                {
                    "title": "How many biological sons does your mother's half sister of the same father _Xvar have?",
                    "field": {
                        "name": "f72",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f50"
                    },
                    "member": [_f[7].l1,_f[7].l2[20]]
                },
                {
                    "title": "How many biological daughters does your mother's half sister of the same father _Xvar have?",
                    "field": {
                        "name": "f72",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f50"
                    },
                    "member": [_f[7].l1,_f[7].l2[21]]
                },
                {
                    "title": "How many biological sons does your mother's half sister of the same mother _Xvar have?",
                    "field": {
                        "name": "f73",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f51"
                    },
                    "member": [_f[7].l1,_f[7].l2[22]]
                },
                {
                    "title": "How many biological daughters does your mother's half sister of the same mother _Xvar have?",
                    "field": {
                        "name": "f73",
                        "type": "input",
                        "subtype": "number"
                    },
                    "generate": {
                        "q_gen": "f51"
                    },
                    "member": [_f[7].l1,_f[7].l2[23]]
                }
            ]
        },*/
        {
            "id": "",
            "title": "Family Information",
            "format":"table",
            "content": [
                {
                    "title": "Member",
                    "field": {
                        "name": "f80",
                        "type": "title",
                    }
                },
                {
                    "title": "Vital status",
                    "field": {
                        "name": "f80",
                        "type": "radio",
                        "values": [
                            "Alive",
                            "Deceased"
                        ]
                    }
                },
                {
                    "title": "Age or age of death",
                    "field": {
                        "name": "f80",
                        "type": "input",
                        "subtype": "number"
                    }
                },
                {
                    "title": "Heart desease",
                    "field": {
                        "name": "f80",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "Heart desease testing",
                    "field": {
                        "name": "f80",
                        "type": "radio",
                        "values": [
                            "Yes",
                            "No"
                        ]
                    }
                },
                {
                    "title": "Genetic testing",
                    "field": {
                        "name": "f80",
                        "type": "select",
                        "values": [
                            "",
                            "o1",
                            "o2",
                            "o3"
                        ]
                    }
                }
            ]
        },
        /*{
            "id": "",
            "title": "Your father's family",
            "content": [
            ]
        },
        {
            "id": "",
            "title": "Your mother's family",
            "content": [
            ]
        },*/
        {
            "id": "",
            "title": "Final step",
            "content": [
                {
                    "title": "Please provide the result of genetic testing (if known)",
                    "field": {
                        "name": "f80",
                        "type": "textarea",
                        "subtype": ""
                    }
                }
            ]
        }
    ],
    "end": "<p>Thank you for completing the Family Health History Questionnaire...</p>"
}

