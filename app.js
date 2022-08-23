// (function () {
// 'use strict';
// angular.module('ShopList', [])
// .controller('ShopListController', ShopListController)
// .controller('ShopListShowController', ShopListShowController)
// .controller('ToBuyController', ToBuyController)
// .controller('AlreadyBoughtController', AlreadyBoughtController)
// .service('BuyService',BuyService);
//
// ToBuyController.$inject=['BuyService'];
// ShopListShowController.$inject=['BuyService'];
// ShopListController.$inject=['BuyService'];
//
// function ShopListController(BuyService){
// }
//
// function AlreadyBoughtController(BuyService){
// }
//
//
// function ShopListShowController(BuyService){
//   var showlist = this;
//   showlist.itemstobuy=BuyService.getbuyitem();
//   showlist.boughtitem=function (item, index) {
//   showlist.itemsalreadybought= BuyService.buyitem(item, index);
//   showlist.itemsbought=BuyService.getboughtitem();
//   showlist.itemstobuyempty=BuyService.checkempty(showlist.itemstobuy);
//   };
// }
//
// function ToBuyController(BuyService){
//   var itemtoadd = this;
//   itemtoadd.additem = function () {
//     BuyService.additem();
//   };
// }
//
// function BuyService(){
//   var service=this;
//   var itemstobuy = [];
//   var itemsbought = [];
//   var itemstobuyempty= false;
//   var itemsalreadybought = false;
//
//   service.additem = function () {
//     itemstobuy.push('Rice');
//     itemstobuy.push('Dal');
//     itemstobuy.push('roti');
//     itemstobuy.push('namkeen');
//     itemstobuy.push('cookie');
//    };
//
//  service.getbuyitem = function () {
//    return itemstobuy;
//   };
//
//   service.getboughtitem = function () {
//     return itemsbought;
//    };
//
//
//  service.buyitem = function (item, itemindex) {
//    itemsbought.push(item);
//    itemstobuy.splice(itemindex,1);
//    itemsalreadybought = true;
//    return itemsalreadybought;
//  };
//
//  service.checkempty = function () {
//   if (typeof itemstobuy !== 'undefined' && itemstobuy.length === 0) {
//      itemstobuyempty= true;
//      return itemstobuyempty;
//    }
//  };
// };
// }
// )();


!function(){"use strict";function a(a){}function b(b){var a=this;a.itemstobuy=b.getbuyitem(),a.boughtitem=function(c,d){a.itemsalreadybought=b.buyitem(c,d),a.itemsbought=b.getboughtitem(),a.itemstobuyempty=b.checkempty(a.itemstobuy)}}function c(b){var a=this;a.additem=function(){b.additem()}}angular.module("ShopList",[]).controller("ShopListController",a).controller("ShopListShowController",b).controller("ToBuyController",c).controller("AlreadyBoughtController",function(a){}).service("BuyService",function(){var a=this,b=[],c=[],d=!1,e=!1;a.additem=function(){b.push("Rice"),b.push("Dal"),b.push("roti"),b.push("namkeen"),b.push("cookie")},a.getbuyitem=function(){return b},a.getboughtitem=function(){return c},a.buyitem=function(a,d){return c.push(a),b.splice(d,1),e=!0},a.checkempty=function(){if(void 0!==b&&0===b.length)return d=!0}}),c.$inject=["BuyService"],b.$inject=["BuyService"],a.$inject=["BuyService"]}()
