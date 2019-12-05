(function(exports) {
  "use strict";

  const exportedConst = false;

  console.log(exportedConst);
  const myExportedVar = true;

  exports.myExportedVar = myExportedVar;

  return exports;
})({});
