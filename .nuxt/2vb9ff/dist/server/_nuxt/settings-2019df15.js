import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { u as useFetch } from "./fetch-ae80ec0a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { _ as _export_sfc, d as useLoginStore } from "../server.mjs";
import "ohash";
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
const settings_vue_vue_type_style_index_0_scoped_ece20f54_lang = "";
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLoginStore();
    const router = useRouter();
    const wishToDelete = ref(false);
    const passInput = ref();
    const error = ref();
    if (!store.sharedEmail) {
      router.push("/");
    }
    function logout() {
      store.sharedEmail = null;
      store.setLoginState(false);
      router.push("/");
    }
    async function confirmDelete() {
      const { data } = useFetch("/api/deleteAccount", {
        method: "POST",
        body: {
          password: passInput.value
        }
      }, "$6q8jpeK0kX");
      if (data.value.errorMessage) {
        error.value = data.value.errorMesssage;
      } else {
        router.push("/");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_text_field = resolveComponent("v-text-field");
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "settings root" }, _attrs))} data-v-ece20f54>`);
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: logout,
        variant: "tonal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Logout `);
          } else {
            return [
              createTextVNode(" Logout ")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: () => wishToDelete.value = true,
        variant: "tonal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete account `);
          } else {
            return [
              createTextVNode(" Delete account ")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<br data-v-ece20f54>`);
      if (wishToDelete.value) {
        _push(`<div data-v-ece20f54>`);
        _push(ssrRenderComponent(_component_v_text_field, {
          modelValue: passInput.value,
          "onUpdate:modelValue": ($event) => passInput.value = $event
        }, null, _parent));
        _push(`<br data-v-ece20f54><div id="confirm-buttons" data-v-ece20f54>`);
        _push(ssrRenderComponent(_component_v_btn, {
          onClick: confirmDelete,
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Confirm Account Deleteion `);
            } else {
              return [
                createTextVNode(" Confirm Account Deleteion ")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(ssrRenderComponent(_component_v_btn, {
          onClick: () => {
            wishToDelete.value = false;
          },
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Cancel Account Deleteion `);
            } else {
              return [
                createTextVNode(" Cancel Account Deleteion ")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(`</div><br data-v-ece20f54>`);
        if (error.value) {
          _push(`<div class="error" data-v-ece20f54>${ssrInterpolate(error.value)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ece20f54"], ["__file", "C:/Users/kmba2/Coding/Projects in coding/Yessay/client/src/pages/settings.vue"]]);
export {
  settings as default
};
//# sourceMappingURL=settings-2019df15.js.map
