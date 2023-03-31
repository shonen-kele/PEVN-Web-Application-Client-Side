import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { u as useFetch } from "./fetch-ae80ec0a.js";
import "destr";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
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
const arena__id__vue_vue_type_style_index_0_scoped_3314fbd8_lang = "";
const _sfc_main = {
  __name: "arena-[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const rules = ref([(v) => v.length <= 5e3 || "Max 5000 characters"]);
    const route = useRoute();
    let id = route.params.id;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/getArgument", {
      method: "POST",
      body: {
        id
      }
    }, "$vfCYkKFi2p")), __temp = await __temp, __restore(), __temp);
    const argumentTitle = ref(data.value.argumentTitle);
    const argumentBody = ref(data.value.argumentBody);
    ref(id);
    const paramsError = ref(data.value.errorMessage);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "arena-root" }, _attrs))} data-v-3314fbd8>`);
      if (!paramsError.value) {
        _push(`<div data-v-3314fbd8><h3 data-v-3314fbd8>${ssrInterpolate(argumentTitle.value)}</h3><div id="comparison" data-v-3314fbd8><div id="text-area-functionality" data-v-3314fbd8>`);
        _push(ssrRenderComponent(_component_v_textarea, {
          rows: "20",
          cols: "50",
          counter: "",
          placeholder: "Rebut the argument",
          "model-value": argumentBody.value,
          rules: rules.value
        }, null, _parent));
        _push(`<div class="text-area-actions" data-v-3314fbd8>`);
        _push(ssrRenderComponent(_component_v_btn, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Reset`);
            } else {
              return [
                createTextVNode("Reset")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_v_card, {
          variant: "tonal",
          text: argumentBody.value
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<h1 data-v-3314fbd8>${ssrInterpolate(paramsError.value)}</h1>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/pages/arena-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const arena__id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3314fbd8"], ["__file", "C:/Users/kmba2/Coding/Projects in coding/Yessay/client/src/pages/arena-[id].vue"]]);
export {
  arena__id_ as default
};
//# sourceMappingURL=arena-_id_-7a65dc87.js.map
