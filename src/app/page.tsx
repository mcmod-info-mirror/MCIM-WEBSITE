interface StatsData {
  curseforge: { mod: number; file: number };
  modrinth: { project: number; version: number; file: number };
  translate: { curseforge: number; modrinth: number };
}

async function getStats(): Promise<StatsData | null> {
  try {
    const response = await fetch("https://mod.mcimirror.top/statistics", {
      next: { revalidate: 300 },
    });
    if (response.ok) return await response.json();
    return null;
  } catch (error) {
    console.error("获取统计数据失败:", error);
    return null;
  }
}

function formatNumber(num: number): string {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "k";
  return num.toString();
}

function calcPercent(part: number, total: number): string {
  if (!total) return "0";
  return Math.min((part / total) * 100, 100).toFixed(1);
}

export default async function Home() {
  const stats = await getStats();

  return (
    <div className="govuk-width-container">
      <main className="govuk-main-wrapper" id="main-content">

        {/* Hero */}
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl">MCIM</h1>
            <p className="govuk-body-l">
              为中国大陆用户提供稳定、快速的 Minecraft Mod 信息镜像服务，支持 Modrinth 和
              CurseForge API，完全兼容官方接口。
            </p>
            <a
              href="https://mod.mcimirror.top/docs"
              role="button"
              className="govuk-button govuk-button--start govuk-!-margin-right-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看 API 文档
              <svg
                className="govuk-button__start-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="17.5"
                height="19"
                viewBox="0 0 33 40"
                aria-hidden="true"
                focusable="false"
              >
                <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
              </svg>
            </a>
            <a href="/sponsor" className="govuk-link govuk-body govuk-!-margin-right-3">
              赞助支持
            </a>
            <a
              href="https://github.com/mcmod-info-mirror"
              className="govuk-link govuk-body"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

        {/* Cache stats */}
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <h2 className="govuk-heading-l">缓存统计</h2>
          </div>
        </div>

        <div className="govuk-grid-row">
          {/* Modrinth */}
          <div className="govuk-grid-column-one-half">
            <div className="mcim-stat-card mcim-stat-card--modrinth">
              <p className="govuk-body-s govuk-!-margin-bottom-1" style={{ color: "#505a5f" }}>
                Modrinth
              </p>
              <p className="govuk-heading-xl govuk-!-margin-bottom-1">
                {stats ? formatNumber(stats.modrinth.project) : "—"}
              </p>
              <p className="govuk-body govuk-!-margin-bottom-4">个项目已缓存</p>

              <dl className="govuk-summary-list govuk-summary-list--no-border govuk-!-margin-bottom-1">
                <div className="govuk-summary-list__row">
                  <dt className="govuk-summary-list__key">版本数</dt>
                  <dd className="govuk-summary-list__value">
                    {stats ? formatNumber(stats.modrinth.version) : "—"}
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dt className="govuk-summary-list__key">已翻译</dt>
                  <dd className="govuk-summary-list__value">
                    {stats
                      ? `${formatNumber(stats.translate.modrinth)} (${calcPercent(stats.translate.modrinth, stats.modrinth.project)}%)`
                      : "—"}
                  </dd>
                </div>
              </dl>

              {stats && (
                <div className="mcim-progress" aria-hidden="true">
                  <div
                    className="mcim-progress__bar mcim-progress__bar--modrinth"
                    style={{
                      width: `${calcPercent(stats.translate.modrinth, stats.modrinth.project)}%`,
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* CurseForge */}
          <div className="govuk-grid-column-one-half">
            <div className="mcim-stat-card mcim-stat-card--curseforge">
              <p className="govuk-body-s govuk-!-margin-bottom-1" style={{ color: "#505a5f" }}>
                CurseForge
              </p>
              <p className="govuk-heading-xl govuk-!-margin-bottom-1">
                {stats ? formatNumber(stats.curseforge.mod) : "—"}
              </p>
              <p className="govuk-body govuk-!-margin-bottom-4">个 Mod 已缓存</p>

              <dl className="govuk-summary-list govuk-summary-list--no-border govuk-!-margin-bottom-1">
                <div className="govuk-summary-list__row">
                  <dt className="govuk-summary-list__key">文件数</dt>
                  <dd className="govuk-summary-list__value">
                    {stats ? formatNumber(stats.curseforge.file) : "—"}
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dt className="govuk-summary-list__key">已翻译</dt>
                  <dd className="govuk-summary-list__value">
                    {stats
                      ? `${formatNumber(stats.translate.curseforge)} (${calcPercent(stats.translate.curseforge, stats.curseforge.mod)}%)`
                      : "—"}
                  </dd>
                </div>
              </dl>

              {stats && (
                <div className="mcim-progress" aria-hidden="true">
                  <div
                    className="mcim-progress__bar mcim-progress__bar--curseforge"
                    style={{
                      width: `${calcPercent(stats.translate.curseforge, stats.curseforge.mod)}%`,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

        {/* Features */}
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <h2 className="govuk-heading-l">为什么选择 MCIM？</h2>
            <p className="govuk-body">
              我们提供稳定、快速的 Minecraft Mod 信息镜像服务，让你的下载更加顺畅。
            </p>
          </div>
        </div>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <h3 className="govuk-heading-m">镜像服务</h3>
            <p className="govuk-body">
              提供 Modrinth 和 CurseForge 的完整镜像服务，确保你能够快速访问所需的 Mod 信息和文件。
            </p>
            <ul className="govuk-list govuk-list--bullet">
              <li>实时同步最新数据</li>
              <li>高可用性保障</li>
              <li>完整的 API 支持</li>
            </ul>
          </div>
          <div className="govuk-grid-column-one-half">
            <h3 className="govuk-heading-m">加速访问</h3>
            <p className="govuk-body">
              通过优秀的 CDN 和缓存，大幅提升 Mod 信息查询和文件下载速度。
            </p>
            <ul className="govuk-list govuk-list--bullet">
              <li>智能缓存机制</li>
              <li>CDN 全球加速</li>
              <li>毫秒级响应时间</li>
            </ul>
          </div>
        </div>

        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

        {/* API examples */}
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h2 className="govuk-heading-l">API 替换示例</h2>
            <p className="govuk-body">只需简单替换 API 端点，即可享受更快的访问速度。</p>

            <h3 className="govuk-heading-m">Modrinth API</h3>
            <p className="govuk-body-s govuk-!-margin-bottom-1">原始端点：</p>
            <pre className="mcim-code-block">
              <code>https://api.modrinth.com/v2/project/sodium</code>
            </pre>
            <p className="govuk-body-s govuk-!-margin-bottom-1">镜像端点：</p>
            <pre className="mcim-code-block mcim-code-block--mirror govuk-!-margin-bottom-6">
              <code>https://mod.mcimirror.top/modrinth/v2/project/sodium</code>
            </pre>

            <h3 className="govuk-heading-m">CurseForge API</h3>
            <p className="govuk-body-s govuk-!-margin-bottom-1">原始端点：</p>
            <pre className="mcim-code-block">
              <code>https://api.curseforge.com/v1/mods/238222</code>
            </pre>
            <p className="govuk-body-s govuk-!-margin-bottom-1">镜像端点：</p>
            <pre className="mcim-code-block mcim-code-block--mirror">
              <code>https://mod.mcimirror.top/curseforge/v1/mods/238222</code>
            </pre>

            <p className="govuk-body govuk-!-margin-top-4">
              <a
                href="https://mod.mcimirror.top/docs"
                className="govuk-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                查看完整 API 文档
              </a>
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
