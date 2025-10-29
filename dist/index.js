import { jsx as e } from "react/jsx-runtime";
import h from "next/link";
const x = (r) => {
  const t = "px-4 py-2 rounded-lg text-sm font-medium bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-primary-text dark:bg-primary-light dark:hover:bg-primary-light-hover dark:text-primary-text-dark text-center";
  if ("href" in r && r.href) {
    const { href: l, children: c, className: d = "", "aria-current": m } = r;
    return /* @__PURE__ */ e(
      h,
      {
        href: l,
        className: `${t} ${d}`,
        "aria-current": m,
        children: c
      }
    );
  }
  const { onClick: a, children: i, className: n = "", disabled: o, ...s } = r;
  return /* @__PURE__ */ e(
    "button",
    {
      onClick: a,
      disabled: o,
      className: `${t} ${n}`,
      ...s,
      children: i
    }
  );
};
export {
  x as PrimaryButton
};
//# sourceMappingURL=index.js.map
