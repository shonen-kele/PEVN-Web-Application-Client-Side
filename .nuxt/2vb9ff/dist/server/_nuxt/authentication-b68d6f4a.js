import { ref, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, mergeProps, unref } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { _ as _export_sfc, b as useAuthenticationTypeStore, d as useLoginStore } from "../server.mjs";
import "hookable";
import { u as useFetch } from "./fetch-ae80ec0a.js";
import "destr";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "h3";
import "ufo";
import "defu";
import "@vueuse/core";
import "ohash";
const _sfc_main$1 = {
  __name: "authenticationForm",
  __ssrInlineRender: true,
  props: {
    buttonText: String
  },
  emits: ["functionEmit"],
  setup(__props, { emit }) {
    useAuthenticationTypeStore();
    useLoginStore();
    const email = ref();
    const password = ref();
    function triggerEmit() {
      emit("functionEmit", email.value, password.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_form, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_text_field, {
              name: "email",
              type: "email",
              placeholder: "email",
              modelValue: email.value,
              "onUpdate:modelValue": ($event) => email.value = $event,
              cols: "20"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              type: "password",
              placeholder: "password",
              modelValue: password.value,
              "onUpdate:modelValue": ($event) => password.value = $event,
              cols: "20"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              type: "button",
              onClick: () => {
                triggerEmit();
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.buttonText)}`);
                } else {
                  return [
                    createTextVNode(
                      toDisplayString(__props.buttonText),
                      1
                      /* TEXT */
                    )
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_text_field, {
                name: "email",
                type: "email",
                placeholder: "email",
                modelValue: email.value,
                "onUpdate:modelValue": ($event) => email.value = $event,
                cols: "20"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_text_field, {
                type: "password",
                placeholder: "password",
                modelValue: password.value,
                "onUpdate:modelValue": ($event) => password.value = $event,
                cols: "20"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_btn, {
                type: "button",
                onClick: () => {
                  triggerEmit();
                }
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(__props.buttonText),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/components/special/authenticationForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "C:/Users/kmba2/Coding/Projects in coding/Yessay/client/src/components/special/authenticationForm.vue"]]);
const authentication_vue_vue_type_style_index_0_scoped_8dfdf35f_lang = "";
const _sfc_main = {
  __name: "authentication",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const loginStore = useLoginStore();
    const authStore = useAuthenticationTypeStore();
    const { setEmail, setToken, setLoginState } = loginStore;
    const error = ref();
    const message = ref();
    async function login(email, password) {
      const { data } = await useFetch("/api/login", {
        method: "POST",
        body: {
          email,
          password
        }
      }, "$6NtFfgiLix");
      error.value = data.value.errorMessage;
      message.value = data.value.message;
      if (message.value) {
        console.log("before setToken", loginStore.token, "the token value is", data.value.token);
        setToken(data.value.token);
        console.log("after set token", loginStore.token);
        setEmail(data.value.email);
        setLoginState(true);
        router.push("/personal");
      } else {
        setEmail(null);
      }
    }
    async function register(email, password) {
      console.log(email);
      console.log(password);
      const { data } = await useFetch("/api/register", {
        method: "POST",
        body: {
          email,
          password
        }
      }, "$CxZBrh17jO");
      error.value = data.value.errorMessage;
      message.value = data.value.Emit;
      if (message.value) {
        setToken(data.value.token);
        setEmail(data.value.email);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthenticationForm = __nuxt_component_0;
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "login-register" }, _attrs))} data-v-8dfdf35f>`);
      if (unref(authStore).isLoginForm) {
        _push(`<div id="login-form" data-v-8dfdf35f>`);
        _push(ssrRenderComponent(_component_AuthenticationForm, {
          buttonText: "login",
          onFunctionEmit: (emailEmitArg, passEmitArg) => {
            login(emailEmitArg, passEmitArg);
          }
        }, null, _parent));
        _push(ssrRenderComponent(_component_v_divider, { vertical: "" }, null, _parent));
        _push(ssrRenderComponent(_component_v_btn, {
          onClick: () => unref(authStore).isLoginForm = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Register`);
            } else {
              return [
                createTextVNode("Register")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div id="register-form" data-v-8dfdf35f>`);
        _push(ssrRenderComponent(_component_v_btn, {
          onClick: () => unref(authStore).isLoginForm = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Login`);
            } else {
              return [
                createTextVNode("Login")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(ssrRenderComponent(_component_v_divider, { vertical: "" }, null, _parent));
        _push(ssrRenderComponent(_component_AuthenticationForm, {
          buttonText: "register",
          onFunctionEmit: (emailEmitArg, passEmitArg) => {
            register(emailEmitArg, passEmitArg);
          }
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<br data-v-8dfdf35f>`);
      if (error.value) {
        _push(`<div class="error"${ssrRenderAttr("text", error.value)} data-v-8dfdf35f></div>`);
      } else {
        _push(`<!---->`);
      }
      if (message.value) {
        _push(`<div${ssrRenderAttr("text", error.value)} data-v-8dfdf35f></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/pages/authentication.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const authentication = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8dfdf35f"], ["__file", "C:/Users/kmba2/Coding/Projects in coding/Yessay/client/src/pages/authentication.vue"]]);
export {
  authentication as default
};
//# sourceMappingURL=authentication-b68d6f4a.js.map
