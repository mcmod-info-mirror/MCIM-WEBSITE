<template>
  <div>
    <a href="#main-content" class="govuk-skip-link" data-module="govuk-skip-link">跳到主要内容</a>

    <header class="govuk-header" data-module="govuk-header">
      <div class="govuk-header__container govuk-width-container">
        <div class="govuk-header__logo">
          <NuxtLink to="/" class="govuk-header__link govuk-header__link--homepage">
            <span class="govuk-header__logotype">
              <span class="govuk-header__logotype-text">MCIM</span>
            </span>
          </NuxtLink>
        </div>
        <div class="govuk-header__content">
          <NuxtLink to="/" class="govuk-header__link govuk-header__service-name">
            Minecraft Mod 镜像
          </NuxtLink>
          <button
            type="button"
            class="govuk-header__menu-button govuk-js-header-toggle"
            aria-controls="navigation"
            aria-label="显示或隐藏导航菜单"
            hidden
          >
            菜单
          </button>
          <nav>
            <ul id="navigation" class="govuk-header__navigation-list">
              <li class="govuk-header__navigation-item">
                <NuxtLink to="/" class="govuk-header__link" active-class="govuk-header__navigation-item--active">
                  首页
                </NuxtLink>
              </li>
              <li class="govuk-header__navigation-item">
                <NuxtLink to="/sponsor" class="govuk-header__link" active-class="govuk-header__navigation-item--active">
                  赞助
                </NuxtLink>
              </li>
              <li class="govuk-header__navigation-item">
                <a
                  href="https://mod.mcimirror.top/docs"
                  class="govuk-header__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API 文档
                </a>
              </li>
              <li class="govuk-header__navigation-item">
                <a
                  href="https://github.com/mcmod-info-mirror"
                  class="govuk-header__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <div class="govuk-width-container">
      <main class="govuk-main-wrapper" id="main-content">
        <slot />
      </main>
    </div>

    <footer class="govuk-footer">
      <div class="govuk-width-container">
        <div class="govuk-footer__meta">
          <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
            <h2 class="govuk-visually-hidden">支持链接</h2>
            <ul class="govuk-footer__inline-list">
              <li class="govuk-footer__inline-list-item">
                <a
                  class="govuk-footer__link"
                  href="https://github.com/mcmod-info-mirror"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li class="govuk-footer__inline-list-item">
                <a
                  class="govuk-footer__link"
                  href="https://mod.mcimirror.top/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API 文档
                </a>
              </li>
              <li class="govuk-footer__inline-list-item">
                <NuxtLink class="govuk-footer__link" to="/sponsor">赞助</NuxtLink>
              </li>
            </ul>
            <p class="govuk-footer__licence-description">
              © 2025 MCIM. 致力于为 Minecraft 社区提供更好的体验。
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
onMounted(async () => {
  const { initAll } = await import('govuk-frontend')
  initAll()
})
</script>
