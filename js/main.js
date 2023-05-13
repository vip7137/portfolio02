// 모바일 메뉴 클릭시 숨겨진 메뉴바 보여지는 이벤트 발생
const toogleBtn = document.querySelector('.navbar-toogleBtn');
const menu = document.querySelector('.navbar-menu');

toogleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
});

// 정리가 필요
!function() {
  "use strict";
  var e, n = {}, r = {};
  function t(e) {
      var o = r[e];
      if (void 0 !== o)
          return o.exports;
      var i = r[e] = {
          id: e,
          loaded: !1,
          exports: {}
      };
      return n[e].call(i.exports, i, i.exports, t),
      i.loaded = !0,
      i.exports
  }
  t.m = n,
  t.amdO = {},
  e = [],
  t.O = function(n, r, o, i) {
      if (!r) {
          var u = 1 / 0;
          for (a = 0; a < e.length; a++) {
              r = e[a][0],
              o = e[a][1],
              i = e[a][2];
              for (var f = !0, c = 0; c < r.length; c++)
                  (!1 & i || u >= i) && Object.keys(t.O).every((function(e) {
                      return t.O[e](r[c])
                  }
                  )) ? r.splice(c--, 1) : (f = !1,
                  i < u && (u = i));
              if (f) {
                  e.splice(a--, 1);
                  var l = o();
                  void 0 !== l && (n = l)
              }
          }
          return n
      }
      i = i || 0;
      for (var a = e.length; a > 0 && e[a - 1][2] > i; a--)
          e[a] = e[a - 1];
      e[a] = [r, o, i]
  }
  ,
  t.n = function(e) {
      var n = e && e.__esModule ? function() {
          return e.default
      }
      : function() {
          return e
      }
      ;
      return t.d(n, {
          a: n
      }),
      n
  }
  ,
  t.d = function(e, n) {
      for (var r in n)
          t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
              enumerable: !0,
              get: n[r]
          })
  }
  ,
  t.g = function() {
      if ("object" == typeof globalThis)
          return globalThis;
      try {
          return this || new Function("return this")()
      } catch (e) {
          if ("object" == typeof window)
              return window
      }
  }(),
  t.hmd = function(e) {
      return (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function() {
              throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
      }),
      e
  }
  ,
  t.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
  }
  ,
  t.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }
  ,
  function() {
      var e = {
          commonJs: 0
      };
      t.O.j = function(n) {
          return 0 === e[n]
      }
      ;
      var n = function(n, r) {
          var o, i, u = r[0], f = r[1], c = r[2], l = 0;
          if (u.some((function(n) {
              return 0 !== e[n]
          }
          ))) {
              for (o in f)
                  t.o(f, o) && (t.m[o] = f[o]);
              if (c)
                  var a = c(t)
          }
          for (n && n(r); l < u.length; l++)
              i = u[l],
              t.o(e, i) && e[i] && e[i][0](),
              e[i] = 0;
          return t.O(a)
      }
        , r = self.webpackChunkhlklemove = self.webpackChunkhlklemove || [];
      r.forEach(n.bind(null, 0)),
      r.push = n.bind(null, r.push.bind(r))
  }();
  var o = t.O(void 0, ["vendor"], (function() {
      return t(88430)
  }
  ));
  o = t.O(o)
}();

// 스크롤 높이 확인
$(window).on("scroll",function(){
    var sc_top=$(this).scrollTop();

    $(".top").text(sc_top); // text(값)는 javascript의 'innerText=값' 과 같은 역할

    console.log($(this).scrollTop());
})

// 스크롤의 높이에 따른 글자색 변경 이벤트(높이 890기준으로 변경하기)
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 890) {
      $(".navbar").css("background" , "#4c6ef5");
    }
    else{
      $(".navbar").css("background" , "transparent");   
    }
  })
})