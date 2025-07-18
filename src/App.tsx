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
    <div class="flex h-screen flex-col justify-between bg-white dark:bg-gray-800">
      <div class="text-#333 flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700 dark:text-gray-100">
        <div class="font-bolder text-lg">Header</div>
        <button
          class="rounded-md border bg-[#2e66c7] px-3 py-1 text-white outline-none dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-100"
          onClick={toggleTheme}
        >
          切换主题
        </button>
      </div>
      <div class="p-4 text-gray-800 dark:text-gray-100">
        填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字
      </div>
      <div class="p-4 text-gray-800 dark:text-gray-100">
        填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字填充文字
      </div>
    </div>
  );
}
