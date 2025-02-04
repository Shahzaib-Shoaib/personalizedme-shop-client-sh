var __dotnet_runtime = (function (e) {
    'use strict';
    let t, r, n, o, i, a, s, c;
    const u = {},
      _ = {};
    let l;
    function f(e, u) {
      (r = u.internal),
        (n = u.marshaled_imports),
        (t = u.module),
        m(e),
        (o = e.isNode),
        (i = e.isShell),
        (a = e.isWeb),
        (s = e.isWorker),
        (c = e.isPThread),
        (d.quit = e.quit_),
        (d.ExitStatus = e.ExitStatus),
        (d.requirePromise = e.requirePromise);
    }
    function m(e) {
      (o = e.isNode), (i = e.isShell), (a = e.isWeb), (s = e.isWorker), (c = e.isPThread);
    }
    const d = {
        javaScriptExports: {},
        mono_wasm_load_runtime_done: !1,
        mono_wasm_bindings_is_ready: !1,
        maxParallelDownloads: 16,
        config: { environmentVariables: {} },
        diagnosticTracing: !1
      },
      h = -1;
    function p(e) {
      return null == e;
    }
    const w = [
        [!0, 'mono_wasm_register_root', 'number', ['number', 'number', 'string']],
        [!0, 'mono_wasm_deregister_root', null, ['number']],
        [!0, 'mono_wasm_string_get_data', null, ['number', 'number', 'number', 'number']],
        [!0, 'mono_wasm_string_get_data_ref', null, ['number', 'number', 'number', 'number']],
        [!0, 'mono_wasm_set_is_debugger_attached', 'void', ['bool']],
        [
          !0,
          'mono_wasm_send_dbg_command',
          'bool',
          ['number', 'number', 'number', 'number', 'number']
        ],
        [
          !0,
          'mono_wasm_send_dbg_command_with_parms',
          'bool',
          ['number', 'number', 'number', 'number', 'number', 'number', 'string']
        ],
        [!0, 'mono_wasm_setenv', null, ['string', 'string']],
        [!0, 'mono_wasm_parse_runtime_options', null, ['number', 'number']],
        [!0, 'mono_wasm_strdup', 'number', ['string']],
        [!0, 'mono_background_exec', null, []],
        [!0, 'mono_set_timeout_exec', null, []],
        [!0, 'mono_wasm_load_icu_data', 'number', ['number']],
        [!0, 'mono_wasm_get_icudt_name', 'string', ['string']],
        [!1, 'mono_wasm_add_assembly', 'number', ['string', 'number', 'number']],
        [!0, 'mono_wasm_add_satellite_assembly', 'void', ['string', 'string', 'number', 'number']],
        [!1, 'mono_wasm_load_runtime', null, ['string', 'number']],
        [!0, 'mono_wasm_change_debugger_log_level', 'void', ['number']],
        [!0, 'mono_wasm_get_corlib', 'number', []],
        [!0, 'mono_wasm_assembly_load', 'number', ['string']],
        [!0, 'mono_wasm_find_corlib_class', 'number', ['string', 'string']],
        [!0, 'mono_wasm_assembly_find_class', 'number', ['number', 'string', 'string']],
        [!0, 'mono_wasm_runtime_run_module_cctor', 'void', ['number']],
        [!0, 'mono_wasm_find_corlib_type', 'number', ['string', 'string']],
        [!0, 'mono_wasm_assembly_find_type', 'number', ['number', 'string', 'string']],
        [!0, 'mono_wasm_assembly_find_method', 'number', ['number', 'string', 'number']],
        [!0, 'mono_wasm_invoke_method', 'number', ['number', 'number', 'number', 'number']],
        [
          !1,
          'mono_wasm_invoke_method_ref',
          'void',
          ['number', 'number', 'number', 'number', 'number']
        ],
        [!0, 'mono_wasm_string_get_utf8', 'number', ['number']],
        [!0, 'mono_wasm_string_from_utf16_ref', 'void', ['number', 'number', 'number']],
        [!0, 'mono_wasm_get_obj_type', 'number', ['number']],
        [!0, 'mono_wasm_array_length', 'number', ['number']],
        [!0, 'mono_wasm_array_get', 'number', ['number', 'number']],
        [!0, 'mono_wasm_array_get_ref', 'void', ['number', 'number', 'number']],
        [!1, 'mono_wasm_obj_array_new', 'number', ['number']],
        [!1, 'mono_wasm_obj_array_new_ref', 'void', ['number', 'number']],
        [!1, 'mono_wasm_obj_array_set', 'void', ['number', 'number', 'number']],
        [!1, 'mono_wasm_obj_array_set_ref', 'void', ['number', 'number', 'number']],
        [!0, 'mono_wasm_register_bundled_satellite_assemblies', 'void', []],
        [
          !1,
          'mono_wasm_try_unbox_primitive_and_get_type_ref',
          'number',
          ['number', 'number', 'number']
        ],
        [!0, 'mono_wasm_box_primitive_ref', 'void', ['number', 'number', 'number', 'number']],
        [!0, 'mono_wasm_intern_string_ref', 'void', ['number']],
        [!0, 'mono_wasm_assembly_get_entry_point', 'number', ['number']],
        [!0, 'mono_wasm_get_delegate_invoke_ref', 'number', ['number']],
        [!0, 'mono_wasm_string_array_new_ref', 'void', ['number', 'number']],
        [
          !0,
          'mono_wasm_typed_array_new_ref',
          'void',
          ['number', 'number', 'number', 'number', 'number']
        ],
        [!0, 'mono_wasm_class_get_type', 'number', ['number']],
        [!0, 'mono_wasm_type_get_class', 'number', ['number']],
        [!0, 'mono_wasm_get_type_name', 'string', ['number']],
        [!0, 'mono_wasm_get_type_aqn', 'string', ['number']],
        [
          !0,
          'mono_wasm_event_pipe_enable',
          'bool',
          ['string', 'number', 'number', 'string', 'bool', 'number']
        ],
        [!0, 'mono_wasm_event_pipe_session_start_streaming', 'bool', ['number']],
        [!0, 'mono_wasm_event_pipe_session_disable', 'bool', ['number']],
        [!0, 'mono_wasm_diagnostic_server_create_thread', 'bool', ['string', 'number']],
        [!0, 'mono_wasm_diagnostic_server_thread_attach_to_runtime', 'void', []],
        [!0, 'mono_wasm_diagnostic_server_post_resume_runtime', 'void', []],
        [!0, 'mono_wasm_diagnostic_server_create_stream', 'number', []],
        [!0, 'mono_wasm_string_from_js', 'number', ['string']],
        [!1, 'mono_wasm_exit', 'void', ['number']],
        [!0, 'mono_wasm_getenv', 'number', ['string']],
        [!0, 'mono_wasm_set_main_args', 'void', ['number', 'number']],
        [!1, 'mono_wasm_enable_on_demand_gc', 'void', ['number']],
        [!1, 'mono_profiler_init_aot', 'void', ['number']],
        [!1, 'mono_wasm_exec_regression', 'number', ['number', 'string']],
        [!1, 'mono_wasm_invoke_method_bound', 'number', ['number', 'number']],
        [!0, 'mono_wasm_write_managed_pointer_unsafe', 'void', ['number', 'number']],
        [!0, 'mono_wasm_copy_managed_pointer', 'void', ['number', 'number']],
        [!0, 'mono_wasm_i52_to_f64', 'number', ['number', 'number']],
        [!0, 'mono_wasm_u52_to_f64', 'number', ['number', 'number']],
        [!0, 'mono_wasm_f64_to_i52', 'number', ['number', 'number']],
        [!0, 'mono_wasm_f64_to_u52', 'number', ['number', 'number']]
      ],
      g = {};
    function y(e, t, r) {
      const n = (function (e, t, r) {
        let n,
          o = 'number' == typeof t ? t : 0;
        n = 'number' == typeof r ? o + r : e.length - o;
        const i = {
          read: function () {
            if (o >= n) return null;
            const t = e[o];
            return (o += 1), t;
          }
        };
        return (
          Object.defineProperty(i, 'eof', {
            get: function () {
              return o >= n;
            },
            configurable: !0,
            enumerable: !0
          }),
          i
        );
      })(e, t, r);
      let o = '',
        i = 0,
        a = 0,
        s = 0,
        c = 0,
        u = 0,
        _ = 0;
      for (; (i = n.read()), (a = n.read()), (s = n.read()), null !== i; )
        null === a && ((a = 0), (u += 1)),
          null === s && ((s = 0), (u += 1)),
          (_ = (i << 16) | (a << 8) | (s << 0)),
          (c = (16777215 & _) >> 18),
          (o += b[c]),
          (c = (262143 & _) >> 12),
          (o += b[c]),
          u < 2 && ((c = (4095 & _) >> 6), (o += b[c])),
          2 === u ? (o += '==') : 1 === u ? (o += '=') : ((c = (63 & _) >> 0), (o += b[c]));
      return o;
    }
    const b = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '+',
      '/'
    ];
    const v = new Map();
    v.remove = function (e) {
      const t = this.get(e);
      return this.delete(e), t;
    };
    let E,
      S,
      A,
      k = {},
      N = 0,
      O = -1;
    function x() {
      (r.mono_wasm_runtime_is_ready = d.mono_wasm_runtime_is_ready = !0),
        (N = 0),
        (k = {}),
        (O = -1),
        globalThis.dotnetDebugger ||
          console.debug('mono_wasm_runtime_ready', 'fe00e07a-5519-4dfe-b35a-f867dbaf2e28');
    }
    function j() {}
    function T(e, r, n, o) {
      const i = { res_ok: e, res: { id: r, value: y(new Uint8Array(t.HEAPU8.buffer, n, o)) } };
      v.has(r) &&
        console.warn(`MONO_WASM: Adding an id (${r}) that already exists in commands_received`),
        v.set(r, i);
    }
    function D(e) {
      e.length > O && (E && t._free(E), (O = Math.max(e.length, O, 256)), (E = t._malloc(O)));
      const r = atob(e);
      for (let e = 0; e < r.length; e++) t.HEAPU8[E + e] = r.charCodeAt(e);
    }
    function M(e, t, r, n, o, i, a) {
      D(n), g.mono_wasm_send_dbg_command_with_parms(e, t, r, E, o, i, a.toString());
      const { res_ok: s, res: c } = v.remove(e);
      if (!s) throw new Error('Failed on mono_wasm_invoke_method_debugger_agent_with_parms');
      return c;
    }
    function R(e, t, r, n) {
      D(n), g.mono_wasm_send_dbg_command(e, t, r, E, n.length);
      const { res_ok: o, res: i } = v.remove(e);
      if (!o) throw new Error('Failed on mono_wasm_send_dbg_command');
      return i;
    }
    function P() {
      const { res_ok: e, res: t } = v.remove(0);
      if (!e) throw new Error('Failed on mono_wasm_get_dbg_command_info');
      return t;
    }
    function C() {}
    function I() {
      g.mono_wasm_set_is_debugger_attached(!1);
    }
    function F(e) {
      g.mono_wasm_change_debugger_log_level(e);
    }
    function $(e, t = {}) {
      if ('object' != typeof e)
        throw new Error(`event must be an object, but got ${JSON.stringify(e)}`);
      if (void 0 === e.eventName)
        throw new Error(`event.eventName is a required parameter, in event: ${JSON.stringify(e)}`);
      if ('object' != typeof t)
        throw new Error(`args must be an object, but got ${JSON.stringify(t)}`);
      console.debug(
        'mono_wasm_debug_event_raised:aef14bca-5519-4dfe-b35a-f867abc123ae',
        JSON.stringify(e),
        JSON.stringify(t)
      );
    }
    function U() {
      -1 == d.waitForDebugger && (d.waitForDebugger = 1), g.mono_wasm_set_is_debugger_attached(!0);
    }
    function W(e, r) {
      (S = t.UTF8ToString(e).concat('.dll')),
        (A = r),
        console.assert(!0, `Adding an entrypoint breakpoint ${S} at method token  ${A}`);
    }
    function B(e) {
      if (null != e.arguments && !Array.isArray(e.arguments))
        throw new Error(`"arguments" should be an array, but was ${e.arguments}`);
      const t = e.objectId,
        r = e.details;
      let n = {};
      if (t.startsWith('dotnet:cfo_res:')) {
        if (!(t in k)) throw new Error(`Unknown object id ${t}`);
        n = k[t];
      } else
        n = (function (e, t) {
          if (e.startsWith('dotnet:array:')) {
            let e;
            if (void 0 === t.items) return (e = t.map((e) => e.value)), e;
            if (void 0 === t.dimensionsDetails || 1 === t.dimensionsDetails.length)
              return (e = t.items.map((e) => e.value)), e;
          }
          const r = {};
          return (
            Object.keys(t).forEach((e) => {
              const n = t[e];
              void 0 !== n.get
                ? Object.defineProperty(r, n.name, {
                    get: () => R(n.get.id, n.get.commandSet, n.get.command, n.get.buffer),
                    set: function (e) {
                      return (
                        M(
                          n.set.id,
                          n.set.commandSet,
                          n.set.command,
                          n.set.buffer,
                          n.set.length,
                          n.set.valtype,
                          e
                        ),
                        !0
                      );
                    }
                  })
                : void 0 !== n.set
                  ? Object.defineProperty(r, n.name, {
                      get: () => n.value,
                      set: function (e) {
                        return (
                          M(
                            n.set.id,
                            n.set.commandSet,
                            n.set.command,
                            n.set.buffer,
                            n.set.length,
                            n.set.valtype,
                            e
                          ),
                          !0
                        );
                      }
                    })
                  : (r[n.name] = n.value);
            }),
            r
          );
        })(t, r);
      const o = null != e.arguments ? e.arguments.map((e) => JSON.stringify(e.value)) : [],
        i = `const fn = ${e.functionDeclaration}; return fn.apply(proxy, [${o}]);`,
        a = new Function('proxy', i)(n);
      if (void 0 === a) return { type: 'undefined' };
      if (Object(a) !== a)
        return 'object' == typeof a && null == a
          ? { type: typeof a, subtype: `${a}`, value: null }
          : { type: typeof a, description: `${a}`, value: `${a}` };
      if (e.returnByValue && null == a.subtype) return { type: 'object', value: a };
      if (Object.getPrototypeOf(a) == Array.prototype) {
        const e = L(a);
        return {
          type: 'object',
          subtype: 'array',
          className: 'Array',
          description: `Array(${a.length})`,
          objectId: e
        };
      }
      if (void 0 !== a.value || void 0 !== a.subtype) return a;
      if (a == n)
        return { type: 'object', className: 'Object', description: 'Object', objectId: t };
      return { type: 'object', className: 'Object', description: 'Object', objectId: L(a) };
    }
    function z(e, t = {}) {
      return (function (e, t) {
        if (!(e in k)) throw new Error(`Could not find any object with id ${e}`);
        const r = k[e],
          n = Object.getOwnPropertyDescriptors(r);
        t.accessorPropertiesOnly &&
          Object.keys(n).forEach((e) => {
            void 0 === n[e].get && Reflect.deleteProperty(n, e);
          });
        const o = [];
        return (
          Object.keys(n).forEach((e) => {
            let t;
            const r = n[e];
            (t =
              'object' == typeof r.value
                ? Object.assign({ name: e }, r)
                : void 0 !== r.value
                  ? {
                      name: e,
                      value: Object.assign({ type: typeof r.value, description: '' + r.value }, r)
                    }
                  : void 0 !== r.get
                    ? {
                        name: e,
                        get: {
                          className: 'Function',
                          description: `get ${e} () {}`,
                          type: 'function'
                        }
                      }
                    : {
                        name: e,
                        value: { type: 'symbol', value: '<Unknown>', description: '<Unknown>' }
                      }),
              o.push(t);
          }),
          { __value_as_json_string__: JSON.stringify(o) }
        );
      })(`dotnet:cfo_res:${e}`, t);
    }
    function L(e) {
      const t = 'dotnet:cfo_res:' + N++;
      return (k[t] = e), t;
    }
    function H(e) {
      e in k && delete k[e];
    }
    function V(e, n) {
      const o = t.UTF8ToString(n);
      r.logging && 'function' == typeof r.logging.debugger && r.logging.debugger(e, o);
    }
    let q = 0;
    function G(e) {
      const t = 1 === g.mono_wasm_load_icu_data(e);
      return t && q++, t;
    }
    function J(e) {
      return g.mono_wasm_get_icudt_name(e);
    }
    function Y() {
      const e = d.config;
      let r = !1;
      if (
        (e.globalizationMode || (e.globalizationMode = 'auto'),
        'invariant' === e.globalizationMode && (r = !0),
        !r)
      )
        if (q > 0)
          d.diagnosticTracing &&
            console.debug('MONO_WASM: ICU data archive(s) loaded, disabling invariant mode');
        else {
          if ('icu' === e.globalizationMode) {
            const e =
              'invariant globalization mode is inactive and no ICU data archives were loaded';
            throw (t.printErr(`MONO_WASM: ERROR: ${e}`), new Error(e));
          }
          d.diagnosticTracing &&
            console.debug(
              'MONO_WASM: ICU data archive(s) not loaded, using invariant globalization mode'
            ),
            (r = !0);
        }
      r && g.mono_wasm_setenv('DOTNET_SYSTEM_GLOBALIZATION_INVARIANT', '1'),
        g.mono_wasm_setenv('DOTNET_SYSTEM_GLOBALIZATION_PREDEFINED_CULTURES_ONLY', '1');
    }
    function X(e) {
      null == e && (e = {}),
        'writeAt' in e ||
          (e.writeAt = 'System.Runtime.InteropServices.JavaScript.JavaScriptExports::StopProfile'),
        'sendTo' in e || (e.sendTo = 'Interop/Runtime::DumpAotProfileData');
      const r = 'aot:write-at-method=' + e.writeAt + ',send-to-method=' + e.sendTo;
      t.ccall('mono_wasm_load_profiler_aot', null, ['string'], [r]);
    }
    function Z(e) {
      null == e && (e = {}),
        'writeAt' in e || (e.writeAt = 'WebAssembly.Runtime::StopProfile'),
        'sendTo' in e || (e.sendTo = 'WebAssembly.Runtime::DumpCoverageProfileData');
      const r = 'coverage:write-at-method=' + e.writeAt + ',send-to-method=' + e.sendTo;
      t.ccall('mono_wasm_load_profiler_coverage', null, ['string'], [r]);
    }
    const K = new Map(),
      Q = new Map();
    let ee = 0;
    function te(e) {
      if (K.has(e)) return K.get(e);
      const t = g.mono_wasm_assembly_load(e);
      return K.set(e, t), t;
    }
    function re(e, t, r) {
      ee || (ee = g.mono_wasm_get_corlib());
      let n = (function (e, t, r) {
        let n = Q.get(e);
        n || Q.set(e, (n = new Map()));
        let o = n.get(t);
        return o || ((o = new Map()), n.set(t, o)), o.get(r);
      })(ee, e, t);
      if (void 0 !== n) return n;
      if (((n = g.mono_wasm_assembly_find_class(ee, e, t)), r && !n))
        throw new Error(`Failed to find corlib class ${e}.${t}`);
      return (
        (function (e, t, r, n) {
          const o = Q.get(e);
          if (!o) throw new Error('internal error');
          const i = o.get(t);
          if (!i) throw new Error('internal error');
          i.set(r, n);
        })(ee, e, t, n),
        n
      );
    }
    const ne = new Map(),
      oe = [];
    function ie(e) {
      try {
        if (0 == ne.size) return e;
        const t = e;
        for (let r = 0; r < oe.length; r++) {
          const n = e.replace(new RegExp(oe[r], 'g'), (e, ...t) => {
            const r = t.find((e) => 'object' == typeof e && void 0 !== e.replaceSection);
            if (void 0 === r) return e;
            const n = r.funcNum,
              o = r.replaceSection,
              i = ne.get(Number(n));
            return void 0 === i ? e : e.replace(o, `${i} (${o})`);
          });
          if (n !== t) return n;
        }
        return t;
      } catch (t) {
        return console.debug(`MONO_WASM: failed to symbolicate: ${t}`), e;
      }
    }
    function ae(e) {
      let t = e;
      return t instanceof Error || (t = new Error(t)), ie(t.stack);
    }
    function se(e, n, o, i, a) {
      const s = t.UTF8ToString(o),
        c = !!i,
        u = t.UTF8ToString(e),
        _ = a,
        l = t.UTF8ToString(n),
        f = `[MONO] ${s}`;
      if (r.logging && 'function' == typeof r.logging.trace) r.logging.trace(u, l, f, c, _);
      else
        switch (l) {
          case 'critical':
          case 'error':
            console.error(ae(f));
            break;
          case 'warning':
            console.warn(f);
            break;
          case 'message':
          default:
            console.log(f);
            break;
          case 'info':
            console.info(f);
            break;
          case 'debug':
            console.debug(f);
        }
    }
    let ce;
    function ue(e) {
      if (!d.mono_wasm_symbols_are_ready) {
        d.mono_wasm_symbols_are_ready = !0;
        try {
          t.FS_readFile(e, { flags: 'r', encoding: 'utf8' })
            .split(/[\r\n]/)
            .forEach((e) => {
              const t = e.split(/:/);
              t.length < 2 || ((t[1] = t.splice(1).join(':')), ne.set(Number(t[0]), t[1]));
            });
        } catch (t) {
          return void (
            44 == t.errno ||
            console.log(`MONO_WASM: Error loading symbol file ${e}: ${JSON.stringify(t)}`)
          );
        }
      }
    }
    async function _e(e, t) {
      try {
        const r = await le(e, t);
        return de(r), r;
      } catch (e) {
        return e instanceof d.ExitStatus ? e.status : (de(1, e), 1);
      }
    }
    async function le(e, r) {
      (function (e, r) {
        const n = r.length + 1,
          o = t._malloc(4 * n);
        let i = 0;
        t.setValue(o + 4 * i, g.mono_wasm_strdup(e), 'i32'), (i += 1);
        for (let e = 0; e < r.length; ++e)
          t.setValue(o + 4 * i, g.mono_wasm_strdup(r[e]), 'i32'), (i += 1);
        g.mono_wasm_set_main_args(n, o);
      })(e, r),
        -1 == d.waitForDebugger &&
          (console.log('MONO_WASM: waiting for debugger...'),
          await new Promise((e) => {
            const t = setInterval(() => {
              1 == d.waitForDebugger && (clearInterval(t), e());
            }, 100);
          }));
      const n = fe(e);
      return d.javaScriptExports.call_entry_point(n, r);
    }
    function fe(e) {
      if (!d.mono_wasm_bindings_is_ready)
        throw new Error('Assert failed: The runtime must be initialized.');
      const t = te(e);
      if (!t) throw new Error('Could not find assembly: ' + e);
      let r = 0;
      1 == d.waitForDebugger && (r = 1);
      const n = g.mono_wasm_assembly_get_entry_point(t, r);
      if (!n) throw new Error('Could not find entry point for assembly: ' + e);
      return n;
    }
    function me(e) {
      Da(e, !1), de(1, e);
    }
    function de(e, t) {
      if (d.config.asyncFlushOnExit && 0 === e)
        throw (
          ((async () => {
            try {
              await (async function () {
                try {
                  const e = await import('process'),
                    t = (e) =>
                      new Promise((t, r) => {
                        e.on('error', (e) => r(e)),
                          e.write('', function () {
                            t();
                          });
                      }),
                    r = t(e.stderr),
                    n = t(e.stdout);
                  await Promise.all([n, r]);
                } catch (e) {
                  console.error(`flushing std* streams failed: ${e}`);
                }
              })();
            } finally {
              he(e, t);
            }
          })(),
          d.ExitStatus ? new d.ExitStatus(e) : t || new Error('Stop with exit code ' + e))
        );
      he(e, t);
    }
    function he(e, n) {
      if (
        (d.ExitStatus &&
          (!n || n instanceof d.ExitStatus
            ? (n = new d.ExitStatus(e))
            : n instanceof Error
              ? t.printErr(r.mono_wasm_stringify_as_error_with_stack(n))
              : 'string' == typeof n
                ? t.printErr(n)
                : t.printErr(JSON.stringify(n))),
        (function (e, t) {
          if (d.config.logExitCode)
            if (
              (0 != e &&
                t &&
                (t instanceof Error
                  ? console.error(ae(t))
                  : 'string' == typeof t
                    ? console.error(t)
                    : console.error(JSON.stringify(t))),
              ce)
            ) {
              const t = () => {
                0 == ce.bufferedAmount ? console.log('WASM EXIT ' + e) : setTimeout(t, 100);
              };
              t();
            } else console.log('WASM EXIT ' + e);
        })(e, n),
        (function (e) {
          if (a && d.config.appendElementOnExit) {
            const t = document.createElement('label');
            (t.id = 'tests_done'),
              e && (t.style.background = 'red'),
              (t.innerHTML = e.toString()),
              document.body.appendChild(t);
          }
        })(e),
        0 !== e || !a)
      ) {
        if (!d.quit) throw n;
        d.quit(e, n);
      }
    }
    oe.push(
      /at (?<replaceSection>[^:()]+:wasm-function\[(?<funcNum>\d+)\]:0x[a-fA-F\d]+)((?![^)a-fA-F\d])|$)/
    ),
      oe.push(/(?:WASM \[[\da-zA-Z]+\], (?<replaceSection>function #(?<funcNum>[\d]+) \(''\)))/),
      oe.push(
        /(?<replaceSection>[a-z]+:\/\/[^ )]*:wasm-function\[(?<funcNum>\d+)\]:0x[a-fA-F\d]+)/
      ),
      oe.push(/(?<replaceSection><[^ >]+>[.:]wasm-function\[(?<funcNum>[0-9]+)\])/);
    const pe = 'function' == typeof globalThis.WeakRef;
    function we(e) {
      return pe ? new WeakRef(e) : { deref: () => e };
    }
    const ge = 'function' == typeof globalThis.FinalizationRegistry;
    let ye;
    const be = [],
      ve = [];
    let Ee = 1;
    const Se = new Map();
    ge &&
      (ye = new globalThis.FinalizationRegistry(function (e) {
        Te(null, e);
      }));
    const Ae = Symbol.for('wasm js_owned_gc_handle'),
      ke = Symbol.for('wasm cs_owned_js_handle');
    function Ne(e) {
      return 0 !== e && -1 !== e ? be[e] : null;
    }
    function Oe(e) {
      if (e[ke]) return e[ke];
      const t = ve.length ? ve.pop() : Ee++;
      return (be[t] = e), Object.isExtensible(e) && (e[ke] = t), t;
    }
    function xe(e) {
      const t = be[e];
      if (null != t) {
        if (globalThis === t) return;
        void 0 !== t[ke] && (t[ke] = void 0), (be[e] = void 0), ve.push(e);
      }
    }
    function je(e, t) {
      (e[Ae] = t), ge && ye.register(e, t, e);
      const r = we(e);
      Se.set(t, r);
    }
    function Te(e, t) {
      e && ((t = e[Ae]), (e[Ae] = 0), ge && ye.unregister(e)),
        0 !== t && Se.delete(t) && d.javaScriptExports.release_js_owned_object_by_gc_handle(t);
    }
    function De(e) {
      const t = e[Ae];
      if (0 == t) throw new Error('Assert failed: ObjectDisposedException');
      return t;
    }
    function Me(e) {
      if (!e) return null;
      const t = Se.get(e);
      return t ? t.deref() : null;
    }
    const Re = Symbol.for('wasm promise_control');
    function Pe(e, t) {
      let r = null;
      const n = new Promise(function (n, o) {
        r = {
          isDone: !1,
          promise: null,
          resolve: (t) => {
            r.isDone || ((r.isDone = !0), n(t), e && e());
          },
          reject: (e) => {
            r.isDone || ((r.isDone = !0), o(e), t && t());
          }
        };
      });
      r.promise = n;
      const o = n;
      return (o[Re] = r), { promise: o, promise_control: r };
    }
    function Ce(e) {
      return e[Re];
    }
    function Ie(e) {
      if (
        !(function (e) {
          return void 0 !== e[Re];
        })(e)
      )
        throw new Error('Assert failed: Promise is not controllable');
    }
    const Fe =
      ('object' == typeof Promise || 'function' == typeof Promise) &&
      'function' == typeof Promise.resolve;
    function $e(e) {
      return (
        Promise.resolve(e) === e ||
        (('object' == typeof e || 'function' == typeof e) && 'function' == typeof e.then)
      );
    }
    function Ue(e) {
      const { promise: t, promise_control: r } = Pe();
      return (
        e()
          .then((e) => r.resolve(e))
          .catch((e) => r.reject(e)),
        t
      );
    }
    function We(e) {
      const t = Me(e);
      if (!t) return;
      const r = t.promise;
      if (!r) throw new Error(`Assert failed: Expected Promise for GCHandle ${e}`);
      Ie(r);
      Ce(r).reject('OperationCanceledException');
    }
    const Be = [];
    let ze,
      Le,
      He = null;
    const Ve = 'undefined' != typeof BigInt && 'undefined' != typeof BigInt64Array;
    function qe() {
      ze || ((ze = t._malloc(32768)), (Le = ze)), Be.push(Le);
    }
    function Ge(e, t, r) {
      if (!Number.isSafeInteger(e))
        throw new Error(`Assert failed: Value is not an integer: ${e} (${typeof e})`);
      if (!(e >= t && e <= r))
        throw new Error(`Assert failed: Overflow: value ${e} is out of ${t} ${r} range`);
    }
    function Je(e, r) {
      t.HEAP8.fill(0, e, r + e);
    }
    function Ye(e, r) {
      const n = !!r;
      'number' == typeof r && Ge(r, 0, 1), (t.HEAP32[e >>> 2] = n ? 1 : 0);
    }
    function Xe(e, r) {
      Ge(r, 0, 255), (t.HEAPU8[e] = r);
    }
    function Ze(e, r) {
      Ge(r, 0, 65535), (t.HEAPU16[e >>> 1] = r);
    }
    function Ke(e, r) {
      t.HEAPU32[e >>> 2] = r;
    }
    function Qe(e, r) {
      Ge(r, 0, 4294967295), (t.HEAPU32[e >>> 2] = r);
    }
    function et(e, r) {
      Ge(r, -128, 127), (t.HEAP8[e] = r);
    }
    function tt(e, r) {
      Ge(r, -32768, 32767), (t.HEAP16[e >>> 1] = r);
    }
    function rt(e, r) {
      t.HEAP32[e >>> 2] = r;
    }
    function nt(e, r) {
      Ge(r, -2147483648, 2147483647), (t.HEAP32[e >>> 2] = r);
    }
    function ot(e) {
      if (0 !== e)
        switch (e) {
          case 1:
            throw new Error('value was not an integer');
          case 2:
            throw new Error('value out of range');
          default:
            throw new Error('unknown internal error');
        }
    }
    function it(e, t) {
      if (!Number.isSafeInteger(t))
        throw new Error(`Assert failed: Value is not a safe integer: ${t} (${typeof t})`);
      ot(g.mono_wasm_f64_to_i52(e, t));
    }
    function at(e, t) {
      if (!Number.isSafeInteger(t))
        throw new Error(`Assert failed: Value is not a safe integer: ${t} (${typeof t})`);
      if (!(t >= 0)) throw new Error("Assert failed: Can't convert negative Number into UInt64");
      ot(g.mono_wasm_f64_to_u52(e, t));
    }
    function st(e, t) {
      if (!Ve) throw new Error('Assert failed: BigInt is not supported.');
      if ('bigint' != typeof t)
        throw new Error(`Assert failed: Value is not an bigint: ${t} (${typeof t})`);
      if (!(t >= St && t <= Et))
        throw new Error(`Assert failed: Overflow: value ${t} is out of ${St} ${Et} range`);
      He[e >>> 3] = t;
    }
    function ct(e, r) {
      if ('number' != typeof r)
        throw new Error(`Assert failed: Value is not a Number: ${r} (${typeof r})`);
      t.HEAPF32[e >>> 2] = r;
    }
    function ut(e, r) {
      if ('number' != typeof r)
        throw new Error(`Assert failed: Value is not a Number: ${r} (${typeof r})`);
      t.HEAPF64[e >>> 3] = r;
    }
    function _t(e) {
      return !!t.HEAP32[e >>> 2];
    }
    function lt(e) {
      return t.HEAPU8[e];
    }
    function ft(e) {
      return t.HEAPU16[e >>> 1];
    }
    function mt(e) {
      return t.HEAPU32[e >>> 2];
    }
    function dt(e) {
      return t.HEAP8[e];
    }
    function ht(e) {
      return t.HEAP16[e >>> 1];
    }
    function pt(e) {
      return t.HEAP32[e >>> 2];
    }
    function wt(e) {
      const t = g.mono_wasm_i52_to_f64(e, d._i52_error_scratch_buffer);
      return ot(pt(d._i52_error_scratch_buffer)), t;
    }
    function gt(e) {
      const t = g.mono_wasm_u52_to_f64(e, d._i52_error_scratch_buffer);
      return ot(pt(d._i52_error_scratch_buffer)), t;
    }
    function yt(e) {
      if (!Ve) throw new Error('Assert failed: BigInt is not supported.');
      return He[e >>> 3];
    }
    function bt(e) {
      return t.HEAPF32[e >>> 2];
    }
    function vt(e) {
      return t.HEAPF64[e >>> 3];
    }
    let Et, St;
    function At(e) {
      const r = t._malloc(e.length);
      return new Uint8Array(t.HEAPU8.buffer, r, e.length).set(e), r;
    }
    const kt = 8192;
    let Nt = null,
      Ot = null,
      xt = 0;
    const jt = [],
      Tt = [];
    function Dt(e, r) {
      if (e <= 0) throw new Error('capacity >= 1');
      const n = 4 * (e |= 0),
        o = t._malloc(n);
      if (o % 4 != 0) throw new Error('Malloc returned an unaligned offset');
      return Je(o, n), new Ct(o, e, !0, r);
    }
    function Mt(e) {
      let t;
      if (!e) throw new Error('address must be a location in the native heap');
      return Tt.length > 0 ? ((t = Tt.pop()), t._set_address(e)) : (t = new Ft(e)), t;
    }
    function Rt(e) {
      let t;
      if (jt.length > 0) t = jt.pop();
      else {
        const e = (function () {
          if (p(Nt) || !Ot) {
            (Nt = Dt(kt, 'js roots')), (Ot = new Int32Array(kt)), (xt = kt);
            for (let e = 0; e < kt; e++) Ot[e] = kt - e - 1;
          }
          if (xt < 1) throw new Error('Out of scratch root space');
          const e = Ot[xt - 1];
          return xt--, e;
        })();
        t = new It(Nt, e);
      }
      if (void 0 !== e) {
        if ('number' != typeof e) throw new Error('value must be an address in the managed heap');
        t.set(e);
      } else t.set(0);
      return t;
    }
    function Pt(...e) {
      for (let t = 0; t < e.length; t++) p(e[t]) || e[t].release();
    }
    class Ct {
      constructor(e, t, r, n) {
        const o = 4 * t;
        (this.__offset = e),
          (this.__offset32 = e >>> 2),
          (this.__count = t),
          (this.length = t),
          (this.__handle = g.mono_wasm_register_root(e, o, n || 'noname')),
          (this.__ownsAllocation = r);
      }
      _throw_index_out_of_range() {
        throw new Error('index out of range');
      }
      _check_in_range(e) {
        (e >= this.__count || e < 0) && this._throw_index_out_of_range();
      }
      get_address(e) {
        return this._check_in_range(e), this.__offset + 4 * e;
      }
      get_address_32(e) {
        return this._check_in_range(e), this.__offset32 + e;
      }
      get(e) {
        this._check_in_range(e);
        const r = this.get_address_32(e);
        return t.HEAPU32[r];
      }
      set(e, t) {
        const r = this.get_address(e);
        return g.mono_wasm_write_managed_pointer_unsafe(r, t), t;
      }
      copy_value_from_address(e, t) {
        const r = this.get_address(e);
        g.mono_wasm_copy_managed_pointer(r, t);
      }
      _unsafe_get(e) {
        return t.HEAPU32[this.__offset32 + e];
      }
      _unsafe_set(e, t) {
        const r = this.__offset + e;
        g.mono_wasm_write_managed_pointer_unsafe(r, t);
      }
      clear() {
        this.__offset && Je(this.__offset, 4 * this.__count);
      }
      release() {
        this.__offset &&
          this.__ownsAllocation &&
          (g.mono_wasm_deregister_root(this.__offset),
          Je(this.__offset, 4 * this.__count),
          t._free(this.__offset)),
          (this.__handle = this.__offset = this.__count = this.__offset32 = 0);
      }
      toString() {
        return `[root buffer @${this.get_address(0)}, size ${this.__count} ]`;
      }
    }
    class It {
      constructor(e, t) {
        (this.__buffer = e), (this.__index = t);
      }
      get_address() {
        return this.__buffer.get_address(this.__index);
      }
      get_address_32() {
        return this.__buffer.get_address_32(this.__index);
      }
      get address() {
        return this.__buffer.get_address(this.__index);
      }
      get() {
        return this.__buffer._unsafe_get(this.__index);
      }
      set(e) {
        const t = this.__buffer.get_address(this.__index);
        return g.mono_wasm_write_managed_pointer_unsafe(t, e), e;
      }
      copy_from(e) {
        const t = e.address,
          r = this.address;
        g.mono_wasm_copy_managed_pointer(r, t);
      }
      copy_to(e) {
        const t = this.address,
          r = e.address;
        g.mono_wasm_copy_managed_pointer(r, t);
      }
      copy_from_address(e) {
        const t = this.address;
        g.mono_wasm_copy_managed_pointer(t, e);
      }
      copy_to_address(e) {
        const t = this.address;
        g.mono_wasm_copy_managed_pointer(e, t);
      }
      get value() {
        return this.get();
      }
      set value(e) {
        this.set(e);
      }
      valueOf() {
        throw new Error(
          'Implicit conversion of roots to pointers is no longer supported. Use .value or .address as appropriate'
        );
      }
      clear() {
        this.set(0);
      }
      release() {
        if (!this.__buffer) throw new Error('No buffer');
        jt.length > 128
          ? ((function (e) {
              void 0 !== e && (Nt.set(e, 0), (Ot[xt] = e), xt++);
            })(this.__index),
            (this.__buffer = null),
            (this.__index = 0))
          : (this.set(0), jt.push(this));
      }
      toString() {
        return `[root @${this.address}]`;
      }
    }
    class Ft {
      constructor(e) {
        (this.__external_address = 0), (this.__external_address_32 = 0), this._set_address(e);
      }
      _set_address(e) {
        (this.__external_address = e), (this.__external_address_32 = e >>> 2);
      }
      get address() {
        return this.__external_address;
      }
      get_address() {
        return this.__external_address;
      }
      get_address_32() {
        return this.__external_address_32;
      }
      get() {
        return t.HEAPU32[this.__external_address_32];
      }
      set(e) {
        return g.mono_wasm_write_managed_pointer_unsafe(this.__external_address, e), e;
      }
      copy_from(e) {
        const t = e.address,
          r = this.__external_address;
        g.mono_wasm_copy_managed_pointer(r, t);
      }
      copy_to(e) {
        const t = this.__external_address,
          r = e.address;
        g.mono_wasm_copy_managed_pointer(r, t);
      }
      copy_from_address(e) {
        const t = this.__external_address;
        g.mono_wasm_copy_managed_pointer(t, e);
      }
      copy_to_address(e) {
        const t = this.__external_address;
        g.mono_wasm_copy_managed_pointer(e, t);
      }
      get value() {
        return this.get();
      }
      set value(e) {
        this.set(e);
      }
      valueOf() {
        throw new Error(
          'Implicit conversion of roots to pointers is no longer supported. Use .value or .address as appropriate'
        );
      }
      clear() {
        this.set(0);
      }
      release() {
        Tt.length < 128 && Tt.push(this);
      }
      toString() {
        return `[external root @${this.address}]`;
      }
    }
    const $t = new Map(),
      Ut = new Map(),
      Wt = Symbol.for('wasm bound_cs_function'),
      Bt = Symbol.for('wasm bound_js_function'),
      zt = 16;
    function Lt(e) {
      const r = t.stackAlloc(zt * e);
      if (!r || r % 8 != 0) throw new Error('Assert failed: Arg alignment');
      er(Ht(r, 0), yr.None);
      return er(Ht(r, 1), yr.None), r;
    }
    function Ht(e, t) {
      if (!e) throw new Error('Assert failed: Null args');
      return e + t * zt;
    }
    function Vt(e, t) {
      if (!e) throw new Error('Assert failed: Null signatures');
      return e + 32 * t + 8;
    }
    function qt(e) {
      if (!e) throw new Error('Assert failed: Null sig');
      return mt(e);
    }
    function Gt(e) {
      if (!e) throw new Error('Assert failed: Null sig');
      return mt(e + 16);
    }
    function Jt(e) {
      if (!e) throw new Error('Assert failed: Null sig');
      return mt(e + 20);
    }
    function Yt(e) {
      if (!e) throw new Error('Assert failed: Null sig');
      return mt(e + 24);
    }
    function Xt(e) {
      if (!e) throw new Error('Assert failed: Null sig');
      return mt(e + 28);
    }
    function Zt(e) {
      if (!e) throw new Error('Assert failed: Null signatures');
      return pt(e + 4);
    }
    function Kt(e) {
      if (!e) throw new Error('Assert failed: Null signatures');
      return pt(e);
    }
    function Qt(e) {
      if (!e) throw new Error('Assert failed: Null arg');
      return mt(e + 12);
    }
    function er(e, t) {
      if (!e) throw new Error('Assert failed: Null arg');
      Qe(e + 12, t);
    }
    function tr(e) {
      if (!e) throw new Error('Assert failed: Null arg');
      return mt(e);
    }
    function rr(e, t) {
      if (!e) throw new Error('Assert failed: Null arg');
      if ('boolean' != typeof t)
        throw new Error(`Assert failed: Value is not a Boolean: ${t} (${typeof t})`);
      Xe(e, t ? 1 : 0);
    }
    function nr(e, t) {
      if (!e) throw new Error('Assert failed: Null arg');
      Qe(e, t);
    }
    function or(e, t) {
      if (!e) throw new Error('Assert failed: Null arg');
      ut(e, t.getTime());
    }
    function ir(e, t) {
      if (!e) throw new Error('Assert failed: Null arg');
      ut(e, t);
    }
    function ar(e) {
      if (!e) throw new Error('Assert failed: Null arg');
      return mt(e + 4);
    }
    function sr(e, t) {
      if (!e) throw new Error('Assert failed: Null arg');
      Qe(e + 4, t);
    }
    function cr(e) {
      if (!e) throw new Error('Assert failed: Null arg');
      return mt(e + 4);
    }
    function ur(e, t) {
      if (!e) throw new Error('Assert failed: Null arg');
      Qe(e + 4, t);
    }
    function _r(e) {
      if (!e) throw new Error('Assert failed: Null arg');
      return Mt(e);
    }
    function lr(e) {
      if (!e) throw new Error('Assert failed: Null arg');
      return pt(e + 8);
    }
    function fr(e, t) {
      if (!e) throw new Error('Assert failed: Null arg');
      nt(e + 8, t);
    }
    class mr {
      dispose() {
        Te(this, 0);
      }
      get isDisposed() {
        return 0 === this[Ae];
      }
      toString() {
        return `CsObject(gc_handle: ${this[Ae]})`;
      }
    }
    class dr extends Error {
      constructor(e) {
        super(e),
          (this.superStack = Object.getOwnPropertyDescriptor(this, 'stack')),
          Object.defineProperty(this, 'stack', { get: this.getManageStack });
      }
      getSuperStack() {
        return this.superStack ? this.superStack.value : super.stack;
      }
      getManageStack() {
        const e = this[Ae];
        if (e) {
          const t = d.javaScriptExports.get_managed_stack_trace(e);
          if (t) return t + '\n' + this.getSuperStack();
        }
        return this.getSuperStack();
      }
      dispose() {
        Te(this, 0);
      }
      get isDisposed() {
        return 0 === this[Ae];
      }
    }
    function hr(e) {
      return e == yr.Byte
        ? 1
        : e == yr.Int32
          ? 4
          : e == yr.Int52 || e == yr.Double
            ? 8
            : e == yr.String || e == yr.Object || e == yr.JSObject
              ? zt
              : -1;
    }
    class pr {
      constructor(e, t, r) {
        (this._pointer = e), (this._length = t), (this._viewType = r);
      }
      _unsafe_create_view() {
        const e =
          0 == this._viewType
            ? new Uint8Array(t.HEAPU8.buffer, this._pointer, this._length)
            : 1 == this._viewType
              ? new Int32Array(t.HEAP32.buffer, this._pointer, this._length)
              : 2 == this._viewType
                ? new Float64Array(t.HEAPF64.buffer, this._pointer, this._length)
                : null;
        if (!e) throw new Error('NotImplementedException');
        return e;
      }
      set(e, t) {
        if (this.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
        const r = this._unsafe_create_view();
        if (!e || !r || e.constructor !== r.constructor)
          throw new Error(`Assert failed: Expected ${r.constructor}`);
        r.set(e, t);
      }
      copyTo(e, t) {
        if (this.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
        const r = this._unsafe_create_view();
        if (!e || !r || e.constructor !== r.constructor)
          throw new Error(`Assert failed: Expected ${r.constructor}`);
        const n = r.subarray(t);
        e.set(n);
      }
      slice(e, t) {
        if (this.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
        return this._unsafe_create_view().slice(e, t);
      }
      get length() {
        if (this.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
        return this._length;
      }
      get byteLength() {
        if (this.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
        return 0 == this._viewType
          ? this._length
          : 1 == this._viewType
            ? this._length << 2
            : 2 == this._viewType
              ? this._length << 3
              : 0;
      }
    }
    class wr extends pr {
      constructor(e, t, r) {
        super(e, t, r), (this.is_disposed = !1);
      }
      dispose() {
        this.is_disposed = !0;
      }
      get isDisposed() {
        return this.is_disposed;
      }
    }
    class gr extends pr {
      constructor(e, t, r) {
        super(e, t, r);
      }
      dispose() {
        Te(this, 0);
      }
      get isDisposed() {
        return 0 === this[Ae];
      }
    }
    var yr;
    !(function (e) {
      (e[(e.None = 0)] = 'None'),
        (e[(e.Void = 1)] = 'Void'),
        (e[(e.Discard = 2)] = 'Discard'),
        (e[(e.Boolean = 3)] = 'Boolean'),
        (e[(e.Byte = 4)] = 'Byte'),
        (e[(e.Char = 5)] = 'Char'),
        (e[(e.Int16 = 6)] = 'Int16'),
        (e[(e.Int32 = 7)] = 'Int32'),
        (e[(e.Int52 = 8)] = 'Int52'),
        (e[(e.BigInt64 = 9)] = 'BigInt64'),
        (e[(e.Double = 10)] = 'Double'),
        (e[(e.Single = 11)] = 'Single'),
        (e[(e.IntPtr = 12)] = 'IntPtr'),
        (e[(e.JSObject = 13)] = 'JSObject'),
        (e[(e.Object = 14)] = 'Object'),
        (e[(e.String = 15)] = 'String'),
        (e[(e.Exception = 16)] = 'Exception'),
        (e[(e.DateTime = 17)] = 'DateTime'),
        (e[(e.DateTimeOffset = 18)] = 'DateTimeOffset'),
        (e[(e.Nullable = 19)] = 'Nullable'),
        (e[(e.Task = 20)] = 'Task'),
        (e[(e.Array = 21)] = 'Array'),
        (e[(e.ArraySegment = 22)] = 'ArraySegment'),
        (e[(e.Span = 23)] = 'Span'),
        (e[(e.Action = 24)] = 'Action'),
        (e[(e.Function = 25)] = 'Function'),
        (e[(e.JSException = 26)] = 'JSException');
    })(yr || (yr = {}));
    const br = new Map(),
      vr = new Map();
    let Er = 0,
      Sr = null,
      Ar = 0;
    const kr = new (class {
        init_fields() {
          this.mono_wasm_string_decoder_buffer ||
            ((this.mono_text_decoder =
              'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : null),
            (this.mono_wasm_string_root = Rt()),
            (this.mono_wasm_string_decoder_buffer = t._malloc(12)));
        }
        copy(e) {
          if ((this.init_fields(), 0 === e)) return null;
          this.mono_wasm_string_root.value = e;
          const t = this.copy_root(this.mono_wasm_string_root);
          return (this.mono_wasm_string_root.value = 0), t;
        }
        copy_root(e) {
          if ((this.init_fields(), 0 === e.value)) return null;
          const t = this.mono_wasm_string_decoder_buffer + 0,
            r = this.mono_wasm_string_decoder_buffer + 4,
            n = this.mono_wasm_string_decoder_buffer + 8;
          let o;
          g.mono_wasm_string_get_data_ref(e.address, t, r, n);
          const i = pt(r),
            a = mt(t),
            s = pt(n);
          if (
            (s && (o = br.get(e.value)),
            void 0 === o &&
              (i && a ? ((o = this.decode(a, a + i)), s && br.set(e.value, o)) : (o = Nr)),
            void 0 === o)
          )
            throw new Error(`internal error when decoding string at location ${e.value}`);
          return o;
        }
        decode(e, r) {
          let n = '';
          if (this.mono_text_decoder) {
            const o =
              'undefined' != typeof SharedArrayBuffer &&
              t.HEAPU8.buffer instanceof SharedArrayBuffer
                ? t.HEAPU8.slice(e, r)
                : t.HEAPU8.subarray(e, r);
            n = this.mono_text_decoder.decode(o);
          } else
            for (let o = 0; o < r - e; o += 2) {
              const r = t.getValue(e + o, 'i16');
              n += String.fromCharCode(r);
            }
          return n;
        }
      })(),
      Nr = '';
    function Or(e) {
      return kr.copy(e);
    }
    function xr(e) {
      return kr.copy_root(e);
    }
    function jr(e) {
      if (0 === e.length) return Nr;
      const t = (function (e) {
          const t = Rt();
          try {
            return Tr(e, t), t.value;
          } finally {
            t.release();
          }
        })(e),
        r = br.get(t);
      if (p(r))
        throw new Error(
          'internal error: interned_string_table did not contain string after js_string_to_mono_string_interned'
        );
      return r;
    }
    function Tr(e, t) {
      let r;
      if (
        ('symbol' == typeof e
          ? ((r = e.description),
            'string' != typeof r && (r = Symbol.keyFor(e)),
            'string' != typeof r && (r = '<unknown Symbol>'))
          : 'string' == typeof e && (r = e),
        'string' != typeof r)
      )
        throw new Error(
          `Argument to js_string_to_mono_string_interned must be a string but was ${e}`
        );
      if (0 === r.length && Er) return void t.set(Er);
      const n = vr.get(r);
      n
        ? t.set(n)
        : (Mr(r, t),
          (function (e, t, r) {
            if (!t.value) throw new Error('null pointer passed to _store_string_in_intern_table');
            Ar >= 8192 && (Sr = null), Sr || ((Sr = Dt(8192, 'interned strings')), (Ar = 0));
            const n = Sr,
              o = Ar++;
            if (r && (g.mono_wasm_intern_string_ref(t.address), !t.value))
              throw new Error('mono_wasm_intern_string_ref produced a null pointer');
            vr.set(e, t.value),
              br.set(t.value, e),
              0 !== e.length || Er || (Er = t.value),
              n.copy_value_from_address(o, t.address);
          })(r, t, !0));
    }
    function Dr(e, t) {
      if ((t.clear(), null !== e))
        if ('symbol' == typeof e) Tr(e, t);
        else {
          if ('string' != typeof e) throw new Error('Expected string argument, got ' + typeof e);
          if (0 === e.length) Tr(e, t);
          else {
            if (e.length <= 256) {
              const r = vr.get(e);
              if (r) return void t.set(r);
            }
            Mr(e, t);
          }
        }
    }
    function Mr(e, r) {
      const n = t._malloc(2 * (e.length + 1)),
        o = (n >>> 1) | 0;
      for (let r = 0; r < e.length; r++) t.HEAP16[o + r] = e.charCodeAt(r);
      (t.HEAP16[o + e.length] = 0),
        g.mono_wasm_string_from_utf16_ref(n, e.length, r.address),
        t._free(n);
    }
    function Rr(e) {
      const t = Rt();
      try {
        return Dr(e, t), t.value;
      } finally {
        t.release();
      }
    }
    function Pr(e, t, r, n, o, i) {
      let a = '',
        s = '',
        c = '';
      const u = 'converter' + t;
      let _ = 'null',
        l = 'null',
        f = 'null',
        m = 'null',
        d = qt(e);
      if (d === yr.None || d === yr.Void) return { converters: a, call_body: c, marshaler_type: d };
      const h = Gt(e);
      if (h !== yr.None) {
        const e = Ut.get(h);
        if (!e || 'function' != typeof e)
          throw new Error(`Assert failed: Unknow converter for type ${h} at ${t}`);
        d != yr.Nullable
          ? ((m = 'converter' + t + '_res'), (a += ', ' + m), (s += ' ' + yr[h]), (i[m] = e))
          : (d = h);
      }
      const p = Jt(e);
      if (p !== yr.None) {
        const e = $t.get(p);
        if (!e || 'function' != typeof e)
          throw new Error(`Assert failed: Unknow converter for type ${p} at ${t}`);
        (_ = 'converter' + t + '_arg1'), (a += ', ' + _), (s += ' ' + yr[p]), (i[_] = e);
      }
      const w = Yt(e);
      if (w !== yr.None) {
        const e = $t.get(w);
        if (!e || 'function' != typeof e)
          throw new Error(`Assert failed: Unknow converter for type ${w} at ${t}`);
        (l = 'converter' + t + '_arg2'), (a += ', ' + l), (s += ' ' + yr[w]), (i[l] = e);
      }
      const g = Xt(e);
      if (g !== yr.None) {
        const e = $t.get(g);
        if (!e || 'function' != typeof e)
          throw new Error(`Assert failed: Unknow converter for type ${g} at ${t}`);
        (f = 'converter' + t + '_arg3'), (a += ', ' + f), (s += ' ' + yr[g]), (i[f] = e);
      }
      const y = Ut.get(d),
        b = yr[d];
      if (!y || 'function' != typeof y)
        throw new Error(`Assert failed: Unknow converter for type ${b} (${d}) at ${t} `);
      return (
        (a += ', ' + u),
        (s += ' ' + b),
        (i[u] = y),
        (c =
          d == yr.Task
            ? `  ${u}(args + ${r}, ${o}, signature + ${n}, ${m}); // ${s} \n`
            : d == yr.Action || d == yr.Function
              ? `  ${u}(args + ${r}, ${o}, signature + ${n}, ${m}, ${_}, ${l}, ${l}); // ${s} \n`
              : `  ${u}(args + ${r}, ${o}, signature + ${n}); // ${s} \n`),
        { converters: a, call_body: c, marshaler_type: d }
      );
    }
    function Cr(e, t) {
      null == t ? er(e, yr.None) : (er(e, yr.Boolean), rr(e, t));
    }
    function Ir(e, t) {
      null == t
        ? er(e, yr.None)
        : (er(e, yr.Byte),
          (function (e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            Xe(e, t);
          })(e, t));
    }
    function Fr(e, t) {
      null == t
        ? er(e, yr.None)
        : (er(e, yr.Char),
          (function (e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            Ze(e, t);
          })(e, t));
    }
    function $r(e, t) {
      null == t
        ? er(e, yr.None)
        : (er(e, yr.Int16),
          (function (e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            tt(e, t);
          })(e, t));
    }
    function Ur(e, t) {
      null == t
        ? er(e, yr.None)
        : (er(e, yr.Int32),
          (function (e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            nt(e, t);
          })(e, t));
    }
    function Wr(e, t) {
      null == t
        ? er(e, yr.None)
        : (er(e, yr.Int52),
          (function (e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            if (!Number.isSafeInteger(t))
              throw new Error(`Assert failed: Value is not an integer: ${t} (${typeof t})`);
            ut(e, t);
          })(e, t));
    }
    function Br(e, t) {
      null == t
        ? er(e, yr.None)
        : (er(e, yr.BigInt64),
          (function (e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            st(e, t);
          })(e, t));
    }
    function zr(e, t) {
      null == t ? er(e, yr.None) : (er(e, yr.Double), ir(e, t));
    }
    function Lr(e, t) {
      null == t
        ? er(e, yr.None)
        : (er(e, yr.Single),
          (function (e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            ct(e, t);
          })(e, t));
    }
    function Hr(e, t) {
      null == t ? er(e, yr.None) : (er(e, yr.IntPtr), nr(e, t));
    }
    function Vr(e, t) {
      if (null == t) er(e, yr.None);
      else {
        if (!(t instanceof Date)) throw new Error('Assert failed: Value is not a Date');
        er(e, yr.DateTime), or(e, t);
      }
    }
    function qr(e, t) {
      if (null == t) er(e, yr.None);
      else {
        if (!(t instanceof Date)) throw new Error('Assert failed: Value is not a Date');
        er(e, yr.DateTimeOffset), or(e, t);
      }
    }
    function Gr(e, t) {
      if (null == t) er(e, yr.None);
      else {
        if ((er(e, yr.String), 'string' != typeof t))
          throw new Error('Assert failed: Value is not a String');
        Jr(e, t);
      }
    }
    function Jr(e, t) {
      const r = _r(e);
      try {
        Dr(t, r);
      } finally {
        r.release();
      }
    }
    function Yr(e) {
      er(e, yr.None);
    }
    function Xr(e, t, r, n, o, i, a) {
      if (null == t) return void er(e, yr.None);
      if (!(t && t instanceof Function)) throw new Error('Assert failed: Value is not a Function');
      const s = (e) => {
        const r = Ht(e, 0),
          s = Ht(e, 1),
          c = Ht(e, 2),
          u = Ht(e, 3),
          _ = Ht(e, 4);
        try {
          let e, r, l;
          o && (e = o(c)), i && (r = i(u)), a && (l = a(_));
          const f = t(e, r, l);
          n && n(s, f);
        } catch (e) {
          Qr(r, e);
        }
      };
      s[Bt] = !0;
      sr(e, Oe(s)), er(e, yr.Function);
    }
    class Zr {
      constructor(e) {
        this.promise = e;
      }
      dispose() {
        Te(this, 0);
      }
      get isDisposed() {
        return 0 === this[Ae];
      }
    }
    function Kr(e, t, r, n) {
      if (null == t) return void er(e, yr.None);
      if (!$e(t)) throw new Error('Assert failed: Value is not a Promise');
      const o = d.javaScriptExports.create_task_callback();
      ur(e, o), er(e, yr.Task);
      const i = new Zr(t);
      je(i, o),
        t
          .then((e) => {
            d.javaScriptExports.complete_task(o, null, e, n || tn), Te(i, o);
          })
          .catch((e) => {
            d.javaScriptExports.complete_task(o, e, null, void 0), Te(i, o);
          });
    }
    function Qr(e, t) {
      if (null == t) er(e, yr.None);
      else if (t instanceof dr) {
        er(e, yr.Exception);
        ur(e, De(t));
      } else {
        if ('object' != typeof t && 'string' != typeof t)
          throw new Error('Assert failed: Value is not an Error ' + typeof t);
        er(e, yr.JSException);
        Jr(e, t.toString());
        const r = t[ke];
        if (r) sr(e, r);
        else {
          sr(e, Oe(t));
        }
      }
    }
    function en(e, t) {
      if (null == t) er(e, yr.None);
      else {
        if (void 0 !== t[Ae])
          throw new Error('Assert failed: JSObject proxy of ManagedObject proxy is not supported');
        if ('function' != typeof t && 'object' != typeof t)
          throw new Error(`Assert failed: JSObject proxy of ${typeof t} is not supported`);
        er(e, yr.JSObject);
        sr(e, Oe(t));
      }
    }
    function tn(e, t) {
      if (null == t) er(e, yr.None);
      else {
        const r = t[Ae],
          n = typeof t;
        if (void 0 === r)
          if ('string' === n || 'symbol' === n) er(e, yr.String), Jr(e, t);
          else if ('number' === n) er(e, yr.Double), ir(e, t);
          else {
            if ('bigint' === n) throw new Error('NotImplementedException: bigint');
            if ('boolean' === n) er(e, yr.Boolean), rr(e, t);
            else if (t instanceof Date) er(e, yr.DateTime), or(e, t);
            else if (t instanceof Error) Qr(e, t);
            else if (t instanceof Uint8Array) nn(e, t, yr.Byte);
            else if (t instanceof Float64Array) nn(e, t, yr.Double);
            else if (t instanceof Int32Array) nn(e, t, yr.Int32);
            else if (Array.isArray(t)) nn(e, t, yr.Object);
            else {
              if (
                t instanceof Int16Array ||
                t instanceof Int8Array ||
                t instanceof Uint8ClampedArray ||
                t instanceof Uint16Array ||
                t instanceof Uint32Array ||
                t instanceof Float32Array
              )
                throw new Error('NotImplementedException: TypedArray');
              if ($e(t)) Kr(e, t);
              else {
                if (t instanceof wr) throw new Error('NotImplementedException: Span');
                if ('object' != n) throw new Error(`JSObject proxy is not supported for ${n} ${t}`);
                {
                  const r = Oe(t);
                  er(e, yr.JSObject), sr(e, r);
                }
              }
            }
          }
        else {
          if ((De(t), t instanceof gr)) throw new Error('NotImplementedException: ArraySegment');
          if (t instanceof dr) er(e, yr.Exception), ur(e, r);
          else {
            if (!(t instanceof mr)) throw new Error('NotImplementedException ' + n);
            er(e, yr.Object), ur(e, r);
          }
        }
      }
    }
    function rn(e, t, r) {
      if (!r) throw new Error('Assert failed: Expected valid sig parameter');
      nn(e, t, Jt(r));
    }
    function nn(e, r, n) {
      if (null == r) er(e, yr.None);
      else {
        const o = hr(n);
        if (-1 == o) throw new Error(`Assert failed: Element type ${yr[n]} not supported`);
        const i = r.length,
          a = o * i,
          s = t._malloc(a);
        if (n == yr.String) {
          if (!Array.isArray(r)) throw new Error('Assert failed: Value is not an Array');
          Je(s, a), g.mono_wasm_register_root(s, a, 'marshal_array_to_cs');
          for (let e = 0; e < i; e++) {
            Gr(Ht(s, e), r[e]);
          }
        } else if (n == yr.Object) {
          if (!Array.isArray(r)) throw new Error('Assert failed: Value is not an Array');
          Je(s, a), g.mono_wasm_register_root(s, a, 'marshal_array_to_cs');
          for (let e = 0; e < i; e++) {
            tn(Ht(s, e), r[e]);
          }
        } else if (n == yr.JSObject) {
          if (!Array.isArray(r)) throw new Error('Assert failed: Value is not an Array');
          Je(s, a);
          for (let e = 0; e < i; e++) {
            en(Ht(s, e), r[e]);
          }
        } else if (n == yr.Byte) {
          if (!(Array.isArray(r) || r instanceof Uint8Array))
            throw new Error('Assert failed: Value is not an Array or Uint8Array');
          t.HEAPU8.subarray(s, s + i).set(r);
        } else if (n == yr.Int32) {
          if (!(Array.isArray(r) || r instanceof Int32Array))
            throw new Error('Assert failed: Value is not an Array or Int32Array');
          t.HEAP32.subarray(s >> 2, (s >> 2) + i).set(r);
        } else {
          if (n != yr.Double) throw new Error('not implemented');
          if (!(Array.isArray(r) || r instanceof Float64Array))
            throw new Error('Assert failed: Value is not an Array or Float64Array');
          t.HEAPF64.subarray(s >> 3, (s >> 3) + i).set(r);
        }
        nr(e, s),
          er(e, yr.Array),
          (function (e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            Qe(e + 4, t);
          })(e, n),
          fr(e, r.length);
      }
    }
    function on(e, t, r) {
      if (!r) throw new Error('Assert failed: Expected valid sig parameter');
      if (t.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
      sn(r, t._viewType), er(e, yr.Span), nr(e, t._pointer), fr(e, t.length);
    }
    function an(e, t, r) {
      if (!r) throw new Error('Assert failed: Expected valid sig parameter');
      const n = De(t);
      if (!n)
        throw new Error('Assert failed: Only roundtrip of ArraySegment instance created by C#');
      sn(r, t._viewType), er(e, yr.ArraySegment), nr(e, t._pointer), fr(e, t.length), ur(e, n);
    }
    function sn(e, t) {
      const r = Jt(e);
      if (r == yr.Byte) {
        if (0 != t) throw new Error('Assert failed: Expected MemoryViewType.Byte');
      } else if (r == yr.Int32) {
        if (1 != t) throw new Error('Assert failed: Expected MemoryViewType.Int32');
      } else {
        if (r != yr.Double) throw new Error(`NotImplementedException ${yr[r]} `);
        if (2 != t) throw new Error('Assert failed: Expected MemoryViewType.Double');
      }
    }
    function cn(e, t, r, n, o, i) {
      let a = '',
        s = '',
        c = '';
      const u = 'converter' + t;
      let _ = 'null',
        l = 'null',
        f = 'null',
        m = 'null',
        d = qt(e);
      if (d === yr.None || d === yr.Void) return { converters: a, call_body: c, marshaler_type: d };
      const h = Gt(e);
      if (h !== yr.None) {
        const e = $t.get(h);
        if (!e || 'function' != typeof e)
          throw new Error(`Assert failed: Unknow converter for type ${h} at ${t}`);
        d != yr.Nullable
          ? ((m = 'converter' + t + '_res'), (a += ', ' + m), (s += ' ' + yr[h]), (i[m] = e))
          : (d = h);
      }
      const p = Jt(e);
      if (p !== yr.None) {
        const e = Ut.get(p);
        if (!e || 'function' != typeof e)
          throw new Error(`Assert failed: Unknow converter for type ${p} at ${t}`);
        (_ = 'converter' + t + '_arg1'), (a += ', ' + _), (s += ' ' + yr[p]), (i[_] = e);
      }
      const w = Yt(e);
      if (w !== yr.None) {
        const e = Ut.get(w);
        if (!e || 'function' != typeof e)
          throw new Error(`Assert failed: Unknow converter for type ${w} at ${t}`);
        (l = 'converter' + t + '_arg2'), (a += ', ' + l), (s += ' ' + yr[w]), (i[l] = e);
      }
      const g = Xt(e);
      if (g !== yr.None) {
        const e = Ut.get(g);
        if (!e || 'function' != typeof e)
          throw new Error(`Assert failed: Unknow converter for type ${g} at ${t}`);
        (f = 'converter' + t + '_arg3'), (a += ', ' + f), (s += ' ' + yr[g]), (i[f] = e);
      }
      const y = $t.get(d);
      if (!y || 'function' != typeof y)
        throw new Error(`Assert failed: Unknow converter for type ${d} at ${t} `);
      return (
        (a += ', ' + u),
        (s += ' ' + yr[d]),
        (i[u] = y),
        (c =
          d == yr.Task
            ? `  const ${o} = ${u}(args + ${r}, signature + ${n}, ${m}); // ${s} \n`
            : d == yr.Action || d == yr.Function
              ? `  const ${o} = ${u}(args + ${r}, signature + ${n}, ${m}, ${_}, ${l}, ${f}); // ${s} \n`
              : `  const ${o} = ${u}(args + ${r}, signature + ${n}); // ${s} \n`),
        { converters: a, call_body: c, marshaler_type: d }
      );
    }
    function un(e) {
      return Qt(e) == yr.None
        ? null
        : (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return !!lt(e);
          })(e);
    }
    function _n(e) {
      return Qt(e) == yr.None
        ? null
        : (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return lt(e);
          })(e);
    }
    function ln(e) {
      return Qt(e) == yr.None
        ? null
        : (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return ft(e);
          })(e);
    }
    function fn(e) {
      return Qt(e) == yr.None
        ? null
        : (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return ht(e);
          })(e);
    }
    function mn(e) {
      return Qt(e) == yr.None
        ? null
        : (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return pt(e);
          })(e);
    }
    function dn(e) {
      return Qt(e) == yr.None
        ? null
        : (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return vt(e);
          })(e);
    }
    function hn(e) {
      return Qt(e) == yr.None
        ? null
        : (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return yt(e);
          })(e);
    }
    function pn(e) {
      return Qt(e) == yr.None
        ? null
        : (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return bt(e);
          })(e);
    }
    function wn(e) {
      return Qt(e) == yr.None
        ? null
        : (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return vt(e);
          })(e);
    }
    function gn(e) {
      return Qt(e) == yr.None ? null : tr(e);
    }
    function yn() {
      return null;
    }
    function bn(e) {
      return Qt(e) === yr.None
        ? null
        : (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            const t = vt(e);
            return new Date(t);
          })(e);
    }
    function vn(e, t, r, n, o, i) {
      if (Qt(e) === yr.None) return null;
      const a = cr(e);
      let s = Me(a);
      return (
        null != s ||
          ((s = (e, t, s) => d.javaScriptExports.call_delegate(a, e, t, s, r, n, o, i)), je(s, a)),
        s
      );
    }
    function En(e, t, r) {
      const n = Qt(e);
      if (n === yr.None) return null;
      if (n !== yr.Task) {
        if ((r || (r = $t.get(n)), !r))
          throw new Error(`Assert failed: Unknow sub_converter for type ${yr[n]} `);
        const t = r(e);
        return new Promise((e) => e(t));
      }
      const o = ar(e);
      if (0 == o) return new Promise((e) => e(void 0));
      const i = Ne(o);
      if (!i) throw new Error(`Assert failed: ERR28: promise not found for js_handle: ${o} `);
      Ie(i);
      const a = Ce(i),
        s = a.resolve;
      return (
        (a.resolve = (e) => {
          const t = Qt(e);
          if (t === yr.None) return void s(null);
          if ((r || (r = $t.get(t)), !r))
            throw new Error(`Assert failed: Unknow sub_converter for type ${yr[t]}`);
          const n = r(e);
          s(n);
        }),
        i
      );
    }
    function Sn(e) {
      const t = Ht(e, 0),
        r = Ht(e, 1),
        n = Ht(e, 2),
        o = Ht(e, 3),
        i = Qt(t),
        a = Qt(o),
        s = ar(n);
      if (0 === s) {
        const { promise: e, promise_control: n } = Pe();
        if ((sr(r, Oe(e)), i !== yr.None)) {
          const e = kn(t);
          n.reject(e);
        } else if (a !== yr.Task) {
          const e = $t.get(a);
          if (!e) throw new Error(`Assert failed: Unknow sub_converter for type ${yr[a]} `);
          const t = e(o);
          n.resolve(t);
        }
      } else {
        const e = Ne(s);
        if (!e) throw new Error(`Assert failed: ERR25: promise not found for js_handle: ${s} `);
        Ie(e);
        const r = Ce(e);
        if (i !== yr.None) {
          const e = kn(t);
          r.reject(e);
        } else a !== yr.Task && r.resolve(o);
      }
      er(r, yr.Task), er(t, yr.None);
    }
    function An(e) {
      if (Qt(e) == yr.None) return null;
      const t = _r(e);
      try {
        return xr(t);
      } finally {
        t.release();
      }
    }
    function kn(e) {
      const t = Qt(e);
      if (t == yr.None) return null;
      if (t == yr.JSException) {
        return Ne(ar(e));
      }
      const r = cr(e);
      let n = Me(r);
      if (null == n) {
        const t = An(e);
        (n = new dr(t)), je(n, r);
      }
      return n;
    }
    function Nn(e) {
      if (Qt(e) == yr.None) return null;
      return Ne(ar(e));
    }
    function On(e) {
      const t = Qt(e);
      if (t == yr.None) return null;
      if (t == yr.JSObject) {
        return Ne(ar(e));
      }
      if (t == yr.Array) {
        return jn(
          e,
          (function (e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return mt(e + 4);
          })(e)
        );
      }
      if (t == yr.Object) {
        const t = cr(e);
        if (0 === t) return null;
        let r = Me(t);
        return r || ((r = new mr()), je(r, t)), r;
      }
      const r = $t.get(t);
      if (!r) throw new Error(`Assert failed: Unknow converter for type ${yr[t]}`);
      return r(e);
    }
    function xn(e, t) {
      if (!t) throw new Error('Assert failed: Expected valid sig parameter');
      return jn(e, Jt(t));
    }
    function jn(e, r) {
      if (Qt(e) == yr.None) return null;
      if (-1 == hr(r)) throw new Error(`Assert failed: Element type ${yr[r]} not supported`);
      const n = tr(e),
        o = lr(e);
      let i = null;
      if (r == yr.String) {
        i = new Array(o);
        for (let e = 0; e < o; e++) {
          const t = Ht(n, e);
          i[e] = An(t);
        }
        g.mono_wasm_deregister_root(n);
      } else if (r == yr.Object) {
        i = new Array(o);
        for (let e = 0; e < o; e++) {
          const t = Ht(n, e);
          i[e] = On(t);
        }
        g.mono_wasm_deregister_root(n);
      } else if (r == yr.JSObject) {
        i = new Array(o);
        for (let e = 0; e < o; e++) {
          const t = Ht(n, e);
          i[e] = Nn(t);
        }
      } else if (r == yr.Byte) {
        i = t.HEAPU8.subarray(n, n + o).slice();
      } else if (r == yr.Int32) {
        i = t.HEAP32.subarray(n >> 2, (n >> 2) + o).slice();
      } else {
        if (r != yr.Double) throw new Error(`NotImplementedException ${yr[r]} `);
        i = t.HEAPF64.subarray(n >> 3, (n >> 3) + o).slice();
      }
      return t._free(n), i;
    }
    function Tn(e, t) {
      if (!t) throw new Error('Assert failed: Expected valid sig parameter');
      const r = Jt(t),
        n = tr(e),
        o = lr(e);
      let i = null;
      if (r == yr.Byte) i = new wr(n, o, 0);
      else if (r == yr.Int32) i = new wr(n, o, 1);
      else {
        if (r != yr.Double) throw new Error(`NotImplementedException ${yr[r]} `);
        i = new wr(n, o, 2);
      }
      return i;
    }
    function Dn(e, t) {
      if (!t) throw new Error('Assert failed: Expected valid sig parameter');
      const r = Jt(t),
        n = tr(e),
        o = lr(e);
      let i = null;
      if (r == yr.Byte) i = new gr(n, o, 0);
      else if (r == yr.Int32) i = new gr(n, o, 1);
      else {
        if (r != yr.Double) throw new Error(`NotImplementedException ${yr[r]} `);
        i = new gr(n, o, 2);
      }
      return je(i, cr(e)), i;
    }
    let Mn, Rn;
    const Pn = {};
    const Cn = Symbol.for('wasm type');
    const In = Pe(),
      Fn = Pe();
    let $n = 0,
      Un = 0,
      Wn = 0,
      Bn = 0;
    const zn = [],
      Ln = Object.create(null);
    let Hn,
      Vn = 0;
    const qn = { 'js-module-threads': !0 },
      Gn = { dotnetwasm: !0 },
      Jn = { 'js-module-threads': !0, dotnetwasm: !0 };
    async function Yn() {
      d.diagnosticTracing && console.debug('MONO_WASM: mono_download_assets'),
        (d.maxParallelDownloads = d.config.maxParallelDownloads || d.maxParallelDownloads);
      try {
        const e = [];
        for (const t of d.config.assets) {
          const r = t;
          if ((Jn[r.behavior] || Bn++, !qn[r.behavior])) {
            const t = Gn[r.behavior];
            if ((Wn++, r.pendingDownload)) {
              r.pendingDownloadInternal = r.pendingDownload;
              const n = async () => {
                const e = await r.pendingDownloadInternal.response;
                return (
                  t || (r.buffer = await e.arrayBuffer()), ++$n, { asset: r, buffer: r.buffer }
                );
              };
              e.push(n());
            } else {
              const n = async () => ((r.buffer = await Xn(r, !t)), { asset: r, buffer: r.buffer });
              e.push(n());
            }
          }
        }
        Fn.promise_control.resolve();
        const r = [];
        for (const t of e)
          r.push(
            (async () => {
              const e = await t,
                r = e.asset;
              if (e.buffer) {
                if (!Jn[r.behavior]) {
                  const t = r.pendingDownloadInternal.url,
                    n = new Uint8Array(r.buffer);
                  (r.pendingDownloadInternal = null),
                    (r.pendingDownload = null),
                    (r.buffer = null),
                    (e.buffer = null),
                    await Aa.promise,
                    eo(r, t, n);
                }
              } else {
                if (Gn[r.behavior]) Gn[r.behavior] && ++$n;
                else {
                  if (!r.isOptional)
                    throw new Error('Assert failed: Expected asset to have the downloaded buffer');
                  qn[r.behavior] || Wn--, Jn[r.behavior] || Bn--;
                }
              }
            })()
          );
        Promise.all(r)
          .then(() => {
            In.promise_control.resolve();
          })
          .catch((e) => {
            t.printErr('MONO_WASM: Error in mono_download_assets: ' + e), Da(e, !0);
          });
      } catch (e) {
        throw (t.printErr('MONO_WASM: Error in mono_download_assets: ' + e), e);
      }
    }
    async function Xn(e, t) {
      try {
        return await Zn(e, t);
      } catch (r) {
        if (i || o) throw r;
        if (e.pendingDownload && e.pendingDownloadInternal == e.pendingDownload) throw r;
        if (e.resolvedUrl && -1 != e.resolvedUrl.indexOf('file://')) throw r;
        if (r && 404 == r.status) throw r;
        (e.pendingDownloadInternal = void 0), await Fn.promise;
        try {
          return await Zn(e, t);
        } catch (r) {
          return (
            (e.pendingDownloadInternal = void 0),
            await (function (e) {
              return new Promise((t) => setTimeout(t, e));
            })(100),
            await Zn(e, t)
          );
        }
      }
    }
    async function Zn(e, r) {
      for (; Hn; ) await Hn.promise;
      try {
        ++Vn,
          Vn == d.maxParallelDownloads &&
            (d.diagnosticTracing &&
              console.debug('MONO_WASM: Throttling further parallel downloads'),
            (Hn = Pe()));
        const n = await (async function (e) {
          if (e.buffer) {
            const t = e.buffer;
            return (
              (e.buffer = null),
              (e.pendingDownloadInternal = {
                url: 'undefined://' + e.name,
                name: e.name,
                response: Promise.resolve({ arrayBuffer: () => t, headers: { get: () => {} } })
              }),
              e.pendingDownloadInternal.response
            );
          }
          if (e.pendingDownloadInternal && e.pendingDownloadInternal.response) {
            return await e.pendingDownloadInternal.response;
          }
          const r = e.loadRemote && d.config.remoteSources ? d.config.remoteSources : [''];
          let n;
          for (let t of r) {
            (t = t.trim()), './' === t && (t = '');
            const r = Kn(e, t);
            e.name === r
              ? d.diagnosticTracing && console.debug(`MONO_WASM: Attempting to download '${r}'`)
              : d.diagnosticTracing &&
                console.debug(`MONO_WASM: Attempting to download '${r}' for ${e.name}`);
            try {
              const t = Qn({ name: e.name, resolvedUrl: r, hash: e.hash, behavior: e.behavior });
              if (((e.pendingDownloadInternal = t), (n = await t.response), !n.ok)) continue;
              return n;
            } catch (e) {
              continue;
            }
          }
          const o = e.isOptional || (e.name.match(/\.pdb$/) && d.config.ignorePdbLoadErrors);
          if (!n) throw new Error(`Assert failed: Response undefined ${e.name}`);
          if (o)
            return void t.print(
              `MONO_WASM: optional download '${n.url}' for ${e.name} failed ${n.status} ${n.statusText}`
            );
          {
            const t = new Error(
              `MONO_WASM: download '${n.url}' for ${e.name} failed ${n.status} ${n.statusText}`
            );
            throw ((t.status = n.status), t);
          }
        })(e);
        if (!r || !n) return;
        const o = await n.arrayBuffer();
        return ++$n, o;
      } finally {
        if ((--Vn, Hn && Vn == d.maxParallelDownloads - 1)) {
          d.diagnosticTracing && console.debug('MONO_WASM: Resuming more parallel downloads');
          const e = Hn;
          (Hn = void 0), e.promise_control.resolve();
        }
      }
    }
    function Kn(e, t) {
      if (null == t) throw new Error(`Assert failed: sourcePrefix must be provided for ${e.name}`);
      let r;
      const n = d.config.assemblyRootFolder;
      if (e.resolvedUrl) r = e.resolvedUrl;
      else {
        if ('' === t)
          if ('assembly' === e.behavior || 'pdb' === e.behavior) r = n ? n + '/' + e.name : e.name;
          else if ('resource' === e.behavior) {
            const t = e.culture && '' !== e.culture ? `${e.culture}/${e.name}` : e.name;
            r = n ? n + '/' + t : t;
          } else r = e.name;
        else r = t + e.name;
        r = d.locateFile(r);
      }
      if (!r || 'string' != typeof r)
        throw new Error('Assert failed: attemptUrl need to be path or url string');
      return r;
    }
    function Qn(e) {
      try {
        if ('function' == typeof t.downloadResource) {
          const r = t.downloadResource(e);
          if (r) return r;
        }
        const r = {};
        e.hash && (r.integrity = e.hash);
        const n = d.fetch_like(e.resolvedUrl, r);
        return { name: e.name, url: e.resolvedUrl, response: n };
      } catch (t) {
        const r = {
          ok: !1,
          url: e.resolvedUrl,
          status: 500,
          statusText: 'ERR29: ' + t,
          arrayBuffer: () => {
            throw t;
          },
          json: () => {
            throw t;
          }
        };
        return { name: e.name, url: e.resolvedUrl, response: Promise.resolve(r) };
      }
    }
    function eo(e, r, n) {
      d.diagnosticTracing &&
        console.debug(`MONO_WASM: Loaded:${e.name} as ${e.behavior} size ${n.length} from ${r}`);
      const o = 'string' == typeof e.virtualPath ? e.virtualPath : e.name;
      let i = null;
      switch (e.behavior) {
        case 'dotnetwasm':
        case 'js-module-threads':
          break;
        case 'resource':
        case 'assembly':
        case 'pdb':
          zn.push({ url: r, file: o });
        case 'heap':
        case 'icu':
          (i = At(n)), (Ln[o] = [i, n.length]);
          break;
        case 'vfs': {
          const e = o.lastIndexOf('/');
          let r = e > 0 ? o.substr(0, e) : null,
            i = e > 0 ? o.substr(e + 1) : o;
          i.startsWith('/') && (i = i.substr(1)),
            r
              ? (d.diagnosticTracing && console.debug(`MONO_WASM: Creating directory '${r}'`),
                t.FS_createPath('/', r, !0, !0))
              : (r = '/'),
            d.diagnosticTracing &&
              console.debug(`MONO_WASM: Creating file '${i}' in directory '${r}'`),
            to(n, r) || t.FS_createDataFile(r, i, n, !0, !0, !0);
          break;
        }
        default:
          throw new Error(`Unrecognized asset behavior:${e.behavior}, for asset ${e.name}`);
      }
      if ('assembly' === e.behavior) {
        if (!g.mono_wasm_add_assembly(o, i, n.length)) {
          const e = zn.findIndex((e) => e.file == o);
          zn.splice(e, 1);
        }
      } else
        'icu' === e.behavior
          ? G(i) || t.printErr(`MONO_WASM: Error loading ICU asset ${e.name}`)
          : 'resource' === e.behavior &&
            g.mono_wasm_add_satellite_assembly(o, e.culture || '', i, n.length);
      ++Un;
    }
    function to(e, r) {
      if (e.length < 8) return !1;
      const n = new DataView(e.buffer);
      if (1651270004 != n.getUint32(0, !0)) return !1;
      const o = n.getUint32(4, !0);
      if (0 == o || e.length < o + 8) return !1;
      let i;
      try {
        const r = t.UTF8ArrayToString(e, 8, o);
        if (((i = JSON.parse(r)), !(i instanceof Array))) return !1;
      } catch (e) {
        return !1;
      }
      e = e.slice(o + 8);
      const a = new Set();
      i.filter((e) => {
        const t = e[0],
          r = t.lastIndexOf('/'),
          n = t.slice(0, r + 1);
        a.add(n);
      }),
        a.forEach((e) => {
          t.FS_createPath(r, e, !0, !0);
        });
      for (const n of i) {
        const o = n[0],
          i = n[1],
          a = e.slice(0, i);
        t.FS_createDataFile(r, o, a, !0, !0), (e = e.slice(i));
      }
      return !0;
    }
    async function ro() {
      if ((await In.promise, d.config.assets)) {
        if ($n != Wn)
          throw new Error(
            `Assert failed: Expected ${Wn} assets to be downloaded, but only finished ${$n}`
          );
        if (Un != Bn)
          throw new Error(
            `Assert failed: Expected ${Bn} assets to be in memory, but only instantiated ${Un}`
          );
        zn.forEach((e) => Mn.loaded_files.push(e.url)),
          d.diagnosticTracing && console.debug('MONO_WASM: all assets are loaded in wasm memory');
      }
    }
    function no() {
      return Mn.loaded_files;
    }
    let oo, io;
    function ao(e) {
      const r = t;
      void 0 === globalThis.performance && (globalThis.performance = so),
        void 0 === globalThis.URL &&
          (globalThis.URL = class {
            constructor(e) {
              this.url = e;
            }
            toString() {
              return this.url;
            }
          });
      const n = (r.imports = t.imports || {}),
        c = (e) => (r) => t.imports[r] || e(r);
      n.require
        ? (d.requirePromise = e.requirePromise = Promise.resolve(c(n.require)))
        : e.require
          ? (d.requirePromise = e.requirePromise = Promise.resolve(c(e.require)))
          : e.requirePromise
            ? (d.requirePromise = e.requirePromise.then((e) => c(e)))
            : (d.requirePromise = e.requirePromise =
                Promise.resolve(
                  c((e) => {
                    throw new Error(`Please provide Module.imports.${e} or Module.imports.require`);
                  })
                )),
        (d.scriptDirectory = e.scriptDirectory =
          (function (e) {
            return (
              s && (e.scriptUrl = self.location.href),
              e.scriptUrl || (e.scriptUrl = './dotnet.js'),
              (e.scriptUrl = (function (e) {
                return e.replace(/\\/g, '/').replace(/[?#].*/, '');
              })(e.scriptUrl)),
              (function (e) {
                return e.slice(0, e.lastIndexOf('/')) + '/';
              })(e.scriptUrl)
            );
          })(e)),
        (r.mainScriptUrlOrBlob = e.scriptUrl),
        r.__locateFile === r.locateFile
          ? (r.locateFile = d.locateFile =
              (e) =>
                (function (e) {
                  return o || i
                    ? e.startsWith('/') ||
                        e.startsWith('\\') ||
                        -1 !== e.indexOf('///') ||
                        _o.test(e)
                    : uo.test(e);
                })(e)
                  ? e
                  : d.scriptDirectory + e)
          : (d.locateFile = r.locateFile),
        n.fetch ? (e.fetch = d.fetch_like = n.fetch) : (e.fetch = d.fetch_like = co),
        (e.noExitRuntime = a);
      const u = e.updateGlobalBufferAndViews;
      e.updateGlobalBufferAndViews = (e) => {
        u(e),
          (function (e) {
            Ve &&
              ((Et = BigInt('9223372036854775807')),
              (St = BigInt('-9223372036854775808')),
              (He = new BigInt64Array(e)));
          })(e);
      };
    }
    const so = {
      now: function () {
        return Date.now();
      }
    };
    async function co(e, r) {
      try {
        if (o) {
          if (!oo) {
            const e = await d.requirePromise;
            (io = e('url')), (oo = e('fs'));
          }
          e.startsWith('file://') && (e = io.fileURLToPath(e));
          const t = await oo.promises.readFile(e);
          return { ok: !0, url: e, arrayBuffer: () => t, json: () => JSON.parse(t) };
        }
        if ('function' == typeof globalThis.fetch)
          return globalThis.fetch(e, r || { credentials: 'same-origin' });
        if ('function' == typeof read) {
          const r = new Uint8Array(read(e, 'binary'));
          return {
            ok: !0,
            url: e,
            arrayBuffer: () => r,
            json: () => JSON.parse(t.UTF8ArrayToString(r, 0, r.length))
          };
        }
      } catch (r) {
        return {
          ok: !1,
          url: e,
          status: 500,
          statusText: 'ERR28: ' + r,
          arrayBuffer: () => {
            throw r;
          },
          json: () => {
            throw r;
          }
        };
      }
      throw new Error('No fetch implementation available');
    }
    const uo = /^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,
      _o = /[a-zA-Z]:[\\/]/;
    function lo(e, t, r, n, o, i) {
      const a = Mt(e),
        s = Mt(t),
        c = Mt(i);
      try {
        const e = Kt(r);
        if (1 !== e) throw new Error(`Assert failed: Signature version ${e} mismatch.`);
        const t = xr(a),
          o = xr(s);
        d.diagnosticTracing && console.debug(`MONO_WASM: Binding [JSImport] ${t} from ${o}`);
        const i = ho(t, o),
          u = Zt(r),
          _ = { fn: i, marshal_exception_to_cs: Qr, signature: r },
          l = '_bound_js_' + t.replace(/\./g, '_');
        let f = `//# sourceURL=https://dotnet.generated.invalid/${l} \n`,
          m = '',
          h = '',
          p = '';
        for (let e = 0; e < u; e++) {
          const t = (e + 2) * zt,
            n = 32 * (e + 2) + 8,
            o = `arg${e}`,
            i = Vt(r, e + 2),
            { converters: a, call_body: s } = cn(i, e + 2, t, n, o, _);
          (m += a), (h += s), (p += '' === p ? o : `, ${o}`);
        }
        const {
          converters: w,
          call_body: g,
          marshaler_type: y
        } = Pr(Vt(r, 1), 1, zt, 40, 'js_result', _);
        (m += w),
          (f += `const { signature, fn, marshal_exception_to_cs ${m} } = closure;\n`),
          (f += `return function ${l} (args) { try {\n`),
          (f += h),
          y === yr.Void
            ? ((f += `  const js_result = fn(${p});\n`),
              (f += `  if (js_result !== undefined) throw new Error('Function ${t} returned unexpected value, C# signature is void');\n`))
            : y === yr.Discard
              ? (f += `  fn(${p});\n`)
              : ((f += `  const js_result = fn(${p});\n`), (f += g));
        for (let e = 0; e < u; e++) {
          const t = Vt(r, e + 2);
          if (qt(t) == yr.Span) {
            f += `  arg${e}.dispose();\n`;
          }
        }
        (f += '} catch (ex) {\n'), (f += '  marshal_exception_to_cs(args, ex);\n'), (f += '}}');
        const b = new Function('closure', f)(_);
        b[Bt] = !0;
        nt(n, Oe(b));
      } catch (e) {
        Ao(o, e, c);
      } finally {
        c.release(), a.release();
      }
    }
    function fo(e, t) {
      const r = Ne(e);
      if (!r || 'function' != typeof r || !r[Bt])
        throw new Error(`Assert failed: Bound function handle expected ${e}`);
      r(t);
    }
    function mo(e, t) {
      Eo.set(e, t), d.diagnosticTracing && console.debug(`MONO_WASM: added module imports '${e}'`);
    }
    function ho(e, t) {
      if (!e || 'string' != typeof e)
        throw new Error('Assert failed: function_name must be string');
      let o = n;
      const i = e.split('.');
      if (t) {
        if (((o = Eo.get(t)), !o))
          throw new Error(
            `Assert failed: ES6 module ${t} was not imported yet, please call JSHost.Import() first.`
          );
      } else
        'INTERNAL' === i[0]
          ? ((o = r), i.shift())
          : 'globalThis' === i[0] && ((o = globalThis), i.shift());
      for (let t = 0; t < i.length - 1; t++) {
        const r = i[t],
          n = o[r];
        if (!n) throw new Error(`Assert failed: ${r} not found while looking up ${e}`);
        o = n;
      }
      const a = o[i[i.length - 1]];
      if ('function' != typeof a)
        throw new Error(`Assert failed: ${e} must be a Function but was ${typeof a}`);
      return a.bind(o);
    }
    function po(e, t, r) {
      if (!e) throw new Error('Assert failed: Null reference');
      e[t] = r;
    }
    function wo(e, t) {
      if (!e) throw new Error('Assert failed: Null reference');
      return e[t];
    }
    function go(e, t) {
      if (!e) throw new Error('Assert failed: Null reference');
      return t in e;
    }
    function yo(e, t) {
      if (!e) throw new Error('Assert failed: Null reference');
      return typeof e[t];
    }
    function bo() {
      return globalThis;
    }
    const vo = new Map(),
      Eo = new Map();
    function So(e, t) {
      if (!e) throw new Error('Assert failed: Invalid module_name');
      if (!t) throw new Error('Assert failed: Invalid module_name');
      let r = vo.get(e);
      const n = !r;
      return (
        n &&
          (d.diagnosticTracing &&
            console.debug(`MONO_WASM: importing ES6 module '${e}' from '${t}'`),
          (r = import(t)),
          vo.set(e, r)),
        Ue(async () => {
          const o = await r;
          return (
            n &&
              (Eo.set(e, o),
              d.diagnosticTracing &&
                console.debug(`MONO_WASM: imported ES6 module '${e}' from '${t}'`)),
            o
          );
        })
      );
    }
    function Ao(e, r, n) {
      Dr(
        (function (e, r) {
          let n = 'unknown exception';
          if (r) {
            n = r.toString();
            const e = r.stack;
            e && (e.startsWith(n) ? (n = e) : (n += '\n' + e)), (n = ie(n));
          }
          return e && t.setValue(e, 1, 'i32'), n;
        })(e, r),
        n
      );
    }
    const ko = new Map();
    function No(e, r, n, o, i) {
      const a = Mt(e),
        s = Mt(i),
        c = t;
      try {
        const e = Kt(n);
        if (1 !== e) throw new Error(`Assert failed: Signature version ${e} mismatch.`);
        const t = Zt(n),
          o = xr(a);
        if (!o) throw new Error('Assert failed: fully_qualified_name must be string');
        d.diagnosticTracing && console.debug(`MONO_WASM: Binding [JSExport] ${o}`);
        const { assembly: i, namespace: u, classname: _, methodname: l } = To(o),
          f = te(i);
        if (!f) throw new Error('Could not find assembly: ' + i);
        const m = g.mono_wasm_assembly_find_class(f, u, _);
        if (!m) throw new Error('Could not find class: ' + u + ':' + _ + ' in assembly ' + i);
        const h = `__Wrapper_${l}_${r}`,
          p = g.mono_wasm_assembly_find_method(m, h, -1);
        if (!p) throw new Error(`Could not find method: ${h} in ${m} [${i}]`);
        const w = {
            method: p,
            signature: n,
            stackSave: c.stackSave,
            stackRestore: c.stackRestore,
            alloc_stack_frame: Lt,
            invoke_method_and_handle_exception: Oo
          },
          y = '_bound_cs_' + `${u}_${_}_${l}`.replace(/\./g, '_').replace(/\//g, '_');
        let b = `//# sourceURL=https://dotnet.generated.invalid/${y} \n`,
          v = '',
          E = '';
        for (let e = 0; e < t; e++) {
          const t = (e + 2) * zt,
            r = 32 * (e + 2) + 8,
            o = Vt(n, e + 2),
            { converters: i, call_body: a } = Pr(o, e + 2, t, r, `arguments[${e}]`, w);
          (E += i), (v += a);
        }
        const {
          converters: S,
          call_body: A,
          marshaler_type: k
        } = cn(Vt(n, 1), 1, zt, 40, 'js_result', w);
        (E += S),
          (b += `const { method, signature, stackSave, stackRestore,  alloc_stack_frame, invoke_method_and_handle_exception ${E} } = closure;\n`),
          (b += `return function ${y} () {\n`),
          (b += 'const sp = stackSave();\n'),
          (b += 'try {\n'),
          (b += `  const args = alloc_stack_frame(${t + 2});\n`),
          (b += v),
          (b += '  invoke_method_and_handle_exception(method, args);\n'),
          k !== yr.Void && k !== yr.Discard && (b += A),
          k !== yr.Void && k !== yr.Discard && (b += '  return js_result;\n'),
          (b += '} finally {\n'),
          (b += '  stackRestore(sp);\n'),
          (b += '}}');
        const N = new Function('closure', b)(w);
        (N[Wt] = !0),
          ko.set(o, N),
          (function (e, t, r, n, o, i) {
            const a = `${t}.${r}`.replace(/\//g, '.').split('.');
            let s,
              c = xo.get(e);
            c || ((c = {}), xo.set(e, c), xo.set(e + '.dll', c)), (s = c);
            for (let e = 0; e < a.length; e++) {
              const t = a[e];
              if ('' != t) {
                let e = s[t];
                if ((void 0 === e && ((e = {}), (s[t] = e)), !e))
                  throw new Error(`Assert failed: ${t} not found while looking up ${r}`);
                s = e;
              }
            }
            s[n] || (s[n] = i), (s[`${n}.${o}`] = i);
          })(i, u, _, l, r, N);
      } catch (e) {
        t.printErr(e.toString()), Ao(o, e, s);
      } finally {
        s.release(), a.release();
      }
    }
    function Oo(e, t) {
      const r = g.mono_wasm_invoke_method_bound(e, t);
      if (r) throw new Error('ERR24: Unexpected error: ' + Or(r));
      if (
        (function (e) {
          if (!e) throw new Error('Assert failed: Null args');
          return Qt(e) !== yr.None;
        })(t)
      ) {
        throw kn(Ht(t, 0));
      }
    }
    const xo = new Map();
    async function jo(e) {
      if (!d.mono_wasm_bindings_is_ready)
        throw new Error('Assert failed: The runtime must be initialized.');
      if (!xo.get(e)) {
        const t = te(e);
        if (!t) throw new Error('Could not find assembly: ' + e);
        g.mono_wasm_runtime_run_module_cctor(t);
      }
      return xo.get(e) || {};
    }
    function To(e) {
      const t = e.substring(e.indexOf('[') + 1, e.indexOf(']')).trim(),
        r = (e = e.substring(e.indexOf(']') + 1).trim()).substring(e.indexOf(':') + 1);
      let n = '',
        o = (e = e.substring(0, e.indexOf(':')).trim());
      if (-1 != e.indexOf('.')) {
        const t = e.lastIndexOf('.');
        (n = e.substring(0, t)), (o = e.substring(t + 1));
      }
      if (!t.trim()) throw new Error('No assembly name specified ' + e);
      if (!o.trim()) throw new Error('No class name specified ' + e);
      if (!r.trim()) throw new Error('No method name specified ' + e);
      return { assembly: t, namespace: n, classname: o, methodname: r };
    }
    function Do(e) {
      const t = g.mono_wasm_assembly_find_method(d.runtime_interop_exports_class, e, -1);
      if (!t)
        throw (
          "Can't find method " +
          d.runtime_interop_namespace +
          '.' +
          d.runtime_interop_exports_classname +
          '.' +
          e
        );
      return t;
    }
    function Mo(e, t, r, n, o, i, a) {
      const s = Mt(a);
      try {
        Fo(
          (function (e, t, r, n, o) {
            let i = null;
            switch (o) {
              case 5:
                i = new Int8Array(r - t);
                break;
              case 6:
                i = new Uint8Array(r - t);
                break;
              case 7:
                i = new Int16Array(r - t);
                break;
              case 8:
                i = new Uint16Array(r - t);
                break;
              case 9:
                i = new Int32Array(r - t);
                break;
              case 10:
                i = new Uint32Array(r - t);
                break;
              case 13:
                i = new Float32Array(r - t);
                break;
              case 14:
                i = new Float64Array(r - t);
                break;
              case 15:
                i = new Uint8ClampedArray(r - t);
                break;
              default:
                throw new Error('Unknown array type ' + o);
            }
            return Ro(i, e, t, r, n), i;
          })(e, t, r, n, o),
          s,
          !0
        );
      } catch (e) {
        Ao(i, String(e), s);
      } finally {
        s.release();
      }
    }
    function Ro(e, r, n, o, i) {
      if (Po(e) && e.BYTES_PER_ELEMENT) {
        if (i !== e.BYTES_PER_ELEMENT)
          throw new Error(
            "Inconsistent element sizes: TypedArray.BYTES_PER_ELEMENT '" +
              e.BYTES_PER_ELEMENT +
              "' sizeof managed element: '" +
              i +
              "'"
          );
        let a = (o - n) * i;
        const s = e.length * e.BYTES_PER_ELEMENT;
        a > s && (a = s);
        const c = n * i;
        return new Uint8Array(e.buffer, 0, a).set(t.HEAPU8.subarray(r + c, r + c + a)), a;
      }
      throw new Error("Object '" + e + "' is not a typed array");
    }
    function Po(e) {
      return 'undefined' != typeof SharedArrayBuffer
        ? e.buffer instanceof ArrayBuffer || e.buffer instanceof SharedArrayBuffer
        : e.buffer instanceof ArrayBuffer;
    }
    function Co(e, t, r) {
      switch (!0) {
        case null === t:
        case void 0 === t:
          return void r.clear();
        case 'symbol' == typeof t:
        case 'string' == typeof t:
          return void Ei._create_uri_ref(t, r.address);
        default:
          return void $o(e, t, r);
      }
    }
    function Io(e) {
      const t = Rt();
      try {
        return Fo(e, t, !1), t.value;
      } finally {
        t.release();
      }
    }
    function Fo(e, t, r) {
      if (p(t)) throw new Error('Expected (value, WasmRoot, boolean)');
      switch (!0) {
        case null === e:
        case void 0 === e:
          return void t.clear();
        case 'number' == typeof e: {
          let r;
          return (
            (0 | e) === e
              ? (rt(Pn._box_buffer, e), (r = Pn._class_int32))
              : e >>> 0 === e
                ? (Ke(Pn._box_buffer, e), (r = Pn._class_uint32))
                : (ut(Pn._box_buffer, e), (r = Pn._class_double)),
            void g.mono_wasm_box_primitive_ref(r, Pn._box_buffer, 8, t.address)
          );
        }
        case 'string' == typeof e:
          return void Dr(e, t);
        case 'symbol' == typeof e:
          return void Tr(e, t);
        case 'boolean' == typeof e:
          return (
            Ye(Pn._box_buffer, e),
            void g.mono_wasm_box_primitive_ref(Pn._class_boolean, Pn._box_buffer, 4, t.address)
          );
        case !0 === $e(e):
          return void (function (e, t) {
            if (!e) return t.clear(), null;
            const r = Oe(e),
              n = Ei._create_tcs(),
              o = { tcs_gc_handle: n };
            je(o, n),
              e
                .then(
                  (e) => {
                    Ei._set_tcs_result_ref(n, e);
                  },
                  (e) => {
                    Ei._set_tcs_failure(n, e ? e.toString() : '');
                  }
                )
                .finally(() => {
                  xe(r), Te(o, n);
                }),
              Ei._get_tcs_task_ref(n, t.address);
          })(e, t);
        case 'Date' === e.constructor.name:
          return void Ei._create_date_time_ref(e.getTime(), t.address);
        default:
          return void $o(r, e, t);
      }
    }
    function $o(e, t, r) {
      if ((r.clear(), null != t)) {
        if (void 0 !== t[Ae]) {
          return void Ko(De(t), r.address);
        }
        if (
          (t[ke] &&
            ((function (e, t, r) {
              if (0 === e || -1 === e) return void rt(r, 0);
              Ei._get_cs_owned_object_by_js_handle_ref(e, t ? 1 : 0, r);
            })(t[ke], e, r.address),
            r.value || delete t[ke]),
          !r.value)
        ) {
          const n = t[Cn],
            o = void 0 === n ? 0 : n,
            i = Oe(t);
          Ei._create_cs_owned_proxy_ref(i, o, e ? 1 : 0, r.address);
        }
      }
    }
    function Uo(e, r) {
      if (!Po(e) || !e.BYTES_PER_ELEMENT)
        throw new Error("Object '" + e + "' is not a typed array");
      {
        const n = e[Cn],
          o = (function (e) {
            const r = e.length * e.BYTES_PER_ELEMENT,
              n = t._malloc(r),
              o = new Uint8Array(t.HEAPU8.buffer, n, r);
            return o.set(new Uint8Array(e.buffer, e.byteOffset, r)), o;
          })(e);
        g.mono_wasm_typed_array_new_ref(o.byteOffset, e.length, e.BYTES_PER_ELEMENT, n, r.address),
          t._free(o.byteOffset);
      }
    }
    function Wo(e) {
      const t = Rt();
      try {
        return Uo(e, t), t.value;
      } finally {
        t.release();
      }
    }
    function Bo(e, t, r) {
      if ('number' != typeof e)
        throw new Error(`Expected numeric value for enum argument, got '${e}'`);
      return 0 | e;
    }
    function zo(e, t, r) {
      const n = Mt(r);
      try {
        const r = Ne(e);
        if (p(r)) return void Ao(t, "ERR06: Invalid JS object handle '" + e + "'", n);
        Uo(r, n);
      } catch (e) {
        Ao(t, String(e), n);
      } finally {
        n.release();
      }
    }
    const Lo = Symbol.for('wasm delegate_invoke');
    function Ho(e) {
      if (0 === e) return;
      const t = Rt(e);
      try {
        return Go(t);
      } finally {
        t.release();
      }
    }
    function Vo(e, t, r, n) {
      switch (t) {
        case 0:
          return null;
        case 26:
        case 27:
          throw new Error('int64 not available');
        case 3:
        case 29:
          return xr(e);
        case 4:
          throw new Error('no idea on how to unbox value types');
        case 5:
          return (function (e) {
            if (0 === e.value) return null;
            return (function (e) {
              let t = Me(e);
              if (t) De(t);
              else {
                t = function (...e) {
                  De(t);
                  return (0, t[Lo])(...e);
                };
                const r = Rt();
                Ko(e, r.address);
                try {
                  if (void 0 === t[Lo]) {
                    const n = g.mono_wasm_get_delegate_invoke_ref(r.address),
                      o = wi(n, bi(n, r), !0);
                    if (((t[Lo] = o.bind({ this_arg_gc_handle: e })), !t[Lo]))
                      throw new Error('System.Delegate Invoke method can not be resolved.');
                  }
                } finally {
                  r.release();
                }
                je(t, e);
              }
              return t;
            })(Ei._get_js_owned_object_gc_handle_ref(e.address));
          })(e);
        case 6:
          return (function (e) {
            if (0 === e.value) return null;
            if (!Fe)
              throw new Error(
                "Promises are not supported thus 'System.Threading.Tasks.Task' can not work in this context."
              );
            const t = Ei._get_js_owned_object_gc_handle_ref(e.address);
            let r = Me(t);
            if (!r) {
              const n = () => Te(r, t),
                { promise: o, promise_control: i } = Pe(n, n);
              (r = o), Ei._setup_js_cont_ref(e.address, i), je(r, t);
            }
            return r;
          })(e);
        case 7:
          return (function (e) {
            if (0 === e.value) return null;
            const t = Ei._try_get_cs_owned_object_js_handle_ref(e.address, 0);
            if (t) {
              if (t === h) throw new Error('Cannot access a disposed JSObject at ' + e.value);
              return Ne(t);
            }
            const r = Ei._get_js_owned_object_gc_handle_ref(e.address);
            let n = Me(r);
            return p(n) && ((n = new mr()), je(n, r)), n;
          })(e);
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
          throw new Error('Marshaling of primitive arrays are not supported.');
        case 20:
          return new Date(Ei._get_date_value_ref(e.address));
        case 21:
        case 22:
          return Ei._object_to_string_ref(e.address);
        case 23:
          return (function (e) {
            return Ne(Ei._get_cs_owned_object_js_handle_ref(e.address, 0));
          })(e);
        case 30:
          return;
        default:
          throw new Error(
            `no idea on how to unbox object of MarshalType ${t} at offset ${e.value} (root address is ${e.address})`
          );
      }
    }
    function qo(e, t, r) {
      if (t >= 512)
        throw new Error(
          `Got marshaling error ${t} when attempting to unbox object at address ${e.value} (root located at ${e.address})`
        );
      let n = 0;
      if ((4 === t || 7 == t) && ((n = mt(r)), n < 1024))
        throw new Error(
          `Got invalid MonoType ${n} for object at address ${e.value} (root located at ${e.address})`
        );
      return Vo(e, t);
    }
    function Go(e) {
      if (0 === e.value) return;
      const t = Pn._unbox_buffer,
        r = g.mono_wasm_try_unbox_primitive_and_get_type_ref(e.address, t, Pn._unbox_buffer_size);
      switch (r) {
        case 1:
          return pt(t);
        case 25:
        case 32:
          return mt(t);
        case 24:
          return bt(t);
        case 2:
          return vt(t);
        case 8:
          return 0 !== pt(t);
        case 28:
          return String.fromCharCode(pt(t));
        case 0:
          return null;
        default:
          return qo(e, r, t);
      }
    }
    function Jo(e) {
      if (0 === e) return null;
      const t = Rt(e);
      try {
        return Xo(t);
      } finally {
        t.release();
      }
    }
    function Yo(e) {
      return Ei._is_simple_array_ref(e.address);
    }
    function Xo(e) {
      if (0 === e.value) return null;
      const t = e.address,
        r = Rt(),
        n = r.address;
      try {
        const o = g.mono_wasm_array_length(e.value),
          i = new Array(o);
        for (let e = 0; e < o; ++e)
          g.mono_wasm_array_get_ref(t, e, n), Yo(r) ? (i[e] = Xo(r)) : (i[e] = Go(r));
        return i;
      } finally {
        r.release();
      }
    }
    function Zo(e, t, r, n) {
      const o = Mt(t),
        i = Mt(e),
        a = Mt(n);
      try {
        const t = xr(i);
        if (!t) return void Ao(r, 'Invalid name @' + i.value, a);
        const n = globalThis[t];
        if (null == n) return void Ao(r, "JavaScript host object '" + t + "' not found.", a);
        try {
          const e = Xo(o),
            t = function (e, t) {
              let r = [];
              (r[0] = e), t && (r = r.concat(t));
              return new (e.bind.apply(e, r))();
            },
            r = t(n, e);
          Fo(Oe(r), a, !1);
        } catch (e) {
          return void Ao(r, e, a);
        }
      } finally {
        a.release(), o.release(), i.release();
      }
    }
    function Ko(e, t) {
      e ? Ei._get_js_owned_object_by_gc_handle_ref(e, t) : rt(t, 0);
    }
    const Qo = new Map();
    function ei(e, r, n, o, i, a, s) {
      (function () {
        if (!Be.length) throw new Error('No temp frames have been created at this point');
        Le = Be.pop();
      })(),
        t.stackRestore(s),
        'object' == typeof o &&
          (o.clear(),
          null !== r && null === r.scratchResultRoot ? (r.scratchResultRoot = o) : o.release()),
        'object' == typeof i &&
          (i.clear(),
          null !== r && null === r.scratchExceptionRoot
            ? (r.scratchExceptionRoot = i)
            : i.release()),
        'object' == typeof a &&
          (a.clear(),
          null !== r && null === r.scratchThisArgRoot ? (r.scratchThisArgRoot = a) : a.release());
    }
    function ti(e, t) {
      if (!d.mono_wasm_bindings_is_ready)
        throw new Error('Assert failed: The runtime must be initialized.');
      const r = `${e}-${t}`;
      let n = Qo.get(r);
      if (void 0 === n) {
        const o = yi(e);
        void 0 === t && (t = bi(o, void 0)), (n = wi(o, t, !1, e)), Qo.set(r, n);
      }
      return n;
    }
    function ri(e, t) {
      const r = fe(e);
      'string' != typeof t && (t = bi(r, void 0));
      const n = wi(r, t, !1, '_' + e + '__entrypoint');
      return async function (...e) {
        return (
          e.length > 0 &&
            Array.isArray(e[0]) &&
            (e[0] = (function (e, t, r) {
              const n = Rt();
              t
                ? g.mono_wasm_string_array_new_ref(e.length, n.address)
                : g.mono_wasm_obj_array_new_ref(e.length, n.address);
              const o = Rt(0),
                i = n.address,
                a = o.address;
              try {
                for (let n = 0; n < e.length; ++n) {
                  let s = e[n];
                  t && (s = s.toString()), Fo(s, o, r), g.mono_wasm_obj_array_set_ref(i, n, a);
                }
                return n.value;
              } finally {
                Pt(n, o);
              }
            })(e[0], !0, !1)),
          n(...e)
        );
      };
    }
    function ni(e, t, r) {
      if (!d.mono_wasm_bindings_is_ready)
        throw new Error('Assert failed: The runtime must be initialized.');
      return t || (t = [[]]), ri(e, r)(...t);
    }
    function oi(e, t, r, n, o) {
      const i = Mt(r),
        a = Mt(t),
        s = Mt(o);
      try {
        const t = xr(a);
        if (!t || 'string' != typeof t)
          return void Ao(n, 'ERR12: Invalid method name object @' + a.value, s);
        const r = (function (e) {
          return 0 !== e && -1 !== e ? Ne(e) : null;
        })(e);
        if (p(r))
          return void Ao(
            n,
            "ERR13: Invalid JS object handle '" + e + "' while invoking '" + t + "'",
            s
          );
        const o = Xo(i);
        try {
          const e = r[t];
          if (void 0 === e)
            throw new Error(
              "Method: '" + t + "' not found for: '" + Object.prototype.toString.call(r) + "'"
            );
          Fo(e.apply(r, o), s, !0);
        } catch (e) {
          Ao(n, e, s);
        }
      } finally {
        i.release(), a.release(), s.release();
      }
    }
    function ii(e, t, r, n) {
      const o = Mt(t),
        i = Mt(n);
      try {
        const t = xr(o);
        if (!t) return void Ao(r, "Invalid property name object '" + o.value + "'", i);
        const n = Ne(e);
        if (p(n))
          return void Ao(
            r,
            "ERR01: Invalid JS object handle '" + e + "' while geting '" + t + "'",
            i
          );
        Fo(n[t], i, !0);
      } catch (e) {
        Ao(r, e, i);
      } finally {
        i.release(), o.release();
      }
    }
    function ai(e, t, r, n, o, i, a) {
      const s = Mt(r),
        c = Mt(t),
        u = Mt(a);
      try {
        const r = xr(c);
        if (!r) return void Ao(i, "Invalid property name object '" + t + "'", u);
        const a = Ne(e);
        if (p(a))
          return void Ao(
            i,
            "ERR02: Invalid JS object handle '" + e + "' while setting '" + r + "'",
            u
          );
        let _ = !1;
        const l = Go(s);
        if (n) (a[r] = l), (_ = !0);
        else {
          if (((_ = !1), !n && !Object.prototype.hasOwnProperty.call(a, r)))
            return void Fo(!1, u, !1);
          !0 === o
            ? Object.prototype.hasOwnProperty.call(a, r) && ((a[r] = l), (_ = !0))
            : ((a[r] = l), (_ = !0));
        }
        Fo(_, u, !1);
      } catch (e) {
        Ao(i, e, u);
      } finally {
        u.release(), c.release(), s.release();
      }
    }
    function si(e, t, r, n) {
      const o = Mt(n);
      try {
        const n = Ne(e);
        if (p(n))
          return void Ao(
            r,
            "ERR03: Invalid JS object handle '" + e + "' while getting [" + t + ']',
            o
          );
        Fo(n[t], o, !0);
      } catch (e) {
        Ao(r, e, o);
      } finally {
        o.release();
      }
    }
    function ci(e, t, r, n, o) {
      const i = Mt(r),
        a = Mt(o);
      try {
        const r = Ne(e);
        if (p(r))
          return void Ao(
            n,
            "ERR04: Invalid JS object handle '" + e + "' while setting [" + t + ']',
            a
          );
        const o = Go(i);
        (r[t] = o), a.clear();
      } catch (e) {
        Ao(n, e, a);
      } finally {
        a.release(), i.release();
      }
    }
    function ui(e, n, o) {
      const i = Mt(e),
        a = Mt(o);
      try {
        const e = xr(i);
        let o;
        if (
          ((o = e ? ('Module' == e ? t : 'INTERNAL' == e ? r : globalThis[e]) : globalThis),
          null === o || void 0 === typeof o)
        )
          return void Ao(n, "Global object '" + e + "' not found.", a);
        Fo(o, a, !0);
      } catch (e) {
        Ao(n, e, a);
      } finally {
        a.release(), i.release();
      }
    }
    function _i(e, t, r, n, o) {
      try {
        const e = globalThis.Blazor;
        if (!e) throw new Error('The blazor.webassembly.js library is not loaded.');
        return e._internal.invokeJSFromDotNet(t, r, n, o);
      } catch (t) {
        const r = t.message + '\n' + t.stack,
          n = Rt();
        return Dr(r, n), n.copy_to_address(e), n.release(), 0;
      }
    }
    const li = /[^A-Za-z0-9_$]/g,
      fi = new Map(),
      mi = new Map(),
      di = new Map();
    function hi(e, t, r, n) {
      let o = null,
        i = null,
        a = null;
      if (n) {
        (a = Object.keys(n)), (i = new Array(a.length));
        for (let e = 0, t = a.length; e < t; e++) i[e] = n[a[e]];
      }
      return (
        (o = (function (e, t, r, n) {
          const o = '"use strict";\r\n';
          let i = '',
            a = '';
          e
            ? ((i = '//# sourceURL=https://dotnet.generated.invalid/' + e + '\r\n'), (a = e))
            : (a = 'unnamed');
          let s = 'function ' + a + '(' + t.join(', ') + ') {\r\n' + r + '\r\n};\r\n';
          const c = /\r(\n?)/g;
          s = i + o + s.replace(c, '\r\n    ') + `    return ${a};\r\n`;
          let u = null,
            _ = null;
          return (_ = n ? n.concat([s]) : [s]), (u = Function.apply(Function, _)), u;
        })(e, t, r, a).apply(null, i)),
        o
      );
    }
    function pi(e) {
      let t = mi.get(e);
      return (
        t ||
          ((t = (function (e) {
            const t = [];
            let r = 0,
              n = !1,
              o = !1,
              i = -1,
              a = !1;
            for (let s = 0; s < e.length; ++s) {
              const c = e[s];
              if (s === e.length - 1) {
                if ('!' === c) {
                  n = !0;
                  continue;
                }
                'm' === c && ((o = !0), (i = e.length - 1));
              } else if ('!' === c) throw new Error('! must be at the end of the signature');
              const u = fi.get(c);
              if (!u) throw new Error('Unknown parameter type ' + c);
              const _ = Object.create(u.steps[0]);
              (_.size = u.size),
                u.needs_root && (a = !0),
                (_.needs_root = u.needs_root),
                (_.key = c),
                t.push(_),
                (r += u.size);
            }
            return {
              steps: t,
              size: r,
              args_marshal: e,
              is_result_definitely_unmarshaled: n,
              is_result_possibly_unmarshaled: o,
              result_unmarshaled_if_argc: i,
              needs_root_buffer: a
            };
          })(e)),
          mi.set(e, t)),
        t
      );
    }
    function wi(e, r, n, o) {
      if ('string' != typeof r) throw new Error('args_marshal argument invalid, expected string');
      const i = `managed_${e}_${r}`;
      let a = di.get(i);
      if (a) return a;
      o || (o = i);
      let s = null;
      'string' == typeof r &&
        (s = (function (e) {
          const r = pi(e);
          if ('string' != typeof r.args_marshal)
            throw new Error("Corrupt converter for '" + e + "'");
          if (r.compiled_function && r.compiled_variadic_function) return r;
          const n = e.replace('!', '_result_unmarshaled');
          r.name = n;
          let o = [],
            i = ['method'];
          const a = {
            Module: t,
            setI32: nt,
            setU32: Qe,
            setF32: ct,
            setF64: ut,
            setU52: at,
            setI52: it,
            setB32: Ye,
            setI32_unchecked: rt,
            setU32_unchecked: Ke,
            scratchValueRoot: r.scratchValueRoot,
            stackAlloc: t.stackAlloc,
            _zero_region: Je
          };
          let s = 0;
          const c = 8 * (((4 * e.length + 7) / 8) | 0),
            u = r.size + 4 * e.length + 16;
          o.push(
            "if (!method) throw new Error('no method provided');",
            `const buffer = stackAlloc(${u});`,
            `_zero_region(buffer, ${u});`,
            `const indirectStart = buffer + ${c};`,
            ''
          );
          for (let e = 0; e < r.steps.length; e++) {
            const n = r.steps[e],
              c = 'step' + e,
              u = 'value' + e,
              _ = 'arg' + e,
              l = `(indirectStart + ${s})`;
            if ((i.push(_), n.convert_root)) {
              if (n.indirect)
                throw new Error('Assert failed: converter step cannot both be rooted and indirect');
              if (!r.scratchValueRoot) {
                const e = t.stackSave();
                (r.scratchValueRoot = Mt(e)), (a.scratchValueRoot = r.scratchValueRoot);
              }
              (a[c] = n.convert_root),
                o.push(`scratchValueRoot._set_address(${l});`),
                o.push(`${c}(${_}, scratchValueRoot);`),
                n.byref ? o.push(`let ${u} = ${l};`) : o.push(`let ${u} = scratchValueRoot.value;`);
            } else
              n.convert
                ? ((a[c] = n.convert), o.push(`let ${u} = ${c}(${_}, method, ${e});`))
                : o.push(`let ${u} = ${_};`);
            if (
              (n.needs_root &&
                !n.convert_root &&
                (o.push("if (!rootBuffer) throw new Error('no root buffer provided');"),
                o.push(`rootBuffer.set (${e}, ${u});`)),
              n.indirect)
            ) {
              switch (n.indirect) {
                case 'bool':
                  o.push(`setB32(${l}, ${u});`);
                  break;
                case 'u32':
                  o.push(`setU32(${l}, ${u});`);
                  break;
                case 'i32':
                  o.push(`setI32(${l}, ${u});`);
                  break;
                case 'float':
                  o.push(`setF32(${l}, ${u});`);
                  break;
                case 'double':
                  o.push(`setF64(${l}, ${u});`);
                  break;
                case 'i52':
                  o.push(`setI52(${l}, ${u});`);
                  break;
                case 'u52':
                  o.push(`setU52(${l}, ${u});`);
                  break;
                default:
                  throw new Error('Unimplemented indirect type: ' + n.indirect);
              }
              o.push(`setU32_unchecked(buffer + (${e} * 4), ${l});`), (s += n.size);
            } else o.push(`setU32_unchecked(buffer + (${e} * 4), ${u});`), (s += 4);
            o.push('');
          }
          o.push('return buffer;');
          let _ = o.join('\r\n'),
            l = null,
            f = null;
          try {
            (l = hi('converter_' + n, i, _, a)), (r.compiled_function = l);
          } catch (e) {
            throw (
              ((r.compiled_function = null),
              console.warn('MONO_WASM: compiling converter failed for', _, 'with error', e),
              e)
            );
          }
          i = ['method', 'args'];
          const m = { converter: l };
          o = ['return converter(', '  method,'];
          for (let e = 0; e < r.steps.length; e++)
            o.push('  args[' + e + (e == r.steps.length - 1 ? ']' : '], '));
          o.push(');'), (_ = o.join('\r\n'));
          try {
            (f = hi('variadic_converter_' + n, i, _, m)), (r.compiled_variadic_function = f);
          } catch (e) {
            throw (
              ((r.compiled_variadic_function = null),
              console.warn('MONO_WASM: compiling converter failed for', _, 'with error', e),
              e)
            );
          }
          return (r.scratchRootBuffer = null), (r.scratchBuffer = 0), r;
        })(r));
      const c = t._malloc(128),
        u = {
          method: e,
          converter: s,
          scratchRootBuffer: null,
          scratchBuffer: 0,
          scratchResultRoot: Rt(),
          scratchExceptionRoot: Rt(),
          scratchThisArgRoot: Rt()
        },
        _ = {
          Module: t,
          mono_wasm_new_root: Rt,
          get_js_owned_object_by_gc_handle_ref: Ko,
          _create_temp_frame: qe,
          _handle_exception_for_call: gi,
          _teardown_after_call: ei,
          mono_wasm_try_unbox_primitive_and_get_type_ref:
            g.mono_wasm_try_unbox_primitive_and_get_type_ref,
          _unbox_mono_obj_root_with_known_nonprimitive_type: qo,
          invoke_method_ref: g.mono_wasm_invoke_method_ref,
          method: e,
          token: u,
          unbox_buffer: c,
          unbox_buffer_size: 128,
          getB32: _t,
          getI32: pt,
          getU32: mt,
          getF32: bt,
          getF64: vt,
          stackSave: t.stackSave
        },
        l = s ? 'converter_' + s.name : '';
      s && (_[l] = s);
      const f = [],
        m = [
          '_create_temp_frame();',
          'let resultRoot = token.scratchResultRoot, exceptionRoot = token.scratchExceptionRoot, thisArgRoot = token.scratchThisArgRoot , sp = stackSave();',
          'token.scratchResultRoot = null;',
          'token.scratchExceptionRoot = null;',
          'token.scratchThisArgRoot = null;',
          'if (resultRoot === null)',
          '\tresultRoot = mono_wasm_new_root ();',
          'if (exceptionRoot === null)',
          '\texceptionRoot = mono_wasm_new_root ();',
          'if (thisArgRoot === null)',
          '\tthisArgRoot = mono_wasm_new_root ();',
          ''
        ];
      if (s) {
        m.push(`let buffer = ${l}.compiled_function(`, '    method,');
        for (let e = 0; e < s.steps.length; e++) {
          const t = 'arg' + e;
          f.push(t), m.push('    ' + t + (e == s.steps.length - 1 ? '' : ', '));
        }
        m.push(');');
      } else m.push('let buffer = 0;');
      if (
        (s && s.is_result_definitely_unmarshaled
          ? m.push('let is_result_marshaled = false;')
          : s && s.is_result_possibly_unmarshaled
            ? m.push(
                `let is_result_marshaled = arguments.length !== ${s.result_unmarshaled_if_argc};`
              )
            : m.push('let is_result_marshaled = true;'),
        m.push('', '', ''),
        n
          ? (m.push(
              'get_js_owned_object_by_gc_handle_ref(this.this_arg_gc_handle, thisArgRoot.address);'
            ),
            m.push(
              'invoke_method_ref (method, thisArgRoot.address, buffer, exceptionRoot.address, resultRoot.address);'
            ))
          : m.push(
              'invoke_method_ref (method, 0, buffer, exceptionRoot.address, resultRoot.address);'
            ),
        m.push(
          `_handle_exception_for_call (${l}, token, buffer, resultRoot, exceptionRoot, thisArgRoot, sp);`,
          '',
          'let resultPtr = resultRoot.value, result = undefined;'
        ),
        !s)
      )
        throw new Error('No converter');
      s.is_result_possibly_unmarshaled && m.push('if (!is_result_marshaled) '),
        (s.is_result_definitely_unmarshaled || s.is_result_possibly_unmarshaled) &&
          m.push('    result = resultPtr;'),
        s.is_result_definitely_unmarshaled ||
          m.push(
            'if (is_result_marshaled) {',
            '    let resultType = mono_wasm_try_unbox_primitive_and_get_type_ref (resultRoot.address, unbox_buffer, unbox_buffer_size);',
            '    switch (resultType) {',
            '    case 1:',
            '        result = getI32(unbox_buffer); break;',
            '    case 32:',
            '    case 25:',
            '        result = getU32(unbox_buffer); break;',
            '    case 24:',
            '        result = getF32(unbox_buffer); break;',
            '    case 2:',
            '        result = getF64(unbox_buffer); break;',
            '    case 8:',
            '        result = getB32(unbox_buffer); break;',
            '    case 28:',
            '        result = String.fromCharCode(getI32(unbox_buffer)); break;',
            '    case 0:',
            '        result = null; break;',
            '    default:',
            '        result = _unbox_mono_obj_root_with_known_nonprimitive_type (resultRoot, resultType, unbox_buffer); break;',
            '    }',
            '}'
          );
      let d = o.replace(li, '_');
      n && (d += '_this'),
        m.push(
          `_teardown_after_call (${l}, token, buffer, resultRoot, exceptionRoot, thisArgRoot, sp);`,
          'return result;'
        );
      return (a = hi(d, f, m.join('\r\n'), _)), di.set(i, a), a;
    }
    function gi(e, t, r, n, o, i, a) {
      const s = (function (e, t) {
        if (0 === t.value) return null;
        const r = xr(e);
        return new Error(r);
      })(n, o);
      if (s) throw (ei(0, t, 0, n, o, i, a), s);
    }
    function yi(e) {
      const { assembly: t, namespace: r, classname: n, methodname: o } = To(e),
        i = g.mono_wasm_assembly_load(t);
      if (!i) throw new Error('Could not find assembly: ' + t);
      const a = g.mono_wasm_assembly_find_class(i, r, n);
      if (!a) throw new Error('Could not find class: ' + r + ':' + n + ' in assembly ' + t);
      const s = g.mono_wasm_assembly_find_method(a, o, -1);
      if (!s) throw new Error('Could not find method: ' + o);
      return s;
    }
    function bi(e, t) {
      return Ei._get_call_sig_ref(e, t ? t.address : Pn._null_root.address);
    }
    const vi = [
        [!0, '_get_cs_owned_object_by_js_handle_ref', 'GetCSOwnedObjectByJSHandleRef', 'iim'],
        [!0, '_get_cs_owned_object_js_handle_ref', 'GetCSOwnedObjectJSHandleRef', 'mi'],
        [!0, '_try_get_cs_owned_object_js_handle_ref', 'TryGetCSOwnedObjectJSHandleRef', 'mi'],
        [!1, '_create_cs_owned_proxy_ref', 'CreateCSOwnedProxyRef', 'iiim'],
        [!1, '_get_js_owned_object_by_gc_handle_ref', 'GetJSOwnedObjectByGCHandleRef', 'im'],
        [!0, '_get_js_owned_object_gc_handle_ref', 'GetJSOwnedObjectGCHandleRef', 'm'],
        [!0, '_create_tcs', 'CreateTaskSource', ''],
        [!0, '_set_tcs_result_ref', 'SetTaskSourceResultRef', 'iR'],
        [!0, '_set_tcs_failure', 'SetTaskSourceFailure', 'is'],
        [!0, '_get_tcs_task_ref', 'GetTaskSourceTaskRef', 'im'],
        [!0, '_setup_js_cont_ref', 'SetupJSContinuationRef', 'mo'],
        [!0, '_object_to_string_ref', 'ObjectToStringRef', 'm'],
        [!0, '_get_date_value_ref', 'GetDateValueRef', 'm'],
        [!0, '_create_date_time_ref', 'CreateDateTimeRef', 'dm'],
        [!0, '_create_uri_ref', 'CreateUriRef', 'sm'],
        [!0, '_is_simple_array_ref', 'IsSimpleArrayRef', 'm'],
        [!1, '_get_call_sig_ref', 'GetCallSignatureRef', 'im']
      ],
      Ei = {};
    function Si(e, t) {
      return wi(
        (function (e) {
          const t = g.mono_wasm_assembly_find_method(Pn.runtime_legacy_exports_class, e, -1);
          if (!t)
            throw (
              "Can't find method " +
              d.runtime_interop_namespace +
              '.' +
              Pn.runtime_legacy_exports_classname +
              '.' +
              e
            );
          return t;
        })(e),
        t,
        !1,
        'BINDINGS_' + e
      );
    }
    function Ai() {
      (Object.prototype[Cn] = 0),
        (Array.prototype[Cn] = 1),
        (ArrayBuffer.prototype[Cn] = 2),
        (DataView.prototype[Cn] = 3),
        (Function.prototype[Cn] = 4),
        (Uint8Array.prototype[Cn] = 11);
      if (
        ((Pn._unbox_buffer_size = 65536),
        (Pn._box_buffer = t._malloc(65536)),
        (Pn._unbox_buffer = t._malloc(Pn._unbox_buffer_size)),
        (Pn._class_int32 = re('System', 'Int32')),
        (Pn._class_uint32 = re('System', 'UInt32')),
        (Pn._class_double = re('System', 'Double')),
        (Pn._class_boolean = re('System', 'Boolean')),
        (Pn._null_root = Rt()),
        (function () {
          const e = fi;
          e.set('m', { steps: [{}], size: 0 }),
            e.set('s', { steps: [{ convert_root: Dr.bind(Rn) }], size: 0, needs_root: !0 }),
            e.set('S', { steps: [{ convert_root: Tr.bind(Rn) }], size: 0, needs_root: !0 }),
            e.set('o', { steps: [{ convert_root: Fo.bind(Rn) }], size: 0, needs_root: !0 }),
            e.set('u', { steps: [{ convert_root: Co.bind(Rn, !1) }], size: 0, needs_root: !0 }),
            e.set('R', {
              steps: [{ convert_root: Fo.bind(Rn), byref: !0 }],
              size: 0,
              needs_root: !0
            }),
            e.set('j', { steps: [{ convert: Bo.bind(Rn), indirect: 'i32' }], size: 8 }),
            e.set('b', { steps: [{ indirect: 'bool' }], size: 8 }),
            e.set('i', { steps: [{ indirect: 'i32' }], size: 8 }),
            e.set('I', { steps: [{ indirect: 'u32' }], size: 8 }),
            e.set('l', { steps: [{ indirect: 'i52' }], size: 8 }),
            e.set('L', { steps: [{ indirect: 'u52' }], size: 8 }),
            e.set('f', { steps: [{ indirect: 'float' }], size: 8 }),
            e.set('d', { steps: [{ indirect: 'double' }], size: 8 });
        })(),
        (Pn.runtime_legacy_exports_classname = 'LegacyExports'),
        (Pn.runtime_legacy_exports_class = g.mono_wasm_assembly_find_class(
          d.runtime_interop_module,
          d.runtime_interop_namespace,
          Pn.runtime_legacy_exports_classname
        )),
        !Pn.runtime_legacy_exports_class)
      )
        throw (
          "Can't find " +
          d.runtime_interop_namespace +
          '.' +
          d.runtime_interop_exports_classname +
          ' class'
        );
      for (const e of vi) {
        const t = Ei,
          [r, n, o, i] = e;
        if (r)
          t[n] = function (...e) {
            const r = Si(o, i);
            return (t[n] = r), r(...e);
          };
        else {
          const e = Si(o, i);
          t[n] = e;
        }
      }
    }
    function ki() {
      return (
        'undefined' != typeof Response &&
        'body' in Response.prototype &&
        'function' == typeof ReadableStream
      );
    }
    function Ni() {
      return new AbortController();
    }
    function Oi(e) {
      e.abort();
    }
    function xi(e) {
      e.__abort_controller.abort(),
        e.__reader &&
          e.__reader.cancel().catch((e) => {
            e &&
              'AbortError' !== e.name &&
              t.printErr('MONO_WASM: Error in http_wasm_abort_response: ' + e);
          });
    }
    function ji(e, t, r, n, o, i, a, s) {
      return Ti(e, t, r, n, o, i, new wr(a, s, 0).slice());
    }
    function Ti(e, t, r, n, o, i, a) {
      if (!e || 'string' != typeof e) throw new Error('Assert failed: expected url string');
      if (!(t && r && Array.isArray(t) && Array.isArray(r) && t.length === r.length))
        throw new Error('Assert failed: expected headerNames and headerValues arrays');
      if (!(n && o && Array.isArray(n) && Array.isArray(o) && n.length === o.length))
        throw new Error('Assert failed: expected headerNames and headerValues arrays');
      const s = new Headers();
      for (let e = 0; e < t.length; e++) s.append(t[e], r[e]);
      const c = { body: a, headers: s, signal: i.signal };
      for (let e = 0; e < n.length; e++) c[n[e]] = o[e];
      return Ue(async () => {
        const t = await fetch(e, c);
        return (t.__abort_controller = i), t;
      });
    }
    function Di(e) {
      if (!e.__headerNames) {
        (e.__headerNames = []), (e.__headerValues = []);
        const t = e.headers.entries();
        for (const r of t) e.__headerNames.push(r[0]), e.__headerValues.push(r[1]);
      }
    }
    function Mi(e) {
      return Di(e), e.__headerNames;
    }
    function Ri(e) {
      return Di(e), e.__headerValues;
    }
    function Pi(e) {
      return Ue(async () => {
        const t = await e.arrayBuffer();
        return (e.__buffer = t), (e.__source_offset = 0), t.byteLength;
      });
    }
    function Ci(e, t) {
      if (!e.__buffer) throw new Error('Assert failed: expected resoved arrayBuffer');
      if (e.__source_offset == e.__buffer.byteLength) return 0;
      const r = new Uint8Array(e.__buffer, e.__source_offset);
      t.set(r, 0);
      const n = Math.min(t.byteLength, r.byteLength);
      return (e.__source_offset += n), n;
    }
    function Ii(e, t, r) {
      const n = new wr(t, r, 0);
      return Ue(async () => {
        if (
          (e.__reader || (e.__reader = e.body.getReader()),
          e.__chunk || ((e.__chunk = await e.__reader.read()), (e.__source_offset = 0)),
          e.__chunk.done)
        )
          return 0;
        const t = e.__chunk.value.byteLength - e.__source_offset;
        if (!(t > 0))
          throw new Error('Assert failed: expected remaining_source to be greater than 0');
        const r = Math.min(t, n.byteLength),
          o = e.__chunk.value.subarray(e.__source_offset, e.__source_offset + r);
        return n.set(o, 0), (e.__source_offset += r), t == r && (e.__chunk = void 0), r;
      });
    }
    let Fi,
      $i = 0,
      Ui = !1,
      Wi = 0;
    if (globalThis.navigator) {
      const e = globalThis.navigator;
      e.userAgentData && e.userAgentData.brands
        ? (Ui = e.userAgentData.brands.some((e) => 'Chromium' == e.brand))
        : e.userAgent && (Ui = e.userAgent.includes('Chrome'));
    }
    function Bi() {
      for (; Wi > 0; ) --Wi, g.mono_background_exec();
    }
    function zi() {
      if (!Ui) return;
      const e = new Date().valueOf(),
        t = e + 36e4;
      for (let r = Math.max(e + 1e3, $i); r < t; r += 1e3) {
        setTimeout(() => {
          g.mono_set_timeout_exec(), Wi++, Bi();
        }, r - e);
      }
      $i = t;
    }
    function Li() {
      ++Wi, setTimeout(Bi, 0);
    }
    function Hi(e) {
      Fi && (clearTimeout(Fi), (Fi = void 0)),
        (Fi = setTimeout(function () {
          g.mono_set_timeout_exec();
        }, e));
    }
    class Vi {
      constructor() {
        (this.queue = []), (this.offset = 0);
      }
      getLength() {
        return this.queue.length - this.offset;
      }
      isEmpty() {
        return 0 == this.queue.length;
      }
      enqueue(e) {
        this.queue.push(e);
      }
      dequeue() {
        if (0 === this.queue.length) return;
        const e = this.queue[this.offset];
        return (
          (this.queue[this.offset] = null),
          2 * ++this.offset >= this.queue.length &&
            ((this.queue = this.queue.slice(this.offset)), (this.offset = 0)),
          e
        );
      }
      peek() {
        return this.queue.length > 0 ? this.queue[this.offset] : void 0;
      }
      drain(e) {
        for (; this.getLength(); ) {
          e(this.dequeue());
        }
      }
    }
    const qi = Symbol.for('wasm ws_pending_send_buffer'),
      Gi = Symbol.for('wasm ws_pending_send_buffer_offset'),
      Ji = Symbol.for('wasm ws_pending_send_buffer_type'),
      Yi = Symbol.for('wasm ws_pending_receive_event_queue'),
      Xi = Symbol.for('wasm ws_pending_receive_promise_queue'),
      Zi = Symbol.for('wasm ws_pending_open_promise'),
      Ki = Symbol.for('wasm ws_pending_close_promises'),
      Qi = Symbol.for('wasm ws_pending_send_promises'),
      ea = Symbol.for('wasm ws_is_aborted'),
      ta = Symbol.for('wasm ws_receive_status_ptr');
    let ra,
      na,
      oa = !1;
    const ia = new Uint8Array();
    function aa(e, t, r, n) {
      if (!e || 'string' != typeof e)
        throw new Error('Assert failed: ERR12: Invalid uri ' + typeof e);
      const o = new globalThis.WebSocket(e, t || void 0),
        { promise_control: i } = Pe();
      (o[Yi] = new Vi()),
        (o[Xi] = new Vi()),
        (o[Zi] = i),
        (o[Qi] = []),
        (o[Ki] = []),
        (o[ta] = r),
        (o.binaryType = 'arraybuffer');
      const a = (e) => {
        o[ea] ||
          ((function (e, t) {
            const r = e[Yi],
              n = e[Xi];
            if ('string' == typeof t.data)
              void 0 === na && (na = new TextEncoder()),
                r.enqueue({ type: 0, data: na.encode(t.data), offset: 0 });
            else {
              if ('ArrayBuffer' !== t.data.constructor.name)
                throw new Error('ERR19: WebSocket receive expected ArrayBuffer');
              r.enqueue({ type: 1, data: new Uint8Array(t.data), offset: 0 });
            }
            if (n.getLength() && r.getLength() > 1) throw new Error('ERR21: Invalid WS state');
            for (; n.getLength() && r.getLength(); ) {
              const t = n.dequeue();
              fa(e, r, t.buffer_ptr, t.buffer_length), t.resolve();
            }
            zi();
          })(o, e),
          zi());
      };
      return (
        o.addEventListener('message', a),
        o.addEventListener(
          'open',
          () => {
            o[ea] || (i.resolve(o), zi());
          },
          { once: !0 }
        ),
        o.addEventListener(
          'close',
          (e) => {
            if ((o.removeEventListener('message', a), o[ea])) return;
            n && n(e.code, e.reason), i.reject(e.reason);
            for (const e of o[Ki]) e.resolve();
            o[Xi].drain((e) => {
              nt(r, 0), nt(r + 4, 2), nt(r + 8, 1), e.resolve();
            });
          },
          { once: !0 }
        ),
        o.addEventListener(
          'error',
          (e) => {
            i.reject(e.message || 'WebSocket error');
          },
          { once: !0 }
        ),
        o
      );
    }
    function sa(e) {
      if (!e) throw new Error('Assert failed: ERR17: expected ws instance');
      return e[Zi].promise;
    }
    function ca(e, r, n, o, i) {
      if (!e) throw new Error('Assert failed: ERR17: expected ws instance');
      const a = (function (e, t, r, n) {
        let o = e[qi],
          i = 0;
        const a = t.byteLength;
        if (o) {
          if (((i = e[Gi]), (r = e[Ji]), 0 !== a)) {
            if (i + a > o.length) {
              const r = new Uint8Array(1.5 * (i + a + 50));
              r.set(o, 0), r.subarray(i).set(t), (e[qi] = o = r);
            } else o.subarray(i).set(t);
            (i += a), (e[Gi] = i);
          }
        } else
          n
            ? 0 !== a && ((o = t), (i = a))
            : (0 !== a && ((o = t.slice()), (i = a), (e[Gi] = i), (e[qi] = o)), (e[Ji] = r));
        if (n) {
          if (0 == i || null == o) return ia;
          if (0 === r) {
            void 0 === ra && (ra = new TextDecoder('utf-8', { fatal: !1 }));
            const e =
              'undefined' != typeof SharedArrayBuffer && o instanceof SharedArrayBuffer
                ? o.slice(0, i)
                : o.subarray(0, i);
            return ra.decode(e);
          }
          return o.subarray(0, i);
        }
        return null;
      })(e, new Uint8Array(t.HEAPU8.buffer, r, n), o, i);
      return i && a
        ? (function (e, t) {
            if ((e.send(t), (e[qi] = null), e.bufferedAmount < 65536)) return null;
            const { promise: r, promise_control: n } = Pe(),
              o = e[Qi];
            o.push(n);
            let i = 1;
            const a = () => {
              if (0 === e.bufferedAmount) n.resolve();
              else if (e.readyState != WebSocket.OPEN)
                n.reject('InvalidState: The WebSocket is not connected.');
              else if (!n.isDone)
                return globalThis.setTimeout(a, i), void (i = Math.min(1.5 * i, 1e3));
              const t = o.indexOf(n);
              t > -1 && o.splice(t, 1);
            };
            return globalThis.setTimeout(a, 0), r;
          })(e, a)
        : null;
    }
    function ua(e, t, r) {
      if (!e) throw new Error('Assert failed: ERR18: expected ws instance');
      const n = e[Yi],
        o = e[Xi],
        i = e.readyState;
      if (i != WebSocket.OPEN && i != WebSocket.CLOSING)
        throw new Error('InvalidState: The WebSocket is not connected.');
      if (n.getLength()) {
        if (0 != o.getLength()) throw new Error('Assert failed: ERR20: Invalid WS state');
        return fa(e, n, t, r), null;
      }
      const { promise: a, promise_control: s } = Pe(),
        c = s;
      return (c.buffer_ptr = t), (c.buffer_length = r), o.enqueue(c), a;
    }
    function _a(e, t, r, n) {
      if (!e) throw new Error('Assert failed: ERR19: expected ws instance');
      if (e.readyState == WebSocket.CLOSED) return null;
      if (n) {
        const { promise: n, promise_control: o } = Pe();
        return e[Ki].push(o), 'string' == typeof r ? e.close(t, r) : e.close(t), n;
      }
      return (
        oa ||
          ((oa = !0),
          console.warn(
            'WARNING: Web browsers do not support closing the output side of a WebSocket. CloseOutputAsync has closed the socket and discarded any incoming messages.'
          )),
        'string' == typeof r ? e.close(t, r) : e.close(t),
        null
      );
    }
    function la(e) {
      if (!e) throw new Error('Assert failed: ERR18: expected ws instance');
      e[ea] = !0;
      const t = e[Zi];
      t && t.reject('OperationCanceledException');
      for (const t of e[Ki]) t.reject('OperationCanceledException');
      for (const t of e[Qi]) t.reject('OperationCanceledException');
      e[Xi].drain((e) => {
        e.reject('OperationCanceledException');
      }),
        e.close(1e3, 'Connection was aborted.');
    }
    function fa(e, r, n, o) {
      const i = r.peek(),
        a = Math.min(o, i.data.length - i.offset);
      if (a > 0) {
        const e = i.data.subarray(i.offset, i.offset + a);
        new Uint8Array(t.HEAPU8.buffer, n, o).set(e, 0), (i.offset += a);
      }
      const s = i.data.length === i.offset ? 1 : 0;
      s && r.dequeue();
      const c = e[ta];
      nt(c, a), nt(c + 4, i.type), nt(c + 8, s);
    }
    function ma() {
      return {
        mono_wasm_exit: (e) => {
          t.printErr('MONO_WASM: early exit ' + e);
        },
        mono_wasm_enable_on_demand_gc: g.mono_wasm_enable_on_demand_gc,
        mono_profiler_init_aot: g.mono_profiler_init_aot,
        mono_wasm_exec_regression: g.mono_wasm_exec_regression,
        mono_method_resolve: yi,
        mono_intern_string: jr,
        logging: void 0,
        mono_wasm_stringify_as_error_with_stack: ae,
        mono_wasm_get_loaded_files: no,
        mono_wasm_send_dbg_command_with_parms: M,
        mono_wasm_send_dbg_command: R,
        mono_wasm_get_dbg_command_info: P,
        mono_wasm_get_details: z,
        mono_wasm_release_object: H,
        mono_wasm_call_function_on: B,
        mono_wasm_debugger_resume: C,
        mono_wasm_detach_debugger: I,
        mono_wasm_raise_debug_event: $,
        mono_wasm_change_debugger_log_level: F,
        mono_wasm_debugger_attached: U,
        mono_wasm_runtime_is_ready: d.mono_wasm_runtime_is_ready,
        get_property: wo,
        set_property: po,
        has_property: go,
        get_typeof_property: yo,
        get_global_this: bo,
        get_dotnet_instance: () => u,
        dynamic_import: So,
        mono_wasm_cancel_promise: We,
        ws_wasm_create: aa,
        ws_wasm_open: sa,
        ws_wasm_send: ca,
        ws_wasm_receive: ua,
        ws_wasm_close: _a,
        ws_wasm_abort: la,
        http_wasm_supports_streaming_response: ki,
        http_wasm_create_abort_controler: Ni,
        http_wasm_abort_request: Oi,
        http_wasm_abort_response: xi,
        http_wasm_fetch: Ti,
        http_wasm_fetch_bytes: ji,
        http_wasm_get_response_header_names: Mi,
        http_wasm_get_response_header_values: Ri,
        http_wasm_get_response_bytes: Ci,
        http_wasm_get_response_length: Pi,
        http_wasm_get_streamed_response_bytes: Ii
      };
    }
    function da() {}
    let ha,
      pa = !1,
      wa = !1;
    const ga = Pe(),
      ya = Pe(),
      ba = Pe(),
      va = Pe(),
      Ea = Pe(),
      Sa = Pe(),
      Aa = Pe(),
      ka = Pe(),
      Na = Pe();
    function Oa(e, t) {
      const r = e.instantiateWasm,
        n = e.preInit ? ('function' == typeof e.preInit ? [e.preInit] : e.preInit) : [],
        o = e.preRun ? ('function' == typeof e.preRun ? [e.preRun] : e.preRun) : [],
        i = e.postRun ? ('function' == typeof e.postRun ? [e.postRun] : e.postRun) : [],
        a = e.onRuntimeInitialized ? e.onRuntimeInitialized : () => {};
      (wa = !(
        e.configSrc ||
        (e.config &&
          e.config.assets &&
          -1 != e.config.assets.findIndex((e) => 'assembly' === e.behavior))
      )),
        (e.instantiateWasm = (e, t) => xa(e, t, r)),
        (e.preInit = [() => ja(n)]),
        (e.preRun = [() => Ta(o)]),
        (e.onRuntimeInitialized = () =>
          (async function (e) {
            await Sa.promise,
              d.diagnosticTracing && console.debug('MONO_WASM: onRuntimeInitialized'),
              Aa.promise_control.resolve();
            try {
              wa ||
                (await ro(),
                await (async function () {
                  d.diagnosticTracing &&
                    console.debug('MONO_WASM: mono_wasm_before_user_runtime_initialized');
                  try {
                    await (async function () {
                      try {
                        Pa('TZ', Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC');
                      } catch (e) {
                        Pa('TZ', 'UTC');
                      }
                      for (const e in ha.environmentVariables) {
                        const t = ha.environmentVariables[e];
                        if ('string' != typeof t)
                          throw new Error(
                            `Expected environment variable '${e}' to be a string but it was ${typeof t}: '${t}'`
                          );
                        Pa(e, t);
                      }
                      ha.runtimeOptions && Ca(ha.runtimeOptions),
                        ha.aotProfilerOptions && X(ha.aotProfilerOptions),
                        ha.coverageProfilerOptions && Z(ha.coverageProfilerOptions);
                    })(),
                      Y(),
                      d.mono_wasm_load_runtime_done || Ia('unused', ha.debugLevel),
                      d.mono_wasm_runtime_is_ready || x(),
                      d.mono_wasm_symbols_are_ready || ue('dotnet.js.symbols'),
                      setTimeout(() => {
                        kr.init_fields();
                      });
                  } catch (e) {
                    throw (
                      (Ra('MONO_WASM: Error in mono_wasm_before_user_runtime_initialized', e), e)
                    );
                  }
                })()),
                ha.runtimeOptions && Ca(ha.runtimeOptions);
              try {
                e();
              } catch (e) {
                throw (Ra('MONO_WASM: user callback onRuntimeInitialized() failed', e), e);
              }
              await Ma();
            } catch (e) {
              throw (Ra('MONO_WASM: onRuntimeInitializedAsync() failed', e), Da(e, !0), e);
            }
            ka.promise_control.resolve();
          })(a)),
        (e.postRun = [
          () =>
            (async function (e) {
              await ka.promise, d.diagnosticTracing && console.debug('MONO_WASM: postRunAsync');
              try {
                e.map((e) => e());
              } catch (e) {
                throw (Ra('MONO_WASM: user callback posRun() failed', e), Da(e, !0), e);
              }
              Na.promise_control.resolve();
            })(i)
        ]),
        e.ready
          .then(async () => {
            await Na.promise, ga.promise_control.resolve(t);
          })
          .catch((e) => {
            ga.promise_control.reject(e);
          }),
        (e.ready = ga.promise),
        e.onAbort || (e.onAbort = () => me);
    }
    function xa(e, r, n) {
      if (
        (t.configSrc || t.config || n || t.print('MONO_WASM: configSrc nor config was specified'),
        (ha = t.config ? (d.config = t.config) : (d.config = t.config = {})),
        (d.diagnosticTracing = !!ha.diagnosticTracing),
        n)
      ) {
        return n(e, (e, t) => {
          ba.promise_control.resolve(), r(e, t);
        });
      }
      return (
        (async function (e, r) {
          try {
            await Fa(t.configSrc),
              d.diagnosticTracing && console.debug('MONO_WASM: instantiate_wasm_module');
            const n = (function (e) {
              var t;
              const r =
                null === (t = d.config.assets) || void 0 === t
                  ? void 0
                  : t.find((t) => t.behavior == e);
              if (!r) throw new Error(`Assert failed: Can't find asset for ${e}`);
              return r.resolvedUrl || (r.resolvedUrl = Kn(r, '')), r;
            })('dotnetwasm');
            await Xn(n, !1),
              await va.promise,
              t.addRunDependency('instantiate_wasm_module'),
              (async function (e, t, r) {
                if (!(e && e.pendingDownloadInternal && e.pendingDownloadInternal.response))
                  throw new Error("Assert failed: Can't load dotnet.wasm");
                const n = await e.pendingDownloadInternal.response,
                  o = n.headers && n.headers.get ? n.headers.get('Content-Type') : void 0;
                let i, s;
                if (
                  'function' == typeof WebAssembly.instantiateStreaming &&
                  'application/wasm' === o
                ) {
                  d.diagnosticTracing &&
                    console.debug('MONO_WASM: instantiate_wasm_module streaming');
                  const e = await WebAssembly.instantiateStreaming(n, t);
                  (i = e.instance), (s = e.module);
                } else {
                  a &&
                    'application/wasm' !== o &&
                    console.warn(
                      'MONO_WASM: WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.'
                    );
                  const e = await n.arrayBuffer();
                  d.diagnosticTracing &&
                    console.debug('MONO_WASM: instantiate_wasm_module buffered');
                  const r = await WebAssembly.instantiate(e, t);
                  (i = r.instance), (s = r.module);
                }
                r(i, s);
              })(n, e, r),
              d.diagnosticTracing && console.debug('MONO_WASM: instantiate_wasm_module done'),
              ba.promise_control.resolve();
          } catch (e) {
            throw (Ra('MONO_WASM: instantiate_wasm_module() failed', e), Da(e, !0), e);
          }
          t.removeRunDependency('instantiate_wasm_module');
        })(e, r),
        []
      );
    }
    function ja(e) {
      t.addRunDependency('mono_pre_init');
      try {
        t.addRunDependency('mono_wasm_pre_init_essential'),
          d.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_pre_init_essential'),
          (function () {
            const e = !!c;
            for (const r of w) {
              const n = g,
                [o, i, a, s, c] = r;
              if (o || e)
                n[i] = function (...e) {
                  const r = t.cwrap(i, a, s, c);
                  return (n[i] = r), r(...e);
                };
              else {
                const e = t.cwrap(i, a, s, c);
                n[i] = e;
              }
            }
          })(),
          (function (e) {
            Object.assign(e, {
              mono_wasm_exit: g.mono_wasm_exit,
              mono_wasm_enable_on_demand_gc: g.mono_wasm_enable_on_demand_gc,
              mono_profiler_init_aot: g.mono_profiler_init_aot,
              mono_wasm_exec_regression: g.mono_wasm_exec_regression
            });
          })(r),
          (function (e) {
            Object.assign(e, { mono_wasm_add_assembly: g.mono_wasm_add_assembly });
          })(Mn),
          (function (e) {
            Object.assign(e, {
              mono_obj_array_new: g.mono_wasm_obj_array_new,
              mono_obj_array_set: g.mono_wasm_obj_array_set,
              mono_obj_array_new_ref: g.mono_wasm_obj_array_new_ref,
              mono_obj_array_set_ref: g.mono_wasm_obj_array_set_ref
            });
          })(Rn),
          t.removeRunDependency('mono_wasm_pre_init_essential'),
          d.diagnosticTracing && console.debug('MONO_WASM: preInit'),
          va.promise_control.resolve(),
          e.forEach((e) => e());
      } catch (e) {
        throw (Ra('MONO_WASM: user preInint() failed', e), Da(e, !0), e);
      }
      (async () => {
        try {
          await (async function () {
            d.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_pre_init_essential_async'),
              t.addRunDependency('mono_wasm_pre_init_essential_async'),
              await (async function () {
                if (o) {
                  if (((r.require = await d.requirePromise), globalThis.performance === so)) {
                    const { performance: e } = r.require('perf_hooks');
                    globalThis.performance = e;
                  }
                  if (
                    (globalThis.crypto || (globalThis.crypto = {}),
                    !globalThis.crypto.getRandomValues)
                  ) {
                    let e;
                    try {
                      e = r.require('node:crypto');
                    } catch (e) {}
                    e
                      ? e.webcrypto
                        ? (globalThis.crypto = e.webcrypto)
                        : e.randomBytes &&
                          (globalThis.crypto.getRandomValues = (t) => {
                            t && t.set(e.randomBytes(t.length));
                          })
                      : (globalThis.crypto.getRandomValues = () => {
                          throw new Error(
                            "Using node without crypto support. To enable current operation, either provide polyfill for 'globalThis.crypto.getRandomValues' or enable 'node:crypto' module."
                          );
                        });
                  }
                }
              })(),
              await Fa(t.configSrc),
              t.removeRunDependency('mono_wasm_pre_init_essential_async');
          })(),
            wa ||
              (await (async function () {
                d.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_pre_init_full'),
                  t.addRunDependency('mono_wasm_pre_init_full'),
                  await Yn(),
                  t.removeRunDependency('mono_wasm_pre_init_full');
              })());
        } catch (e) {
          throw (Da(e, !0), e);
        }
        Ea.promise_control.resolve(), t.removeRunDependency('mono_pre_init');
      })();
    }
    async function Ta(e) {
      t.addRunDependency('mono_pre_run_async'),
        await ba.promise,
        await Ea.promise,
        d.diagnosticTracing && console.debug('MONO_WASM: preRunAsync');
      try {
        e.map((e) => e());
      } catch (e) {
        throw (Ra('MONO_WASM: user callback preRun() failed', e), Da(e, !0), e);
      }
      Sa.promise_control.resolve(), t.removeRunDependency('mono_pre_run_async');
    }
    function Da(e, t) {
      d.diagnosticTracing && console.trace('MONO_WASM: abort_startup'),
        ga.promise_control.reject(e),
        ba.promise_control.reject(e),
        va.promise_control.reject(e),
        Ea.promise_control.reject(e),
        Sa.promise_control.reject(e),
        Aa.promise_control.reject(e),
        ka.promise_control.reject(e),
        Na.promise_control.reject(e),
        t && de(1, e);
    }
    async function Ma() {
      d.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_after_user_runtime_initialized');
      try {
        if (!t.disableDotnet6Compatibility && t.exports) {
          const e = globalThis;
          for (let r = 0; r < t.exports.length; ++r) {
            const n = t.exports[r],
              o = t[n];
            null != o
              ? (e[n] = o)
              : console.warn(
                  `MONO_WASM: The exported symbol ${n} could not be found in the emscripten module`
                );
          }
        }
        if (
          (d.diagnosticTracing && console.debug('MONO_WASM: Initializing mono runtime'),
          t.onDotnetReady)
        )
          try {
            await t.onDotnetReady();
          } catch (e) {
            throw (Ra('MONO_WASM: onDotnetReady () failed', e), e);
          }
      } catch (e) {
        throw (Ra('MONO_WASM: Error in mono_wasm_after_user_runtime_initialized', e), e);
      }
    }
    function Ra(e, r) {
      t.printErr(`${e}: ${JSON.stringify(r)}`),
        r.stack && (t.printErr('MONO_WASM: Stacktrace: \n'), t.printErr(r.stack));
    }
    function Pa(e, t) {
      g.mono_wasm_setenv(e, t);
    }
    function Ca(e) {
      if (!Array.isArray(e)) throw new Error('Expected runtimeOptions to be an array of strings');
      const r = t._malloc(4 * e.length);
      let n = 0;
      for (let o = 0; o < e.length; ++o) {
        const i = e[o];
        if ('string' != typeof i)
          throw new Error('Expected runtimeOptions to be an array of strings');
        t.setValue(r + 4 * n, g.mono_wasm_strdup(i), 'i32'), (n += 1);
      }
      g.mono_wasm_parse_runtime_options(e.length, r);
    }
    function Ia(e, r) {
      if (
        (d.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_load_runtime'),
        !d.mono_wasm_load_runtime_done)
      ) {
        d.mono_wasm_load_runtime_done = !0;
        try {
          null == r && ((r = 0), ha && ha.debugLevel && (r = 0 + r)),
            g.mono_wasm_load_runtime(e || 'unused', r),
            (d.waitForDebugger = ha.waitForDebugger),
            d.mono_wasm_bindings_is_ready ||
              (function () {
                if (
                  (d.diagnosticTracing && console.debug('MONO_WASM: bindings_init'),
                  !d.mono_wasm_bindings_is_ready)
                ) {
                  d.mono_wasm_bindings_is_ready = !0;
                  try {
                    (function () {
                      const e = t,
                        r = 'System.Runtime.InteropServices.JavaScript';
                      if (
                        ((d.runtime_interop_module = g.mono_wasm_assembly_load(r)),
                        !d.runtime_interop_module)
                      )
                        throw "Can't find bindings module assembly: " + r;
                      if (
                        ((d.runtime_interop_namespace =
                          'System.Runtime.InteropServices.JavaScript'),
                        (d.runtime_interop_exports_classname = 'JavaScriptExports'),
                        (d.runtime_interop_exports_class = g.mono_wasm_assembly_find_class(
                          d.runtime_interop_module,
                          d.runtime_interop_namespace,
                          d.runtime_interop_exports_classname
                        )),
                        !d.runtime_interop_exports_class)
                      )
                        throw (
                          "Can't find " +
                          d.runtime_interop_namespace +
                          '.' +
                          d.runtime_interop_exports_classname +
                          ' class'
                        );
                      const n = g.mono_wasm_assembly_find_method(
                          d.runtime_interop_exports_class,
                          'InstallSynchronizationContext',
                          -1
                        ),
                        o = Do('CallEntrypoint');
                      if (!o) throw new Error("Assert failed: Can't find CallEntrypoint method");
                      const i = Do('ReleaseJSOwnedObjectByGCHandle');
                      if (!i)
                        throw new Error(
                          "Assert failed: Can't find ReleaseJSOwnedObjectByGCHandle method"
                        );
                      const a = Do('CreateTaskCallback');
                      if (!a)
                        throw new Error("Assert failed: Can't find CreateTaskCallback method");
                      const s = Do('CompleteTask');
                      if (!s) throw new Error("Assert failed: Can't find CompleteTask method");
                      const u = Do('CallDelegate');
                      if (!u) throw new Error("Assert failed: Can't find CallDelegate method");
                      const _ = Do('GetManagedStackTrace');
                      if (!_)
                        throw new Error("Assert failed: Can't find GetManagedStackTrace method");
                      (d.javaScriptExports.call_entry_point = (t, r) => {
                        const n = e.stackSave();
                        try {
                          const i = Lt(4),
                            a = Ht(i, 1),
                            s = Ht(i, 2),
                            c = Ht(i, 3);
                          return (
                            Hr(s, t),
                            r && 0 == r.length && (r = void 0),
                            nn(c, r, yr.String),
                            Oo(o, i),
                            En(a, 0, mn) || Promise.resolve(0)
                          );
                        } finally {
                          e.stackRestore(n);
                        }
                      }),
                        (d.javaScriptExports.release_js_owned_object_by_gc_handle = (t) => {
                          if (!t) throw new Error('Assert failed: Must be valid gc_handle');
                          const r = e.stackSave();
                          try {
                            const n = Lt(3),
                              o = Ht(n, 2);
                            er(o, yr.Object), ur(o, t), Oo(i, n);
                          } finally {
                            e.stackRestore(r);
                          }
                        }),
                        (d.javaScriptExports.create_task_callback = () => {
                          const t = e.stackSave();
                          try {
                            const r = Lt(2);
                            return Oo(a, r), cr(Ht(r, 1));
                          } finally {
                            e.stackRestore(t);
                          }
                        }),
                        (d.javaScriptExports.complete_task = (t, r, n, o) => {
                          const i = e.stackSave();
                          try {
                            const a = Lt(5),
                              c = Ht(a, 2);
                            er(c, yr.Object), ur(c, t);
                            const u = Ht(a, 3);
                            if (r) Qr(u, r);
                            else {
                              er(u, yr.None);
                              const e = Ht(a, 4);
                              if (!o) throw new Error('Assert failed: res_converter missing');
                              o(e, n);
                            }
                            Oo(s, a);
                          } finally {
                            e.stackRestore(i);
                          }
                        }),
                        (d.javaScriptExports.call_delegate = (t, r, n, o, i, a, s, c) => {
                          const _ = e.stackSave();
                          try {
                            const l = Lt(6),
                              f = Ht(l, 2);
                            if (
                              (er(f, yr.Object),
                              ur(f, t),
                              a && a(Ht(l, 3), r),
                              s && s(Ht(l, 4), n),
                              c && c(Ht(l, 5), o),
                              Oo(u, l),
                              i)
                            )
                              return i(Ht(l, 1));
                          } finally {
                            e.stackRestore(_);
                          }
                        }),
                        (d.javaScriptExports.get_managed_stack_trace = (t) => {
                          const r = e.stackSave();
                          try {
                            const n = Lt(3),
                              o = Ht(n, 2);
                            return er(o, yr.Exception), ur(o, t), Oo(_, n), An(Ht(n, 1));
                          } finally {
                            e.stackRestore(r);
                          }
                        }),
                        n &&
                          ((d.javaScriptExports.install_synchronization_context = () => {
                            const t = e.stackSave();
                            try {
                              const r = Lt(2);
                              Oo(n, r);
                            } finally {
                              e.stackRestore(t);
                            }
                          }),
                          c || d.javaScriptExports.install_synchronization_context());
                    })(),
                      Ai(),
                      0 == $t.size &&
                        ($t.set(yr.Array, xn),
                        $t.set(yr.Span, Tn),
                        $t.set(yr.ArraySegment, Dn),
                        $t.set(yr.Boolean, un),
                        $t.set(yr.Byte, _n),
                        $t.set(yr.Char, ln),
                        $t.set(yr.Int16, fn),
                        $t.set(yr.Int32, mn),
                        $t.set(yr.Int52, dn),
                        $t.set(yr.BigInt64, hn),
                        $t.set(yr.Single, pn),
                        $t.set(yr.IntPtr, gn),
                        $t.set(yr.Double, wn),
                        $t.set(yr.String, An),
                        $t.set(yr.Exception, kn),
                        $t.set(yr.JSException, kn),
                        $t.set(yr.JSObject, Nn),
                        $t.set(yr.Object, On),
                        $t.set(yr.DateTime, bn),
                        $t.set(yr.DateTimeOffset, bn),
                        $t.set(yr.Task, En),
                        $t.set(yr.Action, vn),
                        $t.set(yr.Function, vn),
                        $t.set(yr.None, yn),
                        $t.set(yr.Void, yn),
                        $t.set(yr.Discard, yn)),
                      0 == Ut.size &&
                        (Ut.set(yr.Array, rn),
                        Ut.set(yr.Span, on),
                        Ut.set(yr.ArraySegment, an),
                        Ut.set(yr.Boolean, Cr),
                        Ut.set(yr.Byte, Ir),
                        Ut.set(yr.Char, Fr),
                        Ut.set(yr.Int16, $r),
                        Ut.set(yr.Int32, Ur),
                        Ut.set(yr.Int52, Wr),
                        Ut.set(yr.BigInt64, Br),
                        Ut.set(yr.Double, zr),
                        Ut.set(yr.Single, Lr),
                        Ut.set(yr.IntPtr, Hr),
                        Ut.set(yr.DateTime, Vr),
                        Ut.set(yr.DateTimeOffset, qr),
                        Ut.set(yr.String, Gr),
                        Ut.set(yr.Exception, Qr),
                        Ut.set(yr.JSException, Qr),
                        Ut.set(yr.JSObject, en),
                        Ut.set(yr.Object, tn),
                        Ut.set(yr.Task, Kr),
                        Ut.set(yr.Action, Xr),
                        Ut.set(yr.Function, Xr),
                        Ut.set(yr.None, Yr),
                        Ut.set(yr.Discard, Yr),
                        Ut.set(yr.Void, Yr)),
                      (d._i52_error_scratch_buffer = t._malloc(4));
                  } catch (e) {
                    throw (Ra('MONO_WASM: Error in bindings_init', e), e);
                  }
                }
              })();
        } catch (e) {
          if ((Ra('MONO_WASM: mono_wasm_load_runtime () failed', e), Da(e, !1), i || o)) {
            (0, g.mono_wasm_exit)(1);
          }
          throw e;
        }
      }
    }
    async function Fa(e) {
      if (pa) await ya.promise;
      else {
        if (((pa = !0), !e)) return r(), void ya.promise_control.resolve();
        d.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_load_config');
        try {
          const n = d.locateFile(e),
            o = await d.fetch_like(n),
            i = (await o.json()) || {};
          if (i.environmentVariables && 'object' != typeof i.environmentVariables)
            throw new Error(
              'Expected config.environmentVariables to be unset or a dictionary-style object'
            );
          if (
            ((i.assets = [...(i.assets || []), ...(ha.assets || [])]),
            (i.environmentVariables = {
              ...(i.environmentVariables || {}),
              ...(ha.environmentVariables || {})
            }),
            (ha = d.config = t.config = Object.assign(t.config, i)),
            r(),
            t.onConfigLoaded)
          )
            try {
              await t.onConfigLoaded(d.config), r();
            } catch (e) {
              throw (Ra('MONO_WASM: onConfigLoaded() failed', e), e);
            }
          ya.promise_control.resolve();
        } catch (r) {
          const n = `Failed to load config file ${e} ${r}`;
          throw (Da(n, !0), (ha = d.config = t.config = { message: n, error: r, isError: !0 }), r);
        }
      }
      function r() {
        (ha.environmentVariables = ha.environmentVariables || {}),
          (ha.assets = ha.assets || []),
          (ha.runtimeOptions = ha.runtimeOptions || []),
          (ha.globalizationMode = ha.globalizationMode || 'auto'),
          ha.debugLevel,
          ha.diagnosticTracing,
          (d.diagnosticTracing = !!d.config.diagnosticTracing);
      }
    }
    function $a(e, r, n, o, i) {
      if (!0 !== d.mono_wasm_runtime_is_ready) return;
      const a = 0 !== e ? t.UTF8ToString(e).concat('.dll') : '',
        s = y(new Uint8Array(t.HEAPU8.buffer, r, n));
      let c;
      if (o) {
        c = y(new Uint8Array(t.HEAPU8.buffer, o, i));
      }
      $({ eventName: 'AssemblyLoaded', assembly_name: a, assembly_b64: s, pdb_b64: c });
    }
    async function Ua(e) {
      (ha = t.config = d.config = Object.assign(d.config || {}, e || {})),
        await Yn(),
        wa || (await ro());
    }
    var Wa, Ba;
    (function (e) {
      (e[(e.Sending = 0)] = 'Sending'),
        (e[(e.Closed = 1)] = 'Closed'),
        (e[(e.Error = 2)] = 'Error');
    })(Wa || (Wa = {})),
      (function (e) {
        (e[(e.Idle = 0)] = 'Idle'),
          (e[(e.PartialCommand = 1)] = 'PartialCommand'),
          (e[(e.Error = 2)] = 'Error');
      })(Ba || (Ba = {}));
    const za = new (class {
      constructor() {
        this.moduleConfig = {
          disableDotnet6Compatibility: !0,
          configSrc: './mono-config.json',
          config: d.config
        };
      }
      withModuleConfig(e) {
        try {
          return Object.assign(this.moduleConfig, e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withConsoleForwarding() {
        try {
          const e = { forwardConsoleLogsToWS: !0 };
          return Object.assign(this.moduleConfig.config, e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withAsyncFlushOnExit() {
        try {
          const e = { asyncFlushOnExit: !0 };
          return Object.assign(this.moduleConfig.config, e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withExitCodeLogging() {
        try {
          const e = { logExitCode: !0 };
          return Object.assign(this.moduleConfig.config, e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withElementOnExit() {
        try {
          const e = { appendElementOnExit: !0 };
          return Object.assign(this.moduleConfig.config, e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withWaitingForDebugger(e) {
        try {
          const t = { waitForDebugger: e };
          return Object.assign(this.moduleConfig.config, t), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withConfig(e) {
        try {
          const t = { ...e };
          return (
            (t.assets = [...(this.moduleConfig.config.assets || []), ...(t.assets || [])]),
            (t.environmentVariables = {
              ...(this.moduleConfig.config.environmentVariables || {}),
              ...(t.environmentVariables || {})
            }),
            Object.assign(this.moduleConfig.config, t),
            this
          );
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withConfigSrc(e) {
        try {
          if (!e || 'string' != typeof e)
            throw new Error('Assert failed: must be file path or URL');
          return Object.assign(this.moduleConfig, { configSrc: e }), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withVirtualWorkingDirectory(e) {
        try {
          if (!e || 'string' != typeof e) throw new Error('Assert failed: must be directory path');
          return (this.virtualWorkingDirectory = e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withEnvironmentVariable(e, t) {
        try {
          return (this.moduleConfig.config.environmentVariables[e] = t), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withEnvironmentVariables(e) {
        try {
          if (!e || 'object' != typeof e)
            throw new Error('Assert failed: must be dictionary object');
          return Object.assign(this.moduleConfig.config.environmentVariables, e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withDiagnosticTracing(e) {
        try {
          if ('boolean' != typeof e) throw new Error('Assert failed: must be boolean');
          return (this.moduleConfig.config.diagnosticTracing = e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withDebugging(e) {
        try {
          if (!e || 'number' != typeof e) throw new Error('Assert failed: must be number');
          return (this.moduleConfig.config.debugLevel = e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withApplicationArguments(...e) {
        try {
          if (!e || !Array.isArray(e)) throw new Error('Assert failed: must be array of strings');
          return (this.applicationArguments = e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withRuntimeOptions(e) {
        try {
          if (!e || !Array.isArray(e)) throw new Error('Assert failed: must be array of strings');
          return Object.assign(this.moduleConfig, { runtimeOptions: e }), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withMainAssembly(e) {
        try {
          return (this.moduleConfig.config.mainAssemblyName = e), this;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      withApplicationArgumentsFromQuery() {
        try {
          if (void 0 !== globalThis.URLSearchParams) {
            const e = new URLSearchParams(window.location.search).getAll('arg');
            return this.withApplicationArguments(...e);
          }
          throw new Error('URLSearchParams is supported');
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      async create() {
        try {
          if (!this.instance) {
            if (
              (a &&
                !c &&
                this.moduleConfig.config.forwardConsoleLogsToWS &&
                void 0 !== globalThis.WebSocket &&
                (function (e, t, r) {
                  const n = { log: t.log, error: t.error },
                    o = t;
                  function i(t, r, o) {
                    return function (...i) {
                      try {
                        let n = i[0];
                        if (void 0 === n) n = 'undefined';
                        else if (null === n) n = 'null';
                        else if ('function' == typeof n) n = n.toString();
                        else if ('string' != typeof n)
                          try {
                            n = JSON.stringify(n);
                          } catch (e) {
                            n = n.toString();
                          }
                        'string' == typeof n && 'main' !== e && (n = `[${e}] ${n}`),
                          r(
                            o
                              ? JSON.stringify({ method: t, payload: n, arguments: i })
                              : [t + n, ...i.slice(1)]
                          );
                      } catch (e) {
                        n.error(`proxyConsole failed: ${e}`);
                      }
                    };
                  }
                  const a = ['debug', 'trace', 'warn', 'info', 'error'];
                  for (const e of a)
                    'function' != typeof o[e] && (o[e] = i(`console.${e}: `, t.log, !1));
                  const s = `${r}/console`
                    .replace('https://', 'wss://')
                    .replace('http://', 'ws://');
                  (ce = new WebSocket(s)),
                    ce.addEventListener('open', () => {
                      n.log(`browser: [${e}] Console websocket connected.`);
                    }),
                    ce.addEventListener('error', (t) => {
                      n.error(`[${e}] websocket error: ${t}`, t);
                    }),
                    ce.addEventListener('close', (t) => {
                      n.error(`[${e}] websocket closed: ${t}`, t);
                    });
                  const c = (e) => {
                    ce.readyState === WebSocket.OPEN ? ce.send(e) : n.log(e);
                  };
                  for (const e of ['log', ...a]) o[e] = i(`console.${e}`, c, !0);
                })('main', globalThis.console, globalThis.location.origin),
              o)
            ) {
              const e = await import('process');
              if (e.versions.node.split('.')[0] < 14)
                throw new Error(
                  `NodeJS at '${e.execPath}' has too low version '${e.versions.node}'`
                );
            }
            if (!this.moduleConfig) throw new Error('Assert failed: Null moduleConfig');
            if (!this.moduleConfig.config)
              throw new Error('Assert failed: Null moduleConfig.config');
            this.instance = await l(this.moduleConfig);
          }
          if (this.virtualWorkingDirectory) {
            const e = this.instance.Module.FS,
              t = e.stat(this.virtualWorkingDirectory);
            if (!t || !e.isDir(t.mode))
              throw new Error(
                `Assert failed: Could not find working directory ${this.virtualWorkingDirectory}`
              );
            e.chdir(this.virtualWorkingDirectory);
          }
          return this.instance;
        } catch (e) {
          throw (de(1, e), e);
        }
      }
      async run() {
        try {
          if (!this.moduleConfig.config) throw new Error('Assert failed: Null moduleConfig.config');
          if ((this.instance || (await this.create()), !this.moduleConfig.config.mainAssemblyName))
            throw new Error('Assert failed: Null moduleConfig.config.mainAssemblyName');
          if (!this.applicationArguments)
            if (o) {
              const e = await import('process');
              this.applicationArguments = e.argv.slice(2);
            } else this.applicationArguments = [];
          return this.instance.runMainAndExit(
            this.moduleConfig.config.mainAssemblyName,
            this.applicationArguments
          );
        } catch (e) {
          throw (de(1, e), e);
        }
      }
    })();
    const La = function (t, r, n, o) {
        const i = r.module,
          a = globalThis;
        f(t, r),
          (function (e) {
            (Mn = e.mono), (Rn = e.binding);
          })(r),
          ao(n),
          Object.assign(r.mono, {
            mono_wasm_setenv: Pa,
            mono_wasm_load_bytes_into_heap: At,
            mono_wasm_load_icu_data: G,
            mono_wasm_runtime_ready: x,
            mono_wasm_load_data_archive: to,
            mono_wasm_load_config: Fa,
            mono_load_runtime_and_bcl_args: Ua,
            mono_wasm_new_root_buffer: Dt,
            mono_wasm_new_root: Rt,
            mono_wasm_new_external_root: Mt,
            mono_wasm_release_roots: Pt,
            mono_run_main: le,
            mono_run_main_and_exit: _e,
            mono_wasm_add_assembly: null,
            mono_wasm_load_runtime: Ia,
            config: d.config,
            loaded_files: [],
            setB32: Ye,
            setI8: et,
            setI16: tt,
            setI32: nt,
            setI52: it,
            setU52: at,
            setI64Big: st,
            setU8: Xe,
            setU16: Ze,
            setU32: Qe,
            setF32: ct,
            setF64: ut,
            getB32: _t,
            getI8: dt,
            getI16: ht,
            getI32: pt,
            getI52: wt,
            getU52: gt,
            getI64Big: yt,
            getU8: lt,
            getU16: ft,
            getU32: mt,
            getF32: bt,
            getF64: vt
          }),
          Object.assign(r.binding, {
            bind_static_method: ti,
            call_assembly_entry_point: ni,
            mono_obj_array_new: null,
            mono_obj_array_set: null,
            js_string_to_mono_string: Rr,
            js_typed_array_to_array: Wo,
            mono_array_to_js_array: Jo,
            js_to_mono_obj: Io,
            conv_string: Or,
            unbox_mono_obj: Ho,
            mono_obj_array_new_ref: null,
            mono_obj_array_set_ref: null,
            js_string_to_mono_string_root: Dr,
            js_typed_array_to_array_root: Uo,
            js_to_mono_obj_root: Fo,
            conv_string_root: xr,
            unbox_mono_obj_root: Go,
            mono_array_root_to_js_array: Xo
          }),
          Object.assign(r.internal, ma()),
          Object.assign(r.internal, ma());
        const s = {
          runMain: le,
          runMainAndExit: _e,
          setEnvironmentVariable: Pa,
          getAssemblyExports: jo,
          setModuleImports: mo,
          getConfig: () => d.config,
          setHeapB32: Ye,
          setHeapU8: Xe,
          setHeapU16: Ze,
          setHeapU32: Qe,
          setHeapI8: et,
          setHeapI16: tt,
          setHeapI32: nt,
          setHeapI52: it,
          setHeapU52: at,
          setHeapI64Big: st,
          setHeapF32: ct,
          setHeapF64: ut,
          getHeapB32: _t,
          getHeapU8: lt,
          getHeapU16: ft,
          getHeapU32: mt,
          getHeapI8: dt,
          getHeapI16: ht,
          getHeapI32: pt,
          getHeapI52: wt,
          getHeapU52: gt,
          getHeapI64Big: yt,
          getHeapF32: bt,
          getHeapF64: vt
        };
        if (
          ((e.__linker_exports = {
            mono_set_timeout: Hi,
            mono_wasm_asm_loaded: $a,
            mono_wasm_fire_debugger_agent_message: j,
            mono_wasm_debugger_log: V,
            mono_wasm_add_dbg_command_received: T,
            schedule_background_exec: Li,
            mono_wasm_invoke_js_blazor: _i,
            mono_wasm_trace_logger: se,
            mono_wasm_set_entrypoint_breakpoint: W,
            mono_wasm_event_pipe_early_startup_callback: da,
            mono_wasm_invoke_js_with_args_ref: oi,
            mono_wasm_get_object_property_ref: ii,
            mono_wasm_set_object_property_ref: ai,
            mono_wasm_get_by_index_ref: si,
            mono_wasm_set_by_index_ref: ci,
            mono_wasm_get_global_object_ref: ui,
            mono_wasm_create_cs_owned_object_ref: Zo,
            mono_wasm_release_cs_owned_object: xe,
            mono_wasm_typed_array_to_array_ref: zo,
            mono_wasm_typed_array_from_ref: Mo,
            mono_wasm_bind_js_function: lo,
            mono_wasm_invoke_bound_function: fo,
            mono_wasm_bind_cs_function: No,
            mono_wasm_marshal_promise: Sn,
            mono_wasm_load_icu_data: G,
            mono_wasm_get_icudt_name: J
          }),
          Object.assign(u, {
            MONO: r.mono,
            BINDING: r.binding,
            INTERNAL: r.internal,
            IMPORTS: r.marshaled_imports,
            Module: i,
            runtimeBuildInfo: { productVersion: '7.0.20', buildConfiguration: 'Release' },
            ...s
          }),
          Object.assign(o, s),
          r.module.__undefinedConfig &&
            ((i.disableDotnet6Compatibility = !0), (i.configSrc = './mono-config.json')),
          i.print || (i.print = console.log.bind(console)),
          i.printErr || (i.printErr = console.error.bind(console)),
          void 0 === i.disableDotnet6Compatibility && (i.disableDotnet6Compatibility = !0),
          t.isGlobal || !i.disableDotnet6Compatibility)
        ) {
          Object.assign(i, u),
            (i.mono_bind_static_method = (e, t) => (
              console.warn(
                'MONO_WASM: Module.mono_bind_static_method is obsolete, please use [JSExportAttribute] interop instead'
              ),
              ti(e, t)
            ));
          const e = (e, t) => {
            if (void 0 !== a[e]) return;
            let r;
            Object.defineProperty(globalThis, e, {
              get: () => {
                if (p(r)) {
                  const n = new Error().stack,
                    o = n ? n.substr(n.indexOf('\n', 8) + 1) : '';
                  console.warn(
                    `MONO_WASM: global ${e} is obsolete, please use Module.${e} instead ${o}`
                  ),
                    (r = t());
                }
                return r;
              }
            });
          };
          (a.MONO = r.mono),
            (a.BINDING = r.binding),
            (a.INTERNAL = r.internal),
            t.isGlobal || (a.Module = i),
            e('cwrap', () => i.cwrap),
            e('addRunDependency', () => i.addRunDependency),
            e('removeRunDependency', () => i.removeRunDependency);
        }
        let c;
        return (
          a.getDotnetRuntime
            ? (c = a.getDotnetRuntime.__list)
            : ((a.getDotnetRuntime = (e) => a.getDotnetRuntime.__list.getRuntime(e)),
              (a.getDotnetRuntime.__list = c = new Va())),
          c.registerRuntime(u),
          Oa(i, u),
          u
        );
      },
      Ha = function (e, t) {
        m(t),
          Object.assign(_, { dotnet: za, exit: de }),
          (function (e) {
            l = e;
          })(e);
      };
    e.__linker_exports = null;
    class Va {
      constructor() {
        this.list = {};
      }
      registerRuntime(e) {
        return (
          (e.runtimeId = Object.keys(this.list).length),
          (this.list[e.runtimeId] = we(e)),
          e.runtimeId
        );
      }
      getRuntime(e) {
        const t = this.list[e];
        return t ? t.deref() : void 0;
      }
    }
    return (
      (e.__initializeImportsAndExports = La),
      (e.__setEmscriptenEntrypoint = Ha),
      (e.moduleExports = _),
      Object.defineProperty(e, '__esModule', { value: !0 }),
      e
    );
  })({}),
  createDotnetRuntime = (() => {
    var e = import.meta.url;
    return function (t) {
      var r,
        n,
        o = void 0 !== (t = t || {}) ? t : {};
      o.ready = new Promise(function (e, t) {
        (r = e), (n = t);
      });
      var i = i || void 0,
        a = a || '',
        s = { MONO, BINDING, INTERNAL, IMPORTS };
      if ('function' == typeof t) {
        s.Module = o = { ready: o.ready };
        const e = t(s);
        if (e.ready) throw new Error("MONO_WASM: Module.ready couldn't be redefined.");
        Object.assign(o, e), (t = o).locateFile || (t.locateFile = t.__locateFile = (e) => E + e);
      } else {
        if ('object' != typeof t)
          throw new Error(
            "MONO_WASM: Can't use moduleFactory callback of createDotnetRuntime function."
          );
        (s.Module = o = { ready: o.ready, __undefinedConfig: 1 === Object.keys(t).length }),
          Object.assign(o, t),
          (t = o).locateFile || (t.locateFile = t.__locateFile = (e) => E + e);
      }
      var c,
        u,
        _,
        l,
        f,
        m,
        d = Object.assign({}, o),
        h = [],
        p = './this.program',
        w = (e, t) => {
          throw t;
        },
        g = 'object' == typeof window,
        y = 'function' == typeof importScripts,
        b =
          'object' == typeof process &&
          'object' == typeof process.versions &&
          'string' == typeof process.versions.node,
        v = !g && !b && !y,
        E = '';
      function S(e) {
        return o.locateFile ? o.locateFile(e, E) : E + e;
      }
      function A(e) {
        if (e instanceof tc) return;
        N('exiting due to exception: ' + e);
      }
      b
        ? ((E = y ? i('path').dirname(E) + '/' : a + '/'),
          (m = () => {
            f || ((l = i('fs')), (f = i('path')));
          }),
          (c = function (e, t) {
            return m(), (e = f.normalize(e)), l.readFileSync(e, t ? void 0 : 'utf8');
          }),
          (_ = (e) => {
            var t = c(e, !0);
            return t.buffer || (t = new Uint8Array(t)), t;
          }),
          (u = (e, t, r) => {
            m(),
              (e = f.normalize(e)),
              l.readFile(e, function (e, n) {
                e ? r(e) : t(n.buffer);
              });
          }),
          process.argv.length > 1 && (p = process.argv[1].replace(/\\/g, '/')),
          (h = process.argv.slice(2)),
          process.on('uncaughtException', function (e) {
            if (!(e instanceof tc)) throw e;
          }),
          process.on('unhandledRejection', function (e) {
            throw e;
          }),
          (w = (e, t) => {
            if (de()) throw ((process.exitCode = e), t);
            A(t), process.exit(e);
          }),
          (o.inspect = function () {
            return '[Emscripten Module object]';
          }))
        : v
          ? ('undefined' != typeof read &&
              (c = function (e) {
                return read(e);
              }),
            (_ = function (e) {
              let t;
              return 'function' == typeof readbuffer
                ? new Uint8Array(readbuffer(e))
                : ((t = read(e, 'binary')), P('object' == typeof t), t);
            }),
            (u = function (e, t, r) {
              setTimeout(() => t(_(e)), 0);
            }),
            'undefined' != typeof scriptArgs
              ? (h = scriptArgs)
              : void 0 !== arguments && (h = arguments),
            'function' == typeof quit &&
              (w = (e, t) => {
                A(t), quit(e);
              }),
            'undefined' != typeof print &&
              ('undefined' == typeof console && (console = {}),
              (console.log = print),
              (console.warn = console.error = 'undefined' != typeof printErr ? printErr : print)))
          : (g || y) &&
            (y
              ? (E = self.location.href)
              : 'undefined' != typeof document &&
                document.currentScript &&
                (E = document.currentScript.src),
            e && (E = e),
            (E =
              0 !== E.indexOf('blob:')
                ? E.substr(0, E.replace(/[?#].*/, '').lastIndexOf('/') + 1)
                : ''),
            (c = (e) => {
              var t = new XMLHttpRequest();
              return t.open('GET', e, !1), t.send(null), t.responseText;
            }),
            y &&
              (_ = (e) => {
                var t = new XMLHttpRequest();
                return (
                  t.open('GET', e, !1),
                  (t.responseType = 'arraybuffer'),
                  t.send(null),
                  new Uint8Array(t.response)
                );
              }),
            (u = (e, t, r) => {
              var n = new XMLHttpRequest();
              n.open('GET', e, !0),
                (n.responseType = 'arraybuffer'),
                (n.onload = () => {
                  200 == n.status || (0 == n.status && n.response) ? t(n.response) : r();
                }),
                (n.onerror = r),
                n.send(null);
            }));
      var k = o.print || console.log.bind(console),
        N = o.printErr || console.warn.bind(console);
      Object.assign(o, d),
        (d = null),
        o.arguments && (h = o.arguments),
        o.thisProgram && (p = o.thisProgram),
        o.quit && (w = o.quit);
      var O,
        x = 0,
        j = (e) => {
          x = e;
        },
        T = () => x;
      o.wasmBinary && (O = o.wasmBinary);
      var D,
        M = o.noExitRuntime || !0;
      'object' != typeof WebAssembly && Ne('no native wasm support detected');
      var R = !1;
      function P(e, t) {
        e || Ne(t);
      }
      function C(e) {
        return o['_' + e];
      }
      function I(e, t, r, n, o) {
        var i = {
          string: function (e) {
            var t = 0;
            if (null != e && 0 !== e) {
              var r = 1 + (e.length << 2);
              z(e, (t = lo(r)), r);
            }
            return t;
          },
          array: function (e) {
            var t = lo(e.length);
            return se(e, t), t;
          }
        };
        var a = C(e),
          s = [],
          c = 0;
        if (n)
          for (var u = 0; u < n.length; u++) {
            var _ = i[r[u]];
            _ ? (0 === c && (c = uo()), (s[u] = _(n[u]))) : (s[u] = n[u]);
          }
        var l = a.apply(null, s);
        return (l = (function (e) {
          return (
            0 !== c && _o(c),
            (function (e) {
              return 'string' === t ? W(e) : 'boolean' === t ? Boolean(e) : e;
            })(e)
          );
        })(l));
      }
      function F(e, t, r, n) {
        var o = (r = r || []).every(function (e) {
          return 'number' === e;
        });
        return 'string' !== t && o && !n
          ? C(e)
          : function () {
              return I(e, t, r, arguments);
            };
      }
      var $ = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;
      function U(e, t, r) {
        for (var n = t + r, o = t; e[o] && !(o >= n); ) ++o;
        if (o - t > 16 && e.buffer && $) return $.decode(e.subarray(t, o));
        for (var i = ''; t < o; ) {
          var a = e[t++];
          if (128 & a) {
            var s = 63 & e[t++];
            if (192 != (224 & a)) {
              var c = 63 & e[t++];
              if (
                (a =
                  224 == (240 & a)
                    ? ((15 & a) << 12) | (s << 6) | c
                    : ((7 & a) << 18) | (s << 12) | (c << 6) | (63 & e[t++])) < 65536
              )
                i += String.fromCharCode(a);
              else {
                var u = a - 65536;
                i += String.fromCharCode(55296 | (u >> 10), 56320 | (1023 & u));
              }
            } else i += String.fromCharCode(((31 & a) << 6) | s);
          } else i += String.fromCharCode(a);
        }
        return i;
      }
      function W(e, t) {
        return e ? U(q, e, t) : '';
      }
      function B(e, t, r, n) {
        if (!(n > 0)) return 0;
        for (var o = r, i = r + n - 1, a = 0; a < e.length; ++a) {
          var s = e.charCodeAt(a);
          if (s >= 55296 && s <= 57343)
            s = (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++a));
          if (s <= 127) {
            if (r >= i) break;
            t[r++] = s;
          } else if (s <= 2047) {
            if (r + 1 >= i) break;
            (t[r++] = 192 | (s >> 6)), (t[r++] = 128 | (63 & s));
          } else if (s <= 65535) {
            if (r + 2 >= i) break;
            (t[r++] = 224 | (s >> 12)), (t[r++] = 128 | ((s >> 6) & 63)), (t[r++] = 128 | (63 & s));
          } else {
            if (r + 3 >= i) break;
            (t[r++] = 240 | (s >> 18)),
              (t[r++] = 128 | ((s >> 12) & 63)),
              (t[r++] = 128 | ((s >> 6) & 63)),
              (t[r++] = 128 | (63 & s));
          }
        }
        return (t[r] = 0), r - o;
      }
      function z(e, t, r) {
        return B(e, q, t, r);
      }
      function L(e) {
        for (var t = 0, r = 0; r < e.length; ++r) {
          var n = e.charCodeAt(r);
          n >= 55296 &&
            n <= 57343 &&
            (n = (65536 + ((1023 & n) << 10)) | (1023 & e.charCodeAt(++r))),
            n <= 127 ? ++t : (t += n <= 2047 ? 2 : n <= 65535 ? 3 : 4);
        }
        return t;
      }
      var H,
        V,
        q,
        G,
        J,
        Y,
        X,
        Z,
        K,
        Q = 'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : void 0;
      function ee(e, t) {
        for (var r = e, n = r >> 1, o = n + t / 2; !(n >= o) && J[n]; ) ++n;
        if ((r = n << 1) - e > 32 && Q) return Q.decode(q.subarray(e, r));
        for (var i = '', a = 0; !(a >= t / 2); ++a) {
          var s = G[(e + 2 * a) >> 1];
          if (0 == s) break;
          i += String.fromCharCode(s);
        }
        return i;
      }
      function te(e, t, r) {
        if ((void 0 === r && (r = 2147483647), r < 2)) return 0;
        for (var n = t, o = (r -= 2) < 2 * e.length ? r / 2 : e.length, i = 0; i < o; ++i) {
          var a = e.charCodeAt(i);
          (G[t >> 1] = a), (t += 2);
        }
        return (G[t >> 1] = 0), t - n;
      }
      function re(e) {
        return 2 * e.length;
      }
      function ne(e, t) {
        for (var r = 0, n = ''; !(r >= t / 4); ) {
          var o = Y[(e + 4 * r) >> 2];
          if (0 == o) break;
          if ((++r, o >= 65536)) {
            var i = o - 65536;
            n += String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i));
          } else n += String.fromCharCode(o);
        }
        return n;
      }
      function oe(e, t, r) {
        if ((void 0 === r && (r = 2147483647), r < 4)) return 0;
        for (var n = t, o = n + r - 4, i = 0; i < e.length; ++i) {
          var a = e.charCodeAt(i);
          if (a >= 55296 && a <= 57343)
            a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++i));
          if (((Y[t >> 2] = a), (t += 4) + 4 > o)) break;
        }
        return (Y[t >> 2] = 0), t - n;
      }
      function ie(e) {
        for (var t = 0, r = 0; r < e.length; ++r) {
          var n = e.charCodeAt(r);
          n >= 55296 && n <= 57343 && ++r, (t += 4);
        }
        return t;
      }
      function ae(e) {
        var t = L(e) + 1,
          r = ro(t);
        return r && B(e, V, r, t), r;
      }
      function se(e, t) {
        V.set(e, t);
      }
      function ce(e, t, r) {
        for (var n = 0; n < e.length; ++n) V[t++ >> 0] = e.charCodeAt(n);
        r || (V[t >> 0] = 0);
      }
      function ue(e) {
        (H = e),
          (o.HEAP8 = V = new Int8Array(e)),
          (o.HEAP16 = G = new Int16Array(e)),
          (o.HEAP32 = Y = new Int32Array(e)),
          (o.HEAPU8 = q = new Uint8Array(e)),
          (o.HEAPU16 = J = new Uint16Array(e)),
          (o.HEAPU32 = X = new Uint32Array(e)),
          (o.HEAPF32 = Z = new Float32Array(e)),
          (o.HEAPF64 = K = new Float64Array(e));
      }
      o.INITIAL_MEMORY;
      var _e,
        le = [],
        fe = [],
        me = [];
      function de() {
        return M;
      }
      function he() {
        if (o.preRun)
          for ('function' == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length; )
            ge(o.preRun.shift());
        Ie(le);
      }
      function pe() {
        !0,
          o.noFSInit || dt.init.initialized || dt.init(),
          (dt.ignorePermissions = !1),
          st.init(),
          (gt.root = dt.mount(gt, {}, null)),
          Ie(fe);
      }
      function we() {
        if (o.postRun)
          for ('function' == typeof o.postRun && (o.postRun = [o.postRun]); o.postRun.length; )
            be(o.postRun.shift());
        Ie(me);
      }
      function ge(e) {
        le.unshift(e);
      }
      function ye(e) {
        fe.unshift(e);
      }
      function be(e) {
        me.unshift(e);
      }
      var ve = 0,
        Ee = null,
        Se = null;
      function Ae(e) {
        ve++, o.monitorRunDependencies && o.monitorRunDependencies(ve);
      }
      function ke(e) {
        if (
          (ve--,
          o.monitorRunDependencies && o.monitorRunDependencies(ve),
          0 == ve && (null !== Ee && (clearInterval(Ee), (Ee = null)), Se))
        ) {
          var t = Se;
          (Se = null), t();
        }
      }
      function Ne(e) {
        o.onAbort && o.onAbort(e),
          N((e = 'Aborted(' + e + ')')),
          (R = !0),
          1,
          (e += '. Build with -sASSERTIONS for more info.');
        var t = new WebAssembly.RuntimeError(e);
        throw (n(t), t);
      }
      var Oe,
        xe,
        je,
        Te = 'data:application/octet-stream;base64,';
      function De(e) {
        return e.startsWith(Te);
      }
      function Me(e) {
        return e.startsWith('file://');
      }
      function Re(e) {
        try {
          if (e == Oe && O) return new Uint8Array(O);
          if (_) return _(e);
          throw 'both async and sync fetching of the wasm failed';
        } catch (e) {
          Ne(e);
        }
      }
      function Pe() {
        if (!O && (g || y)) {
          if ('function' == typeof Kn && !Me(Oe))
            return Kn(Oe, { credentials: 'same-origin' })
              .then(function (e) {
                if (!e.ok) throw "failed to load wasm binary file at '" + Oe + "'";
                return e.arrayBuffer();
              })
              .catch(function () {
                return Re(Oe);
              });
          if (u)
            return new Promise(function (e, t) {
              u(
                Oe,
                function (t) {
                  e(new Uint8Array(t));
                },
                t
              );
            });
        }
        return Promise.resolve().then(function () {
          return Re(Oe);
        });
      }
      function Ce() {
        var e = { a: to };
        function t(e, t) {
          var r = e.exports;
          (o.asm = r), ue((D = o.asm.Zd).buffer), (_e = o.asm.be), ye(o.asm._d), ke();
        }
        function r(e) {
          t(e.instance);
        }
        function i(t) {
          return Pe()
            .then(function (t) {
              return WebAssembly.instantiate(t, e);
            })
            .then(function (e) {
              return e;
            })
            .then(t, function (e) {
              N('failed to asynchronously prepare wasm: ' + e), Ne(e);
            });
        }
        if ((Ae(), o.instantiateWasm))
          try {
            return o.instantiateWasm(e, t);
          } catch (e) {
            return N('Module.instantiateWasm callback failed with error: ' + e), !1;
          }
        return (
          (O ||
          'function' != typeof WebAssembly.instantiateStreaming ||
          De(Oe) ||
          Me(Oe) ||
          'function' != typeof Kn
            ? i(r)
            : Kn(Oe, { credentials: 'same-origin' }).then(function (t) {
                return WebAssembly.instantiateStreaming(t, e).then(r, function (e) {
                  return (
                    N('wasm streaming compile failed: ' + e),
                    N('falling back to ArrayBuffer instantiation'),
                    i(r)
                  );
                });
              })
          ).catch(n),
          {}
        );
      }
      function Ie(e) {
        for (; e.length > 0; ) {
          var t = e.shift();
          if ('function' != typeof t) {
            var r = t.func;
            'number' == typeof r
              ? void 0 === t.arg
                ? Ue(r)()
                : Ue(r)(t.arg)
              : r(void 0 === t.arg ? null : t.arg);
          } else t(o);
        }
      }
      function Fe(e, t = 'i8') {
        switch ((t.endsWith('*') && (t = 'i32'), t)) {
          case 'i1':
          case 'i8':
            return V[e >> 0];
          case 'i16':
            return G[e >> 1];
          case 'i32':
          case 'i64':
            return Y[e >> 2];
          case 'float':
            return Z[e >> 2];
          case 'double':
            return Number(K[e >> 3]);
          default:
            Ne('invalid type for getValue: ' + t);
        }
        return null;
      }
      o.locateFile
        ? De((Oe = 'dotnet.wasm')) || (Oe = S(Oe))
        : (Oe = new URL('dotnet.wasm', import.meta.url).toString());
      var $e = [];
      function Ue(e) {
        var t = $e[e];
        return t || (e >= $e.length && ($e.length = e + 1), ($e[e] = t = _e.get(e))), t;
      }
      function We(e, t, r = 'i8') {
        switch ((r.endsWith('*') && (r = 'i32'), r)) {
          case 'i1':
          case 'i8':
            V[e >> 0] = t;
            break;
          case 'i16':
            G[e >> 1] = t;
            break;
          case 'i32':
            Y[e >> 2] = t;
            break;
          case 'i64':
            (je = [
              t >>> 0,
              ((xe = t),
              +Math.abs(xe) >= 1
                ? xe > 0
                  ? (0 | Math.min(+Math.floor(xe / 4294967296), 4294967295)) >>> 0
                  : ~~+Math.ceil((xe - +(~~xe >>> 0)) / 4294967296) >>> 0
                : 0)
            ]),
              (Y[e >> 2] = je[0]),
              (Y[(e + 4) >> 2] = je[1]);
            break;
          case 'float':
            Z[e >> 2] = t;
            break;
          case 'double':
            K[e >> 3] = t;
            break;
          default:
            Ne('invalid type for setValue: ' + r);
        }
      }
      function Be(e, t, r, n) {
        Ne(
          'Assertion failed: ' +
            W(e) +
            ', at: ' +
            [t ? W(t) : 'unknown filename', r, n ? W(n) : 'unknown function']
        );
      }
      function ze(e) {
        return ro(e + 24) + 24;
      }
      var Le = [];
      function He(e) {
        e.add_ref();
      }
      var Ve = 0;
      function qe(e) {
        var t = new Je(e);
        return (
          t.get_caught() || (t.set_caught(!0), Ve--),
          t.set_rethrown(!1),
          Le.push(t),
          He(t),
          t.get_exception_ptr()
        );
      }
      var Ge = 0;
      function Je(e) {
        (this.excPtr = e),
          (this.ptr = e - 24),
          (this.set_type = function (e) {
            X[(this.ptr + 4) >> 2] = e;
          }),
          (this.get_type = function () {
            return X[(this.ptr + 4) >> 2];
          }),
          (this.set_destructor = function (e) {
            X[(this.ptr + 8) >> 2] = e;
          }),
          (this.get_destructor = function () {
            return X[(this.ptr + 8) >> 2];
          }),
          (this.set_refcount = function (e) {
            Y[this.ptr >> 2] = e;
          }),
          (this.set_caught = function (e) {
            (e = e ? 1 : 0), (V[(this.ptr + 12) >> 0] = e);
          }),
          (this.get_caught = function () {
            return 0 != V[(this.ptr + 12) >> 0];
          }),
          (this.set_rethrown = function (e) {
            (e = e ? 1 : 0), (V[(this.ptr + 13) >> 0] = e);
          }),
          (this.get_rethrown = function () {
            return 0 != V[(this.ptr + 13) >> 0];
          }),
          (this.init = function (e, t) {
            this.set_adjusted_ptr(0),
              this.set_type(e),
              this.set_destructor(t),
              this.set_refcount(0),
              this.set_caught(!1),
              this.set_rethrown(!1);
          }),
          (this.add_ref = function () {
            var e = Y[this.ptr >> 2];
            Y[this.ptr >> 2] = e + 1;
          }),
          (this.release_ref = function () {
            var e = Y[this.ptr >> 2];
            return (Y[this.ptr >> 2] = e - 1), 1 === e;
          }),
          (this.set_adjusted_ptr = function (e) {
            X[(this.ptr + 16) >> 2] = e;
          }),
          (this.get_adjusted_ptr = function () {
            return X[(this.ptr + 16) >> 2];
          }),
          (this.get_exception_ptr = function () {
            if (mo(this.get_type())) return X[this.excPtr >> 2];
            var e = this.get_adjusted_ptr();
            return 0 !== e ? e : this.excPtr;
          });
      }
      function Ye(e) {
        return no(new Je(e).ptr);
      }
      function Xe(e) {
        if (e.release_ref() && !e.get_rethrown()) {
          var t = e.get_destructor();
          t && Ue(t)(e.excPtr), Ye(e.excPtr);
        }
      }
      function Ze() {
        co(0), Xe(Le.pop()), (Ge = 0);
      }
      function Ke(e) {
        throw (Ge || (Ge = e), e);
      }
      function Qe() {
        var e = Ge;
        if (!e) return j(0), 0;
        var t = new Je(e);
        t.set_adjusted_ptr(e);
        var r = t.get_type();
        if (!r) return j(0), e;
        for (var n = Array.prototype.slice.call(arguments), o = 0; o < n.length; o++) {
          var i = n[o];
          if (0 === i || i === r) break;
          var a = t.ptr + 16;
          if (fo(i, r, a)) return j(i), e;
        }
        return j(r), e;
      }
      function et() {
        var e = Ge;
        if (!e) return j(0), 0;
        var t = new Je(e);
        t.set_adjusted_ptr(e);
        var r = t.get_type();
        if (!r) return j(0), e;
        for (var n = Array.prototype.slice.call(arguments), o = 0; o < n.length; o++) {
          var i = n[o];
          if (0 === i || i === r) break;
          var a = t.ptr + 16;
          if (fo(i, r, a)) return j(i), e;
        }
        return j(r), e;
      }
      function tt() {
        var e = Le.pop();
        e || Ne('no exception to throw');
        var t = e.excPtr;
        throw (
          (e.get_rethrown() || (Le.push(e), e.set_rethrown(!0), e.set_caught(!1), Ve++),
          (Ge = t),
          t)
        );
      }
      function rt(e, t, r) {
        throw (new Je(e).init(t, r), (Ge = e), Ve++, e);
      }
      function nt() {
        return Ve;
      }
      var ot = {
        isAbs: (e) => '/' === e.charAt(0),
        splitPath: (e) =>
          /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
        normalizeArray: (e, t) => {
          for (var r = 0, n = e.length - 1; n >= 0; n--) {
            var o = e[n];
            '.' === o
              ? e.splice(n, 1)
              : '..' === o
                ? (e.splice(n, 1), r++)
                : r && (e.splice(n, 1), r--);
          }
          if (t) for (; r; r--) e.unshift('..');
          return e;
        },
        normalize: (e) => {
          var t = ot.isAbs(e),
            r = '/' === e.substr(-1);
          return (
            (e = ot
              .normalizeArray(
                e.split('/').filter((e) => !!e),
                !t
              )
              .join('/')) ||
              t ||
              (e = '.'),
            e && r && (e += '/'),
            (t ? '/' : '') + e
          );
        },
        dirname: (e) => {
          var t = ot.splitPath(e),
            r = t[0],
            n = t[1];
          return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : '.';
        },
        basename: (e) => {
          if ('/' === e) return '/';
          var t = (e = (e = ot.normalize(e)).replace(/\/$/, '')).lastIndexOf('/');
          return -1 === t ? e : e.substr(t + 1);
        },
        join: function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return ot.normalize(e.join('/'));
        },
        join2: (e, t) => ot.normalize(e + '/' + t)
      };
      function it() {
        if ('object' == typeof crypto && 'function' == typeof crypto.getRandomValues) {
          var e = new Uint8Array(1);
          return function () {
            return crypto.getRandomValues(e), e[0];
          };
        }
        if (b)
          try {
            var t = i('crypto');
            return function () {
              return t.randomBytes(1)[0];
            };
          } catch (e) {}
        return function () {
          Ne('randomDevice');
        };
      }
      var at = {
          resolve: function () {
            for (var e = '', t = !1, r = arguments.length - 1; r >= -1 && !t; r--) {
              var n = r >= 0 ? arguments[r] : dt.cwd();
              if ('string' != typeof n)
                throw new TypeError('Arguments to path.resolve must be strings');
              if (!n) return '';
              (e = n + '/' + e), (t = ot.isAbs(n));
            }
            return (
              (t ? '/' : '') +
                (e = ot
                  .normalizeArray(
                    e.split('/').filter((e) => !!e),
                    !t
                  )
                  .join('/')) || '.'
            );
          },
          relative: (e, t) => {
            function r(e) {
              for (var t = 0; t < e.length && '' === e[t]; t++);
              for (var r = e.length - 1; r >= 0 && '' === e[r]; r--);
              return t > r ? [] : e.slice(t, r - t + 1);
            }
            (e = at.resolve(e).substr(1)), (t = at.resolve(t).substr(1));
            for (
              var n = r(e.split('/')),
                o = r(t.split('/')),
                i = Math.min(n.length, o.length),
                a = i,
                s = 0;
              s < i;
              s++
            )
              if (n[s] !== o[s]) {
                a = s;
                break;
              }
            var c = [];
            for (s = a; s < n.length; s++) c.push('..');
            return (c = c.concat(o.slice(a))).join('/');
          }
        },
        st = {
          ttys: [],
          init: function () {},
          shutdown: function () {},
          register: function (e, t) {
            (st.ttys[e] = { input: [], output: [], ops: t }), dt.registerDevice(e, st.stream_ops);
          },
          stream_ops: {
            open: function (e) {
              var t = st.ttys[e.node.rdev];
              if (!t) throw new dt.ErrnoError(43);
              (e.tty = t), (e.seekable = !1);
            },
            close: function (e) {
              e.tty.ops.flush(e.tty);
            },
            flush: function (e) {
              e.tty.ops.flush(e.tty);
            },
            read: function (e, t, r, n, o) {
              if (!e.tty || !e.tty.ops.get_char) throw new dt.ErrnoError(60);
              for (var i = 0, a = 0; a < n; a++) {
                var s;
                try {
                  s = e.tty.ops.get_char(e.tty);
                } catch (e) {
                  throw new dt.ErrnoError(29);
                }
                if (void 0 === s && 0 === i) throw new dt.ErrnoError(6);
                if (null == s) break;
                i++, (t[r + a] = s);
              }
              return i && (e.node.timestamp = Date.now()), i;
            },
            write: function (e, t, r, n, o) {
              if (!e.tty || !e.tty.ops.put_char) throw new dt.ErrnoError(60);
              try {
                for (var i = 0; i < n; i++) e.tty.ops.put_char(e.tty, t[r + i]);
              } catch (e) {
                throw new dt.ErrnoError(29);
              }
              return n && (e.node.timestamp = Date.now()), i;
            }
          },
          default_tty_ops: {
            get_char: function (e) {
              if (!e.input.length) {
                var t = null;
                if (b) {
                  var r = Buffer.alloc(256),
                    n = 0;
                  try {
                    n = l.readSync(process.stdin.fd, r, 0, 256, -1);
                  } catch (e) {
                    if (!e.toString().includes('EOF')) throw e;
                    n = 0;
                  }
                  t = n > 0 ? r.slice(0, n).toString('utf-8') : null;
                } else
                  'undefined' != typeof window && 'function' == typeof window.prompt
                    ? null !== (t = window.prompt('Input: ')) && (t += '\n')
                    : 'function' == typeof readline && null !== (t = readline()) && (t += '\n');
                if (!t) return null;
                e.input = Qn(t, !0);
              }
              return e.input.shift();
            },
            put_char: function (e, t) {
              null === t || 10 === t
                ? (k(U(e.output, 0)), (e.output = []))
                : 0 != t && e.output.push(t);
            },
            flush: function (e) {
              e.output && e.output.length > 0 && (k(U(e.output, 0)), (e.output = []));
            }
          },
          default_tty1_ops: {
            put_char: function (e, t) {
              null === t || 10 === t
                ? (N(U(e.output, 0)), (e.output = []))
                : 0 != t && e.output.push(t);
            },
            flush: function (e) {
              e.output && e.output.length > 0 && (N(U(e.output, 0)), (e.output = []));
            }
          }
        };
      function ct(e, t) {
        q.fill(0, e, e + t);
      }
      function ut(e, t) {
        return Math.ceil(e / t) * t;
      }
      function _t(e) {
        e = ut(e, 65536);
        var t = ao(65536, e);
        return t ? (ct(t, e), t) : 0;
      }
      var lt = {
        ops_table: null,
        mount: function (e) {
          return lt.createNode(null, '/', 16895, 0);
        },
        createNode: function (e, t, r, n) {
          if (dt.isBlkdev(r) || dt.isFIFO(r)) throw new dt.ErrnoError(63);
          lt.ops_table ||
            (lt.ops_table = {
              dir: {
                node: {
                  getattr: lt.node_ops.getattr,
                  setattr: lt.node_ops.setattr,
                  lookup: lt.node_ops.lookup,
                  mknod: lt.node_ops.mknod,
                  rename: lt.node_ops.rename,
                  unlink: lt.node_ops.unlink,
                  rmdir: lt.node_ops.rmdir,
                  readdir: lt.node_ops.readdir,
                  symlink: lt.node_ops.symlink
                },
                stream: { llseek: lt.stream_ops.llseek }
              },
              file: {
                node: { getattr: lt.node_ops.getattr, setattr: lt.node_ops.setattr },
                stream: {
                  llseek: lt.stream_ops.llseek,
                  read: lt.stream_ops.read,
                  write: lt.stream_ops.write,
                  allocate: lt.stream_ops.allocate,
                  mmap: lt.stream_ops.mmap,
                  msync: lt.stream_ops.msync
                }
              },
              link: {
                node: {
                  getattr: lt.node_ops.getattr,
                  setattr: lt.node_ops.setattr,
                  readlink: lt.node_ops.readlink
                },
                stream: {}
              },
              chrdev: {
                node: { getattr: lt.node_ops.getattr, setattr: lt.node_ops.setattr },
                stream: dt.chrdev_stream_ops
              }
            });
          var o = dt.createNode(e, t, r, n);
          return (
            dt.isDir(o.mode)
              ? ((o.node_ops = lt.ops_table.dir.node),
                (o.stream_ops = lt.ops_table.dir.stream),
                (o.contents = {}))
              : dt.isFile(o.mode)
                ? ((o.node_ops = lt.ops_table.file.node),
                  (o.stream_ops = lt.ops_table.file.stream),
                  (o.usedBytes = 0),
                  (o.contents = null))
                : dt.isLink(o.mode)
                  ? ((o.node_ops = lt.ops_table.link.node),
                    (o.stream_ops = lt.ops_table.link.stream))
                  : dt.isChrdev(o.mode) &&
                    ((o.node_ops = lt.ops_table.chrdev.node),
                    (o.stream_ops = lt.ops_table.chrdev.stream)),
            (o.timestamp = Date.now()),
            e && ((e.contents[t] = o), (e.timestamp = o.timestamp)),
            o
          );
        },
        getFileDataAsTypedArray: function (e) {
          return e.contents
            ? e.contents.subarray
              ? e.contents.subarray(0, e.usedBytes)
              : new Uint8Array(e.contents)
            : new Uint8Array(0);
        },
        expandFileStorage: function (e, t) {
          var r = e.contents ? e.contents.length : 0;
          if (!(r >= t)) {
            (t = Math.max(t, (r * (r < 1048576 ? 2 : 1.125)) >>> 0)),
              0 != r && (t = Math.max(t, 256));
            var n = e.contents;
            (e.contents = new Uint8Array(t)),
              e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0);
          }
        },
        resizeFileStorage: function (e, t) {
          if (e.usedBytes != t)
            if (0 == t) (e.contents = null), (e.usedBytes = 0);
            else {
              var r = e.contents;
              (e.contents = new Uint8Array(t)),
                r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))),
                (e.usedBytes = t);
            }
        },
        node_ops: {
          getattr: function (e) {
            var t = {};
            return (
              (t.dev = dt.isChrdev(e.mode) ? e.id : 1),
              (t.ino = e.id),
              (t.mode = e.mode),
              (t.nlink = 1),
              (t.uid = 0),
              (t.gid = 0),
              (t.rdev = e.rdev),
              dt.isDir(e.mode)
                ? (t.size = 4096)
                : dt.isFile(e.mode)
                  ? (t.size = e.usedBytes)
                  : dt.isLink(e.mode)
                    ? (t.size = e.link.length)
                    : (t.size = 0),
              (t.atime = new Date(e.timestamp)),
              (t.mtime = new Date(e.timestamp)),
              (t.ctime = new Date(e.timestamp)),
              (t.blksize = 4096),
              (t.blocks = Math.ceil(t.size / t.blksize)),
              t
            );
          },
          setattr: function (e, t) {
            void 0 !== t.mode && (e.mode = t.mode),
              void 0 !== t.timestamp && (e.timestamp = t.timestamp),
              void 0 !== t.size && lt.resizeFileStorage(e, t.size);
          },
          lookup: function (e, t) {
            throw dt.genericErrors[44];
          },
          mknod: function (e, t, r, n) {
            return lt.createNode(e, t, r, n);
          },
          rename: function (e, t, r) {
            if (dt.isDir(e.mode)) {
              var n;
              try {
                n = dt.lookupNode(t, r);
              } catch (e) {}
              if (n) for (var o in n.contents) throw new dt.ErrnoError(55);
            }
            delete e.parent.contents[e.name],
              (e.parent.timestamp = Date.now()),
              (e.name = r),
              (t.contents[r] = e),
              (t.timestamp = e.parent.timestamp),
              (e.parent = t);
          },
          unlink: function (e, t) {
            delete e.contents[t], (e.timestamp = Date.now());
          },
          rmdir: function (e, t) {
            var r = dt.lookupNode(e, t);
            for (var n in r.contents) throw new dt.ErrnoError(55);
            delete e.contents[t], (e.timestamp = Date.now());
          },
          readdir: function (e) {
            var t = ['.', '..'];
            for (var r in e.contents) e.contents.hasOwnProperty(r) && t.push(r);
            return t;
          },
          symlink: function (e, t, r) {
            var n = lt.createNode(e, t, 41471, 0);
            return (n.link = r), n;
          },
          readlink: function (e) {
            if (!dt.isLink(e.mode)) throw new dt.ErrnoError(28);
            return e.link;
          }
        },
        stream_ops: {
          read: function (e, t, r, n, o) {
            var i = e.node.contents;
            if (o >= e.node.usedBytes) return 0;
            var a = Math.min(e.node.usedBytes - o, n);
            if (a > 8 && i.subarray) t.set(i.subarray(o, o + a), r);
            else for (var s = 0; s < a; s++) t[r + s] = i[o + s];
            return a;
          },
          write: function (e, t, r, n, o, i) {
            if ((t.buffer === V.buffer && (i = !1), !n)) return 0;
            var a = e.node;
            if (((a.timestamp = Date.now()), t.subarray && (!a.contents || a.contents.subarray))) {
              if (i) return (a.contents = t.subarray(r, r + n)), (a.usedBytes = n), n;
              if (0 === a.usedBytes && 0 === o)
                return (a.contents = t.slice(r, r + n)), (a.usedBytes = n), n;
              if (o + n <= a.usedBytes) return a.contents.set(t.subarray(r, r + n), o), n;
            }
            if ((lt.expandFileStorage(a, o + n), a.contents.subarray && t.subarray))
              a.contents.set(t.subarray(r, r + n), o);
            else for (var s = 0; s < n; s++) a.contents[o + s] = t[r + s];
            return (a.usedBytes = Math.max(a.usedBytes, o + n)), n;
          },
          llseek: function (e, t, r) {
            var n = t;
            if (
              (1 === r
                ? (n += e.position)
                : 2 === r && dt.isFile(e.node.mode) && (n += e.node.usedBytes),
              n < 0)
            )
              throw new dt.ErrnoError(28);
            return n;
          },
          allocate: function (e, t, r) {
            lt.expandFileStorage(e.node, t + r),
              (e.node.usedBytes = Math.max(e.node.usedBytes, t + r));
          },
          mmap: function (e, t, r, n, o) {
            if (!dt.isFile(e.node.mode)) throw new dt.ErrnoError(43);
            var i,
              a,
              s = e.node.contents;
            if (2 & o || s.buffer !== H) {
              if (
                ((r > 0 || r + t < s.length) &&
                  (s = s.subarray ? s.subarray(r, r + t) : Array.prototype.slice.call(s, r, r + t)),
                (a = !0),
                !(i = _t(t)))
              )
                throw new dt.ErrnoError(48);
              V.set(s, i);
            } else (a = !1), (i = s.byteOffset);
            return { ptr: i, allocated: a };
          },
          msync: function (e, t, r, n, o) {
            if (!dt.isFile(e.node.mode)) throw new dt.ErrnoError(43);
            if (2 & o) return 0;
            lt.stream_ops.write(e, t, 0, n, r, !1);
            return 0;
          }
        }
      };
      function ft(e, t, r, n) {
        var o = n ? '' : 'al ' + e;
        u(
          e,
          function (r) {
            P(r, 'Loading data file "' + e + '" failed (no arrayBuffer).'),
              t(new Uint8Array(r)),
              o && ke();
          },
          function (t) {
            if (!r) throw 'Loading data file "' + e + '" failed.';
            r();
          }
        ),
          o && Ae();
      }
      var mt = {
          DIR_MODE: 16895,
          FILE_MODE: 33279,
          reader: null,
          mount: function (e) {
            P(y), mt.reader || (mt.reader = new FileReaderSync());
            var t = mt.createNode(null, '/', mt.DIR_MODE, 0),
              r = {};
            function n(e) {
              for (var n = e.split('/'), o = t, i = 0; i < n.length - 1; i++) {
                var a = n.slice(0, i + 1).join('/');
                r[a] || (r[a] = mt.createNode(o, n[i], mt.DIR_MODE, 0)), (o = r[a]);
              }
              return o;
            }
            function o(e) {
              var t = e.split('/');
              return t[t.length - 1];
            }
            return (
              Array.prototype.forEach.call(e.opts.files || [], function (e) {
                mt.createNode(n(e.name), o(e.name), mt.FILE_MODE, 0, e, e.lastModifiedDate);
              }),
              (e.opts.blobs || []).forEach(function (e) {
                mt.createNode(n(e.name), o(e.name), mt.FILE_MODE, 0, e.data);
              }),
              (e.opts.packages || []).forEach(function (e) {
                e.metadata.files.forEach(function (t) {
                  var r = t.filename.substr(1);
                  mt.createNode(n(r), o(r), mt.FILE_MODE, 0, e.blob.slice(t.start, t.end));
                });
              }),
              t
            );
          },
          createNode: function (e, t, r, n, o, i) {
            var a = dt.createNode(e, t, r);
            return (
              (a.mode = r),
              (a.node_ops = mt.node_ops),
              (a.stream_ops = mt.stream_ops),
              (a.timestamp = (i || new Date()).getTime()),
              P(mt.FILE_MODE !== mt.DIR_MODE),
              r === mt.FILE_MODE
                ? ((a.size = o.size), (a.contents = o))
                : ((a.size = 4096), (a.contents = {})),
              e && (e.contents[t] = a),
              a
            );
          },
          node_ops: {
            getattr: function (e) {
              return {
                dev: 1,
                ino: e.id,
                mode: e.mode,
                nlink: 1,
                uid: 0,
                gid: 0,
                rdev: void 0,
                size: e.size,
                atime: new Date(e.timestamp),
                mtime: new Date(e.timestamp),
                ctime: new Date(e.timestamp),
                blksize: 4096,
                blocks: Math.ceil(e.size / 4096)
              };
            },
            setattr: function (e, t) {
              void 0 !== t.mode && (e.mode = t.mode),
                void 0 !== t.timestamp && (e.timestamp = t.timestamp);
            },
            lookup: function (e, t) {
              throw new dt.ErrnoError(44);
            },
            mknod: function (e, t, r, n) {
              throw new dt.ErrnoError(63);
            },
            rename: function (e, t, r) {
              throw new dt.ErrnoError(63);
            },
            unlink: function (e, t) {
              throw new dt.ErrnoError(63);
            },
            rmdir: function (e, t) {
              throw new dt.ErrnoError(63);
            },
            readdir: function (e) {
              var t = ['.', '..'];
              for (var r in e.contents) e.contents.hasOwnProperty(r) && t.push(r);
              return t;
            },
            symlink: function (e, t, r) {
              throw new dt.ErrnoError(63);
            },
            readlink: function (e) {
              throw new dt.ErrnoError(63);
            }
          },
          stream_ops: {
            read: function (e, t, r, n, o) {
              if (o >= e.node.size) return 0;
              var i = e.node.contents.slice(o, o + n),
                a = mt.reader.readAsArrayBuffer(i);
              return t.set(new Uint8Array(a), r), i.size;
            },
            write: function (e, t, r, n, o) {
              throw new dt.ErrnoError(29);
            },
            llseek: function (e, t, r) {
              var n = t;
              if (
                (1 === r
                  ? (n += e.position)
                  : 2 === r && dt.isFile(e.node.mode) && (n += e.node.size),
                n < 0)
              )
                throw new dt.ErrnoError(28);
              return n;
            }
          }
        },
        dt = {
          root: null,
          mounts: [],
          devices: {},
          streams: [],
          nextInode: 1,
          nameTable: null,
          currentPath: '/',
          initialized: !1,
          ignorePermissions: !0,
          ErrnoError: null,
          genericErrors: {},
          filesystems: null,
          syncFSRequests: 0,
          lookupPath: (e, t = {}) => {
            if (!(e = at.resolve(dt.cwd(), e))) return { path: '', node: null };
            if ((t = Object.assign({ follow_mount: !0, recurse_count: 0 }, t)).recurse_count > 8)
              throw new dt.ErrnoError(32);
            for (
              var r = ot.normalizeArray(
                  e.split('/').filter((e) => !!e),
                  !1
                ),
                n = dt.root,
                o = '/',
                i = 0;
              i < r.length;
              i++
            ) {
              var a = i === r.length - 1;
              if (a && t.parent) break;
              if (
                ((n = dt.lookupNode(n, r[i])),
                (o = ot.join2(o, r[i])),
                dt.isMountpoint(n) && (!a || (a && t.follow_mount)) && (n = n.mounted.root),
                !a || t.follow)
              )
                for (var s = 0; dt.isLink(n.mode); ) {
                  var c = dt.readlink(o);
                  if (
                    ((o = at.resolve(ot.dirname(o), c)),
                    (n = dt.lookupPath(o, { recurse_count: t.recurse_count + 1 }).node),
                    s++ > 40)
                  )
                    throw new dt.ErrnoError(32);
                }
            }
            return { path: o, node: n };
          },
          getPath: (e) => {
            for (var t; ; ) {
              if (dt.isRoot(e)) {
                var r = e.mount.mountpoint;
                return t ? ('/' !== r[r.length - 1] ? r + '/' + t : r + t) : r;
              }
              (t = t ? e.name + '/' + t : e.name), (e = e.parent);
            }
          },
          hashName: (e, t) => {
            for (var r = 0, n = 0; n < t.length; n++) r = ((r << 5) - r + t.charCodeAt(n)) | 0;
            return ((e + r) >>> 0) % dt.nameTable.length;
          },
          hashAddNode: (e) => {
            var t = dt.hashName(e.parent.id, e.name);
            (e.name_next = dt.nameTable[t]), (dt.nameTable[t] = e);
          },
          hashRemoveNode: (e) => {
            var t = dt.hashName(e.parent.id, e.name);
            if (dt.nameTable[t] === e) dt.nameTable[t] = e.name_next;
            else
              for (var r = dt.nameTable[t]; r; ) {
                if (r.name_next === e) {
                  r.name_next = e.name_next;
                  break;
                }
                r = r.name_next;
              }
          },
          lookupNode: (e, t) => {
            var r = dt.mayLookup(e);
            if (r) throw new dt.ErrnoError(r, e);
            for (var n = dt.hashName(e.id, t), o = dt.nameTable[n]; o; o = o.name_next) {
              var i = o.name;
              if (o.parent.id === e.id && i === t) return o;
            }
            return dt.lookup(e, t);
          },
          createNode: (e, t, r, n) => {
            var o = new dt.FSNode(e, t, r, n);
            return dt.hashAddNode(o), o;
          },
          destroyNode: (e) => {
            dt.hashRemoveNode(e);
          },
          isRoot: (e) => e === e.parent,
          isMountpoint: (e) => !!e.mounted,
          isFile: (e) => 32768 == (61440 & e),
          isDir: (e) => 16384 == (61440 & e),
          isLink: (e) => 40960 == (61440 & e),
          isChrdev: (e) => 8192 == (61440 & e),
          isBlkdev: (e) => 24576 == (61440 & e),
          isFIFO: (e) => 4096 == (61440 & e),
          isSocket: (e) => 49152 == (49152 & e),
          flagModes: { r: 0, 'r+': 2, w: 577, 'w+': 578, a: 1089, 'a+': 1090 },
          modeStringToFlags: (e) => {
            var t = dt.flagModes[e];
            if (void 0 === t) throw new Error('Unknown file open mode: ' + e);
            return t;
          },
          flagsToPermissionString: (e) => {
            var t = ['r', 'w', 'rw'][3 & e];
            return 512 & e && (t += 'w'), t;
          },
          nodePermissions: (e, t) =>
            dt.ignorePermissions ||
            ((!t.includes('r') || 292 & e.mode) &&
              (!t.includes('w') || 146 & e.mode) &&
              (!t.includes('x') || 73 & e.mode))
              ? 0
              : 2,
          mayLookup: (e) => {
            var t = dt.nodePermissions(e, 'x');
            return t || (e.node_ops.lookup ? 0 : 2);
          },
          mayCreate: (e, t) => {
            try {
              dt.lookupNode(e, t);
              return 20;
            } catch (e) {}
            return dt.nodePermissions(e, 'wx');
          },
          mayDelete: (e, t, r) => {
            var n;
            try {
              n = dt.lookupNode(e, t);
            } catch (e) {
              return e.errno;
            }
            var o = dt.nodePermissions(e, 'wx');
            if (o) return o;
            if (r) {
              if (!dt.isDir(n.mode)) return 54;
              if (dt.isRoot(n) || dt.getPath(n) === dt.cwd()) return 10;
            } else if (dt.isDir(n.mode)) return 31;
            return 0;
          },
          mayOpen: (e, t) =>
            e
              ? dt.isLink(e.mode)
                ? 32
                : dt.isDir(e.mode) && ('r' !== dt.flagsToPermissionString(t) || 512 & t)
                  ? 31
                  : dt.nodePermissions(e, dt.flagsToPermissionString(t))
              : 44,
          MAX_OPEN_FDS: 4096,
          nextfd: (e = 0, t = dt.MAX_OPEN_FDS) => {
            for (var r = e; r <= t; r++) if (!dt.streams[r]) return r;
            throw new dt.ErrnoError(33);
          },
          getStream: (e) => dt.streams[e],
          createStream: (e, t, r) => {
            dt.FSStream ||
              ((dt.FSStream = function () {
                this.shared = {};
              }),
              (dt.FSStream.prototype = {
                object: {
                  get: function () {
                    return this.node;
                  },
                  set: function (e) {
                    this.node = e;
                  }
                },
                isRead: {
                  get: function () {
                    return 1 != (2097155 & this.flags);
                  }
                },
                isWrite: {
                  get: function () {
                    return 0 != (2097155 & this.flags);
                  }
                },
                isAppend: {
                  get: function () {
                    return 1024 & this.flags;
                  }
                },
                flags: {
                  get: function () {
                    return this.shared.flags;
                  },
                  set: function (e) {
                    this.shared.flags = e;
                  }
                },
                position: {
                  get function() {
                    return this.shared.position;
                  },
                  set: function (e) {
                    this.shared.position = e;
                  }
                }
              })),
              (e = Object.assign(new dt.FSStream(), e));
            var n = dt.nextfd(t, r);
            return (e.fd = n), (dt.streams[n] = e), e;
          },
          closeStream: (e) => {
            dt.streams[e] = null;
          },
          chrdev_stream_ops: {
            open: (e) => {
              var t = dt.getDevice(e.node.rdev);
              (e.stream_ops = t.stream_ops), e.stream_ops.open && e.stream_ops.open(e);
            },
            llseek: () => {
              throw new dt.ErrnoError(70);
            }
          },
          major: (e) => e >> 8,
          minor: (e) => 255 & e,
          makedev: (e, t) => (e << 8) | t,
          registerDevice: (e, t) => {
            dt.devices[e] = { stream_ops: t };
          },
          getDevice: (e) => dt.devices[e],
          getMounts: (e) => {
            for (var t = [], r = [e]; r.length; ) {
              var n = r.pop();
              t.push(n), r.push.apply(r, n.mounts);
            }
            return t;
          },
          syncfs: (e, t) => {
            'function' == typeof e && ((t = e), (e = !1)),
              dt.syncFSRequests++,
              dt.syncFSRequests > 1 &&
                N(
                  'warning: ' +
                    dt.syncFSRequests +
                    ' FS.syncfs operations in flight at once, probably just doing extra work'
                );
            var r = dt.getMounts(dt.root.mount),
              n = 0;
            function o(e) {
              return dt.syncFSRequests--, t(e);
            }
            function i(e) {
              if (e) return i.errored ? void 0 : ((i.errored = !0), o(e));
              ++n >= r.length && o(null);
            }
            r.forEach((t) => {
              if (!t.type.syncfs) return i(null);
              t.type.syncfs(t, e, i);
            });
          },
          mount: (e, t, r) => {
            var n,
              o = '/' === r,
              i = !r;
            if (o && dt.root) throw new dt.ErrnoError(10);
            if (!o && !i) {
              var a = dt.lookupPath(r, { follow_mount: !1 });
              if (((r = a.path), (n = a.node), dt.isMountpoint(n))) throw new dt.ErrnoError(10);
              if (!dt.isDir(n.mode)) throw new dt.ErrnoError(54);
            }
            var s = { type: e, opts: t, mountpoint: r, mounts: [] },
              c = e.mount(s);
            return (
              (c.mount = s),
              (s.root = c),
              o ? (dt.root = c) : n && ((n.mounted = s), n.mount && n.mount.mounts.push(s)),
              c
            );
          },
          unmount: (e) => {
            var t = dt.lookupPath(e, { follow_mount: !1 });
            if (!dt.isMountpoint(t.node)) throw new dt.ErrnoError(28);
            var r = t.node,
              n = r.mounted,
              o = dt.getMounts(n);
            Object.keys(dt.nameTable).forEach((e) => {
              for (var t = dt.nameTable[e]; t; ) {
                var r = t.name_next;
                o.includes(t.mount) && dt.destroyNode(t), (t = r);
              }
            }),
              (r.mounted = null);
            var i = r.mount.mounts.indexOf(n);
            r.mount.mounts.splice(i, 1);
          },
          lookup: (e, t) => e.node_ops.lookup(e, t),
          mknod: (e, t, r) => {
            var n = dt.lookupPath(e, { parent: !0 }).node,
              o = ot.basename(e);
            if (!o || '.' === o || '..' === o) throw new dt.ErrnoError(28);
            var i = dt.mayCreate(n, o);
            if (i) throw new dt.ErrnoError(i);
            if (!n.node_ops.mknod) throw new dt.ErrnoError(63);
            return n.node_ops.mknod(n, o, t, r);
          },
          create: (e, t) => (
            (t = void 0 !== t ? t : 438), (t &= 4095), (t |= 32768), dt.mknod(e, t, 0)
          ),
          mkdir: (e, t) => (
            (t = void 0 !== t ? t : 511), (t &= 1023), (t |= 16384), dt.mknod(e, t, 0)
          ),
          mkdirTree: (e, t) => {
            for (var r = e.split('/'), n = '', o = 0; o < r.length; ++o)
              if (r[o]) {
                n += '/' + r[o];
                try {
                  dt.mkdir(n, t);
                } catch (e) {
                  if (20 != e.errno) throw e;
                }
              }
          },
          mkdev: (e, t, r) => (
            void 0 === r && ((r = t), (t = 438)), (t |= 8192), dt.mknod(e, t, r)
          ),
          symlink: (e, t) => {
            if (!at.resolve(e)) throw new dt.ErrnoError(44);
            var r = dt.lookupPath(t, { parent: !0 }).node;
            if (!r) throw new dt.ErrnoError(44);
            var n = ot.basename(t),
              o = dt.mayCreate(r, n);
            if (o) throw new dt.ErrnoError(o);
            if (!r.node_ops.symlink) throw new dt.ErrnoError(63);
            return r.node_ops.symlink(r, n, e);
          },
          rename: (e, t) => {
            var r,
              n,
              o = ot.dirname(e),
              i = ot.dirname(t),
              a = ot.basename(e),
              s = ot.basename(t);
            if (
              ((r = dt.lookupPath(e, { parent: !0 }).node),
              (n = dt.lookupPath(t, { parent: !0 }).node),
              !r || !n)
            )
              throw new dt.ErrnoError(44);
            if (r.mount !== n.mount) throw new dt.ErrnoError(75);
            var c,
              u = dt.lookupNode(r, a),
              _ = at.relative(e, i);
            if ('.' !== _.charAt(0)) throw new dt.ErrnoError(28);
            if ('.' !== (_ = at.relative(t, o)).charAt(0)) throw new dt.ErrnoError(55);
            try {
              c = dt.lookupNode(n, s);
            } catch (e) {}
            if (u !== c) {
              var l = dt.isDir(u.mode),
                f = dt.mayDelete(r, a, l);
              if (f) throw new dt.ErrnoError(f);
              if ((f = c ? dt.mayDelete(n, s, l) : dt.mayCreate(n, s))) throw new dt.ErrnoError(f);
              if (!r.node_ops.rename) throw new dt.ErrnoError(63);
              if (dt.isMountpoint(u) || (c && dt.isMountpoint(c))) throw new dt.ErrnoError(10);
              if (n !== r && (f = dt.nodePermissions(r, 'w'))) throw new dt.ErrnoError(f);
              dt.hashRemoveNode(u);
              try {
                r.node_ops.rename(u, n, s);
              } catch (e) {
                throw e;
              } finally {
                dt.hashAddNode(u);
              }
            }
          },
          rmdir: (e) => {
            var t = dt.lookupPath(e, { parent: !0 }).node,
              r = ot.basename(e),
              n = dt.lookupNode(t, r),
              o = dt.mayDelete(t, r, !0);
            if (o) throw new dt.ErrnoError(o);
            if (!t.node_ops.rmdir) throw new dt.ErrnoError(63);
            if (dt.isMountpoint(n)) throw new dt.ErrnoError(10);
            t.node_ops.rmdir(t, r), dt.destroyNode(n);
          },
          readdir: (e) => {
            var t = dt.lookupPath(e, { follow: !0 }).node;
            if (!t.node_ops.readdir) throw new dt.ErrnoError(54);
            return t.node_ops.readdir(t);
          },
          unlink: (e) => {
            var t = dt.lookupPath(e, { parent: !0 }).node;
            if (!t) throw new dt.ErrnoError(44);
            var r = ot.basename(e),
              n = dt.lookupNode(t, r),
              o = dt.mayDelete(t, r, !1);
            if (o) throw new dt.ErrnoError(o);
            if (!t.node_ops.unlink) throw new dt.ErrnoError(63);
            if (dt.isMountpoint(n)) throw new dt.ErrnoError(10);
            t.node_ops.unlink(t, r), dt.destroyNode(n);
          },
          readlink: (e) => {
            var t = dt.lookupPath(e).node;
            if (!t) throw new dt.ErrnoError(44);
            if (!t.node_ops.readlink) throw new dt.ErrnoError(28);
            return at.resolve(dt.getPath(t.parent), t.node_ops.readlink(t));
          },
          stat: (e, t) => {
            var r = dt.lookupPath(e, { follow: !t }).node;
            if (!r) throw new dt.ErrnoError(44);
            if (!r.node_ops.getattr) throw new dt.ErrnoError(63);
            return r.node_ops.getattr(r);
          },
          lstat: (e) => dt.stat(e, !0),
          chmod: (e, t, r) => {
            var n;
            'string' == typeof e ? (n = dt.lookupPath(e, { follow: !r }).node) : (n = e);
            if (!n.node_ops.setattr) throw new dt.ErrnoError(63);
            n.node_ops.setattr(n, { mode: (4095 & t) | (-4096 & n.mode), timestamp: Date.now() });
          },
          lchmod: (e, t) => {
            dt.chmod(e, t, !0);
          },
          fchmod: (e, t) => {
            var r = dt.getStream(e);
            if (!r) throw new dt.ErrnoError(8);
            dt.chmod(r.node, t);
          },
          chown: (e, t, r, n) => {
            var o;
            'string' == typeof e ? (o = dt.lookupPath(e, { follow: !n }).node) : (o = e);
            if (!o.node_ops.setattr) throw new dt.ErrnoError(63);
            o.node_ops.setattr(o, { timestamp: Date.now() });
          },
          lchown: (e, t, r) => {
            dt.chown(e, t, r, !0);
          },
          fchown: (e, t, r) => {
            var n = dt.getStream(e);
            if (!n) throw new dt.ErrnoError(8);
            dt.chown(n.node, t, r);
          },
          truncate: (e, t) => {
            if (t < 0) throw new dt.ErrnoError(28);
            var r;
            'string' == typeof e ? (r = dt.lookupPath(e, { follow: !0 }).node) : (r = e);
            if (!r.node_ops.setattr) throw new dt.ErrnoError(63);
            if (dt.isDir(r.mode)) throw new dt.ErrnoError(31);
            if (!dt.isFile(r.mode)) throw new dt.ErrnoError(28);
            var n = dt.nodePermissions(r, 'w');
            if (n) throw new dt.ErrnoError(n);
            r.node_ops.setattr(r, { size: t, timestamp: Date.now() });
          },
          ftruncate: (e, t) => {
            var r = dt.getStream(e);
            if (!r) throw new dt.ErrnoError(8);
            if (0 == (2097155 & r.flags)) throw new dt.ErrnoError(28);
            dt.truncate(r.node, t);
          },
          utime: (e, t, r) => {
            var n = dt.lookupPath(e, { follow: !0 }).node;
            n.node_ops.setattr(n, { timestamp: Math.max(t, r) });
          },
          open: (e, t, r) => {
            if ('' === e) throw new dt.ErrnoError(44);
            var n;
            if (
              ((r = void 0 === r ? 438 : r),
              (r =
                64 & (t = 'string' == typeof t ? dt.modeStringToFlags(t) : t)
                  ? (4095 & r) | 32768
                  : 0),
              'object' == typeof e)
            )
              n = e;
            else {
              e = ot.normalize(e);
              try {
                n = dt.lookupPath(e, { follow: !(131072 & t) }).node;
              } catch (e) {}
            }
            var i = !1;
            if (64 & t)
              if (n) {
                if (128 & t) throw new dt.ErrnoError(20);
              } else (n = dt.mknod(e, r, 0)), (i = !0);
            if (!n) throw new dt.ErrnoError(44);
            if ((dt.isChrdev(n.mode) && (t &= -513), 65536 & t && !dt.isDir(n.mode)))
              throw new dt.ErrnoError(54);
            if (!i) {
              var a = dt.mayOpen(n, t);
              if (a) throw new dt.ErrnoError(a);
            }
            512 & t && !i && dt.truncate(n, 0), (t &= -131713);
            var s = dt.createStream({
              node: n,
              path: dt.getPath(n),
              flags: t,
              seekable: !0,
              position: 0,
              stream_ops: n.stream_ops,
              ungotten: [],
              error: !1
            });
            return (
              s.stream_ops.open && s.stream_ops.open(s),
              !o.logReadFiles ||
                1 & t ||
                (dt.readFiles || (dt.readFiles = {}), e in dt.readFiles || (dt.readFiles[e] = 1)),
              s
            );
          },
          close: (e) => {
            if (dt.isClosed(e)) throw new dt.ErrnoError(8);
            e.getdents && (e.getdents = null);
            try {
              e.stream_ops.close && e.stream_ops.close(e);
            } catch (e) {
              throw e;
            } finally {
              dt.closeStream(e.fd);
            }
            e.fd = null;
          },
          isClosed: (e) => null === e.fd,
          llseek: (e, t, r) => {
            if (dt.isClosed(e)) throw new dt.ErrnoError(8);
            if (!e.seekable || !e.stream_ops.llseek) throw new dt.ErrnoError(70);
            if (0 != r && 1 != r && 2 != r) throw new dt.ErrnoError(28);
            return (e.position = e.stream_ops.llseek(e, t, r)), (e.ungotten = []), e.position;
          },
          read: (e, t, r, n, o) => {
            if (n < 0 || o < 0) throw new dt.ErrnoError(28);
            if (dt.isClosed(e)) throw new dt.ErrnoError(8);
            if (1 == (2097155 & e.flags)) throw new dt.ErrnoError(8);
            if (dt.isDir(e.node.mode)) throw new dt.ErrnoError(31);
            if (!e.stream_ops.read) throw new dt.ErrnoError(28);
            var i = void 0 !== o;
            if (i) {
              if (!e.seekable) throw new dt.ErrnoError(70);
            } else o = e.position;
            var a = e.stream_ops.read(e, t, r, n, o);
            return i || (e.position += a), a;
          },
          write: (e, t, r, n, o, i) => {
            if (n < 0 || o < 0) throw new dt.ErrnoError(28);
            if (dt.isClosed(e)) throw new dt.ErrnoError(8);
            if (0 == (2097155 & e.flags)) throw new dt.ErrnoError(8);
            if (dt.isDir(e.node.mode)) throw new dt.ErrnoError(31);
            if (!e.stream_ops.write) throw new dt.ErrnoError(28);
            e.seekable && 1024 & e.flags && dt.llseek(e, 0, 2);
            var a = void 0 !== o;
            if (a) {
              if (!e.seekable) throw new dt.ErrnoError(70);
            } else o = e.position;
            var s = e.stream_ops.write(e, t, r, n, o, i);
            return a || (e.position += s), s;
          },
          allocate: (e, t, r) => {
            if (dt.isClosed(e)) throw new dt.ErrnoError(8);
            if (t < 0 || r <= 0) throw new dt.ErrnoError(28);
            if (0 == (2097155 & e.flags)) throw new dt.ErrnoError(8);
            if (!dt.isFile(e.node.mode) && !dt.isDir(e.node.mode)) throw new dt.ErrnoError(43);
            if (!e.stream_ops.allocate) throw new dt.ErrnoError(138);
            e.stream_ops.allocate(e, t, r);
          },
          mmap: (e, t, r, n, o) => {
            if (0 != (2 & n) && 0 == (2 & o) && 2 != (2097155 & e.flags))
              throw new dt.ErrnoError(2);
            if (1 == (2097155 & e.flags)) throw new dt.ErrnoError(2);
            if (!e.stream_ops.mmap) throw new dt.ErrnoError(43);
            return e.stream_ops.mmap(e, t, r, n, o);
          },
          msync: (e, t, r, n, o) =>
            e && e.stream_ops.msync ? e.stream_ops.msync(e, t, r, n, o) : 0,
          munmap: (e) => 0,
          ioctl: (e, t, r) => {
            if (!e.stream_ops.ioctl) throw new dt.ErrnoError(59);
            return e.stream_ops.ioctl(e, t, r);
          },
          readFile: (e, t = {}) => {
            if (
              ((t.flags = t.flags || 0),
              (t.encoding = t.encoding || 'binary'),
              'utf8' !== t.encoding && 'binary' !== t.encoding)
            )
              throw new Error('Invalid encoding type "' + t.encoding + '"');
            var r,
              n = dt.open(e, t.flags),
              o = dt.stat(e).size,
              i = new Uint8Array(o);
            return (
              dt.read(n, i, 0, o, 0),
              'utf8' === t.encoding ? (r = U(i, 0)) : 'binary' === t.encoding && (r = i),
              dt.close(n),
              r
            );
          },
          writeFile: (e, t, r = {}) => {
            r.flags = r.flags || 577;
            var n = dt.open(e, r.flags, r.mode);
            if ('string' == typeof t) {
              var o = new Uint8Array(L(t) + 1),
                i = B(t, o, 0, o.length);
              dt.write(n, o, 0, i, void 0, r.canOwn);
            } else {
              if (!ArrayBuffer.isView(t)) throw new Error('Unsupported data type');
              dt.write(n, t, 0, t.byteLength, void 0, r.canOwn);
            }
            dt.close(n);
          },
          cwd: () => dt.currentPath,
          chdir: (e) => {
            var t = dt.lookupPath(e, { follow: !0 });
            if (null === t.node) throw new dt.ErrnoError(44);
            if (!dt.isDir(t.node.mode)) throw new dt.ErrnoError(54);
            var r = dt.nodePermissions(t.node, 'x');
            if (r) throw new dt.ErrnoError(r);
            dt.currentPath = t.path;
          },
          createDefaultDirectories: () => {
            dt.mkdir('/tmp'), dt.mkdir('/home'), dt.mkdir('/home/web_user');
          },
          createDefaultDevices: () => {
            dt.mkdir('/dev'),
              dt.registerDevice(dt.makedev(1, 3), { read: () => 0, write: (e, t, r, n, o) => n }),
              dt.mkdev('/dev/null', dt.makedev(1, 3)),
              st.register(dt.makedev(5, 0), st.default_tty_ops),
              st.register(dt.makedev(6, 0), st.default_tty1_ops),
              dt.mkdev('/dev/tty', dt.makedev(5, 0)),
              dt.mkdev('/dev/tty1', dt.makedev(6, 0));
            var e = it();
            dt.createDevice('/dev', 'random', e),
              dt.createDevice('/dev', 'urandom', e),
              dt.mkdir('/dev/shm'),
              dt.mkdir('/dev/shm/tmp');
          },
          createSpecialDirectories: () => {
            dt.mkdir('/proc');
            var e = dt.mkdir('/proc/self');
            dt.mkdir('/proc/self/fd'),
              dt.mount(
                {
                  mount: () => {
                    var t = dt.createNode(e, 'fd', 16895, 73);
                    return (
                      (t.node_ops = {
                        lookup: (e, t) => {
                          var r = +t,
                            n = dt.getStream(r);
                          if (!n) throw new dt.ErrnoError(8);
                          var o = {
                            parent: null,
                            mount: { mountpoint: 'fake' },
                            node_ops: { readlink: () => n.path }
                          };
                          return (o.parent = o), o;
                        }
                      }),
                      t
                    );
                  }
                },
                {},
                '/proc/self/fd'
              );
          },
          createStandardStreams: () => {
            o.stdin
              ? dt.createDevice('/dev', 'stdin', o.stdin)
              : dt.symlink('/dev/tty', '/dev/stdin'),
              o.stdout
                ? dt.createDevice('/dev', 'stdout', null, o.stdout)
                : dt.symlink('/dev/tty', '/dev/stdout'),
              o.stderr
                ? dt.createDevice('/dev', 'stderr', null, o.stderr)
                : dt.symlink('/dev/tty1', '/dev/stderr');
            dt.open('/dev/stdin', 0), dt.open('/dev/stdout', 1), dt.open('/dev/stderr', 1);
          },
          ensureErrnoError: () => {
            dt.ErrnoError ||
              ((dt.ErrnoError = function (e, t) {
                (this.node = t),
                  (this.setErrno = function (e) {
                    this.errno = e;
                  }),
                  this.setErrno(e),
                  (this.message = 'FS error');
              }),
              (dt.ErrnoError.prototype = new Error()),
              (dt.ErrnoError.prototype.constructor = dt.ErrnoError),
              [44].forEach((e) => {
                (dt.genericErrors[e] = new dt.ErrnoError(e)),
                  (dt.genericErrors[e].stack = '<generic error, no stack>');
              }));
          },
          staticInit: () => {
            dt.ensureErrnoError(),
              (dt.nameTable = new Array(4096)),
              dt.mount(lt, {}, '/'),
              dt.createDefaultDirectories(),
              dt.createDefaultDevices(),
              dt.createSpecialDirectories(),
              (dt.filesystems = { MEMFS: lt, WORKERFS: mt });
          },
          init: (e, t, r) => {
            (dt.init.initialized = !0),
              dt.ensureErrnoError(),
              (o.stdin = e || o.stdin),
              (o.stdout = t || o.stdout),
              (o.stderr = r || o.stderr),
              dt.createStandardStreams();
          },
          quit: () => {
            dt.init.initialized = !1;
            for (var e = 0; e < dt.streams.length; e++) {
              var t = dt.streams[e];
              t && dt.close(t);
            }
          },
          getMode: (e, t) => {
            var r = 0;
            return e && (r |= 365), t && (r |= 146), r;
          },
          findObject: (e, t) => {
            var r = dt.analyzePath(e, t);
            return r.exists ? r.object : null;
          },
          analyzePath: (e, t) => {
            try {
              e = (n = dt.lookupPath(e, { follow: !t })).path;
            } catch (e) {}
            var r = {
              isRoot: !1,
              exists: !1,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: !1,
              parentPath: null,
              parentObject: null
            };
            try {
              var n = dt.lookupPath(e, { parent: !0 });
              (r.parentExists = !0),
                (r.parentPath = n.path),
                (r.parentObject = n.node),
                (r.name = ot.basename(e)),
                (n = dt.lookupPath(e, { follow: !t })),
                (r.exists = !0),
                (r.path = n.path),
                (r.object = n.node),
                (r.name = n.node.name),
                (r.isRoot = '/' === n.path);
            } catch (e) {
              r.error = e.errno;
            }
            return r;
          },
          createPath: (e, t, r, n) => {
            e = 'string' == typeof e ? e : dt.getPath(e);
            for (var o = t.split('/').reverse(); o.length; ) {
              var i = o.pop();
              if (i) {
                var a = ot.join2(e, i);
                try {
                  dt.mkdir(a);
                } catch (e) {}
                e = a;
              }
            }
            return a;
          },
          createFile: (e, t, r, n, o) => {
            var i = ot.join2('string' == typeof e ? e : dt.getPath(e), t),
              a = dt.getMode(n, o);
            return dt.create(i, a);
          },
          createDataFile: (e, t, r, n, o, i) => {
            var a = t;
            e && ((e = 'string' == typeof e ? e : dt.getPath(e)), (a = t ? ot.join2(e, t) : e));
            var s = dt.getMode(n, o),
              c = dt.create(a, s);
            if (r) {
              if ('string' == typeof r) {
                for (var u = new Array(r.length), _ = 0, l = r.length; _ < l; ++_)
                  u[_] = r.charCodeAt(_);
                r = u;
              }
              dt.chmod(c, 146 | s);
              var f = dt.open(c, 577);
              dt.write(f, r, 0, r.length, 0, i), dt.close(f), dt.chmod(c, s);
            }
            return c;
          },
          createDevice: (e, t, r, n) => {
            var o = ot.join2('string' == typeof e ? e : dt.getPath(e), t),
              i = dt.getMode(!!r, !!n);
            dt.createDevice.major || (dt.createDevice.major = 64);
            var a = dt.makedev(dt.createDevice.major++, 0);
            return (
              dt.registerDevice(a, {
                open: (e) => {
                  e.seekable = !1;
                },
                close: (e) => {
                  n && n.buffer && n.buffer.length && n(10);
                },
                read: (e, t, n, o, i) => {
                  for (var a = 0, s = 0; s < o; s++) {
                    var c;
                    try {
                      c = r();
                    } catch (e) {
                      throw new dt.ErrnoError(29);
                    }
                    if (void 0 === c && 0 === a) throw new dt.ErrnoError(6);
                    if (null == c) break;
                    a++, (t[n + s] = c);
                  }
                  return a && (e.node.timestamp = Date.now()), a;
                },
                write: (e, t, r, o, i) => {
                  for (var a = 0; a < o; a++)
                    try {
                      n(t[r + a]);
                    } catch (e) {
                      throw new dt.ErrnoError(29);
                    }
                  return o && (e.node.timestamp = Date.now()), a;
                }
              }),
              dt.mkdev(o, i, a)
            );
          },
          forceLoadFile: (e) => {
            if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
            if ('undefined' != typeof XMLHttpRequest)
              throw new Error(
                'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.'
              );
            if (!c) throw new Error('Cannot load without read() or XMLHttpRequest.');
            try {
              (e.contents = Qn(c(e.url), !0)), (e.usedBytes = e.contents.length);
            } catch (e) {
              throw new dt.ErrnoError(29);
            }
          },
          createLazyFile: (e, t, r, n, o) => {
            function i() {
              (this.lengthKnown = !1), (this.chunks = []);
            }
            if (
              ((i.prototype.get = function (e) {
                if (!(e > this.length - 1 || e < 0)) {
                  var t = e % this.chunkSize,
                    r = (e / this.chunkSize) | 0;
                  return this.getter(r)[t];
                }
              }),
              (i.prototype.setDataGetter = function (e) {
                this.getter = e;
              }),
              (i.prototype.cacheLength = function () {
                var e = new XMLHttpRequest();
                if (
                  (e.open('HEAD', r, !1),
                  e.send(null),
                  !((e.status >= 200 && e.status < 300) || 304 === e.status))
                )
                  throw new Error("Couldn't load " + r + '. Status: ' + e.status);
                var t,
                  n = Number(e.getResponseHeader('Content-length')),
                  o = (t = e.getResponseHeader('Accept-Ranges')) && 'bytes' === t,
                  i = (t = e.getResponseHeader('Content-Encoding')) && 'gzip' === t,
                  a = 1048576;
                o || (a = n);
                var s = this;
                s.setDataGetter((e) => {
                  var t = e * a,
                    o = (e + 1) * a - 1;
                  if (
                    ((o = Math.min(o, n - 1)),
                    void 0 === s.chunks[e] &&
                      (s.chunks[e] = ((e, t) => {
                        if (e > t)
                          throw new Error(
                            'invalid range (' + e + ', ' + t + ') or no bytes requested!'
                          );
                        if (t > n - 1)
                          throw new Error('only ' + n + ' bytes available! programmer error!');
                        var o = new XMLHttpRequest();
                        if (
                          (o.open('GET', r, !1),
                          n !== a && o.setRequestHeader('Range', 'bytes=' + e + '-' + t),
                          (o.responseType = 'arraybuffer'),
                          o.overrideMimeType &&
                            o.overrideMimeType('text/plain; charset=x-user-defined'),
                          o.send(null),
                          !((o.status >= 200 && o.status < 300) || 304 === o.status))
                        )
                          throw new Error("Couldn't load " + r + '. Status: ' + o.status);
                        return void 0 !== o.response
                          ? new Uint8Array(o.response || [])
                          : Qn(o.responseText || '', !0);
                      })(t, o)),
                    void 0 === s.chunks[e])
                  )
                    throw new Error('doXHR failed!');
                  return s.chunks[e];
                }),
                  (!i && n) ||
                    ((a = n = 1),
                    (n = this.getter(0).length),
                    (a = n),
                    k(
                      'LazyFiles on gzip forces download of the whole file when length is accessed'
                    )),
                  (this._length = n),
                  (this._chunkSize = a),
                  (this.lengthKnown = !0);
              }),
              'undefined' != typeof XMLHttpRequest)
            ) {
              if (!y)
                throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
              var a = new i();
              Object.defineProperties(a, {
                length: {
                  get: function () {
                    return this.lengthKnown || this.cacheLength(), this._length;
                  }
                },
                chunkSize: {
                  get: function () {
                    return this.lengthKnown || this.cacheLength(), this._chunkSize;
                  }
                }
              });
              var s = { isDevice: !1, contents: a };
            } else s = { isDevice: !1, url: r };
            var c = dt.createFile(e, t, s, n, o);
            s.contents
              ? (c.contents = s.contents)
              : s.url && ((c.contents = null), (c.url = s.url)),
              Object.defineProperties(c, {
                usedBytes: {
                  get: function () {
                    return this.contents.length;
                  }
                }
              });
            var u = {};
            return (
              Object.keys(c.stream_ops).forEach((e) => {
                var t = c.stream_ops[e];
                u[e] = function () {
                  return dt.forceLoadFile(c), t.apply(null, arguments);
                };
              }),
              (u.read = (e, t, r, n, o) => {
                dt.forceLoadFile(c);
                var i = e.node.contents;
                if (o >= i.length) return 0;
                var a = Math.min(i.length - o, n);
                if (i.slice) for (var s = 0; s < a; s++) t[r + s] = i[o + s];
                else for (s = 0; s < a; s++) t[r + s] = i.get(o + s);
                return a;
              }),
              (c.stream_ops = u),
              c
            );
          },
          createPreloadedFile: (e, t, r, n, o, i, a, s, c, u) => {
            var _ = t ? at.resolve(ot.join2(e, t)) : e;
            function l(r) {
              function l(r) {
                u && u(), s || dt.createDataFile(e, t, r, n, o, c), i && i(), ke();
              }
              Browser.handledByPreloadPlugin(r, _, l, () => {
                a && a(), ke();
              }) || l(r);
            }
            Ae(), 'string' == typeof r ? ft(r, (e) => l(e), a) : l(r);
          },
          indexedDB: () =>
            window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
          DB_NAME: () => 'EM_FS_' + window.location.pathname,
          DB_VERSION: 20,
          DB_STORE_NAME: 'FILE_DATA',
          saveFilesToDB: (e, t, r) => {
            (t = t || (() => {})), (r = r || (() => {}));
            var n = dt.indexedDB();
            try {
              var o = n.open(dt.DB_NAME(), dt.DB_VERSION);
            } catch (e) {
              return r(e);
            }
            (o.onupgradeneeded = () => {
              k('creating db'), o.result.createObjectStore(dt.DB_STORE_NAME);
            }),
              (o.onsuccess = () => {
                var n = o.result.transaction([dt.DB_STORE_NAME], 'readwrite'),
                  i = n.objectStore(dt.DB_STORE_NAME),
                  a = 0,
                  s = 0,
                  c = e.length;
                function u() {
                  0 == s ? t() : r();
                }
                e.forEach((e) => {
                  var t = i.put(dt.analyzePath(e).object.contents, e);
                  (t.onsuccess = () => {
                    ++a + s == c && u();
                  }),
                    (t.onerror = () => {
                      s++, a + s == c && u();
                    });
                }),
                  (n.onerror = r);
              }),
              (o.onerror = r);
          },
          loadFilesFromDB: (e, t, r) => {
            (t = t || (() => {})), (r = r || (() => {}));
            var n = dt.indexedDB();
            try {
              var o = n.open(dt.DB_NAME(), dt.DB_VERSION);
            } catch (e) {
              return r(e);
            }
            (o.onupgradeneeded = r),
              (o.onsuccess = () => {
                var n = o.result;
                try {
                  var i = n.transaction([dt.DB_STORE_NAME], 'readonly');
                } catch (e) {
                  return void r(e);
                }
                var a = i.objectStore(dt.DB_STORE_NAME),
                  s = 0,
                  c = 0,
                  u = e.length;
                function _() {
                  0 == c ? t() : r();
                }
                e.forEach((e) => {
                  var t = a.get(e);
                  (t.onsuccess = () => {
                    dt.analyzePath(e).exists && dt.unlink(e),
                      dt.createDataFile(ot.dirname(e), ot.basename(e), t.result, !0, !0, !0),
                      ++s + c == u && _();
                  }),
                    (t.onerror = () => {
                      c++, s + c == u && _();
                    });
                }),
                  (i.onerror = r);
              }),
              (o.onerror = r);
          }
        },
        ht = {
          DEFAULT_POLLMASK: 5,
          calculateAt: function (e, t, r) {
            if (ot.isAbs(t)) return t;
            var n;
            if (-100 === e) n = dt.cwd();
            else {
              var o = dt.getStream(e);
              if (!o) throw new dt.ErrnoError(8);
              n = o.path;
            }
            if (0 == t.length) {
              if (!r) throw new dt.ErrnoError(44);
              return n;
            }
            return ot.join2(n, t);
          },
          doStat: function (e, t, r) {
            try {
              var n = e(t);
            } catch (e) {
              if (e && e.node && ot.normalize(t) !== ot.normalize(dt.getPath(e.node))) return -54;
              throw e;
            }
            return (
              (Y[r >> 2] = n.dev),
              (Y[(r + 4) >> 2] = 0),
              (Y[(r + 8) >> 2] = n.ino),
              (Y[(r + 12) >> 2] = n.mode),
              (Y[(r + 16) >> 2] = n.nlink),
              (Y[(r + 20) >> 2] = n.uid),
              (Y[(r + 24) >> 2] = n.gid),
              (Y[(r + 28) >> 2] = n.rdev),
              (Y[(r + 32) >> 2] = 0),
              (je = [
                n.size >>> 0,
                ((xe = n.size),
                +Math.abs(xe) >= 1
                  ? xe > 0
                    ? (0 | Math.min(+Math.floor(xe / 4294967296), 4294967295)) >>> 0
                    : ~~+Math.ceil((xe - +(~~xe >>> 0)) / 4294967296) >>> 0
                  : 0)
              ]),
              (Y[(r + 40) >> 2] = je[0]),
              (Y[(r + 44) >> 2] = je[1]),
              (Y[(r + 48) >> 2] = 4096),
              (Y[(r + 52) >> 2] = n.blocks),
              (Y[(r + 56) >> 2] = (n.atime.getTime() / 1e3) | 0),
              (Y[(r + 60) >> 2] = 0),
              (Y[(r + 64) >> 2] = (n.mtime.getTime() / 1e3) | 0),
              (Y[(r + 68) >> 2] = 0),
              (Y[(r + 72) >> 2] = (n.ctime.getTime() / 1e3) | 0),
              (Y[(r + 76) >> 2] = 0),
              (je = [
                n.ino >>> 0,
                ((xe = n.ino),
                +Math.abs(xe) >= 1
                  ? xe > 0
                    ? (0 | Math.min(+Math.floor(xe / 4294967296), 4294967295)) >>> 0
                    : ~~+Math.ceil((xe - +(~~xe >>> 0)) / 4294967296) >>> 0
                  : 0)
              ]),
              (Y[(r + 80) >> 2] = je[0]),
              (Y[(r + 84) >> 2] = je[1]),
              0
            );
          },
          doMsync: function (e, t, r, n, o) {
            var i = q.slice(e, e + r);
            dt.msync(t, i, o, r, n);
          },
          varargs: void 0,
          get: function () {
            return (ht.varargs += 4), Y[(ht.varargs - 4) >> 2];
          },
          getStr: function (e) {
            return W(e);
          },
          getStreamFromFD: function (e) {
            var t = dt.getStream(e);
            if (!t) throw new dt.ErrnoError(8);
            return t;
          }
        };
      function pt(e) {
        try {
          return (e = ht.getStr(e)), dt.chdir(e), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function wt(e, t) {
        try {
          return (e = ht.getStr(e)), dt.chmod(e, t), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      var gt = {
        mount: function (e) {
          return (
            (o.websocket = o.websocket && 'object' == typeof o.websocket ? o.websocket : {}),
            (o.websocket._callbacks = {}),
            (o.websocket.on = function (e, t) {
              return 'function' == typeof t && (this._callbacks[e] = t), this;
            }),
            (o.websocket.emit = function (e, t) {
              'function' == typeof this._callbacks[e] && this._callbacks[e].call(this, t);
            }),
            dt.createNode(null, '/', 16895, 0)
          );
        },
        createSocket: function (e, t, r) {
          if (1 == (t &= -526337) && r && 6 != r) throw new dt.ErrnoError(66);
          var n = {
              family: e,
              type: t,
              protocol: r,
              server: null,
              error: null,
              peers: {},
              pending: [],
              recv_queue: [],
              sock_ops: gt.websocket_sock_ops
            },
            o = gt.nextname(),
            i = dt.createNode(gt.root, o, 49152, 0);
          i.sock = n;
          var a = dt.createStream({
            path: o,
            node: i,
            flags: 2,
            seekable: !1,
            stream_ops: gt.stream_ops
          });
          return (n.stream = a), n;
        },
        getSocket: function (e) {
          var t = dt.getStream(e);
          return t && dt.isSocket(t.node.mode) ? t.node.sock : null;
        },
        stream_ops: {
          poll: function (e) {
            var t = e.node.sock;
            return t.sock_ops.poll(t);
          },
          ioctl: function (e, t, r) {
            var n = e.node.sock;
            return n.sock_ops.ioctl(n, t, r);
          },
          read: function (e, t, r, n, o) {
            var i = e.node.sock,
              a = i.sock_ops.recvmsg(i, n);
            return a ? (t.set(a.buffer, r), a.buffer.length) : 0;
          },
          write: function (e, t, r, n, o) {
            var i = e.node.sock;
            return i.sock_ops.sendmsg(i, t, r, n);
          },
          close: function (e) {
            var t = e.node.sock;
            t.sock_ops.close(t);
          }
        },
        nextname: function () {
          return (
            gt.nextname.current || (gt.nextname.current = 0),
            'socket[' + gt.nextname.current++ + ']'
          );
        },
        websocket_sock_ops: {
          createPeer: function (e, t, r) {
            var n;
            if (('object' == typeof t && ((n = t), (t = null), (r = null)), n))
              if (n._socket) (t = n._socket.remoteAddress), (r = n._socket.remotePort);
              else {
                var a = /ws[s]?:\/\/([^:]+):(\d+)/.exec(n.url);
                if (!a) throw new Error('WebSocket URL must be in the format ws(s)://address:port');
                (t = a[1]), (r = parseInt(a[2], 10));
              }
            else
              try {
                var s = o.websocket && 'object' == typeof o.websocket,
                  c = 'ws:#'.replace('#', '//');
                if (
                  (s && 'string' == typeof o.websocket.url && (c = o.websocket.url),
                  'ws://' === c || 'wss://' === c)
                ) {
                  var u = t.split('/');
                  c = c + u[0] + ':' + r + '/' + u.slice(1).join('/');
                }
                var _ = 'binary';
                s && 'string' == typeof o.websocket.subprotocol && (_ = o.websocket.subprotocol);
                var l = void 0;
                'null' !== _ && (l = _ = _.replace(/^ +| +$/g, '').split(/ *, */)),
                  s && null === o.websocket.subprotocol && ((_ = 'null'), (l = void 0)),
                  ((n = new (b ? i('ws') : WebSocket)(c, l)).binaryType = 'arraybuffer');
              } catch (e) {
                throw new dt.ErrnoError(23);
              }
            var f = { addr: t, port: r, socket: n, dgram_send_queue: [] };
            return (
              gt.websocket_sock_ops.addPeer(e, f),
              gt.websocket_sock_ops.handlePeerEvents(e, f),
              2 === e.type &&
                void 0 !== e.sport &&
                f.dgram_send_queue.push(
                  new Uint8Array([
                    255,
                    255,
                    255,
                    255,
                    'p'.charCodeAt(0),
                    'o'.charCodeAt(0),
                    'r'.charCodeAt(0),
                    't'.charCodeAt(0),
                    (65280 & e.sport) >> 8,
                    255 & e.sport
                  ])
                ),
              f
            );
          },
          getPeer: function (e, t, r) {
            return e.peers[t + ':' + r];
          },
          addPeer: function (e, t) {
            e.peers[t.addr + ':' + t.port] = t;
          },
          removePeer: function (e, t) {
            delete e.peers[t.addr + ':' + t.port];
          },
          handlePeerEvents: function (e, t) {
            var r = !0,
              n = function () {
                o.websocket.emit('open', e.stream.fd);
                try {
                  for (var r = t.dgram_send_queue.shift(); r; )
                    t.socket.send(r), (r = t.dgram_send_queue.shift());
                } catch (e) {
                  t.socket.close();
                }
              };
            function i(n) {
              if ('string' == typeof n) {
                n = new TextEncoder().encode(n);
              } else {
                if ((P(void 0 !== n.byteLength), 0 == n.byteLength)) return;
                n = new Uint8Array(n);
              }
              var i = r;
              if (
                ((r = !1),
                i &&
                  10 === n.length &&
                  255 === n[0] &&
                  255 === n[1] &&
                  255 === n[2] &&
                  255 === n[3] &&
                  n[4] === 'p'.charCodeAt(0) &&
                  n[5] === 'o'.charCodeAt(0) &&
                  n[6] === 'r'.charCodeAt(0) &&
                  n[7] === 't'.charCodeAt(0))
              ) {
                var a = (n[8] << 8) | n[9];
                return (
                  gt.websocket_sock_ops.removePeer(e, t),
                  (t.port = a),
                  void gt.websocket_sock_ops.addPeer(e, t)
                );
              }
              e.recv_queue.push({ addr: t.addr, port: t.port, data: n }),
                o.websocket.emit('message', e.stream.fd);
            }
            b
              ? (t.socket.on('open', n),
                t.socket.on('message', function (e, t) {
                  t && i(new Uint8Array(e).buffer);
                }),
                t.socket.on('close', function () {
                  o.websocket.emit('close', e.stream.fd);
                }),
                t.socket.on('error', function (t) {
                  (e.error = 14),
                    o.websocket.emit('error', [
                      e.stream.fd,
                      e.error,
                      'ECONNREFUSED: Connection refused'
                    ]);
                }))
              : ((t.socket.onopen = n),
                (t.socket.onclose = function () {
                  o.websocket.emit('close', e.stream.fd);
                }),
                (t.socket.onmessage = function (e) {
                  i(e.data);
                }),
                (t.socket.onerror = function (t) {
                  (e.error = 14),
                    o.websocket.emit('error', [
                      e.stream.fd,
                      e.error,
                      'ECONNREFUSED: Connection refused'
                    ]);
                }));
          },
          poll: function (e) {
            if (1 === e.type && e.server) return e.pending.length ? 65 : 0;
            var t = 0,
              r = 1 === e.type ? gt.websocket_sock_ops.getPeer(e, e.daddr, e.dport) : null;
            return (
              (e.recv_queue.length ||
                !r ||
                (r && r.socket.readyState === r.socket.CLOSING) ||
                (r && r.socket.readyState === r.socket.CLOSED)) &&
                (t |= 65),
              (!r || (r && r.socket.readyState === r.socket.OPEN)) && (t |= 4),
              ((r && r.socket.readyState === r.socket.CLOSING) ||
                (r && r.socket.readyState === r.socket.CLOSED)) &&
                (t |= 16),
              t
            );
          },
          ioctl: function (e, t, r) {
            if (21531 === t) {
              var n = 0;
              return e.recv_queue.length && (n = e.recv_queue[0].data.length), (Y[r >> 2] = n), 0;
            }
            return 28;
          },
          close: function (e) {
            if (e.server) {
              try {
                e.server.close();
              } catch (e) {}
              e.server = null;
            }
            for (var t = Object.keys(e.peers), r = 0; r < t.length; r++) {
              var n = e.peers[t[r]];
              try {
                n.socket.close();
              } catch (e) {}
              gt.websocket_sock_ops.removePeer(e, n);
            }
            return 0;
          },
          bind: function (e, t, r) {
            if (void 0 !== e.saddr || void 0 !== e.sport) throw new dt.ErrnoError(28);
            if (((e.saddr = t), (e.sport = r), 2 === e.type)) {
              e.server && (e.server.close(), (e.server = null));
              try {
                e.sock_ops.listen(e, 0);
              } catch (e) {
                if (!(e instanceof dt.ErrnoError)) throw e;
                if (138 !== e.errno) throw e;
              }
            }
          },
          connect: function (e, t, r) {
            if (e.server) throw new dt.ErrnoError(138);
            if (void 0 !== e.daddr && void 0 !== e.dport) {
              var n = gt.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
              if (n)
                throw n.socket.readyState === n.socket.CONNECTING
                  ? new dt.ErrnoError(7)
                  : new dt.ErrnoError(30);
            }
            var o = gt.websocket_sock_ops.createPeer(e, t, r);
            throw ((e.daddr = o.addr), (e.dport = o.port), new dt.ErrnoError(26));
          },
          listen: function (e, t) {
            if (!b) throw new dt.ErrnoError(138);
            if (e.server) throw new dt.ErrnoError(28);
            var r = i('ws').Server,
              n = e.saddr;
            (e.server = new r({ host: n, port: e.sport })),
              o.websocket.emit('listen', e.stream.fd),
              e.server.on('connection', function (t) {
                if (1 === e.type) {
                  var r = gt.createSocket(e.family, e.type, e.protocol),
                    n = gt.websocket_sock_ops.createPeer(r, t);
                  (r.daddr = n.addr),
                    (r.dport = n.port),
                    e.pending.push(r),
                    o.websocket.emit('connection', r.stream.fd);
                } else
                  gt.websocket_sock_ops.createPeer(e, t),
                    o.websocket.emit('connection', e.stream.fd);
              }),
              e.server.on('close', function () {
                o.websocket.emit('close', e.stream.fd), (e.server = null);
              }),
              e.server.on('error', function (t) {
                (e.error = 23),
                  o.websocket.emit('error', [
                    e.stream.fd,
                    e.error,
                    'EHOSTUNREACH: Host is unreachable'
                  ]);
              });
          },
          accept: function (e) {
            if (!e.server || !e.pending.length) throw new dt.ErrnoError(28);
            var t = e.pending.shift();
            return (t.stream.flags = e.stream.flags), t;
          },
          getname: function (e, t) {
            var r, n;
            if (t) {
              if (void 0 === e.daddr || void 0 === e.dport) throw new dt.ErrnoError(53);
              (r = e.daddr), (n = e.dport);
            } else (r = e.saddr || 0), (n = e.sport || 0);
            return { addr: r, port: n };
          },
          sendmsg: function (e, t, r, n, o, i) {
            if (2 === e.type) {
              if (
                ((void 0 !== o && void 0 !== i) || ((o = e.daddr), (i = e.dport)),
                void 0 === o || void 0 === i)
              )
                throw new dt.ErrnoError(17);
            } else (o = e.daddr), (i = e.dport);
            var a,
              s = gt.websocket_sock_ops.getPeer(e, o, i);
            if (1 === e.type) {
              if (
                !s ||
                s.socket.readyState === s.socket.CLOSING ||
                s.socket.readyState === s.socket.CLOSED
              )
                throw new dt.ErrnoError(53);
              if (s.socket.readyState === s.socket.CONNECTING) throw new dt.ErrnoError(6);
            }
            if (
              (ArrayBuffer.isView(t) && ((r += t.byteOffset), (t = t.buffer)),
              (a = t.slice(r, r + n)),
              2 === e.type && (!s || s.socket.readyState !== s.socket.OPEN))
            )
              return (
                (s &&
                  s.socket.readyState !== s.socket.CLOSING &&
                  s.socket.readyState !== s.socket.CLOSED) ||
                  (s = gt.websocket_sock_ops.createPeer(e, o, i)),
                s.dgram_send_queue.push(a),
                n
              );
            try {
              return s.socket.send(a), n;
            } catch (e) {
              throw new dt.ErrnoError(28);
            }
          },
          recvmsg: function (e, t) {
            if (1 === e.type && e.server) throw new dt.ErrnoError(53);
            var r = e.recv_queue.shift();
            if (!r) {
              if (1 === e.type) {
                var n = gt.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
                if (n) {
                  if (
                    n.socket.readyState === n.socket.CLOSING ||
                    n.socket.readyState === n.socket.CLOSED
                  )
                    return null;
                  throw new dt.ErrnoError(6);
                }
                throw new dt.ErrnoError(53);
              }
              throw new dt.ErrnoError(6);
            }
            var o = r.data.byteLength || r.data.length,
              i = r.data.byteOffset || 0,
              a = r.data.buffer || r.data,
              s = Math.min(t, o),
              c = { buffer: new Uint8Array(a, i, s), addr: r.addr, port: r.port };
            if (1 === e.type && s < o) {
              var u = o - s;
              (r.data = new Uint8Array(a, i + s, u)), e.recv_queue.unshift(r);
            }
            return c;
          }
        }
      };
      function yt(e) {
        var t = gt.getSocket(e);
        if (!t) throw new dt.ErrnoError(8);
        return t;
      }
      function bt(e) {
        return (Y[oo() >> 2] = e), e;
      }
      function vt(e) {
        return (
          (255 & e) + '.' + ((e >> 8) & 255) + '.' + ((e >> 16) & 255) + '.' + ((e >> 24) & 255)
        );
      }
      function Et(e) {
        var t = '',
          r = 0,
          n = 0,
          o = 0,
          i = 0,
          a = 0,
          s = 0,
          c = [
            65535 & e[0],
            e[0] >> 16,
            65535 & e[1],
            e[1] >> 16,
            65535 & e[2],
            e[2] >> 16,
            65535 & e[3],
            e[3] >> 16
          ],
          u = !0,
          _ = '';
        for (s = 0; s < 5; s++)
          if (0 !== c[s]) {
            u = !1;
            break;
          }
        if (u) {
          if (((_ = vt(c[6] | (c[7] << 16))), -1 === c[5])) return (t = '::ffff:'), (t += _);
          if (0 === c[5])
            return (t = '::'), '0.0.0.0' === _ && (_ = ''), '0.0.0.1' === _ && (_ = '1'), (t += _);
        }
        for (r = 0; r < 8; r++)
          0 === c[r] && (r - o > 1 && (a = 0), (o = r), a++), a > n && (i = r - (n = a) + 1);
        for (r = 0; r < 8; r++)
          n > 1 && 0 === c[r] && r >= i && r < i + n
            ? r === i && ((t += ':'), 0 === i && (t += ':'))
            : ((t += Number(so(65535 & c[r])).toString(16)), (t += r < 7 ? ':' : ''));
        return t;
      }
      function St(e, t) {
        var r,
          n = G[e >> 1],
          o = so(J[(e + 2) >> 1]);
        switch (n) {
          case 2:
            if (16 !== t) return { errno: 28 };
            r = vt((r = Y[(e + 4) >> 2]));
            break;
          case 10:
            if (28 !== t) return { errno: 28 };
            r = Et((r = [Y[(e + 8) >> 2], Y[(e + 12) >> 2], Y[(e + 16) >> 2], Y[(e + 20) >> 2]]));
            break;
          default:
            return { errno: 5 };
        }
        return { family: n, addr: r, port: o };
      }
      function At(e) {
        for (var t = e.split('.'), r = 0; r < 4; r++) {
          var n = Number(t[r]);
          if (isNaN(n)) return null;
          t[r] = n;
        }
        return (t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24)) >>> 0;
      }
      function kt(e) {
        return parseInt(e);
      }
      function Nt(e) {
        var t,
          r,
          n,
          o,
          i = [];
        if (
          !/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(
            e
          )
        )
          return null;
        if ('::' === e) return [0, 0, 0, 0, 0, 0, 0, 0];
        for (
          (e = e.startsWith('::') ? e.replace('::', 'Z:') : e.replace('::', ':Z:')).indexOf('.') > 0
            ? (((t = (e = e.replace(new RegExp('[.]', 'g'), ':')).split(':'))[t.length - 4] =
                kt(t[t.length - 4]) + 256 * kt(t[t.length - 3])),
              (t[t.length - 3] = kt(t[t.length - 2]) + 256 * kt(t[t.length - 1])),
              (t = t.slice(0, t.length - 2)))
            : (t = e.split(':')),
            n = 0,
            o = 0,
            r = 0;
          r < t.length;
          r++
        )
          if ('string' == typeof t[r])
            if ('Z' === t[r]) {
              for (o = 0; o < 8 - t.length + 1; o++) i[r + o] = 0;
              n = o - 1;
            } else i[r + n] = io(parseInt(t[r], 16));
          else i[r + n] = t[r];
        return [(i[1] << 16) | i[0], (i[3] << 16) | i[2], (i[5] << 16) | i[4], (i[7] << 16) | i[6]];
      }
      var Ot = {
        address_map: { id: 1, addrs: {}, names: {} },
        lookup_name: function (e) {
          var t,
            r = At(e);
          if (null !== r) return e;
          if (null !== (r = Nt(e))) return e;
          if (Ot.address_map.addrs[e]) t = Ot.address_map.addrs[e];
          else {
            var n = Ot.address_map.id++;
            P(n < 65535, 'exceeded max address mappings of 65535'),
              (t = '172.29.' + (255 & n) + '.' + (65280 & n)),
              (Ot.address_map.names[t] = e),
              (Ot.address_map.addrs[e] = t);
          }
          return t;
        },
        lookup_addr: function (e) {
          return Ot.address_map.names[e] ? Ot.address_map.names[e] : null;
        }
      };
      function xt(e, t, r) {
        if (r && 0 === e) return null;
        var n = St(e, t);
        if (n.errno) throw new dt.ErrnoError(n.errno);
        return (n.addr = Ot.lookup_addr(n.addr) || n.addr), n;
      }
      function jt(e, t, r) {
        try {
          var n = yt(e),
            o = xt(t, r);
          return n.sock_ops.connect(n, o.addr, o.port), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Tt(e, t, r, n) {
        try {
          if (((t = ht.getStr(t)), (t = ht.calculateAt(e, t)), -8 & r)) return -28;
          var o = dt.lookupPath(t, { follow: !0 }).node;
          if (!o) return -44;
          var i = '';
          return (
            4 & r && (i += 'r'),
            2 & r && (i += 'w'),
            1 & r && (i += 'x'),
            i && dt.nodePermissions(o, i) ? -2 : 0
          );
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Dt(e, t, r, n) {
        return 0;
      }
      function Mt(e, t) {
        try {
          return dt.fchmod(e, t), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Rt(e, t, r) {
        ht.varargs = r;
        try {
          var n = ht.getStreamFromFD(e);
          switch (t) {
            case 0:
              return (o = ht.get()) < 0 ? -28 : dt.createStream(n, o).fd;
            case 1:
            case 2:
            case 6:
            case 7:
              return 0;
            case 3:
              return n.flags;
            case 4:
              var o = ht.get();
              return (n.flags |= o), 0;
            case 5:
              o = ht.get();
              return (G[(o + 0) >> 1] = 2), 0;
            case 16:
            case 8:
            default:
              return -28;
            case 9:
              return bt(28), -1;
          }
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Pt(e, t) {
        try {
          var r = ht.getStreamFromFD(e);
          return ht.doStat(dt.stat, r.path, t);
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Ct(e, t, r) {
        try {
          return (
            (e = ht.getStr(e)),
            (Y[(r + 4) >> 2] = 4096),
            (Y[(r + 40) >> 2] = 4096),
            (Y[(r + 8) >> 2] = 1e6),
            (Y[(r + 12) >> 2] = 5e5),
            (Y[(r + 16) >> 2] = 5e5),
            (Y[(r + 20) >> 2] = dt.nextInode),
            (Y[(r + 24) >> 2] = 1e6),
            (Y[(r + 28) >> 2] = 42),
            (Y[(r + 44) >> 2] = 2),
            (Y[(r + 36) >> 2] = 255),
            0
          );
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function It(e, t, r) {
        try {
          ht.getStreamFromFD(e);
          return Ct(0, 0, r);
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Ft(e, t) {
        return (t + 2097152) >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * t : NaN;
      }
      function $t(e, t, r) {
        try {
          var n = Ft(t, r);
          return isNaN(n) ? -61 : (dt.ftruncate(e, n), 0);
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Ut(e, t) {
        try {
          if (0 === t) return -28;
          var r = dt.cwd(),
            n = L(r) + 1;
          return t < n ? -68 : (z(r, e, t), n);
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Wt(e, t, r) {
        try {
          var n = ht.getStreamFromFD(e);
          n.getdents || (n.getdents = dt.readdir(n.path));
          for (
            var o = 280, i = 0, a = dt.llseek(n, 0, 1), s = Math.floor(a / o);
            s < n.getdents.length && i + o <= r;

          ) {
            var c,
              u,
              _ = n.getdents[s];
            if ('.' === _) (c = n.node.id), (u = 4);
            else if ('..' === _) {
              (c = dt.lookupPath(n.path, { parent: !0 }).node.id), (u = 4);
            } else {
              var l = dt.lookupNode(n.node, _);
              (c = l.id),
                (u = dt.isChrdev(l.mode) ? 2 : dt.isDir(l.mode) ? 4 : dt.isLink(l.mode) ? 10 : 8);
            }
            (je = [
              c >>> 0,
              ((xe = c),
              +Math.abs(xe) >= 1
                ? xe > 0
                  ? (0 | Math.min(+Math.floor(xe / 4294967296), 4294967295)) >>> 0
                  : ~~+Math.ceil((xe - +(~~xe >>> 0)) / 4294967296) >>> 0
                : 0)
            ]),
              (Y[(t + i) >> 2] = je[0]),
              (Y[(t + i + 4) >> 2] = je[1]),
              (je = [
                ((s + 1) * o) >>> 0,
                ((xe = (s + 1) * o),
                +Math.abs(xe) >= 1
                  ? xe > 0
                    ? (0 | Math.min(+Math.floor(xe / 4294967296), 4294967295)) >>> 0
                    : ~~+Math.ceil((xe - +(~~xe >>> 0)) / 4294967296) >>> 0
                  : 0)
              ]),
              (Y[(t + i + 8) >> 2] = je[0]),
              (Y[(t + i + 12) >> 2] = je[1]),
              (G[(t + i + 16) >> 1] = 280),
              (V[(t + i + 18) >> 0] = u),
              z(_, t + i + 19, 256),
              (i += o),
              (s += 1);
          }
          return dt.llseek(n, s * o, 0), i;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Bt(e, t, r) {
        ht.varargs = r;
        try {
          var n = ht.getStreamFromFD(e);
          switch (t) {
            case 21509:
            case 21505:
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
            case 21523:
            case 21524:
              return n.tty ? 0 : -59;
            case 21519:
              if (!n.tty) return -59;
              var o = ht.get();
              return (Y[o >> 2] = 0), 0;
            case 21520:
              return n.tty ? -28 : -59;
            case 21531:
              o = ht.get();
              return dt.ioctl(n, t, o);
            default:
              Ne('bad ioctl syscall ' + t);
          }
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function zt(e, t) {
        try {
          return (e = ht.getStr(e)), ht.doStat(dt.lstat, e, t);
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Lt(e, t, r) {
        try {
          return (
            (t = ht.getStr(t)),
            (t = ht.calculateAt(e, t)),
            '/' === (t = ot.normalize(t))[t.length - 1] && (t = t.substr(0, t.length - 1)),
            dt.mkdir(t, r, 0),
            0
          );
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Ht(e, t, r, n) {
        try {
          t = ht.getStr(t);
          var o = 256 & n,
            i = 4096 & n;
          return (
            (n &= -4353), (t = ht.calculateAt(e, t, i)), ht.doStat(o ? dt.lstat : dt.stat, t, r)
          );
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Vt(e, t, r, n) {
        ht.varargs = n;
        try {
          (t = ht.getStr(t)), (t = ht.calculateAt(e, t));
          var o = n ? ht.get() : 0;
          return dt.open(t, r, o).fd;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function qt(e, t, r, n) {
        try {
          if (((t = ht.getStr(t)), (t = ht.calculateAt(e, t)), n <= 0)) return -28;
          var o = dt.readlink(t),
            i = Math.min(n, L(o)),
            a = V[r + i];
          return z(o, r, n + 1), (V[r + i] = a), i;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Gt(e, t, r, n) {
        try {
          return (
            (t = ht.getStr(t)),
            (n = ht.getStr(n)),
            (t = ht.calculateAt(e, t)),
            (n = ht.calculateAt(r, n)),
            dt.rename(t, n),
            0
          );
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Jt(e) {
        try {
          return (e = ht.getStr(e)), dt.rmdir(e), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Yt(e, t, r, n, o, i) {
        try {
          var a = yt(e),
            s = xt(o, i, !0);
          return s ? a.sock_ops.sendmsg(a, V, t, r, s.addr, s.port) : dt.write(a.stream, V, t, r);
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Xt(e, t, r) {
        try {
          return gt.createSocket(e, t, r).stream.fd;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Zt(e, t) {
        try {
          return (e = ht.getStr(e)), ht.doStat(dt.stat, e, t);
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Kt(e, t, r) {
        try {
          return (
            (t = ht.getStr(t)),
            (t = ht.calculateAt(e, t)),
            0 === r
              ? dt.unlink(t)
              : 512 === r
                ? dt.rmdir(t)
                : Ne('Invalid flags passed to unlinkat'),
            0
          );
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Qt(e, t, r, n) {
        try {
          if (((t = ht.getStr(t)), (t = ht.calculateAt(e, t, !0)), r)) {
            var o = Y[r >> 2],
              i = Y[(r + 4) >> 2];
            (a = 1e3 * o + i / 1e6),
              (s = 1e3 * (o = Y[(r += 8) >> 2]) + (i = Y[(r + 4) >> 2]) / 1e6);
          } else
            var a = Date.now(),
              s = a;
          return dt.utime(t, a, s), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function er(e, t, r, n, o) {}
      function tr(e) {
        switch (e) {
          case 1:
            return 0;
          case 2:
            return 1;
          case 4:
            return 2;
          case 8:
            return 3;
          default:
            throw new TypeError('Unknown type size: ' + e);
        }
      }
      function rr() {
        for (var e = new Array(256), t = 0; t < 256; ++t) e[t] = String.fromCharCode(t);
        nr = e;
      }
      var nr = void 0;
      function or(e) {
        for (var t = '', r = e; q[r]; ) t += nr[q[r++]];
        return t;
      }
      var ir = {},
        ar = {},
        sr = {},
        cr = 48,
        ur = 57;
      function _r(e) {
        if (void 0 === e) return '_unknown';
        var t = (e = e.replace(/[^a-zA-Z0-9_]/g, '$')).charCodeAt(0);
        return t >= cr && t <= ur ? '_' + e : e;
      }
      function lr(e, t) {
        return (
          (e = _r(e)),
          new Function(
            'body',
            'return function ' +
              e +
              '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'
          )(t)
        );
      }
      function fr(e, t) {
        var r = lr(t, function (e) {
          (this.name = t), (this.message = e);
          var r = new Error(e).stack;
          void 0 !== r &&
            (this.stack = this.toString() + '\n' + r.replace(/^Error(:[^\n]*)?\n/, ''));
        });
        return (
          (r.prototype = Object.create(e.prototype)),
          (r.prototype.constructor = r),
          (r.prototype.toString = function () {
            return void 0 === this.message ? this.name : this.name + ': ' + this.message;
          }),
          r
        );
      }
      var mr = void 0;
      function dr(e) {
        throw new mr(e);
      }
      function hr(e, t, r = {}) {
        if (!('argPackAdvance' in t))
          throw new TypeError('registerType registeredInstance requires argPackAdvance');
        var n = t.name;
        if (
          (e || dr('type "' + n + '" must have a positive integer typeid pointer'),
          ar.hasOwnProperty(e))
        ) {
          if (r.ignoreDuplicateRegistrations) return;
          dr("Cannot register type '" + n + "' twice");
        }
        if (((ar[e] = t), delete sr[e], ir.hasOwnProperty(e))) {
          var o = ir[e];
          delete ir[e], o.forEach((e) => e());
        }
      }
      function pr(e, t, r, n, o) {
        var i = tr(r);
        hr(e, {
          name: (t = or(t)),
          fromWireType: function (e) {
            return !!e;
          },
          toWireType: function (e, t) {
            return t ? n : o;
          },
          argPackAdvance: 8,
          readValueFromPointer: function (e) {
            var n;
            if (1 === r) n = V;
            else if (2 === r) n = G;
            else {
              if (4 !== r) throw new TypeError('Unknown boolean type size: ' + t);
              n = Y;
            }
            return this.fromWireType(n[e >> i]);
          },
          destructorFunction: null
        });
      }
      var wr = [],
        gr = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
      function yr(e) {
        e > 4 && 0 == --gr[e].refcount && ((gr[e] = void 0), wr.push(e));
      }
      function br() {
        for (var e = 0, t = 5; t < gr.length; ++t) void 0 !== gr[t] && ++e;
        return e;
      }
      function vr() {
        for (var e = 5; e < gr.length; ++e) if (void 0 !== gr[e]) return gr[e];
        return null;
      }
      function Er() {
        (o.count_emval_handles = br), (o.get_first_emval = vr);
      }
      var Sr = {
        toValue: (e) => (e || dr('Cannot use deleted val. handle = ' + e), gr[e].value),
        toHandle: (e) => {
          switch (e) {
            case void 0:
              return 1;
            case null:
              return 2;
            case !0:
              return 3;
            case !1:
              return 4;
            default:
              var t = wr.length ? wr.pop() : gr.length;
              return (gr[t] = { refcount: 1, value: e }), t;
          }
        }
      };
      function Ar(e) {
        return this.fromWireType(X[e >> 2]);
      }
      function kr(e, t) {
        hr(e, {
          name: (t = or(t)),
          fromWireType: function (e) {
            var t = Sr.toValue(e);
            return yr(e), t;
          },
          toWireType: function (e, t) {
            return Sr.toHandle(t);
          },
          argPackAdvance: 8,
          readValueFromPointer: Ar,
          destructorFunction: null
        });
      }
      function Nr(e, t) {
        switch (t) {
          case 2:
            return function (e) {
              return this.fromWireType(Z[e >> 2]);
            };
          case 3:
            return function (e) {
              return this.fromWireType(K[e >> 3]);
            };
          default:
            throw new TypeError('Unknown float type: ' + e);
        }
      }
      function Or(e, t, r) {
        var n = tr(r);
        hr(e, {
          name: (t = or(t)),
          fromWireType: function (e) {
            return e;
          },
          toWireType: function (e, t) {
            return t;
          },
          argPackAdvance: 8,
          readValueFromPointer: Nr(t, n),
          destructorFunction: null
        });
      }
      function xr(e, t, r) {
        switch (t) {
          case 0:
            return r
              ? function (e) {
                  return V[e];
                }
              : function (e) {
                  return q[e];
                };
          case 1:
            return r
              ? function (e) {
                  return G[e >> 1];
                }
              : function (e) {
                  return J[e >> 1];
                };
          case 2:
            return r
              ? function (e) {
                  return Y[e >> 2];
                }
              : function (e) {
                  return X[e >> 2];
                };
          default:
            throw new TypeError('Unknown integer type: ' + e);
        }
      }
      function jr(e, t, r, n, o) {
        (t = or(t)), -1 === o && (o = 4294967295);
        var i = tr(r),
          a = (e) => e;
        if (0 === n) {
          var s = 32 - 8 * r;
          a = (e) => (e << s) >>> s;
        }
        var c = t.includes('unsigned');
        hr(e, {
          name: t,
          fromWireType: a,
          toWireType: c
            ? function (e, t) {
                return this.name, t >>> 0;
              }
            : function (e, t) {
                return this.name, t;
              },
          argPackAdvance: 8,
          readValueFromPointer: xr(t, i, 0 !== n),
          destructorFunction: null
        });
      }
      function Tr(e, t, r) {
        var n = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array
        ][t];
        function o(e) {
          var t = X,
            r = t[(e >>= 2)],
            o = t[e + 1];
          return new n(H, o, r);
        }
        hr(
          e,
          { name: (r = or(r)), fromWireType: o, argPackAdvance: 8, readValueFromPointer: o },
          { ignoreDuplicateRegistrations: !0 }
        );
      }
      function Dr(e, t) {
        var r = 'std::string' === (t = or(t));
        hr(e, {
          name: t,
          fromWireType: function (e) {
            var t,
              n = X[e >> 2];
            if (r)
              for (var o = e + 4, i = 0; i <= n; ++i) {
                var a = e + 4 + i;
                if (i == n || 0 == q[a]) {
                  var s = W(o, a - o);
                  void 0 === t ? (t = s) : ((t += String.fromCharCode(0)), (t += s)), (o = a + 1);
                }
              }
            else {
              var c = new Array(n);
              for (i = 0; i < n; ++i) c[i] = String.fromCharCode(q[e + 4 + i]);
              t = c.join('');
            }
            return no(e), t;
          },
          toWireType: function (e, t) {
            t instanceof ArrayBuffer && (t = new Uint8Array(t));
            var n = 'string' == typeof t;
            n ||
              t instanceof Uint8Array ||
              t instanceof Uint8ClampedArray ||
              t instanceof Int8Array ||
              dr('Cannot pass non-string to std::string');
            var o = (r && n ? () => L(t) : () => t.length)(),
              i = ro(4 + o + 1);
            if (((X[i >> 2] = o), r && n)) z(t, i + 4, o + 1);
            else if (n)
              for (var a = 0; a < o; ++a) {
                var s = t.charCodeAt(a);
                s > 255 && (no(i), dr('String has UTF-16 code units that do not fit in 8 bits')),
                  (q[i + 4 + a] = s);
              }
            else for (a = 0; a < o; ++a) q[i + 4 + a] = t[a];
            return null !== e && e.push(no, i), i;
          },
          argPackAdvance: 8,
          readValueFromPointer: Ar,
          destructorFunction: function (e) {
            no(e);
          }
        });
      }
      function Mr(e, t, r) {
        var n, o, i, a, s;
        (r = or(r)),
          2 === t
            ? ((n = ee), (o = te), (a = re), (i = () => J), (s = 1))
            : 4 === t && ((n = ne), (o = oe), (a = ie), (i = () => X), (s = 2)),
          hr(e, {
            name: r,
            fromWireType: function (e) {
              for (var r, o = X[e >> 2], a = i(), c = e + 4, u = 0; u <= o; ++u) {
                var _ = e + 4 + u * t;
                if (u == o || 0 == a[_ >> s]) {
                  var l = n(c, _ - c);
                  void 0 === r ? (r = l) : ((r += String.fromCharCode(0)), (r += l)), (c = _ + t);
                }
              }
              return no(e), r;
            },
            toWireType: function (e, n) {
              'string' != typeof n && dr('Cannot pass non-string to C++ string type ' + r);
              var i = a(n),
                c = ro(4 + i + t);
              return (X[c >> 2] = i >> s), o(n, c + 4, i + t), null !== e && e.push(no, c), c;
            },
            argPackAdvance: 8,
            readValueFromPointer: Ar,
            destructorFunction: function (e) {
              no(e);
            }
          });
      }
      function Rr(e, t) {
        hr(e, {
          isVoid: !0,
          name: (t = or(t)),
          argPackAdvance: 0,
          fromWireType: function () {},
          toWireType: function (e, t) {}
        });
      }
      function Pr() {
        return Date.now();
      }
      var Cr = !0;
      function Ir() {
        return Cr;
      }
      function Fr() {
        throw 1 / 0;
      }
      function $r(e, t) {
        var r = new Date(1e3 * Y[e >> 2]);
        (Y[t >> 2] = r.getUTCSeconds()),
          (Y[(t + 4) >> 2] = r.getUTCMinutes()),
          (Y[(t + 8) >> 2] = r.getUTCHours()),
          (Y[(t + 12) >> 2] = r.getUTCDate()),
          (Y[(t + 16) >> 2] = r.getUTCMonth()),
          (Y[(t + 20) >> 2] = r.getUTCFullYear() - 1900),
          (Y[(t + 24) >> 2] = r.getUTCDay());
        var n = Date.UTC(r.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
          o = ((r.getTime() - n) / 864e5) | 0;
        Y[(t + 28) >> 2] = o;
      }
      function Ur(e, t) {
        var r = new Date(1e3 * Y[e >> 2]);
        (Y[t >> 2] = r.getSeconds()),
          (Y[(t + 4) >> 2] = r.getMinutes()),
          (Y[(t + 8) >> 2] = r.getHours()),
          (Y[(t + 12) >> 2] = r.getDate()),
          (Y[(t + 16) >> 2] = r.getMonth()),
          (Y[(t + 20) >> 2] = r.getFullYear() - 1900),
          (Y[(t + 24) >> 2] = r.getDay());
        var n = new Date(r.getFullYear(), 0, 1),
          o = ((r.getTime() - n.getTime()) / 864e5) | 0;
        (Y[(t + 28) >> 2] = o), (Y[(t + 36) >> 2] = -60 * r.getTimezoneOffset());
        var i = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(),
          a = n.getTimezoneOffset(),
          s = 0 | (i != a && r.getTimezoneOffset() == Math.min(a, i));
        Y[(t + 32) >> 2] = s;
      }
      function Wr(e) {
        var t = new Date(
            Y[(e + 20) >> 2] + 1900,
            Y[(e + 16) >> 2],
            Y[(e + 12) >> 2],
            Y[(e + 8) >> 2],
            Y[(e + 4) >> 2],
            Y[e >> 2],
            0
          ),
          r = Y[(e + 32) >> 2],
          n = t.getTimezoneOffset(),
          o = new Date(t.getFullYear(), 0, 1),
          i = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(),
          a = o.getTimezoneOffset(),
          s = Math.min(a, i);
        if (r < 0) Y[(e + 32) >> 2] = Number(i != a && s == n);
        else if (r > 0 != (s == n)) {
          var c = Math.max(a, i),
            u = r > 0 ? s : c;
          t.setTime(t.getTime() + 6e4 * (u - n));
        }
        Y[(e + 24) >> 2] = t.getDay();
        var _ = ((t.getTime() - o.getTime()) / 864e5) | 0;
        return (
          (Y[(e + 28) >> 2] = _),
          (Y[e >> 2] = t.getSeconds()),
          (Y[(e + 4) >> 2] = t.getMinutes()),
          (Y[(e + 8) >> 2] = t.getHours()),
          (Y[(e + 12) >> 2] = t.getDate()),
          (Y[(e + 16) >> 2] = t.getMonth()),
          (t.getTime() / 1e3) | 0
        );
      }
      function Br(e, t, r, n, o, i) {
        try {
          var a = dt.getStream(n);
          if (!a) return -8;
          var s = dt.mmap(a, e, o, t, r),
            c = s.ptr;
          return (Y[i >> 2] = s.allocated), c;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function zr(e, t, r, n, o, i) {
        try {
          var a = dt.getStream(o);
          a && (2 & r && ht.doMsync(e, a, t, n, i), dt.munmap(a));
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function Lr(e, t, r) {
        var n = new Date().getFullYear(),
          o = new Date(n, 0, 1),
          i = new Date(n, 6, 1),
          a = o.getTimezoneOffset(),
          s = i.getTimezoneOffset(),
          c = Math.max(a, s);
        function u(e) {
          var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
          return t ? t[1] : 'GMT';
        }
        (Y[e >> 2] = 60 * c), (Y[t >> 2] = Number(a != s));
        var _ = u(o),
          l = u(i),
          f = ae(_),
          m = ae(l);
        s < a ? ((X[r >> 2] = f), (X[(r + 4) >> 2] = m)) : ((X[r >> 2] = m), (X[(r + 4) >> 2] = f));
      }
      function Hr(e, t, r) {
        Hr.called || ((Hr.called = !0), Lr(e, t, r));
      }
      function Vr() {
        Ne('');
      }
      var qr,
        Gr = {
          batchedQuotaMax: 65536,
          getBatchedRandomValues: function (e, t) {
            const r =
                'undefined' != typeof SharedArrayBuffer &&
                o.HEAPU8.buffer instanceof SharedArrayBuffer,
              n = r ? new ArrayBuffer(t) : o.HEAPU8.buffer,
              i = r ? 0 : e;
            for (let e = 0; e < t; e += this.batchedQuotaMax) {
              const r = new Uint8Array(n, i + e, Math.min(t - e, this.batchedQuotaMax));
              crypto.getRandomValues(r);
            }
            if (r) {
              new Uint8Array(o.HEAPU8.buffer, e, t).set(new Uint8Array(n));
            }
          }
        };
      function Jr(e, t) {
        return 'object' == typeof crypto && 'function' == typeof crypto.getRandomValues
          ? (Gr.getBatchedRandomValues(e, t), 0)
          : -1;
      }
      function Yr() {
        return 2147483648;
      }
      function Xr() {
        return b ? 1 : 1e3;
      }
      function Zr(e, t, r) {
        q.copyWithin(e, t, t + r);
      }
      function Kr(e) {
        try {
          return D.grow((e - H.byteLength + 65535) >>> 16), ue(D.buffer), 1;
        } catch (e) {}
      }
      function Qr(e) {
        var t = q.length,
          r = 2147483648;
        if ((e >>>= 0) > r) return !1;
        for (var n = 1; n <= 4; n *= 2) {
          var o = t * (1 + 0.2 / n);
          if (
            ((o = Math.min(o, e + 100663296)),
            Kr(Math.min(r, (i = Math.max(e, o)) + (((a = 65536) - (i % a)) % a))))
          )
            return !0;
        }
        var i, a;
        return !1;
      }
      qr = b
        ? () => {
            var e = process.hrtime();
            return 1e3 * e[0] + e[1] / 1e6;
          }
        : 'undefined' != typeof dateNow
          ? dateNow
          : () => performance.now();
      var en = {};
      function tn() {
        return p || './this.program';
      }
      function rn() {
        if (!rn.strings) {
          var e = {
            USER: 'web_user',
            LOGNAME: 'web_user',
            PATH: '/',
            PWD: '/',
            HOME: '/home/web_user',
            LANG:
              (
                ('object' == typeof navigator && navigator.languages && navigator.languages[0]) ||
                'C'
              ).replace('-', '_') + '.UTF-8',
            _: tn()
          };
          for (var t in en) void 0 === en[t] ? delete e[t] : (e[t] = en[t]);
          var r = [];
          for (var t in e) r.push(t + '=' + e[t]);
          rn.strings = r;
        }
        return rn.strings;
      }
      function nn(e, t) {
        var r = 0;
        return (
          rn().forEach(function (n, o) {
            var i = t + r;
            (X[(e + 4 * o) >> 2] = i), ce(n, i), (r += n.length + 1);
          }),
          0
        );
      }
      function on(e, t) {
        var r = rn();
        X[e >> 2] = r.length;
        var n = 0;
        return (
          r.forEach(function (e) {
            n += e.length + 1;
          }),
          (X[t >> 2] = n),
          0
        );
      }
      function an(e) {
        nc(e);
      }
      function sn(e) {
        try {
          var t = ht.getStreamFromFD(e);
          return dt.close(t), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return e.errno;
        }
      }
      function cn(e, t) {
        try {
          var r = ht.getStreamFromFD(e),
            n = r.tty ? 2 : dt.isDir(r.mode) ? 3 : dt.isLink(r.mode) ? 7 : 4;
          return (V[t >> 0] = n), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return e.errno;
        }
      }
      function un(e, t, r, n) {
        for (var o = 0, i = 0; i < r; i++) {
          var a = X[t >> 2],
            s = X[(t + 4) >> 2];
          t += 8;
          var c = dt.read(e, V, a, s, n);
          if (c < 0) return -1;
          if (((o += c), c < s)) break;
        }
        return o;
      }
      function _n(e, t, r, n, o, i) {
        try {
          var a = Ft(n, o);
          if (isNaN(a)) return 61;
          var s = un(ht.getStreamFromFD(e), t, r, a);
          return (Y[i >> 2] = s), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return e.errno;
        }
      }
      function ln(e, t, r, n) {
        for (var o = 0, i = 0; i < r; i++) {
          var a = X[t >> 2],
            s = X[(t + 4) >> 2];
          t += 8;
          var c = dt.write(e, V, a, s, n);
          if (c < 0) return -1;
          o += c;
        }
        return o;
      }
      function fn(e, t, r, n, o, i) {
        try {
          var a = Ft(n, o);
          if (isNaN(a)) return 61;
          var s = ln(ht.getStreamFromFD(e), t, r, a);
          return (Y[i >> 2] = s), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return e.errno;
        }
      }
      function mn(e, t, r, n) {
        try {
          var o = un(ht.getStreamFromFD(e), t, r);
          return (Y[n >> 2] = o), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return e.errno;
        }
      }
      function dn(e, t, r, n, o) {
        try {
          var i = Ft(t, r);
          if (isNaN(i)) return 61;
          var a = ht.getStreamFromFD(e);
          return (
            dt.llseek(a, i, n),
            (je = [
              a.position >>> 0,
              ((xe = a.position),
              +Math.abs(xe) >= 1
                ? xe > 0
                  ? (0 | Math.min(+Math.floor(xe / 4294967296), 4294967295)) >>> 0
                  : ~~+Math.ceil((xe - +(~~xe >>> 0)) / 4294967296) >>> 0
                : 0)
            ]),
            (Y[o >> 2] = je[0]),
            (Y[(o + 4) >> 2] = je[1]),
            a.getdents && 0 === i && 0 === n && (a.getdents = null),
            0
          );
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return e.errno;
        }
      }
      function hn(e) {
        try {
          var t = ht.getStreamFromFD(e);
          return t.stream_ops && t.stream_ops.fsync ? -t.stream_ops.fsync(t) : 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return e.errno;
        }
      }
      function pn(e, t, r, n) {
        try {
          var o = ln(ht.getStreamFromFD(e), t, r);
          return (X[n >> 2] = o), 0;
        } catch (e) {
          if (void 0 === dt || !(e instanceof dt.ErrnoError)) throw e;
          return e.errno;
        }
      }
      function wn() {
        return T();
      }
      function gn(e) {
        return e;
      }
      function yn() {
        return __dotnet_runtime.__linker_exports.mono_set_timeout.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function bn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_bind_cs_function.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function vn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_bind_js_function.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function En() {
        return __dotnet_runtime.__linker_exports.mono_wasm_create_cs_owned_object_ref.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function Sn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_get_by_index_ref.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function An() {
        return __dotnet_runtime.__linker_exports.mono_wasm_get_global_object_ref.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function kn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_get_object_property_ref.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function Nn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_invoke_bound_function.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function On() {
        return __dotnet_runtime.__linker_exports.mono_wasm_invoke_js_blazor.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function xn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_invoke_js_with_args_ref.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function jn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_marshal_promise.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function Tn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_release_cs_owned_object.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function Dn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_set_by_index_ref.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function Mn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_set_entrypoint_breakpoint.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function Rn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_set_object_property_ref.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function Pn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_trace_logger.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function Cn() {
        return __dotnet_runtime.__linker_exports.mono_wasm_typed_array_from_ref.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function In() {
        return __dotnet_runtime.__linker_exports.mono_wasm_typed_array_to_array_ref.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function Fn() {
        return __dotnet_runtime.__linker_exports.schedule_background_exec.apply(
          __dotnet_runtime,
          arguments
        );
      }
      function $n(e) {
        j(e);
      }
      function Un(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
      }
      function Wn(e, t) {
        for (var r = 0, n = 0; n <= t; r += e[n++]);
        return r;
      }
      var Bn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        zn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function Ln(e, t) {
        for (var r = new Date(e.getTime()); t > 0; ) {
          var n = Un(r.getFullYear()),
            o = r.getMonth(),
            i = (n ? Bn : zn)[o];
          if (!(t > i - r.getDate())) return r.setDate(r.getDate() + t), r;
          (t -= i - r.getDate() + 1),
            r.setDate(1),
            o < 11 ? r.setMonth(o + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
        }
        return r;
      }
      function Hn(e, t, r, n) {
        var o = Y[(n + 40) >> 2],
          i = {
            tm_sec: Y[n >> 2],
            tm_min: Y[(n + 4) >> 2],
            tm_hour: Y[(n + 8) >> 2],
            tm_mday: Y[(n + 12) >> 2],
            tm_mon: Y[(n + 16) >> 2],
            tm_year: Y[(n + 20) >> 2],
            tm_wday: Y[(n + 24) >> 2],
            tm_yday: Y[(n + 28) >> 2],
            tm_isdst: Y[(n + 32) >> 2],
            tm_gmtoff: Y[(n + 36) >> 2],
            tm_zone: o ? W(o) : ''
          },
          a = W(r),
          s = {
            '%c': '%a %b %d %H:%M:%S %Y',
            '%D': '%m/%d/%y',
            '%F': '%Y-%m-%d',
            '%h': '%b',
            '%r': '%I:%M:%S %p',
            '%R': '%H:%M',
            '%T': '%H:%M:%S',
            '%x': '%m/%d/%y',
            '%X': '%H:%M:%S',
            '%Ec': '%c',
            '%EC': '%C',
            '%Ex': '%m/%d/%y',
            '%EX': '%H:%M:%S',
            '%Ey': '%y',
            '%EY': '%Y',
            '%Od': '%d',
            '%Oe': '%e',
            '%OH': '%H',
            '%OI': '%I',
            '%Om': '%m',
            '%OM': '%M',
            '%OS': '%S',
            '%Ou': '%u',
            '%OU': '%U',
            '%OV': '%V',
            '%Ow': '%w',
            '%OW': '%W',
            '%Oy': '%y'
          };
        for (var c in s) a = a.replace(new RegExp(c, 'g'), s[c]);
        var u = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          _ = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];
        function l(e, t, r) {
          for (var n = 'number' == typeof e ? e.toString() : e || ''; n.length < t; ) n = r[0] + n;
          return n;
        }
        function f(e, t) {
          return l(e, t, '0');
        }
        function m(e, t) {
          function r(e) {
            return e < 0 ? -1 : e > 0 ? 1 : 0;
          }
          var n;
          return (
            0 === (n = r(e.getFullYear() - t.getFullYear())) &&
              0 === (n = r(e.getMonth() - t.getMonth())) &&
              (n = r(e.getDate() - t.getDate())),
            n
          );
        }
        function d(e) {
          switch (e.getDay()) {
            case 0:
              return new Date(e.getFullYear() - 1, 11, 29);
            case 1:
              return e;
            case 2:
              return new Date(e.getFullYear(), 0, 3);
            case 3:
              return new Date(e.getFullYear(), 0, 2);
            case 4:
              return new Date(e.getFullYear(), 0, 1);
            case 5:
              return new Date(e.getFullYear() - 1, 11, 31);
            case 6:
              return new Date(e.getFullYear() - 1, 11, 30);
          }
        }
        function h(e) {
          var t = Ln(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
            r = new Date(t.getFullYear(), 0, 4),
            n = new Date(t.getFullYear() + 1, 0, 4),
            o = d(r),
            i = d(n);
          return m(o, t) <= 0
            ? m(i, t) <= 0
              ? t.getFullYear() + 1
              : t.getFullYear()
            : t.getFullYear() - 1;
        }
        var p = {
          '%a': function (e) {
            return u[e.tm_wday].substring(0, 3);
          },
          '%A': function (e) {
            return u[e.tm_wday];
          },
          '%b': function (e) {
            return _[e.tm_mon].substring(0, 3);
          },
          '%B': function (e) {
            return _[e.tm_mon];
          },
          '%C': function (e) {
            return f(((e.tm_year + 1900) / 100) | 0, 2);
          },
          '%d': function (e) {
            return f(e.tm_mday, 2);
          },
          '%e': function (e) {
            return l(e.tm_mday, 2, ' ');
          },
          '%g': function (e) {
            return h(e).toString().substring(2);
          },
          '%G': function (e) {
            return h(e);
          },
          '%H': function (e) {
            return f(e.tm_hour, 2);
          },
          '%I': function (e) {
            var t = e.tm_hour;
            return 0 == t ? (t = 12) : t > 12 && (t -= 12), f(t, 2);
          },
          '%j': function (e) {
            return f(e.tm_mday + Wn(Un(e.tm_year + 1900) ? Bn : zn, e.tm_mon - 1), 3);
          },
          '%m': function (e) {
            return f(e.tm_mon + 1, 2);
          },
          '%M': function (e) {
            return f(e.tm_min, 2);
          },
          '%n': function () {
            return '\n';
          },
          '%p': function (e) {
            return e.tm_hour >= 0 && e.tm_hour < 12 ? 'AM' : 'PM';
          },
          '%S': function (e) {
            return f(e.tm_sec, 2);
          },
          '%t': function () {
            return '\t';
          },
          '%u': function (e) {
            return e.tm_wday || 7;
          },
          '%U': function (e) {
            var t = e.tm_yday + 7 - e.tm_wday;
            return f(Math.floor(t / 7), 2);
          },
          '%V': function (e) {
            var t = Math.floor((e.tm_yday + 7 - ((e.tm_wday + 6) % 7)) / 7);
            if (((e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && t++, t)) {
              if (53 == t) {
                var r = (e.tm_wday + 371 - e.tm_yday) % 7;
                4 == r || (3 == r && Un(e.tm_year)) || (t = 1);
              }
            } else {
              t = 52;
              var n = (e.tm_wday + 7 - e.tm_yday - 1) % 7;
              (4 == n || (5 == n && Un((e.tm_year % 400) - 1))) && t++;
            }
            return f(t, 2);
          },
          '%w': function (e) {
            return e.tm_wday;
          },
          '%W': function (e) {
            var t = e.tm_yday + 7 - ((e.tm_wday + 6) % 7);
            return f(Math.floor(t / 7), 2);
          },
          '%y': function (e) {
            return (e.tm_year + 1900).toString().substring(2);
          },
          '%Y': function (e) {
            return e.tm_year + 1900;
          },
          '%z': function (e) {
            var t = e.tm_gmtoff,
              r = t >= 0;
            return (
              (t = ((t = Math.abs(t) / 60) / 60) * 100 + (t % 60)),
              (r ? '+' : '-') + String('0000' + t).slice(-4)
            );
          },
          '%Z': function (e) {
            return e.tm_zone;
          },
          '%%': function () {
            return '%';
          }
        };
        for (var c in ((a = a.replace(/%%/g, '\0\0')), p))
          a.includes(c) && (a = a.replace(new RegExp(c, 'g'), p[c](i)));
        var w = Qn((a = a.replace(/\0\0/g, '%')), !1);
        return w.length > t ? 0 : (se(w, e), w.length - 1);
      }
      function Vn(e, t, r, n) {
        return Hn(e, t, r, n);
      }
      var qn = function (e, t, r, n) {
          e || (e = this),
            (this.parent = e),
            (this.mount = e.mount),
            (this.mounted = null),
            (this.id = dt.nextInode++),
            (this.name = t),
            (this.mode = r),
            (this.node_ops = {}),
            (this.stream_ops = {}),
            (this.rdev = n);
        },
        Gn = 365,
        Jn = 146;
      let Yn;
      Object.defineProperties(qn.prototype, {
        read: {
          get: function () {
            return (this.mode & Gn) === Gn;
          },
          set: function (e) {
            e ? (this.mode |= Gn) : (this.mode &= ~Gn);
          }
        },
        write: {
          get: function () {
            return (this.mode & Jn) === Jn;
          },
          set: function (e) {
            e ? (this.mode |= Jn) : (this.mode &= ~Jn);
          }
        },
        isFolder: {
          get: function () {
            return dt.isDir(this.mode);
          }
        },
        isDevice: {
          get: function () {
            return dt.isChrdev(this.mode);
          }
        }
      }),
        (dt.FSNode = qn),
        dt.staticInit(),
        (o.FS_createPath = dt.createPath),
        (o.FS_createDataFile = dt.createDataFile),
        (o.FS_readFile = dt.readFile),
        (o.FS_createPath = dt.createPath),
        (o.FS_createDataFile = dt.createDataFile),
        (o.FS_createPreloadedFile = dt.createPreloadedFile),
        (o.FS_unlink = dt.unlink),
        (o.FS_createLazyFile = dt.createLazyFile),
        (o.FS_createDevice = dt.createDevice),
        rr(),
        (mr = o.BindingError = fr(Error, 'BindingError')),
        (o.InternalError = fr(Error, 'InternalError')),
        Er();
      let Xn = {
        scriptUrl: import.meta.url,
        fetch: globalThis.fetch,
        require: i,
        updateGlobalBufferAndViews: ue,
        pthreadReplacements: Yn
      };
      b && (Xn.requirePromise = import('module').then((e) => e.createRequire(import.meta.url)));
      let Zn = __dotnet_runtime.__initializeImportsAndExports(
        {
          isGlobal: !1,
          isNode: b,
          isWorker: y,
          isShell: v,
          isWeb: g,
          isPThread: !1,
          quit_: w,
          ExitStatus: tc,
          requirePromise: Xn.requirePromise
        },
        { mono: MONO, binding: BINDING, internal: INTERNAL, module: o, marshaled_imports: IMPORTS },
        Xn,
        s
      );
      ue = Xn.updateGlobalBufferAndViews;
      var Kn = Xn.fetch;
      (e = a = E = Xn.scriptDirectory),
        b &&
          Xn.requirePromise.then((e) => {
            i = e;
          });
      M = Xn.noExitRuntime;
      function Qn(e, t, r) {
        var n = r > 0 ? r : L(e) + 1,
          o = new Array(n),
          i = B(e, o, 0, o.length);
        return t && (o.length = i), o;
      }
      var eo,
        to = {
          V: Be,
          n: ze,
          C: qe,
          F: Ze,
          d: Qe,
          e: et,
          r: Ye,
          kb: tt,
          u: rt,
          Yd: nt,
          m: Ke,
          Xd: pt,
          jb: wt,
          Wd: jt,
          Vd: Tt,
          nc: Dt,
          Ud: Mt,
          ca: Rt,
          Td: Pt,
          Sd: It,
          mc: $t,
          Rd: Ut,
          Qd: Wt,
          Pd: Bt,
          Od: zt,
          Nd: Lt,
          Md: Ht,
          ib: Vt,
          Ld: qt,
          Kd: Gt,
          hb: Jt,
          Jd: Yt,
          gb: Xt,
          Id: Zt,
          fb: Kt,
          Hd: Qt,
          ic: er,
          Cd: pr,
          Bd: kr,
          db: Or,
          ga: jr,
          S: Tr,
          cb: Dr,
          Fa: Mr,
          Ad: Rr,
          ra: Pr,
          bb: Ir,
          zd: Fr,
          yd: $r,
          xd: Ur,
          wd: Wr,
          vd: Br,
          ud: zr,
          td: Hr,
          v: Vr,
          ab: Jr,
          sd: Yr,
          Ea: qr,
          rd: Xr,
          qd: Zr,
          pd: Qr,
          Gd: nn,
          Fd: on,
          Q: an,
          sa: sn,
          Ed: cn,
          lc: _n,
          kc: fn,
          eb: mn,
          jc: dn,
          Dd: hn,
          Ga: pn,
          b: wn,
          la: ji,
          $a: Zi,
          M: Fi,
          Y: gi,
          H: Zo,
          R: ui,
          hc: Ls,
          ja: ba,
          I: Di,
          _a: Ai,
          Za: aa,
          t: pi,
          Da: ta,
          od: Sa,
          O: _i,
          wa: ua,
          Ca: Fa,
          z: za,
          x: Li,
          Ya: ia,
          nd: zi,
          Ba: Oi,
          md: Da,
          da: Ei,
          j: si,
          ld: Ri,
          kd: La,
          Aa: ja,
          Xa: va,
          va: Bi,
          $: bi,
          Wa: Pi,
          Va: Mi,
          za: Ni,
          jd: Wa,
          id: Ba,
          a: qo,
          hd: Ji,
          qa: wi,
          gd: Gi,
          fd: Ia,
          Ua: vi,
          ed: xi,
          dd: Pa,
          c: Yo,
          Ta: qi,
          Sa: Ma,
          Ra: ki,
          l: ai,
          Qa: Es,
          p: ii,
          cd: vs,
          bd: la,
          ad: fa,
          w: oi,
          $c: bs,
          E: fi,
          N: Wi,
          _c: sa,
          ba: wa,
          fa: ra,
          X: Ca,
          Zc: Yi,
          Yc: Ui,
          gc: qs,
          fc: Gs,
          ec,
          dc: Js,
          cc: Fs,
          bc: Rs,
          ac: Zs,
          $b: Ws,
          _b: Is,
          Zb: Cs,
          Yb: zs,
          Xb: Ds,
          Wb: Ms,
          Vb: Qs,
          Ub: Us,
          Tb: Xs,
          Sb: js,
          Rb: Ts,
          Qb: Vs,
          Pb: Bs,
          Ob: xs,
          Nb: Ps,
          g: Jo,
          k: ti,
          Xc: ys,
          Pa: pa,
          Oa: Ua,
          pa: Ii,
          y: Ko,
          U: Ki,
          Na: Aa,
          J: $i,
          Ma: ga,
          _: li,
          ya: Na,
          ua: ha,
          oa: xa,
          ka: mi,
          A: di,
          ia: Oa,
          aa: Si,
          D: Ti,
          Wc: Ea,
          i: Qo,
          P: ei,
          Vc: Ss,
          Uc: oa,
          Tc: $a,
          Sc: Ra,
          Rc: ka,
          L: Ci,
          Qc: _a,
          G: Hi,
          Z: Ta,
          f: Xo,
          Pc: yi,
          Oc: ma,
          ea: ya,
          h: Go,
          La: na,
          Ka: hi,
          o: ni,
          s: ri,
          B: Xi,
          K: ci,
          W: da,
          T: Vi,
          xa: Ha,
          ta: Va,
          Nc: qa,
          Ja: Qi,
          na: Ga,
          Ia: ea,
          Ha: ca,
          Mc: Ja,
          Lc: Ya,
          Kc: Xa,
          Jc: Za,
          Ic: Ka,
          Hc: Qa,
          Gc: es,
          Fc: ts,
          Ec: rs,
          Dc: ns,
          Cc: os,
          Bc: is,
          Ac: as,
          zc: ss,
          yc: cs,
          xc: us,
          wc: _s,
          vc: ls,
          uc: fs,
          tc: ms,
          sc: ds,
          rc: hs,
          qc: ps,
          pc: ws,
          oc: gs,
          Mb: $s,
          Lb: Ns,
          Kb: Ks,
          Jb: Ys,
          Ib: As,
          Hb: ks,
          Gb: Os,
          Fb: Hs,
          ha: gn,
          Eb: yn,
          Db: bn,
          Cb: vn,
          Bb: En,
          Ab: Sn,
          zb: An,
          yb: kn,
          xb: Nn,
          wb: On,
          vb: xn,
          ub: jn,
          tb: Tn,
          sb: Dn,
          rb: Mn,
          qb: Rn,
          pb: Pn,
          ob: Cn,
          nb: In,
          mb: Fn,
          q: $n,
          ma: Hn,
          lb: Vn
        },
        ro =
          (Ce(),
          (o.___wasm_call_ctors = function () {
            return (o.___wasm_call_ctors = o.asm._d).apply(null, arguments);
          }),
          (o._memset = function () {
            return (o._memset = o.asm.$d).apply(null, arguments);
          }),
          (o._mono_aot_ACadSharp_get_method = function () {
            return (o._mono_aot_ACadSharp_get_method = o.asm.ae).apply(null, arguments);
          }),
          (o._mono_aot_BouncyCastle_Cryptography_get_method = function () {
            return (o._mono_aot_BouncyCastle_Cryptography_get_method = o.asm.ce).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_ChromeHtmlToPdfLib_get_method = function () {
            return (o._mono_aot_ChromeHtmlToPdfLib_get_method = o.asm.de).apply(null, arguments);
          }),
          (o._mono_aot_DocumentFormat_OpenXml_get_method = function () {
            return (o._mono_aot_DocumentFormat_OpenXml_get_method = o.asm.ee).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_DocumentFormat_OpenXml_Framework_get_method = function () {
            return (o._mono_aot_DocumentFormat_OpenXml_Framework_get_method = o.asm.fe).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_API_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_API_get_method = o.asm.ge).apply(null, arguments);
          }),
          (o._mono_aot_GdPicture_NET_14_barcode_1d_writer_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_barcode_1d_writer_get_method = o.asm.he).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_barcode_2d_writer_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_barcode_2d_writer_get_method = o.asm.ie).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_CAD_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_CAD_get_method = o.asm.je).apply(null, arguments);
          }),
          (o._mono_aot_GdPicture_NET_14_Common_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_Common_get_method = o.asm.ke).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_Document_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_Document_get_method = o.asm.le).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_Imaging_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_Imaging_get_method = o.asm.me).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_Imaging_Formats_Conversion_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_Imaging_Formats_Conversion_get_method =
              o.asm.ne).apply(null, arguments);
          }),
          (o._mono_aot_GdPicture_NET_14_Imaging_Formats_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_Imaging_Formats_get_method = o.asm.oe).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_Imaging_Rendering_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_Imaging_Rendering_get_method = o.asm.pe).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_MSOfficeBinary_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_MSOfficeBinary_get_method = o.asm.qe).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_OpenDocument_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_OpenDocument_get_method = o.asm.re).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_OpenXML_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_OpenXML_get_method = o.asm.se).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_14_PDF_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_PDF_get_method = o.asm.te).apply(null, arguments);
          }),
          (o._mono_aot_GdPicture_NET_14_RTF_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_RTF_get_method = o.asm.ue).apply(null, arguments);
          }),
          (o._mono_aot_GdPicture_NET_14_SVG_get_method = function () {
            return (o._mono_aot_GdPicture_NET_14_SVG_get_method = o.asm.ve).apply(null, arguments);
          }),
          (o._mono_aot_GdPicture_NET_OpenXML_Templating_Wasm_NET7_get_method = function () {
            return (o._mono_aot_GdPicture_NET_OpenXML_Templating_Wasm_NET7_get_method =
              o.asm.we).apply(null, arguments);
          }),
          (o._mono_aot_GdPicture_NET_PSPDFKit_Wasm_NET7_get_method = function () {
            return (o._mono_aot_GdPicture_NET_PSPDFKit_Wasm_NET7_get_method = o.asm.xe).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_GdPicture_NET_Wasm_NET7_get_method = function () {
            return (o._mono_aot_GdPicture_NET_Wasm_NET7_get_method = o.asm.ye).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_Microsoft_CSharp_get_method = function () {
            return (o._mono_aot_Microsoft_CSharp_get_method = o.asm.ze).apply(null, arguments);
          }),
          (o._mono_aot_Microsoft_Win32_Registry_get_method = function () {
            return (o._mono_aot_Microsoft_Win32_Registry_get_method = o.asm.Ae).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_MsgReader_get_method = function () {
            return (o._mono_aot_MsgReader_get_method = o.asm.Be).apply(null, arguments);
          }),
          (o._mono_aot_Newtonsoft_Json_get_method = function () {
            return (o._mono_aot_Newtonsoft_Json_get_method = o.asm.Ce).apply(null, arguments);
          }),
          (o._mono_aot_OpenMcdf_get_method = function () {
            return (o._mono_aot_OpenMcdf_get_method = o.asm.De).apply(null, arguments);
          }),
          (o._mono_aot_protobuf_net_Core_get_method = function () {
            return (o._mono_aot_protobuf_net_Core_get_method = o.asm.Ee).apply(null, arguments);
          }),
          (o._mono_aot_protobuf_net_get_method = function () {
            return (o._mono_aot_protobuf_net_get_method = o.asm.Fe).apply(null, arguments);
          }),
          (o._mono_aot_RtfPipe_get_method = function () {
            return (o._mono_aot_RtfPipe_get_method = o.asm.Ge).apply(null, arguments);
          }),
          (o._mono_aot_System_Collections_Concurrent_get_method = function () {
            return (o._mono_aot_System_Collections_Concurrent_get_method = o.asm.He).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Collections_get_method = function () {
            return (o._mono_aot_System_Collections_get_method = o.asm.Ie).apply(null, arguments);
          }),
          (o._mono_aot_System_Collections_Immutable_get_method = function () {
            return (o._mono_aot_System_Collections_Immutable_get_method = o.asm.Je).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Collections_NonGeneric_get_method = function () {
            return (o._mono_aot_System_Collections_NonGeneric_get_method = o.asm.Ke).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Collections_Specialized_get_method = function () {
            return (o._mono_aot_System_Collections_Specialized_get_method = o.asm.Le).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_ComponentModel_get_method = function () {
            return (o._mono_aot_System_ComponentModel_get_method = o.asm.Me).apply(null, arguments);
          }),
          (o._mono_aot_System_ComponentModel_EventBasedAsync_get_method = function () {
            return (o._mono_aot_System_ComponentModel_EventBasedAsync_get_method = o.asm.Ne).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_ComponentModel_Primitives_get_method = function () {
            return (o._mono_aot_System_ComponentModel_Primitives_get_method = o.asm.Oe).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_ComponentModel_TypeConverter_get_method = function () {
            return (o._mono_aot_System_ComponentModel_TypeConverter_get_method = o.asm.Pe).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Console_get_method = function () {
            return (o._mono_aot_System_Console_get_method = o.asm.Qe).apply(null, arguments);
          }),
          (o._mono_aot_System_Data_Common_get_method = function () {
            return (o._mono_aot_System_Data_Common_get_method = o.asm.Re).apply(null, arguments);
          }),
          (o._mono_aot_System_Diagnostics_DiagnosticSource_get_method = function () {
            return (o._mono_aot_System_Diagnostics_DiagnosticSource_get_method = o.asm.Se).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Diagnostics_Process_get_method = function () {
            return (o._mono_aot_System_Diagnostics_Process_get_method = o.asm.Te).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Diagnostics_TraceSource_get_method = function () {
            return (o._mono_aot_System_Diagnostics_TraceSource_get_method = o.asm.Ue).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_get_method = function () {
            return (o._mono_aot_System_get_method = o.asm.Ve).apply(null, arguments);
          }),
          (o._mono_aot_System_Drawing_get_method = function () {
            return (o._mono_aot_System_Drawing_get_method = o.asm.We).apply(null, arguments);
          }),
          (o._mono_aot_System_Drawing_Primitives_get_method = function () {
            return (o._mono_aot_System_Drawing_Primitives_get_method = o.asm.Xe).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Formats_Asn1_get_method = function () {
            return (o._mono_aot_System_Formats_Asn1_get_method = o.asm.Ye).apply(null, arguments);
          }),
          (o._mono_aot_System_IO_Compression_get_method = function () {
            return (o._mono_aot_System_IO_Compression_get_method = o.asm.Ze).apply(null, arguments);
          }),
          (o._mono_aot_System_IO_Packaging_get_method = function () {
            return (o._mono_aot_System_IO_Packaging_get_method = o.asm._e).apply(null, arguments);
          }),
          (o._mono_aot_System_Linq_get_method = function () {
            return (o._mono_aot_System_Linq_get_method = o.asm.$e).apply(null, arguments);
          }),
          (o._mono_aot_System_Linq_Expressions_get_method = function () {
            return (o._mono_aot_System_Linq_Expressions_get_method = o.asm.af).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Memory_get_method = function () {
            return (o._mono_aot_System_Memory_get_method = o.asm.bf).apply(null, arguments);
          }),
          (o._mono_aot_System_Net_Http_get_method = function () {
            return (o._mono_aot_System_Net_Http_get_method = o.asm.cf).apply(null, arguments);
          }),
          (o._mono_aot_System_Net_Http_Formatting_get_method = function () {
            return (o._mono_aot_System_Net_Http_Formatting_get_method = o.asm.df).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Net_Mail_get_method = function () {
            return (o._mono_aot_System_Net_Mail_get_method = o.asm.ef).apply(null, arguments);
          }),
          (o._mono_aot_System_Net_NetworkInformation_get_method = function () {
            return (o._mono_aot_System_Net_NetworkInformation_get_method = o.asm.ff).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Net_Primitives_get_method = function () {
            return (o._mono_aot_System_Net_Primitives_get_method = o.asm.gf).apply(null, arguments);
          }),
          (o._mono_aot_System_Net_Requests_get_method = function () {
            return (o._mono_aot_System_Net_Requests_get_method = o.asm.hf).apply(null, arguments);
          }),
          (o._mono_aot_System_Net_Security_get_method = function () {
            return (o._mono_aot_System_Net_Security_get_method = o.asm.jf).apply(null, arguments);
          }),
          (o._mono_aot_System_Net_ServicePoint_get_method = function () {
            return (o._mono_aot_System_Net_ServicePoint_get_method = o.asm.kf).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Net_Sockets_get_method = function () {
            return (o._mono_aot_System_Net_Sockets_get_method = o.asm.lf).apply(null, arguments);
          }),
          (o._mono_aot_System_Net_WebHeaderCollection_get_method = function () {
            return (o._mono_aot_System_Net_WebHeaderCollection_get_method = o.asm.mf).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Net_WebSockets_Client_get_method = function () {
            return (o._mono_aot_System_Net_WebSockets_Client_get_method = o.asm.nf).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Net_WebSockets_get_method = function () {
            return (o._mono_aot_System_Net_WebSockets_get_method = o.asm.of).apply(null, arguments);
          }),
          (o._mono_aot_System_ObjectModel_get_method = function () {
            return (o._mono_aot_System_ObjectModel_get_method = o.asm.pf).apply(null, arguments);
          }),
          (o._mono_aot_corlib_get_method = function () {
            return (o._mono_aot_corlib_get_method = o.asm.qf).apply(null, arguments);
          }),
          (o._mono_aot_System_Private_Uri_get_method = function () {
            return (o._mono_aot_System_Private_Uri_get_method = o.asm.rf).apply(null, arguments);
          }),
          (o._mono_aot_System_Private_Xml_get_method = function () {
            return (o._mono_aot_System_Private_Xml_get_method = o.asm.sf).apply(null, arguments);
          }),
          (o._mono_aot_System_Private_Xml_Linq_get_method = function () {
            return (o._mono_aot_System_Private_Xml_Linq_get_method = o.asm.tf).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Runtime_get_method = function () {
            return (o._mono_aot_System_Runtime_get_method = o.asm.uf).apply(null, arguments);
          }),
          (o._mono_aot_System_Runtime_InteropServices_JavaScript_get_method = function () {
            return (o._mono_aot_System_Runtime_InteropServices_JavaScript_get_method =
              o.asm.vf).apply(null, arguments);
          }),
          (o._mono_aot_System_Runtime_Numerics_get_method = function () {
            return (o._mono_aot_System_Runtime_Numerics_get_method = o.asm.wf).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Runtime_Serialization_Formatters_get_method = function () {
            return (o._mono_aot_System_Runtime_Serialization_Formatters_get_method =
              o.asm.xf).apply(null, arguments);
          }),
          (o._mono_aot_System_Runtime_Serialization_Primitives_get_method = function () {
            return (o._mono_aot_System_Runtime_Serialization_Primitives_get_method =
              o.asm.yf).apply(null, arguments);
          }),
          (o._mono_aot_System_Security_Cryptography_get_method = function () {
            return (o._mono_aot_System_Security_Cryptography_get_method = o.asm.zf).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Security_Cryptography_Pkcs_get_method = function () {
            return (o._mono_aot_System_Security_Cryptography_Pkcs_get_method = o.asm.Af).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Text_Encoding_CodePages_get_method = function () {
            return (o._mono_aot_System_Text_Encoding_CodePages_get_method = o.asm.Bf).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Text_Encodings_Web_get_method = function () {
            return (o._mono_aot_System_Text_Encodings_Web_get_method = o.asm.Cf).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Text_Json_get_method = function () {
            return (o._mono_aot_System_Text_Json_get_method = o.asm.Df).apply(null, arguments);
          }),
          (o._mono_aot_System_Text_RegularExpressions_get_method = function () {
            return (o._mono_aot_System_Text_RegularExpressions_get_method = o.asm.Ef).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Threading_Tasks_Parallel_get_method = function () {
            return (o._mono_aot_System_Threading_Tasks_Parallel_get_method = o.asm.Ff).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Windows_Extensions_get_method = function () {
            return (o._mono_aot_System_Windows_Extensions_get_method = o.asm.Gf).apply(
              null,
              arguments
            );
          }),
          (o._mono_aot_System_Xml_Linq_get_method = function () {
            return (o._mono_aot_System_Xml_Linq_get_method = o.asm.Hf).apply(null, arguments);
          }),
          (o._malloc = function () {
            return (ro = o._malloc = o.asm.If).apply(null, arguments);
          })),
        no = (o._free = function () {
          return (no = o._free = o.asm.Jf).apply(null, arguments);
        }),
        oo = (o.___errno_location = function () {
          return (oo = o.___errno_location = o.asm.Kf).apply(null, arguments);
        }),
        io =
          ((o._memalign = function () {
            return (o._memalign = o.asm.Lf).apply(null, arguments);
          }),
          (o._htons = function () {
            return (io = o._htons = o.asm.Mf).apply(null, arguments);
          })),
        ao =
          ((o._mono_wasm_register_root = function () {
            return (o._mono_wasm_register_root = o.asm.Nf).apply(null, arguments);
          }),
          (o._mono_wasm_deregister_root = function () {
            return (o._mono_wasm_deregister_root = o.asm.Of).apply(null, arguments);
          }),
          (o._mono_wasm_add_assembly = function () {
            return (o._mono_wasm_add_assembly = o.asm.Pf).apply(null, arguments);
          }),
          (o._mono_wasm_add_satellite_assembly = function () {
            return (o._mono_wasm_add_satellite_assembly = o.asm.Qf).apply(null, arguments);
          }),
          (o._mono_wasm_setenv = function () {
            return (o._mono_wasm_setenv = o.asm.Rf).apply(null, arguments);
          }),
          (o._mono_wasm_getenv = function () {
            return (o._mono_wasm_getenv = o.asm.Sf).apply(null, arguments);
          }),
          (o._mono_wasm_register_bundled_satellite_assemblies = function () {
            return (o._mono_wasm_register_bundled_satellite_assemblies = o.asm.Tf).apply(
              null,
              arguments
            );
          }),
          (o._mono_wasm_load_runtime = function () {
            return (o._mono_wasm_load_runtime = o.asm.Uf).apply(null, arguments);
          }),
          (o._mono_wasm_assembly_load = function () {
            return (o._mono_wasm_assembly_load = o.asm.Vf).apply(null, arguments);
          }),
          (o._mono_wasm_get_corlib = function () {
            return (o._mono_wasm_get_corlib = o.asm.Wf).apply(null, arguments);
          }),
          (o._mono_wasm_assembly_find_class = function () {
            return (o._mono_wasm_assembly_find_class = o.asm.Xf).apply(null, arguments);
          }),
          (o._mono_wasm_runtime_run_module_cctor = function () {
            return (o._mono_wasm_runtime_run_module_cctor = o.asm.Yf).apply(null, arguments);
          }),
          (o._mono_wasm_assembly_find_method = function () {
            return (o._mono_wasm_assembly_find_method = o.asm.Zf).apply(null, arguments);
          }),
          (o._mono_wasm_get_delegate_invoke_ref = function () {
            return (o._mono_wasm_get_delegate_invoke_ref = o.asm._f).apply(null, arguments);
          }),
          (o._mono_wasm_box_primitive_ref = function () {
            return (o._mono_wasm_box_primitive_ref = o.asm.$f).apply(null, arguments);
          }),
          (o._mono_wasm_invoke_method_ref = function () {
            return (o._mono_wasm_invoke_method_ref = o.asm.ag).apply(null, arguments);
          }),
          (o._mono_wasm_invoke_method_bound = function () {
            return (o._mono_wasm_invoke_method_bound = o.asm.bg).apply(null, arguments);
          }),
          (o._mono_wasm_assembly_get_entry_point = function () {
            return (o._mono_wasm_assembly_get_entry_point = o.asm.cg).apply(null, arguments);
          }),
          (o._mono_wasm_string_get_utf8 = function () {
            return (o._mono_wasm_string_get_utf8 = o.asm.dg).apply(null, arguments);
          }),
          (o._mono_wasm_string_from_js = function () {
            return (o._mono_wasm_string_from_js = o.asm.eg).apply(null, arguments);
          }),
          (o._mono_wasm_string_from_utf16_ref = function () {
            return (o._mono_wasm_string_from_utf16_ref = o.asm.fg).apply(null, arguments);
          }),
          (o._mono_wasm_get_obj_class = function () {
            return (o._mono_wasm_get_obj_class = o.asm.gg).apply(null, arguments);
          }),
          (o._mono_wasm_get_obj_type = function () {
            return (o._mono_wasm_get_obj_type = o.asm.hg).apply(null, arguments);
          }),
          (o._mono_wasm_try_unbox_primitive_and_get_type_ref = function () {
            return (o._mono_wasm_try_unbox_primitive_and_get_type_ref = o.asm.ig).apply(
              null,
              arguments
            );
          }),
          (o._mono_wasm_array_length = function () {
            return (o._mono_wasm_array_length = o.asm.jg).apply(null, arguments);
          }),
          (o._mono_wasm_array_get = function () {
            return (o._mono_wasm_array_get = o.asm.kg).apply(null, arguments);
          }),
          (o._mono_wasm_array_get_ref = function () {
            return (o._mono_wasm_array_get_ref = o.asm.lg).apply(null, arguments);
          }),
          (o._mono_wasm_obj_array_new_ref = function () {
            return (o._mono_wasm_obj_array_new_ref = o.asm.mg).apply(null, arguments);
          }),
          (o._mono_wasm_obj_array_new = function () {
            return (o._mono_wasm_obj_array_new = o.asm.ng).apply(null, arguments);
          }),
          (o._mono_wasm_obj_array_set = function () {
            return (o._mono_wasm_obj_array_set = o.asm.og).apply(null, arguments);
          }),
          (o._mono_wasm_obj_array_set_ref = function () {
            return (o._mono_wasm_obj_array_set_ref = o.asm.pg).apply(null, arguments);
          }),
          (o._mono_wasm_string_array_new_ref = function () {
            return (o._mono_wasm_string_array_new_ref = o.asm.qg).apply(null, arguments);
          }),
          (o._mono_wasm_exec_regression = function () {
            return (o._mono_wasm_exec_regression = o.asm.rg).apply(null, arguments);
          }),
          (o._mono_wasm_exit = function () {
            return (o._mono_wasm_exit = o.asm.sg).apply(null, arguments);
          }),
          (o._mono_wasm_set_main_args = function () {
            return (o._mono_wasm_set_main_args = o.asm.tg).apply(null, arguments);
          }),
          (o._mono_wasm_strdup = function () {
            return (o._mono_wasm_strdup = o.asm.ug).apply(null, arguments);
          }),
          (o._mono_wasm_parse_runtime_options = function () {
            return (o._mono_wasm_parse_runtime_options = o.asm.vg).apply(null, arguments);
          }),
          (o._mono_wasm_enable_on_demand_gc = function () {
            return (o._mono_wasm_enable_on_demand_gc = o.asm.wg).apply(null, arguments);
          }),
          (o._mono_wasm_intern_string_ref = function () {
            return (o._mono_wasm_intern_string_ref = o.asm.xg).apply(null, arguments);
          }),
          (o._mono_wasm_string_get_data_ref = function () {
            return (o._mono_wasm_string_get_data_ref = o.asm.yg).apply(null, arguments);
          }),
          (o._mono_wasm_string_get_data = function () {
            return (o._mono_wasm_string_get_data = o.asm.zg).apply(null, arguments);
          }),
          (o._mono_wasm_class_get_type = function () {
            return (o._mono_wasm_class_get_type = o.asm.Ag).apply(null, arguments);
          }),
          (o._mono_wasm_type_get_class = function () {
            return (o._mono_wasm_type_get_class = o.asm.Bg).apply(null, arguments);
          }),
          (o._mono_wasm_get_type_name = function () {
            return (o._mono_wasm_get_type_name = o.asm.Cg).apply(null, arguments);
          }),
          (o._mono_wasm_get_type_aqn = function () {
            return (o._mono_wasm_get_type_aqn = o.asm.Dg).apply(null, arguments);
          }),
          (o._mono_wasm_write_managed_pointer_unsafe = function () {
            return (o._mono_wasm_write_managed_pointer_unsafe = o.asm.Eg).apply(null, arguments);
          }),
          (o._mono_wasm_copy_managed_pointer = function () {
            return (o._mono_wasm_copy_managed_pointer = o.asm.Fg).apply(null, arguments);
          }),
          (o._mono_wasm_i52_to_f64 = function () {
            return (o._mono_wasm_i52_to_f64 = o.asm.Gg).apply(null, arguments);
          }),
          (o._mono_wasm_u52_to_f64 = function () {
            return (o._mono_wasm_u52_to_f64 = o.asm.Hg).apply(null, arguments);
          }),
          (o._mono_wasm_f64_to_u52 = function () {
            return (o._mono_wasm_f64_to_u52 = o.asm.Ig).apply(null, arguments);
          }),
          (o._mono_wasm_f64_to_i52 = function () {
            return (o._mono_wasm_f64_to_i52 = o.asm.Jg).apply(null, arguments);
          }),
          (o._mono_wasm_typed_array_new_ref = function () {
            return (o._mono_wasm_typed_array_new_ref = o.asm.Kg).apply(null, arguments);
          }),
          (o._mono_wasm_unbox_enum = function () {
            return (o._mono_wasm_unbox_enum = o.asm.Lg).apply(null, arguments);
          }),
          (o._mono_wasm_send_dbg_command_with_parms = function () {
            return (o._mono_wasm_send_dbg_command_with_parms = o.asm.Mg).apply(null, arguments);
          }),
          (o._mono_wasm_send_dbg_command = function () {
            return (o._mono_wasm_send_dbg_command = o.asm.Ng).apply(null, arguments);
          }),
          (o._mono_wasm_event_pipe_enable = function () {
            return (o._mono_wasm_event_pipe_enable = o.asm.Og).apply(null, arguments);
          }),
          (o._mono_wasm_event_pipe_session_start_streaming = function () {
            return (o._mono_wasm_event_pipe_session_start_streaming = o.asm.Pg).apply(
              null,
              arguments
            );
          }),
          (o._mono_wasm_event_pipe_session_disable = function () {
            return (o._mono_wasm_event_pipe_session_disable = o.asm.Qg).apply(null, arguments);
          }),
          (o._mono_background_exec = function () {
            return (o._mono_background_exec = o.asm.Rg).apply(null, arguments);
          }),
          (o._mono_wasm_get_icudt_name = function () {
            return (o._mono_wasm_get_icudt_name = o.asm.Sg).apply(null, arguments);
          }),
          (o._mono_wasm_load_icu_data = function () {
            return (o._mono_wasm_load_icu_data = o.asm.Tg).apply(null, arguments);
          }),
          (o._mono_print_method_from_ip = function () {
            return (o._mono_print_method_from_ip = o.asm.Ug).apply(null, arguments);
          }),
          (o._mono_set_timeout_exec = function () {
            return (o._mono_set_timeout_exec = o.asm.Vg).apply(null, arguments);
          }),
          (o.___getTypeName = function () {
            return (o.___getTypeName = o.asm.Wg).apply(null, arguments);
          }),
          (o.___embind_register_native_and_builtin_types = function () {
            return (o.___embind_register_native_and_builtin_types = o.asm.Xg).apply(
              null,
              arguments
            );
          }),
          (o._emscripten_builtin_memalign = function () {
            return (ao = o._emscripten_builtin_memalign = o.asm.Yg).apply(null, arguments);
          })),
        so = (o._ntohs = function () {
          return (so = o._ntohs = o.asm.Zg).apply(null, arguments);
        }),
        co = (o._setThrew = function () {
          return (co = o._setThrew = o.asm._g).apply(null, arguments);
        }),
        uo = (o.stackSave = function () {
          return (uo = o.stackSave = o.asm.$g).apply(null, arguments);
        }),
        _o = (o.stackRestore = function () {
          return (_o = o.stackRestore = o.asm.ah).apply(null, arguments);
        }),
        lo = (o.stackAlloc = function () {
          return (lo = o.stackAlloc = o.asm.bh).apply(null, arguments);
        }),
        fo = (o.___cxa_can_catch = function () {
          return (fo = o.___cxa_can_catch = o.asm.ch).apply(null, arguments);
        }),
        mo = (o.___cxa_is_pointer_type = function () {
          return (mo = o.___cxa_is_pointer_type = o.asm.dh).apply(null, arguments);
        }),
        ho = (o.dynCall_jii = function () {
          return (ho = o.dynCall_jii = o.asm.eh).apply(null, arguments);
        }),
        po = (o.dynCall_viji = function () {
          return (po = o.dynCall_viji = o.asm.fh).apply(null, arguments);
        }),
        wo = (o.dynCall_jiii = function () {
          return (wo = o.dynCall_jiii = o.asm.gh).apply(null, arguments);
        }),
        go = (o.dynCall_jiiii = function () {
          return (go = o.dynCall_jiiii = o.asm.hh).apply(null, arguments);
        }),
        yo = (o.dynCall_iiji = function () {
          return (yo = o.dynCall_iiji = o.asm.ih).apply(null, arguments);
        }),
        bo = (o.dynCall_jijii = function () {
          return (bo = o.dynCall_jijii = o.asm.jh).apply(null, arguments);
        }),
        vo = (o.dynCall_vijii = function () {
          return (vo = o.dynCall_vijii = o.asm.kh).apply(null, arguments);
        }),
        Eo = (o.dynCall_iijiii = function () {
          return (Eo = o.dynCall_iijiii = o.asm.lh).apply(null, arguments);
        }),
        So = (o.dynCall_viiji = function () {
          return (So = o.dynCall_viiji = o.asm.mh).apply(null, arguments);
        }),
        Ao = (o.dynCall_iiijii = function () {
          return (Ao = o.dynCall_iiijii = o.asm.nh).apply(null, arguments);
        }),
        ko = (o.dynCall_iiiji = function () {
          return (ko = o.dynCall_iiiji = o.asm.oh).apply(null, arguments);
        }),
        No = (o.dynCall_vijji = function () {
          return (No = o.dynCall_vijji = o.asm.ph).apply(null, arguments);
        }),
        Oo = (o.dynCall_iji = function () {
          return (Oo = o.dynCall_iji = o.asm.qh).apply(null, arguments);
        }),
        xo = (o.dynCall_ji = function () {
          return (xo = o.dynCall_ji = o.asm.rh).apply(null, arguments);
        }),
        jo = (o.dynCall_jjjji = function () {
          return (jo = o.dynCall_jjjji = o.asm.sh).apply(null, arguments);
        }),
        To = (o.dynCall_ijii = function () {
          return (To = o.dynCall_ijii = o.asm.th).apply(null, arguments);
        }),
        Do = (o.dynCall_ijiii = function () {
          return (Do = o.dynCall_ijiii = o.asm.uh).apply(null, arguments);
        }),
        Mo = (o.dynCall_iijiiiii = function () {
          return (Mo = o.dynCall_iijiiiii = o.asm.vh).apply(null, arguments);
        }),
        Ro = (o.dynCall_jiiiii = function () {
          return (Ro = o.dynCall_jiiiii = o.asm.wh).apply(null, arguments);
        }),
        Po = (o.dynCall_viiiiiji = function () {
          return (Po = o.dynCall_viiiiiji = o.asm.xh).apply(null, arguments);
        }),
        Co = (o.dynCall_iiiiiji = function () {
          return (Co = o.dynCall_iiiiiji = o.asm.yh).apply(null, arguments);
        }),
        Io = (o.dynCall_jd = function () {
          return (Io = o.dynCall_jd = o.asm.zh).apply(null, arguments);
        }),
        Fo = (o.dynCall_dji = function () {
          return (Fo = o.dynCall_dji = o.asm.Ah).apply(null, arguments);
        }),
        $o = (o.dynCall_viijii = function () {
          return ($o = o.dynCall_viijii = o.asm.Bh).apply(null, arguments);
        }),
        Uo = (o.dynCall_vjji = function () {
          return (Uo = o.dynCall_vjji = o.asm.Ch).apply(null, arguments);
        }),
        Wo = (o.dynCall_iiiiiiji = function () {
          return (Wo = o.dynCall_iiiiiiji = o.asm.Dh).apply(null, arguments);
        }),
        Bo = (o.dynCall_viijji = function () {
          return (Bo = o.dynCall_viijji = o.asm.Eh).apply(null, arguments);
        }),
        zo = (o.dynCall_iiiiiiijiii = function () {
          return (zo = o.dynCall_iiiiiiijiii = o.asm.Fh).apply(null, arguments);
        }),
        Lo = (o.dynCall_iij = function () {
          return (Lo = o.dynCall_iij = o.asm.Gh).apply(null, arguments);
        }),
        Ho = (o.dynCall_j = function () {
          return (Ho = o.dynCall_j = o.asm.Hh).apply(null, arguments);
        }),
        Vo = (o.dynCall_iiiiij = function () {
          return (Vo = o.dynCall_iiiiij = o.asm.Ih).apply(null, arguments);
        });
      function qo(e, t, r) {
        var n = uo();
        try {
          return Ue(e)(t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Go(e, t, r, n, o) {
        var i = uo();
        try {
          Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Jo(e) {
        var t = uo();
        try {
          Ue(e)();
        } catch (e) {
          if ((_o(t), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Yo(e, t, r, n) {
        var o = uo();
        try {
          return Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Xo(e, t, r, n) {
        var o = uo();
        try {
          Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Zo(e, t, r) {
        var n = uo();
        try {
          return Ue(e)(t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ko(e, t, r, n) {
        var o = uo();
        try {
          Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Qo(e, t, r) {
        var n = uo();
        try {
          Ue(e)(t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ei(e, t, r, n, o) {
        var i = uo();
        try {
          Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ti(e, t) {
        var r = uo();
        try {
          Ue(e)(t);
        } catch (e) {
          if ((_o(r), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ri(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ni(e, t, r, n, o, i) {
        var a = uo();
        try {
          Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function oi(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          return Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ii(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ai(e, t, r, n, o) {
        var i = uo();
        try {
          return Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function si(e, t) {
        var r = uo();
        try {
          return Ue(e)(t);
        } catch (e) {
          if ((_o(r), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ci(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ui(e, t, r, n) {
        var o = uo();
        try {
          return Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function _i(e, t, r, n) {
        var o = uo();
        try {
          return Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function li(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function fi(e, t, r, n, o, i, a, s) {
        var c = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s);
        } catch (e) {
          if ((_o(c), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function mi(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function di(e, t, r, n, o) {
        var i = uo();
        try {
          Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function hi(e, t, r, n, o, i, a, s, c, u) {
        var _ = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u);
        } catch (e) {
          if ((_o(_), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function pi(e, t, r) {
        var n = uo();
        try {
          return Ue(e)(t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function wi(e, t, r, n, o, i, a, s) {
        var c = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s);
        } catch (e) {
          if ((_o(c), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function gi(e, t, r) {
        var n = uo();
        try {
          return Ue(e)(t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function yi(e, t, r, n, o, i) {
        var a = uo();
        try {
          Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function bi(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function vi(e, t, r, n, o) {
        var i = uo();
        try {
          return Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ei(e, t, r) {
        var n = uo();
        try {
          return Ue(e)(t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Si(e, t, r, n, o, i) {
        var a = uo();
        try {
          Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ai(e, t, r) {
        var n = uo();
        try {
          return Ue(e)(t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ki(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d) {
        var h = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d);
        } catch (e) {
          if ((_o(h), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ni(e, t, r, n) {
        var o = uo();
        try {
          return Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Oi(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function xi(e, t, r, n, o, i, a, s, c, u, _) {
        var l = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u, _);
        } catch (e) {
          if ((_o(l), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ji(e, t, r) {
        var n = uo();
        try {
          return Ue(e)(t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ti(e, t, r, n) {
        var o = uo();
        try {
          Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Di(e, t, r, n) {
        var o = uo();
        try {
          return Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Mi(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ri(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Pi(e, t, r, n, o) {
        var i = uo();
        try {
          return Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ci(e, t, r, n, o, i) {
        var a = uo();
        try {
          Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ii(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Fi(e, t, r, n) {
        var o = uo();
        try {
          return Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function $i(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ui(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p) {
        var w = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p);
        } catch (e) {
          if ((_o(w), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Wi(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Bi(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function zi(e, t, r, n, o, i, a, s, c, u) {
        var _ = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u);
        } catch (e) {
          if ((_o(_), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Li(e, t, r) {
        var n = uo();
        try {
          return Ue(e)(t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Hi(e, t, r, n, o) {
        var i = uo();
        try {
          Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Vi(e, t, r, n, o, i, a, s, c, u, _) {
        var l = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _);
        } catch (e) {
          if ((_o(l), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function qi(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Gi(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ji(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Yi(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v) {
        var E = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v);
        } catch (e) {
          if ((_o(E), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Xi(e, t, r, n, o, i, a, s) {
        var c = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s);
        } catch (e) {
          if ((_o(c), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Zi(e, t, r, n, o) {
        var i = uo();
        try {
          return Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ki(e, t, r, n, o) {
        var i = uo();
        try {
          Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Qi(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d) {
        var h = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d);
        } catch (e) {
          if ((_o(h), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ea(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p) {
        var w = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p);
        } catch (e) {
          if ((_o(w), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ta(e, t, r, n, o) {
        var i = uo();
        try {
          return Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ra(e, t, r, n, o, i, a, s, c, u, _) {
        var l = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u, _);
        } catch (e) {
          if ((_o(l), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function na(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function oa(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ia(e, t, r, n) {
        var o = uo();
        try {
          return Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function aa(e, t, r, n) {
        var o = uo();
        try {
          return Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function sa(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y) {
        var b = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y);
        } catch (e) {
          if ((_o(b), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ca(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w) {
        var g = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w);
        } catch (e) {
          if ((_o(g), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ua(e, t, r, n, o) {
        var i = uo();
        try {
          return Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function _a(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function la(e, t, r, n, o, i, a, s) {
        var c = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s);
        } catch (e) {
          if ((_o(c), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function fa(e, t, r, n, o, i, a, s, c, u, _) {
        var l = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u, _);
        } catch (e) {
          if ((_o(l), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ma(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function da(e, t, r, n, o, i, a, s, c, u) {
        var _ = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u);
        } catch (e) {
          if ((_o(_), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ha(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function pa(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function wa(e, t, r, n, o, i, a, s, c, u) {
        var _ = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u);
        } catch (e) {
          if ((_o(_), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ga(e, t, r, n, o, i, a, s, c, u, _) {
        var l = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _);
        } catch (e) {
          if ((_o(l), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ya(e, t, r, n, o, i) {
        var a = uo();
        try {
          Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ba(e, t, r) {
        var n = uo();
        try {
          return Ue(e)(t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function va(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          return Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ea(e, t, r, n, o, i) {
        var a = uo();
        try {
          Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Sa(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Aa(e, t, r, n, o, i, a, s, c, u, _, l, f, m) {
        var d = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m);
        } catch (e) {
          if ((_o(d), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ka(e, t, r, n, o, i, a, s) {
        var c = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s);
        } catch (e) {
          if ((_o(c), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Na(e, t, r, n, o, i, a, s) {
        var c = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s);
        } catch (e) {
          if ((_o(c), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Oa(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function xa(e, t, r, n, o, i) {
        var a = uo();
        try {
          Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ja(e, t, r, n, o, i, a, s, c, u, _, l) {
        var f = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u, _, l);
        } catch (e) {
          if ((_o(f), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ta(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Da(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ma(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ra(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Pa(e, t, r, n, o, i, a, s, c, u, _, l, f, m) {
        var d = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m);
        } catch (e) {
          if ((_o(d), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ca(e, t, r, n, o, i, a, s, c, u, _, l) {
        var f = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u, _, l);
        } catch (e) {
          if ((_o(f), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ia(e, t, r, n, o, i, a, s, c, u) {
        var _ = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s, c, u);
        } catch (e) {
          if ((_o(_), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Fa(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function $a(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ua(e, t, r, n, o) {
        var i = uo();
        try {
          Ue(e)(t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Wa(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ba(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          return Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function za(e) {
        var t = uo();
        try {
          return Ue(e)();
        } catch (e) {
          if ((_o(t), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function La(e, t, r, n) {
        var o = uo();
        try {
          return Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ha(e, t, r, n, o, i, a, s, c, u, _, l) {
        var f = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l);
        } catch (e) {
          if ((_o(f), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Va(e, t, r, n, o, i, a, s, c, u, _, l, f) {
        var m = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f);
        } catch (e) {
          if ((_o(m), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function qa(e, t, r, n, o, i, a, s, c, u, _, l, f, m) {
        var d = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m);
        } catch (e) {
          if ((_o(d), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ga(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h) {
        var p = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h);
        } catch (e) {
          if ((_o(p), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ja(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g) {
        var y = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g);
        } catch (e) {
          if ((_o(y), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ya(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y) {
        var b = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y);
        } catch (e) {
          if ((_o(b), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Xa(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b) {
        var v = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b);
        } catch (e) {
          if ((_o(v), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Za(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v) {
        var E = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v);
        } catch (e) {
          if ((_o(E), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ka(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E) {
        var S = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E);
        } catch (e) {
          if ((_o(S), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Qa(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E, S) {
        var A = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E, S);
        } catch (e) {
          if ((_o(A), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function es(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E, S, A) {
        var k = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E, S, A);
        } catch (e) {
          if ((_o(k), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ts(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E, S, A, k) {
        var N = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E, S, A, k);
        } catch (e) {
          if ((_o(N), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function rs(e, t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E, S, A, k, N) {
        var O = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E, S, A, k, N);
        } catch (e) {
          if ((_o(O), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ns(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O
      ) {
        var x = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E, S, A, k, N, O);
        } catch (e) {
          if ((_o(x), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function os(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x
      ) {
        var j = uo();
        try {
          Ue(e)(t, r, n, o, i, a, s, c, u, _, l, f, m, d, h, p, w, g, y, b, v, E, S, A, k, N, O, x);
        } catch (e) {
          if ((_o(j), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function is(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j
      ) {
        var T = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j
          );
        } catch (e) {
          if ((_o(T), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function as(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T
      ) {
        var D = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T
          );
        } catch (e) {
          if ((_o(D), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ss(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D
      ) {
        var M = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D
          );
        } catch (e) {
          if ((_o(M), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function cs(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M
      ) {
        var R = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M
          );
        } catch (e) {
          if ((_o(R), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function us(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M,
        R
      ) {
        var P = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M,
            R
          );
        } catch (e) {
          if ((_o(P), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function _s(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M,
        R,
        P
      ) {
        var C = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M,
            R,
            P
          );
        } catch (e) {
          if ((_o(C), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ls(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M,
        R,
        P,
        C
      ) {
        var I = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M,
            R,
            P,
            C
          );
        } catch (e) {
          if ((_o(I), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function fs(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M,
        R,
        P,
        C,
        I
      ) {
        var F = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M,
            R,
            P,
            C,
            I
          );
        } catch (e) {
          if ((_o(F), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ms(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M,
        R,
        P,
        C,
        I,
        F
      ) {
        var $ = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M,
            R,
            P,
            C,
            I,
            F
          );
        } catch (e) {
          if ((_o($), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ds(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M,
        R,
        P,
        C,
        I,
        F,
        $
      ) {
        var U = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M,
            R,
            P,
            C,
            I,
            F,
            $
          );
        } catch (e) {
          if ((_o(U), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function hs(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M,
        R,
        P,
        C,
        I,
        F,
        $,
        U
      ) {
        var W = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M,
            R,
            P,
            C,
            I,
            F,
            $,
            U
          );
        } catch (e) {
          if ((_o(W), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ps(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M,
        R,
        P,
        C,
        I,
        F,
        $,
        U,
        W
      ) {
        var B = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M,
            R,
            P,
            C,
            I,
            F,
            $,
            U,
            W
          );
        } catch (e) {
          if ((_o(B), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ws(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M,
        R,
        P,
        C,
        I,
        F,
        $,
        U,
        W,
        B
      ) {
        var z = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M,
            R,
            P,
            C,
            I,
            F,
            $,
            U,
            W,
            B
          );
        } catch (e) {
          if ((_o(z), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function gs(
        e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        c,
        u,
        _,
        l,
        f,
        m,
        d,
        h,
        p,
        w,
        g,
        y,
        b,
        v,
        E,
        S,
        A,
        k,
        N,
        O,
        x,
        j,
        T,
        D,
        M,
        R,
        P,
        C,
        I,
        F,
        $,
        U,
        W,
        B,
        z
      ) {
        var L = uo();
        try {
          Ue(e)(
            t,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u,
            _,
            l,
            f,
            m,
            d,
            h,
            p,
            w,
            g,
            y,
            b,
            v,
            E,
            S,
            A,
            k,
            N,
            O,
            x,
            j,
            T,
            D,
            M,
            R,
            P,
            C,
            I,
            F,
            $,
            U,
            W,
            B,
            z
          );
        } catch (e) {
          if ((_o(L), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ys(e, t, r, n) {
        var o = uo();
        try {
          Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function bs(e, t, r, n, o, i, a, s) {
        var c = uo();
        try {
          return Ue(e)(t, r, n, o, i, a, s);
        } catch (e) {
          if ((_o(c), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function vs(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          return Ue(e)(t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Es(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ue(e)(t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ss(e, t, r, n) {
        var o = uo();
        try {
          Ue(e)(t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function As(e, t, r, n, o) {
        var i = uo();
        try {
          po(e, t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ks(e, t, r, n, o, i) {
        var a = uo();
        try {
          vo(e, t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ns(e, t, r, n, o, i) {
        var a = uo();
        try {
          So(e, t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Os(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          No(e, t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function xs(e, t, r, n, o, i) {
        var a = uo();
        try {
          return bo(e, t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function js(e, t, r) {
        var n = uo();
        try {
          return ho(e, t, r);
        } catch (e) {
          if ((_o(n), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ts(e, t, r, n) {
        var o = uo();
        try {
          return wo(e, t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ds(e, t, r, n, o) {
        var i = uo();
        try {
          return To(e, t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ms(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Do(e, t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Rs(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          return Ao(e, t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ps(e, t, r, n, o, i, a, s) {
        var c = uo();
        try {
          return jo(e, t, r, n, o, i, a, s);
        } catch (e) {
          if ((_o(c), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Cs(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          return Mo(e, t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Is(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          return Eo(e, t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Fs(e, t, r, n, o, i) {
        var a = uo();
        try {
          return ko(e, t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function $s(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          Po(e, t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Us(e, t) {
        var r = uo();
        try {
          return Io(e, t);
        } catch (e) {
          if ((_o(r), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ws(e, t, r, n, o) {
        var i = uo();
        try {
          return yo(e, t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Bs(e, t, r, n, o, i) {
        var a = uo();
        try {
          return Ro(e, t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function zs(e, t, r, n) {
        var o = uo();
        try {
          return Oo(e, t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ls(e, t, r, n) {
        var o = uo();
        try {
          return Fo(e, t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Hs(e, t, r, n, o, i) {
        var a = uo();
        try {
          Uo(e, t, r, n, o, i);
        } catch (e) {
          if ((_o(a), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Vs(e, t, r, n, o) {
        var i = uo();
        try {
          return go(e, t, r, n, o);
        } catch (e) {
          if ((_o(i), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function qs(e, t, r, n, o, i, a, s, c, u, _, l) {
        var f = uo();
        try {
          return zo(e, t, r, n, o, i, a, s, c, u, _, l);
        } catch (e) {
          if ((_o(f), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Gs(e, t, r, n, o, i, a, s, c) {
        var u = uo();
        try {
          return Wo(e, t, r, n, o, i, a, s, c);
        } catch (e) {
          if ((_o(u), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Js(e, t, r, n, o, i, a, s) {
        var c = uo();
        try {
          return Co(e, t, r, n, o, i, a, s);
        } catch (e) {
          if ((_o(c), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ys(e, t, r, n, o, i, a, s) {
        var c = uo();
        try {
          Bo(e, t, r, n, o, i, a, s);
        } catch (e) {
          if ((_o(c), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Xs(e, t) {
        var r = uo();
        try {
          return xo(e, t);
        } catch (e) {
          if ((_o(r), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Zs(e, t, r, n) {
        var o = uo();
        try {
          return Lo(e, t, r, n);
        } catch (e) {
          if ((_o(o), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Ks(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          $o(e, t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function Qs(e) {
        var t = uo();
        try {
          return Ho(e);
        } catch (e) {
          if ((_o(t), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function ec(e, t, r, n, o, i, a) {
        var s = uo();
        try {
          return Vo(e, t, r, n, o, i, a);
        } catch (e) {
          if ((_o(s), e !== e + 0)) throw e;
          co(1, 0);
        }
      }
      function tc(e) {
        (this.name = 'ExitStatus'),
          (this.message = 'Program terminated with exit(' + e + ')'),
          (this.status = e);
      }
      function rc(e) {
        function t() {
          eo ||
            ((eo = !0),
            (o.calledRun = !0),
            R || (pe(), r(o), o.onRuntimeInitialized && o.onRuntimeInitialized(), we()));
        }
        (e = e || h),
          ve > 0 ||
            (he(),
            ve > 0 ||
              (o.setStatus
                ? (o.setStatus('Running...'),
                  setTimeout(function () {
                    setTimeout(function () {
                      o.setStatus('');
                    }, 1),
                      t();
                  }, 1))
                : t()));
      }
      function nc(e, t) {
        e, oc(e);
      }
      function oc(e) {
        e, de() || (o.onExit && o.onExit(e), (R = !0)), w(e, new tc(e));
      }
      if (
        ((o.ccall = I),
        (o.cwrap = F),
        (o.UTF8ArrayToString = U),
        (o.UTF8ToString = W),
        (o.addRunDependency = Ae),
        (o.removeRunDependency = ke),
        (o.FS_createPath = dt.createPath),
        (o.FS_createDataFile = dt.createDataFile),
        (o.FS_createPreloadedFile = dt.createPreloadedFile),
        (o.FS_createLazyFile = dt.createLazyFile),
        (o.FS_createDevice = dt.createDevice),
        (o.FS_unlink = dt.unlink),
        (o.print = k),
        (o.setValue = We),
        (o.getValue = Fe),
        (o.FS = dt),
        (Se = function e() {
          eo || rc(), eo || (Se = e);
        }),
        (o.run = rc),
        o.preInit)
      )
        for ('function' == typeof o.preInit && (o.preInit = [o.preInit]); o.preInit.length > 0; )
          o.preInit.pop()();
      return rc(), (t.ready = t.ready.then(() => Zn)), t.ready;
    };
  })();
export default createDotnetRuntime;
const MONO = {},
  BINDING = {},
  INTERNAL = {},
  IMPORTS = {};
var ENVIRONMENT_IS_WEB = 'object' == typeof window,
  ENVIRONMENT_IS_WORKER = 'function' == typeof importScripts,
  ENVIRONMENT_IS_NODE =
    'object' == typeof process &&
    'object' == typeof process.versions &&
    'string' == typeof process.versions.node,
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
__dotnet_runtime.__setEmscriptenEntrypoint(createDotnetRuntime, {
  isNode: ENVIRONMENT_IS_NODE,
  isShell: ENVIRONMENT_IS_SHELL,
  isWeb: ENVIRONMENT_IS_WEB,
  isWorker: ENVIRONMENT_IS_WORKER
});
const dotnet = __dotnet_runtime.moduleExports.dotnet,
  exit = __dotnet_runtime.moduleExports.exit;
export { dotnet, exit, INTERNAL };
