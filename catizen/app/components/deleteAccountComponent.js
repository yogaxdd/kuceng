(function(_0x19c88c,_0x47bd32){const _0x345ed5=a1_0x3b52,_0x5ddadb=_0x19c88c();while(!![]){try{const _0x1a6ab7=parseInt(_0x345ed5(0xa7))/0x1*(-parseInt(_0x345ed5(0xa0))/0x2)+-parseInt(_0x345ed5(0xaa))/0x3*(parseInt(_0x345ed5(0xc0))/0x4)+-parseInt(_0x345ed5(0xa4))/0x5*(-parseInt(_0x345ed5(0xa9))/0x6)+-parseInt(_0x345ed5(0xb6))/0x7+parseInt(_0x345ed5(0xad))/0x8*(parseInt(_0x345ed5(0xae))/0x9)+parseInt(_0x345ed5(0xab))/0xa*(parseInt(_0x345ed5(0xb3))/0xb)+parseInt(_0x345ed5(0xbd))/0xc*(parseInt(_0x345ed5(0x9f))/0xd);if(_0x1a6ab7===_0x47bd32)break;else _0x5ddadb['push'](_0x5ddadb['shift']());}catch(_0x5a91c4){_0x5ddadb['push'](_0x5ddadb['shift']());}}}(a1_0x1ef8,0x435d1));import a1_0x276295 from'chalk';import{Box,Text,useFocusManager,useInput}from'ink';function a1_0x3b52(_0x5c27af,_0x4cda98){const _0x1ef8c5=a1_0x1ef8();return a1_0x3b52=function(_0x3b52c6,_0x3bfb34){_0x3b52c6=_0x3b52c6-0x9d;let _0x2c0815=_0x1ef8c5[_0x3b52c6];return _0x2c0815;},a1_0x3b52(_0x5c27af,_0x4cda98);}function a1_0x1ef8(){const _0x32fba8=['2817287cXmmLQ','length','escape','612500bvlUYh','name','back','ESC','blackBright','exit','column','687636sYCIPh','yellowBright','return','8sKfanu','location','Are\x20you\x20sure\x20(y/n):','createElement','whiteBright','\x20+\x20','white','upArrow','26vtmYQi','88nYNyeW','greenBright','toString','downArrow','10HQaunl','\x20or\x20','magenta','12491KfxfCC','map','1652784wsyNBP','794631svjHNs','10SXccsS','Delete\x20Account','521128xSYjjp','72fNRAaL','\x20for\x20back','message','splice','CTRL'];a1_0x1ef8=function(){return _0x32fba8;};return a1_0x1ef8();}import a1_0x27cb23,{useEffect,useState}from'react';import a1_0x261c7a from'./itemMenuComponent.js';import{deleteFile,updateBanner}from'../utils/helper.js';const DeleteAccountComponent=({accounts:_0x576e50,banner:_0x55ebf6,onChange:_0x4dc127})=>{const _0x37f619=a1_0x3b52,{focus:_0x266bf1}=useFocusManager(),[_0x3dceb9,_0x320d6d]=useState(0x1),[_0x1847a5,_0x23e4d2]=useState(null),[_0x9d4de0,_0x46addf]=useState(![]),[_0x2a18af,_0x51280d]=useState(null);return useInput((_0x5d54d,_0x20101f)=>{const _0x35ed66=a1_0x3b52;if(_0x5d54d==='q'&&!_0x9d4de0){_0x4dc127(_0x35ed66(0xbb));return;}if(_0x5d54d==='y'&&_0x9d4de0){_0x46addf(![]);if(_0x1847a5!==null){const _0x6472b0=deleteFile(_0x576e50[_0x1847a5][_0x35ed66(0xc1)]);_0x6472b0['status']&&(_0x320d6d(_0x1847a5),_0x576e50[_0x35ed66(0xb1)](_0x1847a5,0x1)),_0x51280d(_0x6472b0[_0x35ed66(0xb0)]);}if(_0x576e50[_0x35ed66(0xb4)]<0x1){_0x4dc127(_0x35ed66(0xb8));return;}return;}if(_0x5d54d==='n'&&_0x9d4de0){_0x46addf(![]);return;}_0x20101f[_0x35ed66(0x9e)]&&!_0x9d4de0&&_0x320d6d(_0x3dceb9-0x1);_0x20101f[_0x35ed66(0xa3)]&&!_0x9d4de0&&_0x320d6d(_0x3dceb9+0x1);if(_0x20101f[_0x35ed66(0xbf)]&&!_0x9d4de0){_0x23e4d2(_0x3dceb9-0x1),_0x46addf(!![]);return;}if(_0x20101f[_0x35ed66(0xb5)]){_0x4dc127(_0x35ed66(0xb8));return;}}),useEffect(()=>{const _0x471a9d=a1_0x3b52;_0x51280d(null);if(_0x3dceb9>_0x576e50[_0x471a9d(0xb4)])_0x320d6d(0x1),_0x266bf1('1');else _0x3dceb9<0x1?(_0x320d6d(_0x576e50[_0x471a9d(0xb4)]),_0x266bf1(_0x576e50[_0x471a9d(0xb4)][_0x471a9d(0xa2)]())):_0x266bf1(_0x3dceb9['toString']());if(_0x576e50[_0x471a9d(0xb4)]<0x1){_0x4dc127('');return;}},[_0x3dceb9]),a1_0x27cb23[_0x37f619(0xc3)](Box,{'flexDirection':'column','width':0x34},a1_0x27cb23[_0x37f619(0xc3)](Text,null,updateBanner(_0x55ebf6)),a1_0x27cb23[_0x37f619(0xc3)](Box,{'flexDirection':_0x37f619(0xbc),'marginRight':0x2},a1_0x27cb23[_0x37f619(0xc3)](Box,{'flexDirection':'column','marginLeft':0x6},a1_0x27cb23[_0x37f619(0xc3)](Box,{'marginBottom':0x1},a1_0x27cb23[_0x37f619(0xc3)](Text,{'color':_0x37f619(0xa1)},_0x37f619(0xac))),_0x576e50[_0x37f619(0xa8)]((_0x383c80,_0x1d8eb9)=>a1_0x27cb23[_0x37f619(0xc3)](a1_0x261c7a,{'key':_0x1d8eb9,'id':(_0x1d8eb9+0x1)[_0x37f619(0xa2)](),'label':_0x383c80[_0x37f619(0xb7)]}))),_0x9d4de0&&a1_0x27cb23[_0x37f619(0xc3)](Box,{'marginTop':0x1},a1_0x27cb23['createElement'](Text,{'color':_0x37f619(0xc4)},a1_0x276295[_0x37f619(0xa6)]('[')+a1_0x276295[_0x37f619(0xbe)]('!')+a1_0x276295[_0x37f619(0xa6)](']'),'\x20',_0x37f619(0xc2))),_0x2a18af&&a1_0x27cb23[_0x37f619(0xc3)](Box,{'marginTop':0x1},a1_0x27cb23['createElement'](Text,{'color':'yellowBright'},a1_0x276295['magenta']('[')+a1_0x276295[_0x37f619(0xbe)]('!')+a1_0x276295[_0x37f619(0xa6)](']'),'\x20',_0x2a18af)),a1_0x27cb23[_0x37f619(0xc3)](Box,{'marginTop':0x1},a1_0x27cb23[_0x37f619(0xc3)](Text,null,a1_0x276295['magenta']('[')+a1_0x276295[_0x37f619(0x9d)](_0x37f619(0xb2))+a1_0x276295[_0x37f619(0xba)](_0x37f619(0xc5))+a1_0x276295[_0x37f619(0x9d)]('C')+a1_0x276295[_0x37f619(0xa6)](']')+a1_0x276295[_0x37f619(0xba)](_0x37f619(0xa5))+a1_0x276295[_0x37f619(0x9d)]('Q')+a1_0x276295[_0x37f619(0xba)]('\x20for\x20exit,\x20')+a1_0x276295['white'](_0x37f619(0xb9))+a1_0x276295[_0x37f619(0xba)](_0x37f619(0xaf))))));};export default DeleteAccountComponent;