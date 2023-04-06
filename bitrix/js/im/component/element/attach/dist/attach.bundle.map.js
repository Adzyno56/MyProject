{"version":3,"sources":["attach.bundle.js"],"names":["exports","im_model","im_utils","ui_vue","AttachTypeDelimiter","property","name","component","props","config","type","Object","default","color","String","computed","styles","width","this","DELIMITER","SIZE","backgroundColor","COLOR","template","AttachTypeFile","methods","openLink","element","Utils","platform","openNewPage","LINK","file","FILE","NAME","extension","split","splice","size","fileName","maxLength","length","endWordLength","secondPart","substring","firstPart","trim","fileNameFull","text","htmlspecialcharsback","fileSize","sizes","position","Math","round","localize","fileIcon","FilesModel","getIconType","Vue","getFilteredPhrases","$root","$bitrixMessages","AttachTypeGrid","created","isBitrixMobile","maxCellWith","floor","min","screen","availWidth","availHeight","getWidth","WIDTH","VALUE","getValue","MessagesModel","decodeBbCode","GRID","DISPLAY","toLowerCase","AttachTypeHtml","AttachTypeImage","open","BXMobileApp","UI","Photo","show","photos","url","default_photo","window","getImageSize","height","maxWidth","aspectRatio","getElementSource","PREVIEW","getElementTitle","lazyLoadCallback","event","style","offsetWidth","offsetHeight","styleFileSizes","image","HEIGHT","maxHeight","backgroundSize","styleBoxSizes","parseInt","AttachTypeLink","getImageConfig","IMAGE","imageComponentName","components","babelHelpers","defineProperty","AttachTypeMessage","message","MESSAGE","AttachTypeRich","AttachTypeUser","getAvatarType","AVATAR","avatarType","AVATAR_TYPE","AttachTypes","AttachComponents","forEach","attachType","baseColor","getComponentForBlock","block","_iteratorNormalCompletion","_didIteratorError","_iteratorError","undefined","_iterator","Symbol","iterator","_step","next","done","value","err","return","BX","Messenger","Model"],"mappings":"CAAC,SAAUA,EAAQC,EAASC,EAASC,GACpC,aAYA,IAAIC,GACFC,SAAU,YACVC,KAAM,wCACNC,WACEC,OACEC,QACEC,KAAMC,OACNC,YAEFC,OACEH,KAAMI,OACNF,QAAS,gBAGbG,UACEC,OAAQ,SAASA,IACf,OACEC,MAAOC,KAAKT,OAAOU,UAAUC,KAAOF,KAAKT,OAAOU,UAAUC,KAAO,KAAO,GACxEC,gBAAiBH,KAAKT,OAAOU,UAAUG,MAAQJ,KAAKT,OAAOU,UAAUG,MAAQJ,KAAKL,SAIxFU,SAAU,qFAcd,IAAIC,GACFnB,SAAU,OACVC,KAAM,mCACNC,WACEC,OACEC,QACEC,KAAMC,OACNC,YAEFC,OACEH,KAAMI,OACNF,QAAS,gBAGba,SACEC,SAAU,SAASA,EAASC,GAC1BzB,EAAS0B,MAAMC,SAASC,YAAYH,EAAQI,OAE9CC,KAAM,SAASA,IACb,OACE1B,KAAMY,KAAKT,OAAOwB,KAAKC,KACvBC,UAAWjB,KAAKT,OAAOwB,KAAKC,KAAKE,MAAM,KAAKC,QAAQ,GAAG,GACvDC,KAAMpB,KAAKT,OAAOwB,KAAKb,OAG3BmB,SAAU,SAASA,EAASZ,GAC1B,IAAIa,EAAY,GAEhB,IAAKb,EAAQO,MAAQP,EAAQO,KAAKO,OAASD,EAAW,CACpD,OAAOb,EAAQO,KAGjB,IAAIQ,EAAgB,GACpB,IAAIP,EAAYR,EAAQO,KAAKE,MAAM,KAAKC,QAAQ,GAAG,GACnD,IAAIM,EAAahB,EAAQO,KAAKU,UAAUjB,EAAQO,KAAKO,OAAS,GAAKN,EAAUM,OAAS,EAAIC,IAC1F,IAAIG,EAAYlB,EAAQO,KAAKU,UAAU,EAAGJ,EAAYG,EAAWF,OAAS,GAC1E,OAAOI,EAAUC,OAAS,MAAQH,EAAWG,QAE/CC,aAAc,SAASA,EAAapB,GAClC,OAAOzB,EAAS0B,MAAMoB,KAAKC,qBAAqBtB,EAAQO,OAE1DgB,SAAU,SAASA,EAASvB,GAC1B,IAAIW,EAAOX,EAAQP,KAEnB,GAAIkB,GAAQ,EAAG,CACb,MAAO,GAGT,IAAIa,GAAS,OAAQ,KAAM,KAAM,KAAM,MACvC,IAAIC,EAAW,EAEf,MAAOd,GAAQ,MAAQc,EAAW,EAAG,CACnCd,GAAQ,KACRc,IAGF,OAAOC,KAAKC,MAAMhB,GAAQ,IAAMpB,KAAKqC,SAAS,iCAAmCJ,EAAMC,KAEzFI,SAAU,SAASA,EAAS7B,GAC1B,OAAO1B,EAASwD,WAAWC,YAAY/B,EAAQO,KAAKE,MAAM,KAAKC,QAAQ,GAAG,MAG9EtB,UACEwC,SAAU,SAASA,IACjB,OAAOpD,EAAOwD,IAAIC,mBAAmB,4BAA6B1C,KAAK2C,MAAMC,mBAGjFvC,SAAU,ywBAcd,IAAIwC,GACF1D,SAAU,OACVC,KAAM,mCACNC,WACEC,OACEC,QACEC,KAAMC,OACNC,YAEFC,OACEH,KAAMI,OACNF,QAAS,gBAGboD,QAAS,SAASA,IAChB,GAAI9D,EAAS0B,MAAMC,SAASoC,iBAAkB,CAC5C/C,KAAKgD,YAAcb,KAAKc,MAAMd,KAAKe,IAAIC,OAAOC,WAAYD,OAAOE,aAAe,OAC3E,CACLrD,KAAKgD,YAAc,OAGvBzC,SACEC,SAAU,SAASA,EAASC,GAC1B,GAAIA,EAAQI,KAAM,CAChB7B,EAAS0B,MAAMC,SAASC,YAAYH,EAAQI,QAGhDyC,SAAU,SAASA,EAAS7C,GAC1B,GAAIT,KAAKR,OAAS,MAAO,CACvB,OAAOiB,EAAQ8C,MAAQ9C,EAAQ8C,MAAQ,KAAO,GAGhD,IAAK9C,EAAQ+C,MAAO,CAClB,OAAO,MAGT,GAAIxD,KAAKgD,aAAevC,EAAQ8C,MAAQvD,KAAKgD,YAAa,CACxD,OAAOhD,KAAKgD,YAAc,KAG5B,OAAOvC,EAAQ8C,MAAQ9C,EAAQ8C,MAAQ,KAAO,IAEhDE,SAAU,SAASA,EAAShD,GAC1B,IAAKA,EAAQ+C,MAAO,CAClB,MAAO,GAGT,OAAOzE,EAAS2E,cAAcC,cAC5B7B,KAAMrB,EAAQ+C,UAIpB3D,UACEL,KAAM,SAASA,IACb,OAAOQ,KAAKT,OAAOqE,KAAK,GAAGC,QAAQC,gBAGvCzD,SAAU,6wGAcd,IAAI0D,GACF5E,SAAU,OACVC,KAAM,mCACNC,WACEC,OACEC,QACEC,KAAMC,OACNC,YAEFC,OACEH,KAAMI,OACNF,QAAS,gBAGbW,SAAU,4EAcd,IAAI2D,GACF7E,SAAU,QACVC,KAAM,oCACNC,WACEC,OACEC,QACEC,KAAMC,OACNC,YAEFC,OACEH,KAAMI,OACNF,QAAS,gBAGba,SACE0D,KAAM,SAASA,EAAKnD,GAClB,IAAKA,EAAM,CACT,OAAO,MAGT,GAAI9B,EAAS0B,MAAMC,SAASoC,iBAAkB,CAE5CmB,YAAYC,GAAGC,MAAMC,MACnBC,SACEC,IAAKzD,IAEP0D,cAAe1D,QAEZ,CACL2D,OAAOR,KAAKnD,EAAM,YAGtB4D,aAAc,SAASA,EAAa3E,EAAO4E,EAAQC,GACjD,IAAIC,EAEJ,GAAI9E,EAAQ6E,EAAU,CACpBC,EAAcD,EAAW7E,MACpB,CACL8E,EAAc,EAGhB,OACE9E,MAAOA,EAAQ8E,EACfF,OAAQA,EAASE,IAGrBC,iBAAkB,SAASA,EAAiBrE,GAC1C,OAAOA,EAAQsE,QAAUtE,EAAQsE,QAAUtE,EAAQI,MAErDmE,gBAAiB,SAASA,EAAgBvE,GACxC,OAAOzB,EAAS0B,MAAMoB,KAAKC,qBAAqBtB,EAAQO,OAE1DiE,iBAAkB,SAASA,EAAiBC,GAC1C,IAAKA,EAAMzE,QAAQ0E,MAAMpF,MAAO,CAC9BmF,EAAMzE,QAAQ0E,MAAMpF,MAAQmF,EAAMzE,QAAQ2E,YAAc,KAG1D,IAAKF,EAAMzE,QAAQ0E,MAAMR,OAAQ,CAC/BO,EAAMzE,QAAQ0E,MAAMR,OAASO,EAAMzE,QAAQ4E,aAAe,OAG9DC,eAAgB,SAASA,EAAeC,GACtC,KAAMA,EAAMhC,OAASgC,EAAMC,QAAS,CAClC,OACEC,UAAW,OACXC,eAAgB,WAIpB,IAAIzD,EAAQjC,KAAK0E,aAAaa,EAAMhC,MAAOgC,EAAMC,OAAQ,KACzD,OACEzF,MAAOkC,EAAMlC,MAAQ,KACrB4E,OAAQ1C,EAAM0C,OAAS,KACvBe,eAAgBzD,EAAMlC,MAAQ,KAAOkC,EAAM0C,OAAS,IAAM,UAAY,YAG1EgB,cAAe,SAASA,EAAcJ,GACpC,KAAMA,EAAMhC,OAASgC,EAAMC,QAAS,CAClC,OACEb,OAAQ,SAIZ,GAAIiB,SAAS5F,KAAKsF,eAAeC,GAAOZ,SAAW,IAAK,CACtD,SAGF,OACEA,OAAQ,WAIdtE,SAAU,0lBAcd,IAAIwF,GACF1G,SAAU,OACVC,KAAM,mCACNC,WACEC,OACEC,QACEC,KAAMC,OACNC,YAEFC,OACEH,KAAMI,OACNF,QAAS,gBAGba,SACEuF,eAAgB,SAASA,EAAerF,GACtC,OACEsF,QACE/E,KAAMP,EAAQO,KACd+D,QAAStE,EAAQsE,QACjBxB,MAAO9C,EAAQ8C,MACfiC,OAAQ/E,EAAQ+E,WAItBhF,SAAU,SAASA,EAASC,GAC1B,GAAIA,EAAQI,KAAM,CAChB7B,EAAS0B,MAAMC,SAASC,YAAYH,EAAQI,SAIlDhB,UACEmG,mBAAoB,SAASA,IAC3B,OAAOhC,EAAgB5E,OAG3B6G,WAAYC,aAAaC,kBAAmBnC,EAAgB5E,KAAM4E,EAAgB3E,WAClFgB,SAAU,8sBAcd,IAAI+F,GACFjH,SAAU,UACVC,KAAM,sCACNC,WACEC,OACEC,QACEC,KAAMC,OACNC,YAEFC,OACEH,KAAMI,OACNF,QAAS,gBAGbG,UACEwG,QAAS,SAASA,IAChB,OAAOtH,EAAS2E,cAAcC,cAC5B7B,KAAM9B,KAAKT,OAAO+G,YAIxBjG,SAAU,2EAcd,IAAIkG,GACFpH,SAAU,YACVC,KAAM,mCACNC,WACEC,OACEC,QACEC,KAAMC,OACNC,YAEFC,OACEH,KAAMI,OACNF,QAAS,gBAGba,SACEuF,eAAgB,SAASA,EAAerF,GACtC,OACEsF,QACE/E,KAAMP,EAAQO,KACd+D,QAAStE,EAAQsE,QACjBxB,MAAO9C,EAAQ8C,MACfiC,OAAQ/E,EAAQ+E,WAItBhF,SAAU,SAASA,EAASC,GAC1B,GAAIA,EAAQI,KAAM,CAChB7B,EAAS0B,MAAMC,SAASC,YAAYH,EAAQI,SAIlDhB,UACEmG,mBAAoB,SAASA,IAC3B,OAAOhC,EAAgB5E,OAG3B6G,WAAYC,aAAaC,kBAAmBnC,EAAgB5E,KAAM4E,EAAgB3E,WAClFgB,SAAU,mtBAcd,IAAImG,GACFrH,SAAU,OACVC,KAAM,mCACNC,WACEC,OACEC,QACEC,KAAMC,OACNC,YAEFC,OACEH,KAAMI,OACNF,QAAS,gBAGba,SACEC,SAAU,SAASA,EAASC,GAC1B,GAAIA,EAAQI,KAAM,CAChB7B,EAAS0B,MAAMC,SAASC,YAAYH,EAAQI,QAGhD4F,cAAe,SAASA,EAAchG,GACpC,GAAIA,EAAQiG,OAAQ,CAClB,MAAO,GAGT,IAAIC,EAAa,OAEjB,GAAIlG,EAAQmG,cAAgB,OAAQ,CAClCD,EAAa,YACR,GAAIlG,EAAQmG,cAAgB,MAAO,CACxCD,EAAa,MAGf,MAAO,8CAAgDA,IAG3DtG,SAAU,80BAYd,IAAIwG,GAAe3H,EAAqBoB,EAAgBuC,EAAgBkB,EAAgBC,EAAiB6B,EAAgBO,EAAmBG,EAAgBC,GAC5J,IAAIM,KACJD,EAAYE,QAAQ,SAAUC,GAC5BF,EAAiBE,EAAW5H,MAAQ4H,EAAW3H,YAEjDJ,EAAOwD,IAAIpD,UAAU,+BACnBC,OACEC,QACEC,KAAMC,OACNC,YAEFuH,WACEzH,KAAMI,OACNF,QAAS,YAGba,SACE2G,qBAAsB,SAASA,EAAqBC,GAClD,IAAIC,EAA4B,KAChC,IAAIC,EAAoB,MACxB,IAAIC,EAAiBC,UAErB,IACE,IAAK,IAAIC,EAAYX,EAAYY,OAAOC,YAAaC,IAASP,GAA6BO,EAAQH,EAAUI,QAAQC,MAAOT,EAA4B,KAAM,CAC5J,IAAIJ,EAAaW,EAAMG,MAEvB,UAAWX,EAAMH,EAAW7H,YAAc,YAAa,CACrD,OAAO6H,EAAW5H,OAGtB,MAAO2I,GACPV,EAAoB,KACpBC,EAAiBS,EACjB,QACA,IACE,IAAKX,GAA6BI,EAAUQ,QAAU,KAAM,CAC1DR,EAAUQ,UAEZ,QACA,GAAIX,EAAmB,CACrB,MAAMC,IAKZ,MAAO,KAGXzH,UACEF,MAAO,SAASA,IACd,UAAWK,KAAKT,OAAOa,QAAU,cAAgBJ,KAAKT,OAAOa,MAAO,CAClE,OAAOJ,KAAKiH,UAGd,GAAIjH,KAAKT,OAAOa,QAAU,cAAe,CACvC,MAAO,GAGT,OAAOJ,KAAKT,OAAOa,QAGvB6F,WAAYa,EACZzG,SAAU,wZAtkBb,CAykBGL,KAAKyE,OAASzE,KAAKyE,WAAcwD,GAAGC,UAAUC,MAAMF,GAAGC,UAAUD","file":"attach.bundle.map.js"}