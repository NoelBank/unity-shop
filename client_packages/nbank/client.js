!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=28)}({28:function(e,r,t){(function(e){mp.game.graphics.notify("Loaded nbank.shop"),mp.events.add({guiReady:function(){e.browser=mp.browsers.new("package://nbank/index.html")},shopInventory:function(r){e.browser.execute("trigger('shopInventory', '".concat(r,"')"))},responsePreviewProduct:function(r,t){e.browser.execute("trigger('responsePreviewProduct', '".concat(t,"')"))},responseBuyProduct:function(r,t){e.browser.execute("trigger('responseBuyProduct', '".concat(t,"')"))},playerChat:function(r){e.browser.execute("trigger('onMessage', '".concat(r,"')")),mp.gui.chat.push("You wrote '".concat(r,"' in chat."))},onMessageFromServer:function(r){e.browser.execute("trigger('onMessage', '".concat(r,"')"))}}),mp.events.add("buyProduct",(function(e,r){mp.events.callRemote("buyProduct",e.id,e.variation,r)})),mp.keys.bind(114,!0,(function(){mp.trigger("toggleCursor"),e.browser.execute("trigger('openShop')")})),mp.keys.bind(113,!0,(function(){var e=!mp.gui.cursor.visible;mp.gui.cursor.show(e,e)})),mp.events.add("initialized",(function(){mp.game.graphics.notify("The Framework was loaded")})),mp.events.add("logToChat",(function(e){mp.game.graphics.notify(e)})),mp.events.add("toggleCursor",(function(){var e=!mp.gui.cursor.visible;mp.gui.cursor.show(e,e)}))}).call(this,t(29))},29:function(e,r){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t}});