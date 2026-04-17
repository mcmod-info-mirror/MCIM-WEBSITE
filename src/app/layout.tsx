import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCIM – Minecraft Mod 镜像服务",
  description:
    "为中国大陆用户提供稳定、快速的 Minecraft Mod 信息镜像服务。支持 Modrinth 和 CurseForge API，完全兼容官方接口。",
  keywords: ["Minecraft", "Mod", "API", "Mirror", "Modrinth", "CurseForge", "中国镜像"],
  authors: [{ name: "MCIM Team" }],
  icons: {
    icon: "/avatar.png",
    shortcut: "/avatar.png",
    apple: "/avatar.png",
  },
  openGraph: {
    title: "MCIM – Minecraft Mod 镜像服务",
    description: "为中国大陆用户提供稳定、快速的 Minecraft Mod 信息镜像服务",
    type: "website",
    url: "https://mcimirror.top",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="govuk-template">
      <head>
        <meta name="theme-color" content="#0b0c0c" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/govuk-frontend@5/dist/govuk/govuk-frontend.min.css"
        />
      </head>
      <body className="govuk-template__body">
        <script
          dangerouslySetInnerHTML={{
            __html: `document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');`,
          }}
        />

        <a href="#main-content" className="govuk-skip-link" data-module="govuk-skip-link">
          跳转到主要内容
        </a>

        <header className="govuk-header" data-module="govuk-header">
          <div className="govuk-header__container govuk-width-container">
            <div className="govuk-header__logo">
              <a href="/" className="govuk-header__link govuk-header__link--homepage">
                <span className="govuk-header__logotype">
                  <span className="govuk-header__logotype-text">MCIM</span>
                </span>
              </a>
            </div>
            <div className="govuk-header__content">
              <a href="/" className="govuk-header__link govuk-header__service-name">
                Minecraft Mod 镜像
              </a>
              <nav aria-label="导航菜单" className="govuk-header__nav">
                <ul className="govuk-header__navigation-list">
                  <li className="govuk-header__navigation-item govuk-header__navigation-item--active">
                    <a className="govuk-header__link" href="/">
                      首页
                    </a>
                  </li>
                  <li className="govuk-header__navigation-item">
                    <a className="govuk-header__link" href="/sponsor">
                      赞助
                    </a>
                  </li>
                  <li className="govuk-header__navigation-item">
                    <a
                      className="govuk-header__link"
                      href="https://mod.mcimirror.top/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      API 文档
                    </a>
                  </li>
                  <li className="govuk-header__navigation-item">
                    <a
                      className="govuk-header__link"
                      href="https://github.com/mcmod-info-mirror"
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

        {children}

        <footer className="govuk-footer">
          <div className="govuk-width-container">
            <div className="govuk-footer__meta">
              <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
                <ul className="govuk-footer__inline-list">
                  <li className="govuk-footer__inline-list-item">
                    <a className="govuk-footer__link" href="/sponsor">
                      赞助支持
                    </a>
                  </li>
                  <li className="govuk-footer__inline-list-item">
                    <a
                      className="govuk-footer__link"
                      href="https://mod.mcimirror.top/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      API 文档
                    </a>
                  </li>
                  <li className="govuk-footer__inline-list-item">
                    <a
                      className="govuk-footer__link"
                      href="https://github.com/mcmod-info-mirror"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
                <p className="govuk-footer__licence-description">
                  © 2025 MCIM. 致力于为 Minecraft 社区提供更好的体验。
                </p>
              </div>
            </div>
          </div>
        </footer>

        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `import { initAll } from 'https://cdn.jsdelivr.net/npm/govuk-frontend@5/dist/govuk/govuk-frontend.min.js'; initAll();`,
          }}
        />
      </body>
    </html>
  );
}
