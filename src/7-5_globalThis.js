// globalThis：在不同环境下（web/node）下获得全局对象
// web下的全局对象为 window(self)
// node下的全局对象为 global
// console.log(globalThis);    // Window {window: Window, self: Window, document: document, name: "", location: Location, …}