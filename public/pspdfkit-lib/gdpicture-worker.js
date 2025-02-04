/*!
 * PSPDFKit for Web 2024.4.0 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2024 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
      ? define([], e)
      : 'object' == typeof exports
        ? (exports.PSPDFKit = e())
        : (t.PSPDFKit = e());
})(self, () =>
  (() => {
    'use strict';
    var t = {
        r: (t) => {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(t, '__esModule', { value: !0 });
        }
      },
      e = {};
    t.r(e);
    const r = function t(e) {
      let r;
      return (r = e instanceof Error ? e : new Error(e)), Object.setPrototypeOf(r, t.prototype), r;
    };
    r.prototype = Object.create(Error.prototype, {
      name: { value: 'PSPDFKitError', enumerable: !1 }
    });
    const n = r;
    function o(t, e) {
      if (!t)
        throw new n(
          `Assertion failed: ${e || 'Condition not met'}\n\nFor further assistance, please go to: https://pspdfkit.com/support/request`
        );
    }
    [
      'a[href]',
      'area[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])'
    ].join(',');
    function i(t) {
      return (
        (i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              }),
        i(t)
      );
    }
    function a(t) {
      var e = (function (t, e) {
        if ('object' !== i(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== i(n)) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === i(e) ? e : String(e);
    }
    function s(t, e, r) {
      return (
        (e = a(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    new WeakMap();
    async function f(t) {
      const e = (
        await (async function (t) {
          try {
            const e = await fetch(t).catch((e) => {
              throw new n(`Error fetching dynamic fonts file ${t}. ${e}`);
            });
            if (200 !== e.status)
              throw new n(`Error fetching dynamic fonts file ${t}. Status code: ${e.status}`);
            return e;
          } catch (t) {
            throw t;
          }
        })(t)
      )
        .json()
        .catch((e) => {
          throw new n(`Error parsing dynamic fonts file ${t}. ${e}`);
        });
      return e;
    }
    let c = (function (t) {
      return (
        (t[(t.pdf_a_1a = 0)] = 'pdf_a_1a'),
        (t[(t.pdf_a_1b = 1)] = 'pdf_a_1b'),
        (t[(t.pdf_a_2a = 2)] = 'pdf_a_2a'),
        (t[(t.pdf_a_2u = 3)] = 'pdf_a_2u'),
        (t[(t.pdf_a_2b = 4)] = 'pdf_a_2b'),
        (t[(t.pdf_a_3a = 5)] = 'pdf_a_3a'),
        (t[(t.pdf_a_3u = 6)] = 'pdf_a_3u'),
        (t[(t.pdf_a_3b = 7)] = 'pdf_a_3b'),
        (t[(t.pdf_a_4 = 8)] = 'pdf_a_4'),
        (t[(t.pdf_a_4e = 9)] = 'pdf_a_4e'),
        (t[(t.pdf_a_4f = 10)] = 'pdf_a_4f'),
        t
      );
    })({});
    function l(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function u(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? l(Object(r), !0).forEach(function (e) {
              s(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
      }
      return t;
    }
    const p = '/create.pdf',
      d = '/save.pdf',
      y = '/create.docx',
      b = '/save.docx',
      m = '/templateData.json',
      g = 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
    let _ = null,
      S = null;
    function w(t) {
      let e;
      o(S, 'GdPicture WebAssembly is not loaded.');
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
      for (const t of n) e = Object.assign(n[0], t);
      const a = JSON.stringify(u({ type: t }, e)),
        s = JSON.parse(S.CommandHandler(a));
      if (!s.success) throw new Error(s.errorReason + ': ' + s.errorMessage + '\n' + s.error);
      return s;
    }
    const F = new (class {
        _mountCustomFonts(t, e) {
          o(_, 'WebAssembly module not loaded.'), _.FS.mkdir(e);
          {
            const r = g ? _.FS.filesystems.WORKERFS : _.FS.filesystems.MEMFS;
            _.FS.mount(r, { blobs: t }, e);
          }
        }
        async loadModule(t, e, r, n, o, i, a) {
          const { Assemblies: s, Module: c } = await (async function (t, e) {
            if ('string' == typeof t) {
              const r = 'pspdfkit-lib/',
                n = `${r}gdpicture-2df8622a/jit`,
                o = `${r}gdpicture-2df8622a/aot`;
              let i, a;
              e
                ? ((i = `${t}${o}/initDotnet.js`), (a = `${t}${o}`))
                : ((i = `${t}${n}/initDotnet.js`), (a = `${t}${n}`));
              const { initDotnet: s } = await import(i);
              return s(a);
            }
            throw new Error('GdPicture WASM loader not implemented');
          })(t, e);
          (S = s.GdPictureWasm.API),
            (_ = c),
            w('gdpicture/setLicense', { origin: r }, { licenseKey: n || 'DEMO_PSPDFKIT_WEB' });
          const l = o ? '/fonts' : '';
          if (
            (o &&
              !_.FS.analyzePath(l).exists &&
              (this._mountCustomFonts(o, l), w('gdpicture/setFonts', { fontPaths: [l] })),
            i)
          ) {
            const t = await f(i);
            w('gdpicture/setDynamicFontLoading', {
              baseUrl: i.split('/').slice(0, -1).join('/'),
              allowedFonts: t.availableFonts,
              v: 1
            });
          }
          a && w('gdpicture/setFontSubstitutions', { fontSubstitutions: a });
        }
        toPdf(t, e) {
          _.FS.writeFile(p, new Uint8Array(t));
          const r = { file: d, format: 'pdf' };
          e && e in c && (r.conformance = e);
          try {
            return (
              w('gdpicture/process', { input: { file: p }, output: r }), _.FS.readFile(d).buffer
            );
          } finally {
            try {
              _.FS.unlink(d);
            } catch (t) {}
          }
        }
        toOffice(t, e) {
          _.FS.writeFile(p, new Uint8Array(t));
          const r = `/save.${e}`;
          try {
            return (
              w('gdpicture/process', { input: { file: p }, output: { file: r, format: e } }),
              _.FS.readFile(r).buffer
            );
          } finally {
            try {
              _.FS.unlink(r);
            } catch (t) {
              console.log(t.message);
            }
          }
        }
        async populateDocumentTemplate(t, e) {
          let r;
          _.FS.writeFile(y, new Uint8Array(t));
          try {
            r = JSON.stringify(e, null, 2);
          } catch (t) {
            throw new Error('Invalid config data');
          }
          _.FS.writeFile(m, r);
          try {
            return (
              w('gdpicture/process-office-template', {
                inputFile: y,
                modelAndConfigFile: m,
                outputFile: b
              }),
              _.FS.readFile(b).buffer
            );
          } finally {
            try {
              _.FS.unlink(b), _.FS.unlink(m);
            } catch (t) {
              console.log(t.message);
            }
          }
        }
      })(),
      h = self;
    return (
      (h.global = h),
      (h.module = {}),
      (h.onmessage = async (t) => {
        let e,
          r,
          { data: n } = t;
        try {
          const t = await F[n.action](...n.args);
          if (((e = { id: n.id, result: t }), Array.isArray(t))) {
            const e = t.filter((t) => t instanceof ArrayBuffer);
            e.length > 0 && (r = e);
          }
          t instanceof ArrayBuffer && (r = [t]);
        } catch (t) {
          const o = [...n.args].filter((t) => t instanceof ArrayBuffer);
          o.length > 0 && (r = o),
            (e = { id: n.id, error: t.message || t.toString(), callArgs: n.args });
        }
        h.postMessage(e, r);
      }),
      e
    );
  })()
);
