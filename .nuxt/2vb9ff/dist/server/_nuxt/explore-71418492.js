import { ref, withAsyncContext, resolveComponent, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import "hookable";
import { u as useFetch } from "./fetch-ae80ec0a.js";
import "destr";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { e as defineStore, _ as _export_sfc } from "../server.mjs";
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
const useArgumentStore = defineStore("argument", () => {
  const argumentTitle = ref();
  const argumentBody = ref();
  const email = ref();
  return { argumentTitle, argumentBody, email };
});
const explore_vue_vue_type_style_index_0_scoped_bfbfb3b2_lang = "";
const _sfc_main = {
  __name: "explore",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useArgumentStore();
    const router = useRouter();
    ref(null);
    const vCards = ref(null);
    const argumentContainer = ref([
      { id: 1, arguments: [] },
      { id: 2, arguments: [] },
      { id: 3, arguments: [] },
      { id: 4, arguments: [] }
    ]);
    let offset = 0;
    for (let index = 0; index < argumentContainer.value.length; index++) {
      const element = argumentContainer.value[index];
      offset += element.arguments.length;
    }
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/displayArguments", {
      method: "POST",
      body: {
        offset
      }
    }, "$IRT4q0JbYJ")), __temp = await __temp, __restore(), __temp);
    let args = data.value.arguments;
    for (let index = 0; index < 4; index++) {
      let argument = args[index];
      argumentContainer.value[index].arguments.push(argument);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_flex = resolveComponent("v-flex");
      _push(`<!--[--><h1 data-v-bfbfb3b2>The explore page</h1>`);
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: () => _ctx.displayArguments
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Refresh page`);
          } else {
            return [
              createTextVNode("Refresh page")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<div id="argument-container" data-v-bfbfb3b2><!--[-->`);
      ssrRenderList(argumentContainer.value, (column) => {
        _push(`<div class="column" data-v-bfbfb3b2><!--[-->`);
        ssrRenderList(column.arguments, (argument) => {
          _push(ssrRenderComponent(_component_v_card, {
            title: argument.title,
            subtitle: argument.email,
            text: argument.argument,
            ref_for: true,
            ref_key: "vCards",
            ref: vCards,
            variant: "tonal"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_v_card_actions, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_v_flex, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_v_btn, {
                              variant: "text",
                              onClick: () => {
                                unref(store).argumentTitle = argument.title;
                                unref(store).argumentBody = argument.argument;
                                unref(store).email = argument.email;
                                unref(router).push(`/arena-${argument.id}`);
                              }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`Rebute`);
                                } else {
                                  return [
                                    createTextVNode("Rebute")
                                  ];
                                }
                              }),
                              _: 2
                              /* DYNAMIC */
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_btn, { variant: "text" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`Entail`);
                                } else {
                                  return [
                                    createTextVNode("Entail")
                                  ];
                                }
                              }),
                              _: 2
                              /* DYNAMIC */
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_btn, { variant: "text" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`Comment`);
                                } else {
                                  return [
                                    createTextVNode("Comment")
                                  ];
                                }
                              }),
                              _: 2
                              /* DYNAMIC */
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_v_btn, {
                                variant: "text",
                                onClick: () => {
                                  unref(store).argumentTitle = argument.title;
                                  unref(store).argumentBody = argument.argument;
                                  unref(store).email = argument.email;
                                  unref(router).push(`/arena-${argument.id}`);
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Rebute")
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["onClick"]),
                              createVNode(_component_v_btn, { variant: "text" }, {
                                default: withCtx(() => [
                                  createTextVNode("Entail")
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              createVNode(_component_v_btn, { variant: "text" }, {
                                default: withCtx(() => [
                                  createTextVNode("Comment")
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ];
                          }
                        }),
                        _: 2
                        /* DYNAMIC */
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(
                          _component_v_flex,
                          null,
                          {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                variant: "text",
                                onClick: () => {
                                  unref(store).argumentTitle = argument.title;
                                  unref(store).argumentBody = argument.argument;
                                  unref(store).email = argument.email;
                                  unref(router).push(`/arena-${argument.id}`);
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Rebute")
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["onClick"]),
                              createVNode(_component_v_btn, { variant: "text" }, {
                                default: withCtx(() => [
                                  createTextVNode("Entail")
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              createVNode(_component_v_btn, { variant: "text" }, {
                                default: withCtx(() => [
                                  createTextVNode("Comment")
                                ]),
                                _: 1
                                /* STABLE */
                              })
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
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(
                    _component_v_card_actions,
                    null,
                    {
                      default: withCtx(() => [
                        createVNode(
                          _component_v_flex,
                          null,
                          {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                variant: "text",
                                onClick: () => {
                                  unref(store).argumentTitle = argument.title;
                                  unref(store).argumentBody = argument.argument;
                                  unref(store).email = argument.email;
                                  unref(router).push(`/arena-${argument.id}`);
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Rebute")
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["onClick"]),
                              createVNode(_component_v_btn, { variant: "text" }, {
                                default: withCtx(() => [
                                  createTextVNode("Entail")
                                ]),
                                _: 1
                                /* STABLE */
                              }),
                              createVNode(_component_v_btn, { variant: "text" }, {
                                default: withCtx(() => [
                                  createTextVNode("Comment")
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )
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
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/pages/explore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const explore = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bfbfb3b2"], ["__file", "C:/Users/kmba2/Coding/Projects in coding/Yessay/client/src/pages/explore.vue"]]);
export {
  explore as default
};
//# sourceMappingURL=explore-71418492.js.map
