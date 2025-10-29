import { jsx as a } from "react/jsx-runtime";
import m from "next/link";
const g = (r) => {
  const e = "px-4 py-2 rounded-lg text-sm font-medium bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-primary-text dark:bg-primary-light dark:hover:bg-primary-light-hover dark:text-primary-text-dark text-center";
  if ("href" in r && r.href) {
    const { href: s, children: c, className: l = "", "aria-current": b } = r;
    return /* @__PURE__ */ a(
      m,
      {
        href: s,
        className: `${e} ${l}`,
        "aria-current": b,
        children: c
      }
    );
  }
  const { onClick: t, children: o, className: n = "", disabled: i, ...d } = r;
  return /* @__PURE__ */ a(
    "button",
    {
      onClick: t,
      disabled: i,
      className: `${e} ${n}`,
      ...d,
      children: o
    }
  );
}, y = (r) => {
  const e = "px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-75 transition-[border-color,background-color] duration-75 bg-white dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-800/30 dark:bg-gray-800 text-center";
  if ("href" in r && r.href) {
    const { href: s, children: c, className: l = "", "aria-current": b } = r;
    return /* @__PURE__ */ a(
      m,
      {
        href: s,
        className: `${e} ${l}`,
        "aria-current": b,
        children: c
      }
    );
  }
  const { onClick: t, children: o, className: n = "", disabled: i, ...d } = r;
  return /* @__PURE__ */ a(
    "button",
    {
      onClick: t,
      disabled: i,
      className: `${e} ${n}`,
      ...d,
      children: o
    }
  );
};
export {
  g as PrimaryButton,
  y as SecondaryButton
};
//# sourceMappingURL=index.js.map
