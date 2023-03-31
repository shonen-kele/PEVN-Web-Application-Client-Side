import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import "hookable";
import { u as useFetch } from "./fetch-ae80ec0a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
const personal_vue_vue_type_style_index_0_scoped_5338add1_lang = "";
const _sfc_main = {
  __name: "personal",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useLoginStore();
    const router = useRouter();
    const argumentTitle = ref();
    const argumentBody = ref();
    const error = ref();
    const error2 = ref();
    const message = ref();
    const personalArguments = ref([]);
    const isOpen = ref(false);
    const isEditting = ref(false);
    const editId = ref();
    console.log("before verifyToken", store.token);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/verifyToken", {
      method: "POST",
      body: {
        token: store.token.token
      }
    }, "$sRbWukuRoL")), __temp = await __temp, __restore(), __temp);
    console.log(data.verified);
    if (!data.verified) {
      router.push("/authentication");
    } else {
      displayPersonalArguments();
    }
    async function displayPersonalArguments() {
      const { data: data2 } = await useFetch("/api/displayPersonalArguments", {
        method: "POST",
        body: {
          email: tokenVerification.data.result.email
        }
      }, "$1Kc7m7vU5C");
      error2.value = data2.value.errorMessage;
      personalArguments.value = [];
      if (data2.value.arguments) {
        data2.value.arguments.forEach((argument) => {
          personalArguments.value.push(argument);
        });
      }
    }
    async function createArgument() {
      const { data: data2 } = await useFetch("/api/createArgument", {
        method: "POST",
        body: {
          email: tokenVerification.data.result.email,
          title: argumentTitle.value,
          argument: argumentBody.value
        }
      }, "$gpmGZiNUDk");
      error.value = data2.value.errorMessage;
      message.value = data2.value.message;
      displayPersonalArguments();
    }
    function toggleArgumentsView() {
      isOpen.value = !isOpen.value;
    }
    async function destroyArgument(idNumber) {
      await useFetch("/api/destroyArgument", {
        method: "POST",
        body: {
          id: idNumber
        }
      }, "$2fnPsaqAOo");
      displayPersonalArguments();
    }
    function Edit(id, argument, title) {
      isEditting.value = true;
      editId.value = id;
      argumentBody.value = argument;
      argumentTitle.value = title;
      routerViewContainer.value.scrollTop = 0;
    }
    async function confirmEdit() {
      const { data: data2 } = await useFetch("/api/confirmEdit", {
        method: "POST",
        body: {
          id: editId.value,
          title: argumentTitle.value,
          argument: argumentBody.value
        }
      }, "$ryY9IrnHWg");
      error.value = data2.value.errorMessage;
      message.value = data2.value.message;
      displayPersonalArguments();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "argument-inputs" }, _attrs))} data-v-5338add1><!--text field/title-->`);
      _push(ssrRenderComponent(_component_v_text_field, {
        id: "argument-title",
        modelValue: argumentTitle.value,
        "onUpdate:modelValue": ($event) => argumentTitle.value = $event,
        placeholder: "Argument Title",
        class: "argument-class"
      }, null, _parent));
      _push(`<!--word counter-->`);
      if (argumentTitle.value) {
        _push(`<div data-v-5338add1>${ssrInterpolate(argumentTitle.value.length)}/100 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--Text area-->`);
      _push(ssrRenderComponent(_component_v_textarea, {
        id: "argument-body",
        modelValue: argumentBody.value,
        "onUpdate:modelValue": ($event) => argumentBody.value = $event,
        placeholder: "Enter the argument you are making",
        class: "argument-class",
        rows: "20"
      }, null, _parent));
      _push(`<!--word counter-->`);
      if (argumentBody.value) {
        _push(`<div data-v-5338add1>${ssrInterpolate(argumentBody.value.length)}/5000 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--button for adding argument-->`);
      if (!isEditting.value) {
        _push(ssrRenderComponent(_component_v_btn, {
          id: "add-argument-button",
          class: "argument-class",
          variant: "tonal",
          onClick: createArgument
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Add Argument `);
            } else {
              return [
                createTextVNode(" Add Argument ")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--buttons for editing-->`);
      if (isEditting.value) {
        _push(`<div id="edit-buttons" data-v-5338add1>`);
        _push(ssrRenderComponent(_component_v_btn, {
          variant: "tonal",
          onClick: () => confirmEdit()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Confirm Edit `);
            } else {
              return [
                createTextVNode(" Confirm Edit ")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(ssrRenderComponent(_component_v_btn, {
          variant: "tonal",
          onClick: () => {
            isEditting.value = false;
            argumentBody.value = null;
            argumentTitle.value = null;
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Cancel Edit `);
            } else {
              return [
                createTextVNode(" Cancel Edit ")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--messages-->`);
      if (error.value) {
        _push(`<div data-v-5338add1>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (message.value) {
        _push(`<div data-v-5338add1>${ssrInterpolate(message.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br data-v-5338add1><!--To toggle arguments view-->`);
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "tonal",
        onClick: toggleArgumentsView
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Argumments `);
          } else {
            return [
              createTextVNode(" View Argumments ")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      if (isOpen.value) {
        _push(`<div id="personal-arguments-container" data-v-5338add1>`);
        if (error2.value) {
          _push(`<div data-v-5338add1> You have made no personal arguments yet </div>`);
        } else {
          _push(`<!--[-->`);
          ssrRenderList(personalArguments.value, (argument) => {
            _push(ssrRenderComponent(_component_v_card, {
              key: argument.id,
              title: argument.title,
              text: argument.argument,
              variant: "tonal"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_v_card_actions, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_v_btn, {
                          onClick: () => {
                            if (!isEditting.value) {
                              destroyArgument(argument.id);
                            }
                          }
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Delete `);
                            } else {
                              return [
                                createTextVNode(" Delete ")
                              ];
                            }
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_v_btn, {
                          onClick: ($event) => Edit(argument.id, argument.argument, argument.title)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` Edit `);
                            } else {
                              return [
                                createTextVNode(" Edit ")
                              ];
                            }
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            onClick: () => {
                              if (!isEditting.value) {
                                destroyArgument(argument.id);
                              }
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Delete ")
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["onClick"]),
                          createVNode(_component_v_btn, {
                            onClick: ($event) => Edit(argument.id, argument.argument, argument.title)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Edit ")
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                    /* DYNAMIC */
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(
                      _component_v_card_actions,
                      null,
                      {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            onClick: () => {
                              if (!isEditting.value) {
                                destroyArgument(argument.id);
                              }
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Delete ")
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["onClick"]),
                          createVNode(_component_v_btn, {
                            onClick: ($event) => Edit(argument.id, argument.argument, argument.title)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Edit ")
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ];
                }
              }),
              _: 2
              /* DYNAMIC */
            }, _parent));
          });
          _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/pages/personal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const personal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5338add1"], ["__file", "C:/Users/kmba2/Coding/Projects in coding/Yessay/client/src/pages/personal.vue"]]);
export {
  personal as default
};
//# sourceMappingURL=personal-50124936.js.map
