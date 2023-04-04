// Generated by nitro
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/confirmEdit': {
      'post': Awaited<ReturnType<typeof import('../../../src/server/api/confirmEdit.post').default>>
    }
    '/api/createArgument': {
      'post': Awaited<ReturnType<typeof import('../../../src/server/api/createArgument.post').default>>
    }
    '/api/deleteAccount': {
      'post': Awaited<ReturnType<typeof import('../../../src/server/api/deleteAccount.post').default>>
    }
    '/api/destroyArgument': {
      'post': Awaited<ReturnType<typeof import('../../../src/server/api/destroyArgument.post').default>>
    }
    '/api/displayArguments': {
      'post': Awaited<ReturnType<typeof import('../../../src/server/api/displayArguments.post').default>>
    }
    '/api/displayPersonalArguments': {
      'post': Awaited<ReturnType<typeof import('../../../src/server/api/displayPersonalArguments.post').default>>
    }
    '/api/getArgument': {
      'post': Awaited<ReturnType<typeof import('../../../src/server/api/getArgument.post').default>>
    }
    '/api/login': {
      'post': Awaited<ReturnType<typeof import('../../../src/server/api/login.post').default>>
    }
    '/api/register': {
      'post': Awaited<ReturnType<typeof import('../../../src/server/api/register.post').default>>
    }
    '/api/verifyToken': {
      'post': Awaited<ReturnType<typeof import('../../../src/server/api/verifyToken.post').default>>
    }
    '/api/verifyToken.test': {
      'default': Awaited<ReturnType<typeof import('../../../src/server/api/verifyToken.test').default>>
    }
    '/__nuxt_error': {
      'default': Awaited<ReturnType<typeof import('../../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>
    }
  }
}
export {}