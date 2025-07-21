export default function App() {
  const toggleTheme = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // 检查浏览器是否支持 View Transitions API
    if ("startViewTransition" in document) {
      let isDark: boolean;
      const transition = (document as Document).startViewTransition(() => {
        const root = (document as Document).documentElement;
        isDark = root.classList.contains("dark");
        root.classList.remove(isDark ? "dark" : "light");
        root.classList.add(isDark ? "light" : "dark");
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        // @ts-ignore
        document.documentElement.animate(
          {
            clipPath: isDark ? [...clipPath].reverse() : clipPath,
          },
          {
            duration: 500,
            easing: "ease-in",
            pseudoElement: isDark
              ? "::view-transition-old(root)"
              : "::view-transition-new(root)",
          }
        );
      });
    } else {
      // 不支持 View Transitions API，直接切换主题
      const root = (document as Document).documentElement;
      const isDark = root.classList.contains("dark");
      root.classList.remove(isDark ? "dark" : "light");
      root.classList.add(isDark ? "light" : "dark");
    }
  };

  return (
    <div class="flex flex h-screen flex-col justify-between bg-white dark:bg-[#111]">
      <div class="text-#333 flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700 dark:bg-blue-700 dark:text-gray-100">
        <div class="flex items-center gap-4">
          <h1 class="text-xl font-bold dark:text-white">主题动画演示</h1>
        </div>
        <button
          class="rounded-md border bg-[#2e66c7] px-3 py-1 text-white outline-none dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-100"
          onClick={toggleTheme}
        >
          切换主题
        </button>
      </div>
      <div class="flex-1">
        <div class="content-layer content-area relative z-10 flex h-full w-full items-center justify-center dark:text-white">
          <div class="mx-auto max-w-4xl p-8">
            <div class="demo-card mb-6 rounded-lg bg-white p-6 shadow-[2px_4px_8px_0px_#00000038] dark:bg-gray-800">
              <h2 class="mb-4 text-2xl font-bold dark:text-white">
                欢迎使用主题动画系统
              </h2>
              <p class="mb-4 text-gray-600 dark:text-gray-300">
                这是一个演示项目
              </p>
            </div>

            <div class="feature-list grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div class="rounded-lg bg-white p-6 shadow-[2px_4px_8px_0px_#00000038] dark:bg-gray-800">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <svg
                    class="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-lg font-semibold dark:text-white">
                  高性能
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  基于Vue 3的Composition API，提供优秀的性能和开发体验。
                </p>
              </div>

              <div class="rounded-lg bg-white p-6 shadow-[2px_4px_8px_0px_#00000038] dark:bg-gray-800">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <svg
                    class="h-6 w-6 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    ></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-lg font-semibold dark:text-white">
                  主题切换
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  支持明暗主题切换，提供流畅的动画过渡效果。
                </p>
              </div>

              <div class="rounded-lg bg-white p-6 shadow-[2px_4px_8px_0px_#00000038] dark:bg-gray-800">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <svg
                    class="h-6 w-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-lg font-semibold dark:text-white">
                  用户友好
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  支持明暗主题切换，提供流畅的动画过渡效果。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
